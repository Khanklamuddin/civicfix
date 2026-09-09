import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const token = localStorage.getItem("token");

  return (
    <div className="home-page">

      {/* Hero Section */}
      <section className="hero-section">

        <div className="hero-content">
          <p className="hero-badge">
            🏙️ Better Cities. Better Living.
          </p>

          <h1>
            Report Civic Problems.
            <br />
            <span>Make Your City Better.</span>
          </h1>

          <p className="hero-description">
            CivicFix helps citizens report local problems,
            track complaints and stay updated until the issue
            is resolved.
          </p>

          <div className="hero-buttons">

            {token ? (
              <Link to="/report-problem">
                <button className="primary-btn">
                  📝 Report a Problem
                </button>
              </Link>
            ) : (
              <Link to="/login">
                <button className="primary-btn">
                  📝 Report a Problem
                </button>
              </Link>
            )}

            <Link to="/dashboard">
              <button className="secondary-btn">
                Go to Dashboard →
              </button>
            </Link>

          </div>
        </div>

      </section>


      {/* How CivicFix Works */}
      <section className="works-section">

        <div className="section-heading">
          <p className="section-badge">HOW IT WORKS</p>

          <h2>
            Simple. Fast. Effective.
          </h2>

          <p>
            Report a problem in just a few simple steps.
          </p>
        </div>


        <div className="steps-container">

          {/* Step 1 */}
          <div className="step-card">

            <div className="step-icon">
              📝
            </div>

            <h3>Report</h3>

            <p>
              Report problems such as potholes, garbage,
              street lights, water issues and more.
            </p>

          </div>


          {/* Step 2 */}
          <div className="step-card">

            <div className="step-icon">
              📍
            </div>

            <h3>Track</h3>

            <p>
              Track your complaints and check their current
              status anytime.
            </p>

          </div>


          {/* Step 3 */}
          <div className="step-card">

            <div className="step-icon">
              ✅
            </div>

            <h3>Resolve</h3>

            <p>
              Authorities update the complaint status when
              the problem is being resolved.
            </p>

          </div>

        </div>

      </section>


      {/* Call To Action */}
      <section className="cta-section">

        <h2>
          See a problem in your area?
        </h2>

        <p>
          Don't just ignore it. Report it through CivicFix.
        </p>

        {token ? (
          <Link to="/report-problem">
            <button className="primary-btn">
              Report Now →
            </button>
          </Link>
        ) : (
          <Link to="/register">
            <button className="primary-btn">
              Get Started →
            </button>
          </Link>
        )}

      </section>

    </div>
  );
}

export default Home;