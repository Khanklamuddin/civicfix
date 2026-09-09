const Complaint = require("../models/Complaint");

// =========================
// CREATE COMPLAINT
// =========================
const createComplaint = async (req, res) => {
  try {
    const { title, category, description, location } = req.body;

    const complaint = await Complaint.create({
      title,
      category,
      description,
      location,
      user: req.user.id,
    });

    res.status(201).json({
      message: "Complaint reported successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// =========================
// GET MY COMPLAINTS
// =========================
const getMyComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find({
      user: req.user.id,
    }).sort({ createdAt: -1 });

    res.status(200).json({
      message: "Complaints fetched successfully",
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// =========================
// GET ALL COMPLAINTS - ADMIN
// =========================
const getAllComplaints = async (req, res) => {
  try {
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only.",
      });
    }

    const complaints = await Complaint.find()
      .populate("user", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json({
      message: "All complaints fetched successfully",
      complaints,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

// =========================
// UPDATE COMPLAINT STATUS - ADMIN
// =========================
const updateComplaintStatus = async (req, res) => {
  try {
    // Check if logged-in user is admin
    if (req.user.role !== "admin") {
      return res.status(403).json({
        message: "Access denied. Admin only.",
      });
    }

    const { status } = req.body;

    // Check valid status
    if (!["Pending", "In Progress", "Resolved"].includes(status)) {
      return res.status(400).json({
        message: "Invalid complaint status",
      });
    }

    const complaint = await Complaint.findById(req.params.id);

    if (!complaint) {
      return res.status(404).json({
        message: "Complaint not found",
      });
    }

    complaint.status = status;

    await complaint.save();

    res.status(200).json({
      message: "Complaint status updated successfully",
      complaint,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
};

module.exports = {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus,
};