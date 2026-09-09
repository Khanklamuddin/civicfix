import React, { useEffect, useState } from "react";
import API from "../services/api";

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await API.get("/users/profile");

        setUser(response.data.user);
      } catch (error) {
        console.error(error);

        alert(
          error.response?.data?.message ||
            "Failed to load profile"
        );
      } finally {
        setLoading(false);
      }
    };

    getProfile();
  }, []);

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-message">
          <div className="profile-message-icon">⏳</div>
          <h3>Loading Profile...</h3>
          <p>Please wait while we fetch your account information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-page">

      {/* Header */}
      <div className="profile-header">
        <span className="page-badge">
          👤 MY ACCOUNT
        </span>

        <h1>My Profile</h1>

        <p>
          View your CivicFix account information and profile details.
        </p>
      </div>

      {user && (
        <div className="profile-card">

          {/* Profile Top Section */}
          <div className="profile-top">

            <div className="profile-avatar">
              👤
            </div>

            <div>
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>

          </div>

          {/* Account Information */}
          <div className="profile-section">

            <h3>Account Information</h3>

            <div className="profile-details">

              <div className="profile-detail">
                <span className="detail-icon">
                  👤
                </span>

                <div>
                  <small>Full Name</small>
                  <strong>{user.name}</strong>
                </div>
              </div>

              <div className="profile-detail">
                <span className="detail-icon">
                  ✉️
                </span>

                <div>
                  <small>Email Address</small>
                  <strong>{user.email}</strong>
                </div>
              </div>

              <div className="profile-detail">
                <span className="detail-icon">
                  🛡️
                </span>

                <div>
                  <small>Account Role</small>

                  <strong>
                    <span className="profile-role">
                      {user.role}
                    </span>
                  </strong>
                </div>
              </div>

              <div className="profile-detail">
                <span className="detail-icon">
                  🔐
                </span>

                <div>
                  <small>Account Status</small>

                  <strong className="active-status">
                    ● Active
                  </strong>
                </div>
              </div>

            </div>

          </div>

          {/* Profile Info */}
          <div className="profile-note">
            <span>💡</span>

            <p>
              Your account is securely connected to CivicFix.
              You can use your account to report and track civic
              complaints.
            </p>
          </div>

        </div>
      )}

    </div>
  );
}

export default Profile;