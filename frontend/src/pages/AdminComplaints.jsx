import React, { useEffect, useState } from "react";
import API from "../services/api";

function AdminComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllComplaints = async () => {
      try {
        const response = await API.get("/complaints/all");

        console.log(response.data);

        setComplaints(response.data.complaints);
      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
            "Failed to load complaints"
        );
      } finally {
        setLoading(false);
      }
    };

    getAllComplaints();
  }, []);

  const handleStatusChange = async (complaintId, newStatus) => {
    try {
      const response = await API.put(
        `/complaints/${complaintId}/status`,
        {
          status: newStatus,
        }
      );

      console.log(response.data);

      setComplaints((previousComplaints) =>
        previousComplaints.map((complaint) =>
          complaint._id === complaintId
            ? {
                ...complaint,
                status: newStatus,
              }
            : complaint
        )
      );

      alert(response.data.message);
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to update complaint status"
      );
    }
  };

  const getStatusClass = (status) => {
    if (status === "Resolved") {
      return "admin-status admin-status-resolved";
    }

    if (status === "In Progress") {
      return "admin-status admin-status-progress";
    }

    return "admin-status admin-status-pending";
  };

  const getCategoryIcon = (category) => {
    if (category === "Garbage") return "🗑️";
    if (category === "Road") return "🛣️";
    if (category === "Street Light") return "💡";
    if (category === "Water") return "💧";
    if (category === "Electricity") return "⚡";

    return "📌";
  };

  return (
    <div className="admin-page">

      {/* Header */}

      <div className="admin-header">
        <span className="page-badge">
          🛡️ ADMIN PANEL
        </span>

        <h1>Manage Complaints</h1>

        <p>
          Review and manage all civic complaints reported
          by citizens.
        </p>
      </div>


      {/* Statistics */}

      {!loading && (
        <div className="admin-stats">

          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              📋
            </div>

            <div>
              <small>Total Complaints</small>
              <h3>{complaints.length}</h3>
            </div>
          </div>


          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              ⏳
            </div>

            <div>
              <small>Pending</small>

              <h3>
                {
                  complaints.filter(
                    (complaint) =>
                      complaint.status === "Pending"
                  ).length
                }
              </h3>
            </div>
          </div>


          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              🔄
            </div>

            <div>
              <small>In Progress</small>

              <h3>
                {
                  complaints.filter(
                    (complaint) =>
                      complaint.status === "In Progress"
                  ).length
                }
              </h3>
            </div>
          </div>


          <div className="admin-stat-card">
            <div className="admin-stat-icon">
              ✅
            </div>

            <div>
              <small>Resolved</small>

              <h3>
                {
                  complaints.filter(
                    (complaint) =>
                      complaint.status === "Resolved"
                  ).length
                }
              </h3>
            </div>
          </div>

        </div>
      )}


      {/* Loading */}

      {loading && (
        <div className="admin-message">
          <div className="admin-message-icon">
            ⏳
          </div>

          <h3>Loading complaints...</h3>

          <p>
            Please wait while we fetch all citizen complaints.
          </p>
        </div>
      )}


      {/* Empty */}

      {!loading && complaints.length === 0 && (
        <div className="admin-message">
          <div className="admin-message-icon">
            📭
          </div>

          <h3>No complaints found</h3>

          <p>
            There are currently no complaints reported by
            citizens.
          </p>
        </div>
      )}


      {/* Complaints */}

      {!loading && complaints.length > 0 && (
        <div className="admin-complaints-list">

          {complaints.map((complaint, index) => (
            <div
              className="admin-complaint-card"
              key={complaint._id}
            >

              {/* Card Header */}

              <div className="admin-card-header">

                <div>
                  <span className="admin-complaint-number">
                    Complaint #{index + 1}
                  </span>

                  <h2>
                    {complaint.title}
                  </h2>
                </div>

                <span
                  className={getStatusClass(
                    complaint.status
                  )}
                >
                  {complaint.status}
                </span>

              </div>


              {/* Complaint Information */}

              <div className="admin-info-grid">

                <div className="admin-info-item">
                  <span className="admin-info-icon">
                    {getCategoryIcon(complaint.category)}
                  </span>

                  <div>
                    <small>Category</small>
                    <strong>
                      {complaint.category}
                    </strong>
                  </div>
                </div>


                <div className="admin-info-item">
                  <span className="admin-info-icon">
                    📍
                  </span>

                  <div>
                    <small>Location</small>
                    <strong>
                      {complaint.location}
                    </strong>
                  </div>
                </div>


                <div className="admin-info-item">
                  <span className="admin-info-icon">
                    👤
                  </span>

                  <div>
                    <small>Citizen</small>
                    <strong>
                      {complaint.user?.name || "Unknown"}
                    </strong>
                  </div>
                </div>


                <div className="admin-info-item">
                  <span className="admin-info-icon">
                    ✉️
                  </span>

                  <div>
                    <small>Email</small>
                    <strong>
                      {complaint.user?.email || "N/A"}
                    </strong>
                  </div>
                </div>

              </div>


              {/* Description */}

              <div className="admin-description">
                <h4>
                  Problem Description
                </h4>

                <p>
                  {complaint.description}
                </p>
              </div>


              {/* Status Update */}

              <div className="admin-update-section">

                <div>
                  <small>
                    UPDATE COMPLAINT STATUS
                  </small>

                  <p>
                    Change the current status of this
                    complaint.
                  </p>
                </div>

                <select
                  className="admin-status-select"
                  value={complaint.status}
                  onChange={(e) =>
                    handleStatusChange(
                      complaint._id,
                      e.target.value
                    )
                  }
                >
                  <option value="Pending">
                    Pending
                  </option>

                  <option value="In Progress">
                    In Progress
                  </option>

                  <option value="Resolved">
                    Resolved
                  </option>
                </select>

              </div>


              {/* Footer */}

              <div className="admin-card-footer">

                <span>
                  🗓️ Reported on:{" "}
                  {new Date(
                    complaint.createdAt
                  ).toLocaleDateString("en-GB")}
                </span>

                <span>
                  Current Status:{" "}
                  <strong>
                    {complaint.status}
                  </strong>
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default AdminComplaints;