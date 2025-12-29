package main

import (
	"log"

	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.Static("/static", "./static")

	router.GET("/", func(c *gin.Context) {
		c.File("./sites/index.html")
	})

	// router.GET("/projects", func(c *gin.Context) {
	// 	c.File("./sites/projects.html")
	// })

	err := router.Run(":1234")

	if err != nil {
		log.Fatal("Error starting the server:", err)
	}
}
