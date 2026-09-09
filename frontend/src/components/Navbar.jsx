import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserProfile = async () => {
      if (!token) {
        setUser(null);
        return;
      }

      try {
        const response = await API.get("/users/profile");

        setUser(response.data.user);
      } catch (error) {
        console.error(error);
        setUser(null);
      }
    };

    getUserProfile();
  }, [token]);

  const handleLogout = () => {
    localStorage.removeItem("token");

    alert("Logout successful");

    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}

      <Link to="/" className="navbar-logo">
        CivicFix
      </Link>

      {/* Navigation Links */}

      <div className="navbar-links">
        {token ? (
          <>
            <Link to="/dashboard" className="navbar-link">
              Dashboard
            </Link>

            <Link to="/profile" className="navbar-link">
              Profile
            </Link>

            <Link to="/my-complaints" className="navbar-link">
              My Complaints
            </Link>

            {user?.role === "admin" && (
              <Link
                to="/admin-complaints"
                className="navbar-link navbar-admin-link"
              >
                Admin Panel
              </Link>
            )}

            <button
              onClick={handleLogout}
              className="navbar-logout"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="navbar-link">
              Login
            </Link>

            <Link
              to="/register"
              className="navbar-register"
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;