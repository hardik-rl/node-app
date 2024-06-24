const User = require("../models/user");

async function handleGetAllUsers(req, res) {
  const allUser = await User.find({});
  const html = `<ul>
          ${allUser
            .map((user) => `<li>${user?.firstName} - ${user?.email})</li>`)
            .join("")}
            </ul>`;
  return res.send(html);
}

async function handleGetSingleUser(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  return res.json(user);
}

async function handleAddUser(req, res) {
  const body = req.body;
  const result = await User.create({
    firstName: body.first_name,
    lastName: body.last_name,
    email: body.email,
    gender: body.gender,
  });
  return res.json(result);
}

async function handleDeleteUser(req, res) {
  const user = await User.findByIdAndDelete(req.params.id);
  return res.json({ status: "success" });
}

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
