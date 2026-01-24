// protect : Checks JWT Tokens
// adminOnly : Checks Role

const express = require("express");
const router = express.Router();
const {register, login, getProfile} = require("../controllers/authController")
const { protect } = require("../middleware/authMiddleware");
const adminOnly = require("../middleware/adminMiddleware");
const User = require("../models/User");

// Public Route
router.post("/register", register);
router.post("/login", login);
router.get("/profile", protect, getProfile)

// Protected Route
router.get("/profile", protect, (req,res) => {
    res.json({
        message: "Access granted",
        user:req.user,
    })
 console.log("User role from DB:", req.user.role);
})

// Admin Route
router.get("/admin/users", protect, adminOnly, async(req,res) => {
    const users = await User.find().select("-password");
    res.json(users);
})

module.exports = router;