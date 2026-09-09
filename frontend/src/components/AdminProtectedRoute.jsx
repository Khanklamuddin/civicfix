import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import API from "../services/api";

function AdminProtectedRoute({ children }) {
  const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkAdmin = async () => {
      try {
        const response = await API.get("/users/profile");

        if (response.data.user.role === "admin") {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    checkAdmin();
  }, []);

  if (loading) {
    return (
      <div className="profile-page">
        <div className="profile-message">
          <div className="profile-message-icon">
            🔐
          </div>

          <h3>Checking Access...</h3>

          <p>
            Please wait while we verify your account.
          </p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default AdminProtectedRoute;