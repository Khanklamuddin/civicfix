import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await API.post(
        "/users/register",
        formData
      );

      alert(response.data.message);

      setFormData({
        name: "",
        email: "",
        password: "",
      });

      navigate("/login");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Registration failed"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <div className="auth-header">
          <div className="auth-icon">
            📝
          </div>

          <span className="page-badge">
            🚀 GET STARTED
          </span>

          <h1>Create Your Account</h1>

          <p>
            Join CivicFix and help make your city
            cleaner, safer and better.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              minLength="6"
              required
            />
          </div>

          <button
            type="submit"
            className="auth-submit-button"
            disabled={loading}
          >
            {loading
              ? "Creating Account..."
              : "✨ Create Account"}
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Already have an account?
          </p>

          <button
            type="button"
            onClick={() => navigate("/login")}
          >
            Login to CivicFix →
          </button>
        </div>

        <div className="auth-note">
          🔒 Your account information is securely stored
          by CivicFix.
        </div>

      </div>
    </div>
  );
}

export default Register;