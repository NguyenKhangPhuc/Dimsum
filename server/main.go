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

func (r *Repository) SetupRoutes(app *fiber.App) {
	app.Post("/", r.getShortApi)
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

	err = models.MigrateUrl(db)
	if err != nil {
		log.Fatal("Could not migrate DB")
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

func (r *Repository) getShortApi(c *fiber.Ctx) error {
	type url struct {
		ShortenedUrl string `json:"urlValue"`
		RealUrl      string `json:"realUrl"`
		OwnerID      *uint  `json:"ownerId"`
	}
	test := new(url)
	if err := c.BodyParser(test); err != nil {
		log.Fatal(err)
		return err
	}
	err := r.DB.Create(test).Error
	if err != nil {
		c.Status(http.StatusBadRequest).JSON(
			&fiber.Map{"message": "could not create"})
		return err
	}
	c.Status(http.StatusOK).JSON(&fiber.Map{
		"message": "book has been added"})
	return nil
}

func (r *Repository) getAllApi(c *fiber.Ctx) error {
	urls := &[]models.Url{}
	err := r.DB.Find(urls).Error
	if err != nil {
		c.Status(http.StatusBadRequest).JSON(
			&fiber.Map{"mssg": "could not get"})
		return err
	}
	c.Status(http.StatusOK).JSON(
		&fiber.Map{
			"message": "get success",
			"data":    urls,
		})
	return nil
}
