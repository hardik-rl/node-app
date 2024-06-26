const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  gender: { type: String },
  firstName: { type: String, require: true },
  lastName: { type: String },
  email: { type: String, unique: true, require: true },
});

const User = mongoose.model("user", UserSchema);

module.exports = User;
