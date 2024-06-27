const express = require("express");
const app = express();
const userRouter = require("./routes/user");

// Set EJS as templating engine 
// app.set('view engine', 'ejs');
// app.set("views", "./views");

// db connection
const { connectMongoDb } = require("./connect");
connectMongoDb("mongodb://127.0.0.1:27017/node-app");

// cors
const cors = require('cors'); 
app.use(cors());

// middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router
app.use("/users", userRouter);

// application port
app.listen(5000, () => console.log("hello"));
