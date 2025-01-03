package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Static("/static", "./static")

	router.GET("/", func(c *gin.Context) {
		c.File("index.html")
	})

	err := router.Run(":1234")

	if err != nil {
		log.Fatal("Error starting the server:", err)
	}
}
