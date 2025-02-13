package models

import (
	"github.com/google/uuid"
	"gorm.io/gorm"
)

type User struct {
	ID       uuid.UUID `gorm:"type:uuid;default:gen_random_uuid();primaryKey" json:"userID"`
	Email    *string   `gorm:"uniqueIndex;not null" json:"userEmail"`
	Password *string   `gorm:"not null" json:"userPassword"`
}

func MigrateUser(db *gorm.DB) error {
	err := db.AutoMigrate(&User{})
	return err
}
