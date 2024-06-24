const {
  handleGetAllUsers,
  handleGetSingleUser,
  handleAddUser,
  handleDeleteUser,
  handleUpdateUser,
} = require("../controller/user");

const express = require("express");

const router = express.Router();

// get all users
router.get("/", handleGetAllUsers);

// get single user
router.get("/:id", handleGetSingleUser);

// add a user
router.post("/", handleAddUser);

// delete a user
router.delete("/:id", handleDeleteUser);

// update a user
router.patch("/:id", handleUpdateUser);

module.exports = router;
