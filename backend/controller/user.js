const User = require("../models/user");

// delete users
async function handleDeleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  console.log(user, "user delete");
  res.render("pages/delete", { user: user });
  res.redirect("/delete");
  // return res.json({ status: "success" });
  // res.status(200).send({ redirect: '/users' });
}


// get all users list
async function handleGetAllUsers(req, res) {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    return res.status(500).send('Internal Server Error');
  }
}

// get a single user
async function handleGetSingleUser(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json(user);
}

// new user add
async function handleAddUser(req, res) {
  try {
    const { firstName, lastName, email, gender } = req.body;
    // Validate input
    if (!firstName || !lastName || !email || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }
    // Check for existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(409).json({ error: "Email already in use" });
    }
    // Create new user
    const newUser = await User.create({ firstName, lastName, email, gender });
    return res.status(200).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

// update users
async function handleUpdateUser(req, res) {
  const body = req.body;
  await User.findByIdAndUpdate(req.params.id, {
    lastName: "last name updated",
  });
  return res.json({ status: "success" });
}

module.exports = {
  handleGetAllUsers,
  handleGetSingleUser,
  handleAddUser,
  handleUpdateUser,
  handleDeleteUser,
};
