import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function IELTS() {
  return (
    <div className="page-container">
      <h1>IELTS Online Coaching</h1>

      <div className="ielts-intro">
        <img
          src="/assets/ielts-banner.jpg"
          alt="IELTS Banner"
          className="test-hero-img"
          style={{
            width: "70%",
            height: "auto",
            maxHeight: "400px",
            display: "block",
            objectFit: "cover",
            margin: "0 auto",
          }}
        />
        <p>
          Join <strong>The Sanvi’s Academy</strong> and get trained by certified
          experts for the
          <strong>
            {" "}
            IELTS (International English Language Testing System)
          </strong>
          . Our coaching program is designed to help you achieve your target
          band score with personalized guidance, strategic practice, and
          full-length mock tests. We prepare students for both the{" "}
          <strong>Academic</strong> and
          <strong> General Training</strong> modules.
        </p>
      </div>

      <div className="ielts-details">
        <h2>📘 IELTS Highlights</h2>
        <ul>
          <li>
            <strong>Total Band Score:</strong>Measured on a 0–9 scale
          </li>
          <li>
            <strong>Test Types:</strong> Academic and General Training
          </li>
          <li>
            <strong>Total Duration:</strong> 2 hours 45 minutes
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Listening – 30 minutes</li>
              <li>Reading – 60 minutes</li>
              <li>Writing – 60 minutes</li>
              <li>Speaking – 11 to 14 minutes</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our IELTS Coaching?</h2>
        <ul>
          <li>25 years of expertise in standardized tests coaching</li>
          <li>
            Daily live online classes with veteran, highly skilled, certified
            trainers
          </li>
          <li>Result-oriented teaching to ensure high scores</li>
          <li>Individual attention and enthused learning environment</li>
          <li>Regular mock tests to gain real test experience</li>
          <li>Free demo class</li>
          <li>
            Each class is 1.5 hours long – approximately 0.5 month duration
          </li>
          <li>Flexible evening batch timings</li>
          <li>
            Access to recorded sessions for revision and self-paced learning
          </li>
          <li>Complete study material in PDF format</li>
          <li>Band-specific strategies and time management tips</li>
          <li>Detailed writing task evaluations</li>
        </ul>
        <h2>🌍 IELTS is Accepted In</h2>
        <div className="country-grid">
          {/* UK */}
          <div className="country-item">
            <img
              src="https://flagcdn.com/w80/gb.png"
              alt="UK"
              className="country-flag"
            />
            <p>United Kingdom</p>
          </div>

          {/* Australia */}
          <div className="country-item">
            <img
              src="https://flagcdn.com/w80/au.png"
              alt="Australia"
              className="country-flag"
            />
            <p>Australia</p>
          </div>

          {/* Canada */}
          <div className="country-item">
            <img
              src="https://flagcdn.com/w80/ca.png"
              alt="Canada"
              className="country-flag"
            />
            <p>Canada</p>
          </div>

          {/* New Zealand */}
          <div className="country-item">
            <img
              src="https://flagcdn.com/w80/nz.png"
              alt="New Zealand"
              className="country-flag"
            />
            <p>New Zealand</p>
          </div>

          {/* Ireland */}
          <div className="country-item">
            <img
              src="https://flagcdn.com/w80/ie.png"
              alt="Ireland"
              className="country-flag"
            />
            <p>Ireland</p>
          </div>

          {/* Germany */}
          <div className="country-item">
            <img
              src="https://flagcdn.com/w80/de.png"
              alt="Germany"
              className="country-flag"
            />
            <p>Germany</p>
          </div>
        </div>

        <h2>💰 IELTS Course Pricing</h2>
        <table className="course-table">
          <thead>
            <tr>
              <th>Course</th>
              <th>No. of Classes</th>
              <th>Mock Test</th>
              <th>Benefits</th>
              <th>Fees</th>
              <th>Discount</th>
              <th className="final-fee-header">Final Fee</th>{" "}
              {/* Styled header */}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Course">IELTS</td>
              <td data-label="No. of Classes">25</td>
              <td data-label="Mock Tests">2</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">8000 INR</td>
              <td data-label="Discount">15%</td>
              <td data-label="Final Fee">
                <div className="final-fee-box">6,800 INR</div>
              </td>
            </tr>
          </tbody>
        </table>

        {/* <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Link to="/contact" className="contact-link">
            <button className="contact-btn">
              📞 Contact Us for Enrollment
            </button>
          </Link>
        </div> */}

        {/* <table className="pricing-table">
          <thead>
            <tr>
              <th>Plan</th>
              <th>Features</th>
              <th>Price (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>20 Live Classes, PDF Materials</td>
              <td>₹8,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic + 5 Mock Tests, Speaking Feedback</td>
              <td>₹11,000</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>All Features + Personal Coaching</td>
              <td>₹14,000</td>
            </tr>
          </tbody>
        </table> */}

        <p style={{ marginTop: "20px" }}>
          <strong>Enroll now</strong> to start your IELTS journey!{" "}
          <Link to="/contact" style={{ color: "#c91432", fontWeight: "bold" }}>
            Contact us
          </Link>{" "}
          for demo sessions and details.
        </p>

      </div>
    </div>
  );
}

export default IELTS;
