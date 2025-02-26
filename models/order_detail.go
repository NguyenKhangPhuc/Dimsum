package models

import (
	"gorm.io/gorm"
)

type OrderDetail struct {
	CartOwner *string `json:"cartOwner"`
	Title     *string `json:"title"`
	Price     *string `json:"price"`
	Size      *string `json:"size"`
	Note      *string `json:"note"`
	OwnerID   *string `json:"ownerID"`
}

func MigrateOrderDetail(db *gorm.DB) error {
	err := db.AutoMigrate(&OrderDetail{})
	return err
}
