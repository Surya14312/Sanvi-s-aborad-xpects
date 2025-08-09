import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function SAT() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="sat-page">
      <div className="page-container">
        <h1>SAT Online Coaching</h1>

        <div className="sat-intro">
          <img
            src="/assets/sat-banner.jpg"
            alt="SAT Banner"
            className="test-hero-img"
            style={{
              width: "70%",
              height: "auto",
              maxHeight: "400px",
              display: "block",
              margin: "0 auto"
              , objectFit: "cover",
            }}
          />

          <p>
            <strong>The Sanvi’s Academy</strong> provides result-oriented online
            coaching for the <strong>SAT (Scholastic Assessment Test)</strong>,
            essential for undergraduate admissions in the US and other
            countries. We cover all test components with expert strategies and
            adaptive learning plans.
          </p>
        </div>

        <div className="sat-details">
          <h2>📘 SAT Highlights</h2>
          <ul>
            <li>
              <strong>Total Score:</strong> 400–1600
            </li>
            <li>
              <strong>Test Sections:</strong> Reading & Writing, Math
            </li>
            <li>
              <strong>Duration:</strong> 2 hours 14 minutes (Digital SAT)
            </li>
            <li>
              <strong>Question Types:</strong> Multiple Choice & Grid-In
            </li>
            <li>
              <strong>Mode:</strong> Computer-Based Test
            </li>
          </ul>

          <h2>🎯 Why Choose Our SAT Coaching?</h2>
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
            <li>Concept-building for Reading, Writing, and Math</li>
            <li>Digital SAT practice with real-time analytics</li>
            <li>Access to a comprehensive SAT question bank</li>
            <li>Updated content aligned with the latest Digital SAT format</li>
            <li>
              Special focus on calculator and non-calculator math sections
            </li>
          </ul>

          <h2>🌍 SAT Accepted In</h2>
          <div className="country-grid fade-in">
            <div>
              <img src="https://flagcdn.com/w320/us.png" alt="USA Flag" />
              <p>United States</p>
            </div>
            <div>
              <img src="https://flagcdn.com/w320/gb.png" alt="UK Flag" />
              <p>United Kingdom</p>
            </div>
            <div>
              <img src="https://flagcdn.com/w320/ca.png" alt="Canada Flag" />
              <p>Canada</p>
            </div>
            <div>
              <img src="https://flagcdn.com/w320/sg.png" alt="Singapore Flag" />
              <p>Singapore</p>
            </div>
          </div>

          <h2>💰 SAT Course Pricing</h2>
          <table className="course-table">
            <thead>
              <tr>
                <th>Course</th>
                <th>No. of Classes</th>
                <th>Mock Tests</th>
                <th>Benefits</th>
                <th>Fees</th>
                <th>Discount</th>
                <th className="final-fee-header">Final Fee</th>{" "}
                {/* Styled header */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="Course">SAT</td>
                <td data-label="No. of Classes">34</td>
                <td data-label="Mock Tests">7</td>
                <td data-label="Benefits">Study Material, Class Recording</td>
                <td data-label="Fees">22500 INR</td>
                <td data-label="Discount">20%</td>
                <td data-label="Final Fee">
                  <div className="final-fee-box">18,000 INR</div>
                </td>{" "}
                {/* New Value */}
              </tr>
            </tbody>
          </table>

          <p style={{ marginTop: "20px" }}>
            <strong>Target a 1500+ SAT score with us!</strong> Book a free demo
            and get your personalized prep roadmap.{" "}
            <Link
              to="/contact"
              style={{ color: "#c91432", fontWeight: "bold" }}
            >
              Contact us
            </Link>{" "}
            now to get started.
          </p>
          
        </div>
      </div>
    </div>
  );
}

export default SAT;
