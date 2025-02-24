package main

import (
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

type id struct {
	UserID string `json:"userID"`
}

type resetPassword struct {
	Email          string `json:"loginEmail" `
	Password       string `json:"loginPassword"`
	ChangePassword string `json:"changedPassword"`
}

func (r *Repository) SetupRoutes(app *fiber.App) {
	//Set up the route and methods for the Repository tyoe.
	app.Post("/register", r.register)
	app.Post("/login", r.login)
	app.Post("/add-product", r.addProduct)
	app.Post("/delete-product", r.deleteProduct)
	app.Post("/get-cart", r.getCart)
	app.Post("/get-user", r.getUser)
	app.Post("/add-order", r.addOrder)
	app.Post("/add-order-detail", r.addOrderDetail)
	app.Post("/get-orders", r.getAllOrders)
	app.Post("/change-password", r.changePassword)
	app.Get("/get", r.getAllApi)
}

func main() {
	err := godotenv.Load(".env")
	if err != nil {
		log.Fatal(err)
	}

	//Create the Config type and assign the
	//Host, Port, Password, User, SSLMode, DBName for config.F
	config := &storage.Config{
		Host:     os.Getenv("DB_HOST"),
		Port:     os.Getenv("DB_PORT"),
		Password: os.Getenv("DB_PASSWORD"),
		User:     os.Getenv("DB_USER"),
		SSLMode:  os.Getenv("DB_SSLMODE"),
		DBName:   os.Getenv("DB_NAME"),
	}

	//Create the connection with postgreSQL
	db, err := storage.NewConnection(config)
	if err != nil {
		log.Fatal("Could not load the database")
	}
	//Auto migrate the table
	migrateTable(db)

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

func migrateTable(db *gorm.DB) {
	//Auto migrate the table users, carts, orders, order_details for database.
	err := models.MigrateUser(db)
	if err != nil {
		log.Fatal("Could not migrate user model")
	}

	err = models.MigrateCart(db)
	if err != nil {
		log.Fatal("Could not migrate cart model")
	}

	err = models.MigrateOrder(db)
	if err != nil {
		log.Fatal("Could not migrate order model")
	}

	err = models.MigrateOrderDetail(db)
	if err != nil {
		log.Fatal("Could not migrate orderdetail model")
	}
}

func (r *Repository) register(c *fiber.Ctx) error {
	//Create a new var with the struct type user.
	//Receive the body (email, password) from front-end and parse it to the struct type.
	//Finding in the users table if there is any account which already had the given email.
	//If yes ==> return a message = "Account has been already created"
	//If not ==> trying to create a new account
	//If success ==> return a message = "account has been created has been added"
	registerUser := new(user)
	if err := c.BodyParser(registerUser); err != nil {
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
	//Create a new variable of struct type loginUser
	//Receive the body (email, password) from the front-end
	//Parse the body to the struct type variable
	//From the table users, find the given email
	//If there exists an account, then compare its password from database
	//with the given password.
	//If correct ==> login successfully.
	//If not correct ==> Wrong password.
	//If cannot find the email ==> user not found.
	loginUser := new(loginUser)
	if err := c.BodyParser(loginUser); err != nil {
		return err
	}
	foundedUser := new(models.User)
	err := r.DB.Where("email = ?", loginUser.Email).First(foundedUser).Error
	if err == nil {
		if *foundedUser.Password == loginUser.Password {
			c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "Login successfully", "info": foundedUser})
		} else {
			c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "Wrong password"})
		}
		return nil
	} else {
		c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "user not found"})
		return nil
	}
}

