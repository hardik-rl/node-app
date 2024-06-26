const express = require("express");
const users = require("./data.json");
const app = express();
const fs = require("fs");

// get all users
app.get("/users", (req, res) => {
  const html = `<ul>
  ${users.map((user) => `<li>${user.email})</li>`).join("")}
    </ul>`;
  return res.send(html);
});

// get single user
app.get("/users/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

// get single user
app.post("/users", (req, res) => {
  console.log(users);
  const body = req.body;
  body.push({ ...users, id: req.params.id });
  fs.readFile("./data.json", JSON.stringify(body), (req, res) => {
    res.send("select");
  });
  // const id = Number(req.params.id);
  // const user = users.find((user) => user.id === id);
  // return res.json(user);
});

app.listen(3000, () => console.log("hello"));
