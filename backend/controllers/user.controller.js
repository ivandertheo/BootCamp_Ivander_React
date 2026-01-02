import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// REGISTER
export const register = async (req, res) => {
  try {
    const { frontName, lastName, email, password, username, birthdate, gender, agreeTerms1, agreeTerms2, agreeTerms3, agreeTerms4 } = req.body;

    // cek user
    const exist = await User.findOne({ email });
    if (exist) {
      return res.status(400).json({ message: "Email already used" });
    }

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      frontName,
      lastName,
      email,
      username,
      password: hashedPassword,
      birthdate,
      gender,
      agreeTerms1,
      agreeTerms2,
      agreeTerms3,
      agreeTerms4
    });

    res.status(201).json({
      message: "Register success",
      user: { 
        id: user._id, 
        frontName: user.frontName, 
        lastName: user.lastName, 
        email: user.email, 
        username: user.username,
        birthdate: user.birthdate,
        gender: user.gender,
        agreeTerms1: user.agreeTerms1,
        agreeTerms2: user.agreeTerms2,
        agreeTerms3: user.agreeTerms3,
        agreeTerms4: user.agreeTerms4,
        password: user.password
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// LOGIN
export const login = async (req, res) => {
  try {
    const { email_username, password } = req.body;

    const user = await User.findOne(
      email_username.includes("@")
        ? { email: email_username }
        : { username: email_username }
    );
    if (!user)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    //set cookie 1 hari
    res.cookie("token", token, {
      httpOnly: true,
      secure: false,       
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000 
    });

    res.json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
      message: "Login success"
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

//update profile
export const updateProfile = async (req, res) => {
  try {
    const { frontName, lastName, email, birthDate, gender, password } = req.body;

    const updateData = {
      frontName,
      lastName,
      email,
      birthdate: birthDate,
      gender,
    };

    if (password) {
      updateData.password = await bcrypt.hash(password, 10);
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.userId,
      updateData,
      { new: true }
    ).select("-password");

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ message: "Gagal update profile" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logout success" });
};

export const getProfile = async (req, res) => {
  const user = await User.findById(req.userId).select("-password");
  res.json(user);
};
