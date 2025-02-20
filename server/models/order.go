package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type Order struct {
	CartID  uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey" json:"cartID"`
	Name    *string   `json:"name"`
	Phone   *string   `json:"phone"`
	Address *string   `json:"address"`
	Total   uint      `json:"totalPrice"`
	Method  *string   `json:"pay_method"`
	OwnerID *string   `json:"userID"`
}

func MigrateOrder(db *gorm.DB) error {
	err := db.AutoMigrate(&Order{})
	return err
}
