const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const complaintRoutes = require("./routes/complaintRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("CivicFix API is running...");
});

// User Routes
app.use("/api/users", userRoutes);

// Complaint Routes
app.use("/api/complaints", complaintRoutes);

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(5000, () => {
      console.log("CivicFix server running on port 5000");
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });