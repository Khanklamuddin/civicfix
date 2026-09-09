import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-brand">
          <Link to="/" className="footer-logo">
            CivicFix
          </Link>

          <p>
            Empowering citizens to report civic problems
            and build better communities.
          </p>
        </div>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/my-complaints">My Complaints</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} CivicFix. All rights reserved.
        </p>

        <p>
          Built with React, Node.js & MongoDB
        </p>
      </div>
    </footer>
  );
}

export default Footer;