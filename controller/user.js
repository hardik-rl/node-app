const User = require("../models/user");

// get all users list
async function handleGetAllUsers(req, res) {
  try {
    const allUser = await User.find({});
    return res.render('pages/index', { allUser });
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
  const body = req.body;
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  res.render("pages/index", { result: result });
  res.redirect("/users");
}

// delete users
async function handleDeleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
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
