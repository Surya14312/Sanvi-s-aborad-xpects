import React from "react";
import { Link } from "react-router-dom";



function German() {
  return (
    <div className="german-container">
      <div className="page-container">
        <h1>German Language Coaching</h1>

        <div className="german-intro">
          <img src="/assets/german-banner.jpg" alt="German Banner" className="german-hero-img"
          style={{ width: "70%", height: "auto", maxHeight: "400px", display: "block", margin: "0 auto" , objectFit: "cover", }} />

          <p>
            <strong>The Sanvi’s Academy</strong> provides comprehensive coaching
            for <strong>German Language (Goethe / TestDaF / TELC)</strong>{" "}
            certifications. Courses align with the{" "}
            <strong>CEFR framework</strong> (A1 to C2 levels) and prepare
            students for exams, study, work, or immigration purposes.
          </p>
        </div>

        <div className="german-details">
          <h2>📘 German Highlights</h2>
          <ul>
            <li>
              <strong>Levels:</strong> A1 to C2 (CEFR standard)
            </li>
            <li>
              <strong>Exams:</strong> Goethe, TestDaF, TELC
            </li>
            <li>
              <strong>Skills:</strong> Hören, Lesen, Schreiben, Sprechen
              (Listening, Reading, Writing, Speaking)
            </li>
            <li>
              <strong>Mode:</strong> Online + Interactive Sessions
            </li>
            <li>
              <strong>Duration:</strong> 2–4 months per level
            </li>
          </ul>

          <h2>🎯 Why Choose Our German Classes?</h2>
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
            <li>
              Structured A1 to B2 level courses aligned with CEFR standards
            </li>
            <li>Level-wise speaking + grammar correction sessions</li>
            <li>Guidance for job/study visa documentation</li>
            <li>Interactive classroom tools and digital learning materials</li>
            <li>German culture & etiquette immersion through role-plays</li>
          </ul>

          <h2>💰 German Course Pricing</h2>

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
                <td data-label="Course">German</td>
                <td data-label="No. of Classes">45</td>
                <td data-label="Mock Tests">3</td>
                <td data-label="Benefits">Study Material, Class Recording</td>
                <td data-label="Fees">15000 INR</td>
                <td data-label="Discount">20%</td>
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
                <td>30 sessions + exam prep + grammar bootcamp</td>
                <td>₹15,000</td>
              </tr>
              <tr>
                <td>B1 / B2</td>
                <td>Intermediate + TestDaF prep + mocks</td>
                <td>₹16,000</td>
              </tr>
              <tr>
                <td>C1 / C2</td>
                <td>Advanced fluency + Goethe writing/speaking mastery</td>
                <td>₹17,000</td>
              </tr>
            </tbody>
          </table> */}

          <p style={{ marginTop: "20px" }}>
            <strong>
              Join our German coaching today and open doors to education and
              career in Europe!
            </strong>{" "}
            Book your <strong>free demo</strong> or{" "}
            <Link
              to="/contact"
              style={{ color: "#c91432", fontWeight: "bold" }}
            >
              Contact Us
            </Link>{" "}
            to begin your language journey.
          </p>
         
        </div>
      </div>
    </div>
  );
}

export default German;
