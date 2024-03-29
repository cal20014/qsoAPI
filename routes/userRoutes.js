const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const utilities = require("../utilities");

// Routes

// GET all users
router.get("/", utilities.handleErrors(usersController.getAllUsers));

// GET single user by id
router.get("/:id", utilities.handleErrors(usersController.getUserById));

// POST new user
router.post("/", utilities.handleErrors(usersController.addUser));

// PUT update user
router.put("/:id", utilities.handleErrors(usersController.updateUser));

// DELETE user
router.delete("/:id", utilities.handleErrors(usersController.deleteUser));

module.exports = router;
