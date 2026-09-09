import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await API.get("/users/profile");

        setUser(response.data.user);
      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
            "Failed to load dashboard"
        );
      }
    };

    getProfile();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logout successful");

    navigate("/login");
  };

  return (
    <div className="dashboard-page">

      {/* Dashboard Header */}
      <div className="dashboard-header">
        <div>
          <p className="dashboard-badge">
            CIVICFIX DASHBOARD
          </p>

          <h1>
            Welcome back{user ? `, ${user.name}` : ""}! 👋
          </h1>

          <p>
            Manage your civic complaints and track their progress.
          </p>
        </div>
      </div>


      {/* User Information */}
      {user && (
        <div className="dashboard-content">

          <div className="user-card">
            <div className="user-card-icon">
              👤
            </div>

            <div>
              <h3>Your Account</h3>

              <p>
                <strong>Name:</strong> {user.name}
              </p>

              <p>
                <strong>Email:</strong> {user.email}
              </p>

              <p>
                <strong>Role:</strong>{" "}
                <span className="role-badge">
                  {user.role}
                </span>
              </p>
            </div>
          </div>


          {/* Dashboard Actions */}
          <div className="dashboard-actions">

            <div
              className="dashboard-action-card"
              onClick={() => navigate("/report-problem")}
            >
              <div className="action-icon">
                📝
              </div>

              <h3>Report a Problem</h3>

              <p>
                Report a new civic issue in your area.
              </p>

              <span>
                Report Now →
              </span>
            </div>


            <div
              className="dashboard-action-card"
              onClick={() => navigate("/my-complaints")}
            >
              <div className="action-icon">
                📋
              </div>

              <h3>My Complaints</h3>

              <p>
                View and track all your reported complaints.
              </p>

              <span>
                View Complaints →
              </span>
            </div>


            <div
              className="dashboard-action-card"
              onClick={() => navigate("/profile")}
            >
              <div className="action-icon">
                ⚙️
              </div>

              <h3>My Profile</h3>

              <p>
                View your account information and profile.
              </p>

              <span>
                View Profile →
              </span>
            </div>

          </div>


          {/* Logout */}
          <div className="dashboard-logout">
            <button onClick={handleLogout}>
              Logout
            </button>
          </div>

        </div>
      )}

    </div>
  );
}

export default Dashboard;