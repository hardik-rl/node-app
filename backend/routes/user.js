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

// add a user
router.post("/", handleAddUser);

// get single user
router.get("/:id", handleGetSingleUser);

// delete a user
router.delete("/delete", handleDeleteUser);

// update a user
router.patch("/", handleUpdateUser);

module.exports = router;
