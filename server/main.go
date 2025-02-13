package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/NguyenKhangPhuc/Dimsum/models"
	"github.com/NguyenKhangPhuc/Dimsum/storage"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/joho/godotenv"
	"gorm.io/gorm"
)

type Repository struct {
	DB *gorm.DB
}

type user struct {
	Email    string `json:"registerEmail" `
	Password string `json:"registerPassword"`
}

type loginUser struct {
	Email    string `json:"loginEmail" `
	Password string `json:"loginPassword"`
}

func (r *Repository) SetupRoutes(app *fiber.App) {
	app.Post("/register", r.register)
	app.Post("/login", r.login)
	app.Post("/add-product", r.addProduct)
	app.Post("/delete-product", r.deleteProduct)
	app.Post("/get-cart", r.getCart)
	app.Get("/get", r.getAllApi)
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}

	config := &storage.Config{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		Password: os.Getenv("DB_PASSWORD"),
		User:     os.Getenv("DB_USER"),
		SSLMode:  os.Getenv("DB_SSLMODE"),
		DBName:   os.Getenv("DB_NAME"),
	}

	db, err := storage.NewConnection(config)
	if err != nil {
		log.Fatal("Could not load the database")
	}

	err = models.MigrateUser(db)
	if err != nil {
		log.Fatal("Could not migrate user model")
	}

	err = models.MigrateCart(db)
	if err != nil {
		log.Fatal("Could not migrate cart model")
	}
	r := Repository{
		DB: db,
	}

	app := fiber.New()
	app.Use(cors.New(cors.Config{
		AllowOrigins: "http://localhost:5173",
		AllowHeaders: "Origin,Content-Type,Accept",
	}))
	r.SetupRoutes(app)
	app.Listen(":4000")
}

func (r *Repository) register(c *fiber.Ctx) error {
	registerUser := new(user)
	if err := c.BodyParser(registerUser); err != nil {
		fmt.Print(err)
		return err
	}
	err := r.DB.Where("email = ?", registerUser.Email).First(&registerUser).Error
	if err == nil {
		c.Status(http.StatusOK).JSON(&fiber.Map{"message": "Account has been already created"})
		return nil
	} else {
		err = r.DB.Create(registerUser).Error
		if err != nil {
			c.Status(http.StatusBadRequest).JSON(&fiber.Map{"message": "Cannot create account"})
			return err
		}
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{
		"message": "account has been created has been added"})
	return nil
}

func (r *Repository) login(c *fiber.Ctx) error {
	loginUser := new(loginUser)
	if err := c.BodyParser(loginUser); err != nil {
		c.Status(http.StatusBadRequest).JSON(&fiber.Map{"mssg": "Cannot parse login user"})
		return err
	}
	fmt.Println("Hello", loginUser.Email)
	foundedUser := new(models.User)
	err := r.DB.Where("email = ?", loginUser.Email).First(&foundedUser).Error
	fmt.Println(foundedUser.Email)
	fmt.Println(loginUser.Email)
	if err == nil {
		if *foundedUser.Password == loginUser.Password {
			c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "Login successfully", "info": foundedUser})
		} else {
			c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "Wrong password"})
		}
		return nil
	} else {
		c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "user not founded"})
		return nil
	}
}

func (r *Repository) addProduct(c *fiber.Ctx) error {
	cart := new(models.Cart)
	if err := c.BodyParser(cart); err != nil {
		return err
	}
	err := r.DB.Create(cart).Error
	if err != nil {
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "add product successfully"})
	return nil
}

func (r *Repository) deleteProduct(c *fiber.Ctx) error {
	type product struct {
		ProductIndex uint   `json:"productIndex"`
		UserID       string `json:"userID"`
	}
	givenProduct := new(product)
	if err := c.BodyParser(givenProduct); err != nil {
		return err
	}
	var carts []models.Cart
	err := r.DB.Where("owner_id = ?", givenProduct.UserID).Find(&carts).Error
	if err != nil {
		return err
	}
	index := givenProduct.ProductIndex
	userID := givenProduct.UserID
	err = r.DB.Where("cart_id = ? AND owner_id = ?", carts[index].CartID, userID).Delete(&models.Cart{}).Error
	if err != nil {
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "delete successfully"})
	return nil
}

func (r *Repository) getCart(c *fiber.Ctx) error {
	type id struct {
		UserID string `json:"userID"`
	}
	new_id := new(id)
	if err := c.BodyParser(new_id); err != nil {
		return err
	}
	var carts []models.Cart
	err := r.DB.Where("owner_id = ?", new_id.UserID).Find(&carts).Error
	if err != nil {
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "get successfully", "info": carts, "id": new_id.UserID})
	return nil
}

func (r *Repository) getAllApi(c *fiber.Ctx) error {
	users := &[]models.User{}
	err := r.DB.Find(users).Error
	if err != nil {
		c.Status(http.StatusBadRequest).JSON(
			&fiber.Map{"mssg": "could not get"})
		return err
	}
	c.Status(http.StatusOK).JSON(
		&fiber.Map{
			"message": "get success",
			"data":    users,
		})
	return nil
}
