import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function French() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="french-container">
      <h1>French Language Coaching</h1>

      <div className="french-intro">
        <img
          src="/assets/french-banner.jpg"
          alt="French Banner"
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
          <strong>The Sanvi’s Academy</strong> offers structured coaching for
          <strong> French (DELF / DALF / TEF / TCF)</strong> preparation,
          suitable for students, professionals, and immigration aspirants. Our
          program is CEFR-aligned (A1 to C2 levels), led by experienced language
          instructors.
        </p>
      </div>

      <div className="french-details">
        <h2>📘 French Highlights</h2>
        <ul>
          <li>
            <strong>Levels:</strong> A1, A2, B1, B2, C1, C2
          </li>
          <li>
            <strong>Duration:</strong> 2–4 months per level
          </li>
          <li>
            <strong>Tests:</strong> DELF, DALF, TEF, TCF
          </li>
          <li>
            <strong>Skills:</strong> Listening, Speaking, Reading, Writing
          </li>
          <li>
            <strong>Mode:</strong> Online + On-demand practice
          </li>
        </ul>
        <h2>🎯 Why Learn French with Us?</h2>
        <ul>
          <li>25 years of Expertise in Standardized Tests Coaching</li>
          <li>
            Daily live online classes with Veteran, Highly Skilled, Certified
            Trainers
          </li>
          <li>Result-Oriented Teaching to Ensure High Scores</li>
          <li>Individual Attention and Enthused Learning Environment</li>
          <li>Regular Mock Tests to gain real Test Experience</li>
          <li>Free Demo Class</li>
          <li>
            Each class is 1.5 hours long – approximately 0.5 month duration
          </li>
          <li>Flexible evening batch timings</li>
          <li>
            Access to recorded sessions for revision and self-paced learning
          </li>
          <li>Structured curriculum aligned with CEFR (A1 to B2 levels)</li>
          <li>Spoken & written French immersion training</li>
          <li>Job and study-abroad French readiness</li>
          <li>Spoken & written French immersion with real-world scenarios</li>
        </ul>

        <h2>💰 French Course Pricing</h2>

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
              <td data-label="Course">French</td>
              <td data-label="No. of Classes">45</td>
              <td data-label="Mock Tests">3</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">15000 INR</td>
              <td data-label="discount">20%</td>
              <td data-label="Final Fee">
                {" "}
                <div className="final-fee-box">12,000 INR</div>
              </td>{" "}
              {/* New Value */}
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
              <th>Level</th>
              <th>Features</th>
              <th>Fee (INR)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A1 / A2</td>
              <td>Beginner level + 20 live sessions + materials</td>
              <td>₹15,000</td>
            </tr>
            <tr>
              <td>B1 / B2</td>
              <td>Intermediate level + DELF prep + mocks</td>
              <td>₹15,000</td>
            </tr>
            <tr>
              <td>C1 / C2</td>
              <td>Advanced level + Writing & Oral mastery</td>
              <td>₹16,000</td>
            </tr>
          </tbody>
        </table> */}

        <p style={{ marginTop: "20px" }}>
          <strong>
            Become fluent in French and unlock global opportunities!
          </strong>{" "}
          Book your <strong>free demo</strong> today and receive your
          personalized learning roadmap.
          <Link to="/contact" style={{ color: "#c91432", fontWeight: "bold" }}>
            Contact us
          </Link>{" "}
          to begin.
        </p>
      
      </div>
    </div>
  );
}

export default French;
