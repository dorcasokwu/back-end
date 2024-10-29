const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const user = require("../schema/User");

const getAllusers = asyncHandler(async (req, res) => {
  const { title, body } = req.body;
  try {
  } catch (error) {}
});

const CreateNewUSER = asyncHandler(async (req, res) => {
  const { name, username, email, phone, password } = req.body;
  try {
    const userExist = await user.findOne({ username, email });
    if (userExist) {
      return res.status(409).json({ message: "User already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await user.create({
      name,
      username,
      email,
      phone,
      password: hashedPassword,
    });
    res.status(201).json({ message: "User created successfully", newUser });
  } catch (error) {
    res.status(500).json({ message: "Unable to create user", error });
  }
});

const login = asyncHandler(async (req, res) => {
  const { username, password } = req.body;
  try {
    const loginUser = await user.findOne({ username });
    if (!loginUser) {
      return res.status(404).json({ message: "No username found" });
    }
    const passwordMatch = await bcrypt.compare(password, loginUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: "Wrong password" });
    }
    res.status(200).json({ message: "Login successful", loginUser });
  } catch (error) {
    res.status(500).json({ message: "Invalid user", error });
  }
});

module.exports = { CreateNewUSER, login };
