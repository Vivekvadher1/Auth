// Required express
const express = require("express");

// Required cors
const cors = require("cors");

// Required dotenv
const dotenv = require("dotenv");

// Connection file
const connectDB = require("./config/db")

// Required Routes
const authRoutes = require("./routes/authRoutes");

// Configure dotenv file
dotenv.config()

// Connet Database
connectDB()

// Initilize the express server with or app 
const app = express();

// Middlewares
app.use(cors());

// Converted the express output to the json format
app.use(express.json());

// Assigning the path 
app.use("/api/auth", authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        message: "Something went wrong"
    })
})

// Defining the port at which the server is running
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});