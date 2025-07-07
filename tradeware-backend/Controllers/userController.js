import userModel from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const addUser = async (req, res) => {
  const userData = req.body;

  const hashedPassword = await bcrypt.hash(userData.password, 10);
  userData.password = hashedPassword;

  const emaildata = await userModel.findOne({ email: userData.email });
  const usernamedata = await userModel.findOne({ username: userData.username });

  if (emaildata) {
    return res.status(500).json({ error: "Email already exist" });
  } else if (usernamedata) {
    return res.status(500).json({ error: "username Already exist" });
  } else {
    userModel
      .create(userData)
      .then(async () => {
        return userModel
          .find()
          .then(res.status(200).json({ message: "User Created Successfully" }))
          .catch((err) => res.status(500).json({ error: err.message }));
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  }
};

export const getUser = (req, res) => {
  userModel
    .find()
    .then((result) => res.json(result))
    .catch((err) => res.status(500).json({ error: err.message }));
};

export const checkUserData = async (req, res) => {
  const { username, password } = req.body;
  try {
    const matchedUser = await userModel.findOne({ username });
    const hashedPassword = await bcrypt.compare(password, matchedUser.password);

    const token = jwt.sign(
      { username: matchedUser.username, email: matchedUser.email },
      process.env.TOKEN_KEY,
      { expiresIn: "1h" }
    );

    if (hashedPassword) {
      return res.status(200).json({ message: "Login Success", token });
    } else {
      return res.status(500).json({ error: "Wrong Username or Password" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Wrong Username or Password" });
  }
};
