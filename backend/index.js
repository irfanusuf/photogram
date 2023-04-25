// requirements
const express = require("express");
const cookieParser = require("cookie-parser");
const path = require("path");
const mongoose = require("mongoose");
const User = require("./models/User");
const Post = require("./models/Post");


// app

const app = express();

// if not production


if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

// Using Middlewares
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());




// connecting database 
connectDatabase = () => {
  mongoose
    .connect('mongodb://127.0.0.1:27017/mernProject2')
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
connectDatabase();


// staring a server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
// home page right now this is form test purpose only will make its front end in react framework
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//making routes

app.post("/register" , register)
app.post ("/user" , User )
app.post("/register" , register)
app.post ("/user" , User )
app.post("/register" , register)
app.post ("/user" , User )
app.post("/register" , register)
app.post ("/user" , User )

