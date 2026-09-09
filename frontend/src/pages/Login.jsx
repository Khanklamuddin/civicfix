import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {
  const [formData, setFormData] = useState({
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
      const response = await API.post("/users/login", formData);

      localStorage.setItem("token", response.data.token);

      alert(response.data.message);

      navigate("/dashboard");
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Login failed"
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
            🔐
          </div>

          <span className="page-badge">
            👋 WELCOME BACK
          </span>

          <h1>Login to CivicFix</h1>

          <p>
            Sign in to report problems and track your
            civic complaints.
          </p>
        </div>

        <form onSubmit={handleSubmit}>

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
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="auth-submit-button"
            disabled={loading}
          >
            {loading
              ? "Logging in..."
              : "🔑 Login"}
          </button>

        </form>

        <div className="auth-footer">
          <p>
            Don't have an account?
          </p>

          <button
            type="button"
            onClick={() => navigate("/register")}
          >
            Create an account →
          </button>
        </div>

        <div className="auth-note">
          🔒 Your login information is securely handled by
          CivicFix.
        </div>

      </div>
    </div>
  );
}

export default Login;