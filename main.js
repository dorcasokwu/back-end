const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const color = require("colors");
const connectDB = require("./config/db");
const user = require("./routes/User");
const bodyparser = require("body-parser");
const port = process.env.PORT; // Use PORT from the environment variables
const app = express(); // Initialize app first
const productRoutes = require("./routes/Product");
const User = require("./schema/User");

connectDB();

app.use(cors());
app.use(bodyparser.json()); // Add this line to parse JSON
app.use("/users", user);
app.use("/product", productRoutes);
app.listen(port, () => console.log(`Server running on port ${port}`.yellow));
