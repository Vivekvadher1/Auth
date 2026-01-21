// JWT(JsonWebToken) initial the token
// bcrypt usrd for the protecting password


// MongoDB model to store users
const User = require("../models/User");

// Hash & compare passwords
const bcrypt = require("bcryptjs");

// Create login tokens
const jwt = require("jsonwebtoken");

// REGISTER Controller (Signup)
exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        // Basic Validation
        if (!name || !email || !password) {
            return res.status(400).json({
                message: "All fields are required"
            })
        }

        // Check if user exits
        const userExists = await User.findOne({ email });
        if (userExists)
            return res.status(400).json({
                message: "User already exists"
            });

        // Hash Passwords
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create User in Database
        const user = await User.create({
            name,
            email,
            password: hashedPassword,
        });

        // Create JWT Token
        const token = jwt.sign(

            // Payload 
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: "7d" }
        );

        // Response 
        res.status(201).json({
            message: " Registered Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },
        });

    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
};

// LOGIN Controller
exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {

        // Basic Validation
        if (!email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ email });

        //  Find User by Email
        if (!user)
            return res.status(400).json({ message: "Invalid credentials" });

        // Compare passwords 
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).json({ message: "Invalid credentials" });

        const token = jwt.sign(
            {
                id: user._id,
                role: user.role,
            },

            process.env.JWT_SECRET,

            { expiresIn: "7d" }
        );

        res.json({
            message: "Login Successfully",
            token,
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            },

        });
    } catch (error) {
        res.status(500).json({ message: "Login Failed" });
    }
};


// Get logged in user profile
exports.getProfile = async (req, res) => {
    try {
        res.json({
            _id: req.user._id,
            name: req.user.name,
            email: req.user.email,
            role: req.user.role,
        })

    } catch (error) {
        res.status(500).json({
            message: "Failed to get profile"
        })
    }
}

