const express = require("express");

const {
  createComplaint,
  getMyComplaints,
  getAllComplaints,
  updateComplaintStatus,
} = require("../controllers/complaintController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Create Complaint
router.post("/", authMiddleware, createComplaint);

// Get My Complaints
router.get("/my", authMiddleware, getMyComplaints);

// Get All Complaints - Admin
router.get("/all", authMiddleware, getAllComplaints);

// Update Complaint Status - Admin
router.put(
  "/:id/status",
  authMiddleware,
  updateComplaintStatus
);

module.exports = router;