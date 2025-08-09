import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function TOEFL() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const countries = [
    { flag: "us", name: "USA" },
    { flag: "ca", name: "Canada" },
    { flag: "au", name: "Australia" },
    { flag: "nz", name: "New Zealand" },
    { flag: "gb", name: "United Kingdom" },
    { flag: "de", name: "Germany" },
  ];

  return (
    <div className="page-container toefl-container">
      <h1>TOEFL Online Coaching</h1>

      <div className="toefl-intro">
        <img
          src="/assets/toefl-banner.jpg"
          alt="TOEFL Banner"
          className="test-hero-img"
          style={{
            width: "70%",
            height: "auto",
            maxHeight: "400px",
            display: "block",
            margin: "0 auto",
            objectFit: "cover",
          }}
        />

        <p>
          <strong>The Sanvi’s Academy</strong> offers expert-led online coaching
          for the <strong>TOEFL (Test of English as a Foreign Language)</strong>
          . Our structured training equips you to excel in the 4 sections —{" "}
          <strong>Reading, Listening, Speaking, and Writing</strong>. Suitable
          for those aiming to study or work in the USA, Canada, or other
          English-speaking countries.
        </p>
      </div>

      <div className="toefl-details">
        <h2>📘 TOEFL Highlights</h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 0–120 (each section Measured out of
            30)
          </li>
          <li>
            <strong>Test Type:</strong> IBT (Internet-Based Test)
          </li>
          <li>
            <strong>Duration:</strong> Approximately 2 hours
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Reading – 35 minutes</li>
              <li>Listening – 36 minutes</li>
              <li>Speaking – 16 minutes (4 tasks)</li>
              <li>Writing – 29 minutes (2 tasks)</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our TOEFL Coaching?</h2>
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
          <li>Updated materials with ETS-aligned strategies</li>
          <li>Time management techniques for each section</li>
          <li>
            Writing task evaluation with corrections, suggestions, and scoring
          </li>
        </ul>

        <h2>🌍 TOEFL is Accepted In</h2>
        <div className="country-grid">
          {countries.map((country, idx) => (
            <div key={idx} className="country-item">
              <img
                src={`https://flagcdn.com/w320/${country.flag}.png`}
                alt={`${country.name} Flag`}
              />
              <p>{country.name}</p>
            </div>
          ))}
        </div>

        <h2>💰 TOEFL Course Pricing</h2>
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
              <td data-label="Course">TOEFL</td>
              <td data-label="No. of Classes">30</td>
              <td data-label="Mock Tests">4</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">8000 INR</td>
              <td data-label="Discount">15%</td>
              <td data-label="Final Fee">
                {" "}
                <div className="final-fee-box">6,800 INR</div>
              </td>{" "}
              {/* New Value */}
            </tr>
          </tbody>
        </table>

        <p style={{ marginTop: "20px" }}>
          <strong>Ready to boost your TOEFL score?</strong>{" "}
          <Link to="/contact" style={{ color: "#c91432", fontWeight: "bold" }}>
            Contact us
          </Link>{" "}
          Get started with our expert trainers now! for demo sessions and
          guidance.
        </p>

        
      </div>
    </div>
  );
}

export default TOEFL;
