import React, { useEffect, useState } from "react";
import API from "../services/api";

function MyComplaints() {
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const response = await API.get("/complaints/my");

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

    fetchComplaints();
  }, []);

  const getStatusClass = (status) => {
    if (status === "Resolved") {
      return "status-badge status-resolved";
    }

    if (status === "In Progress") {
      return "status-badge status-progress";
    }

    return "status-badge status-pending";
  };

  return (
    <div className="complaints-page">

      {/* Header */}
      <div className="complaints-header">

        <span className="page-badge">
          📋 COMPLAINT TRACKER
        </span>

        <h1>My Complaints</h1>

        <p>
          Track the status and details of all your reported
          civic problems.
        </p>

      </div>

      {/* Loading */}
      {loading && (
        <div className="complaints-message">
          <div className="loading-icon">⏳</div>
          <h3>Loading complaints...</h3>
          <p>Please wait while we fetch your complaints.</p>
        </div>
      )}

      {/* No Complaints */}
      {!loading && complaints.length === 0 && (
        <div className="complaints-message">
          <div className="empty-icon">📭</div>

          <h3>No complaints yet</h3>

          <p>
            You haven't reported any civic problems yet.
          </p>
        </div>
      )}

      {/* Complaints */}
      {!loading && complaints.length > 0 && (
        <div className="complaints-list">

          {complaints.map((complaint) => (
            <div
              className="complaint-card"
              key={complaint._id}
            >

              {/* Card Header */}
              <div className="complaint-card-header">

                <div>
                  <span className="complaint-number">
                    Complaint #{complaints.indexOf(complaint) + 1}
                  </span>

                  <h2>{complaint.title}</h2>
                </div>

                <span className={getStatusClass(complaint.status)}>
                  {complaint.status}
                </span>

              </div>

              {/* Category */}
              <div className="complaint-info">
                <div className="info-item">
                  <span className="info-icon">🏷️</span>

                  <div>
                    <small>Category</small>
                    <strong>{complaint.category}</strong>
                  </div>
                </div>

                {/* Location */}
                <div className="info-item">
                  <span className="info-icon">📍</span>

                  <div>
                    <small>Location</small>
                    <strong>{complaint.location}</strong>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="complaint-description">

                <h4>Problem Description</h4>

                <p>{complaint.description}</p>

              </div>

              {/* Footer */}
              <div className="complaint-footer">

                <span>
                  🗓️ Reported on:{" "}
                  {new Date(
                    complaint.createdAt
                  ).toLocaleDateString("en-GB")}
                </span>

                <span>
                  Status: <strong>{complaint.status}</strong>
                </span>

              </div>

            </div>
          ))}

        </div>
      )}

    </div>
  );
}

export default MyComplaints;