import React, { useState } from "react";
import API from "../services/api";

function ReportProblem() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    location: "",
  });

  const [loading, setLoading] = useState(false);

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
      const response = await API.post("/complaints", formData);

      alert(response.data.message);

      setFormData({
        title: "",
        category: "",
        description: "",
        location: "",
      });
    } catch (error) {
      console.error(error);

      alert(
        error.response?.data?.message ||
          "Failed to report problem"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="page-container">

      {/* Page Header */}
      <div className="page-header">
        <span className="page-badge">
          📝 REPORT AN ISSUE
        </span>

        <h1>Report a Civic Problem</h1>

        <p>
          Help make your city better by reporting a civic
          problem in your area.
        </p>
      </div>

      {/* Complaint Form Card */}
      <div className="form-card">

        <div className="form-card-header">
          <div className="form-icon">
            📋
          </div>

          <div>
            <h2>Complaint Details</h2>

            <p>
              Please provide accurate information about the
              problem.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Title */}
          <div className="form-group">
            <label>
              Problem Title
            </label>

            <input
              type="text"
              name="title"
              placeholder="Example: Large pothole on main road"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Category */}
          <div className="form-group">
            <label>
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">
                Select a category
              </option>

              <option value="Garbage">
                🗑️ Garbage
              </option>

              <option value="Road">
                🛣️ Road / Pothole
              </option>

              <option value="Street Light">
                💡 Street Light
              </option>

              <option value="Water">
                💧 Water / Sewage
              </option>

              <option value="Electricity">
                ⚡ Electricity
              </option>

              <option value="Other">
                📌 Other
              </option>
            </select>
          </div>

          {/* Description */}
          <div className="form-group">
            <label>
              Description
            </label>

            <textarea
              name="description"
              placeholder="Describe the problem in detail..."
              value={formData.description}
              onChange={handleChange}
              rows="6"
              required
            />
          </div>

          {/* Location */}
          <div className="form-group">
            <label>
              Location
            </label>

            <input
              type="text"
              name="location"
              placeholder="Example: Main Road, Near City Park"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? (
              "Submitting..."
            ) : (
              "🚀 Submit Complaint"
            )}
          </button>

        </form>

        {/* Information */}
        <div className="form-note">
          🔒 Your complaint will be securely saved and
          associated with your account.
        </div>

      </div>
    </div>
  );
}

export default ReportProblem;