func (r *Repository) addProduct(c *fiber.Ctx) error {
	//Create new variable of struct type models.Cart
	//Receive body from front-end (title, price, size, note, userID)
	//Parse it to the struct type.
	//Create the new row in the carts table with the struct type var.
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
	//Create the product struct type and variable of that struct type.
	//Receive the body from front-end (productIndex and userID)
	//Parse it to the struct type variable.
	//Create a slice of models.Cart types.
	//From the carts table find rows containing owner_id = given userID.
	//From the found rows, get the cart_id of the rows which have index: Product_index.
	//From the carts table, delete the rows which has the found cart_id and userID.
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
	//Create the new variable of struct type id
	//Receive the body from front-end
	//Parse it to the struct type variable.
	//Create a slice of types models.Cart
	//From the table carts find all the row which have the column owner_id = userID.
	//Send all the found rows to the front-end.
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

func (r *Repository) getUser(c *fiber.Ctx) error {
	//Create the new variable of struct type id
	//Receive the body from front-end
	//Parse it to the struct type variable.
	//From the table users find first row which have id = userID.
	//Send the email of the found row to front-end.
	new_id := new(id)
	if err := c.BodyParser(new_id); err != nil {
		return err
	}
	var user models.User
	err := r.DB.Where("id = ?", new_id.UserID).First(&user).Error
	if err != nil {
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "get user successfully", "email": user.Email})
	return nil
}

func (r *Repository) addOrder(c *fiber.Ctx) error {
	//Create new variable of struct type models.Order
	//Receive the body (name,address,phone,pay method,total)
	//Parse it into the struct type above.
	//From the table orders create new rows with the parsed variable.
	//From the table carts delete all the rows which have owner_id = order.OwnerID(or userID).
	order := new(models.Order)
	if err := c.BodyParser(order); err != nil {
		return err
	}
	err := r.DB.Create(order).Error
	if err != nil {
		return err
	}
	err = r.DB.Where("owner_id = ? ", order.OwnerID).Delete(&models.Cart{}).Error
	if err != nil {
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "add order successfully", "order": order})
	return nil
}

func (r *Repository) addOrderDetail(c *fiber.Ctx) error {
	//Create a slice of type models.OrderDetail type.
	//Receive the body (array of object of product) from front-end
	//Parse the body to the slice of models.OrdersDetail
	//From the table order_details create many rows with slice of models.OrderDetail.
	var orderProducts []models.OrderDetail
	if err := c.BodyParser(&orderProducts); err != nil {
		return err
	}
	err := r.DB.Create(&orderProducts).Error
	if err != nil {
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "add product detail successfully"})
	return nil
}

func (r *Repository) getAllOrders(c *fiber.Ctx) error {
	//Create a new var of struct type id
	//Receive body(userID) from the front-end
	//Parse it to new var
	//Create a slice of models.Order
	//From the table orders find all rows which have owner_id = userID.
	//Create the slice of type models.OrderDetail.
	//From the table order_details find all row which have the owner_id = userID.
	//Send both of them to front-end.
	new_id := new(id)
	if err := c.BodyParser(new_id); err != nil {
		return err
	}
	var orders []models.Order
	err := r.DB.Where("owner_id = ?", new_id.UserID).Find(&orders).Error
	if err != nil {
		return err
	}
	var ordersDetail []models.OrderDetail
	err = r.DB.Where("owner_id = ?", new_id.UserID).Find(&ordersDetail).Error
	if err != nil {
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "get orders successfully", "orders": orders, "ordersDetail": ordersDetail})
	return nil
}

func (r *Repository) changePassword(c *fiber.Ctx) error {
	//Create a new var of resetPassword struct type.
	//Receive Body from front-end (email,pw,new pw).
	//Parse it to the struct type.
	//From the table users find the row which have email = given email.
	//Compare that row's password to the given password
	//If equal ==> Update the password.
	resetPW := new(resetPassword)
	if err := c.BodyParser(resetPW); err != nil {
		return err
	}
	foundedUser := new(models.User)
	err := r.DB.Where("email = ?", resetPW.Email).First(foundedUser).Error
	if err == nil {
		if *foundedUser.Password == resetPW.Password {
			err2 := r.DB.Model(&models.User{}).Where("email = ?", resetPW.Email).Update("password", resetPW.ChangePassword).Error
			if err2 != nil {
				return err
			}
			c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "Change password successfully"})
		} else {
			c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "Wrong password"})
		}
		return nil
	} else {
		c.Status(http.StatusOK).JSON(&fiber.Map{"mssg": "user not found", "info": resetPW})
		return nil
	}
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
