package models

import (
	"gorm.io/gorm"
)

type Url struct {
	ID           uint    `gorm:"primary key;autoIncrement" json: "id"`
	ShortenedUrl *string `json:"shortenedUrl"`
	RealUrl      *string `json:"realUrl"`
	OwnerID      *uint   `json:"ownerId"`
}

func MigrateUrl(db *gorm.DB) error {
	err := db.AutoMigrate(&Url{})
	return err
}
