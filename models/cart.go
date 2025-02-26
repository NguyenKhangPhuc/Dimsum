package models

import (
	"gorm.io/gorm"
)

type Cart struct {
	CartID  uint    `gorm:"primaryKey;autoIncrement" json:"cartID"`
	Title   *string `json:"title"`
	Size    *string `json:"size"`
	Price   *string `json:"price"`
	Note    *string `json:"note"`
	OwnerID *string `json:"ownerID"`
}

func MigrateCart(db *gorm.DB) error {
	err := db.AutoMigrate(&Cart{})
	return err
}
