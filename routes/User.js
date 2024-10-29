const express = require("express");
const { CreateNewUSER, login } = require("../Controller/User");
const route = express.Router();

route.post("/post", CreateNewUSER);
route.get("/get", login);

module.exports = route;
