import React, { useEffect } from "react";

import { Link } from "react-router-dom";

function Duolingo() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="duolingo-container page-container">
      <h1>Duolingo English Test Online Coaching</h1>

      <div className="duolingo-intro">
        <img
          src="/assets/duolingo-banner.jpg"
          alt="Duolingo Banner"
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
          for the <strong>Duolingo English Test (DET)</strong>, a widely
          accepted English proficiency exam for global admissions. Our program
          is designed to help students master test strategies with AI-integrated
          practice and score improvement plans.
        </p>
      </div>

      <div className="duolingo-details">
        <h2>📘 Duolingo Highlights </h2>
        <ul>
          <li>
            <strong>Total Score:</strong> 10–160
          </li>
          <li>
            <strong>Test Sections:</strong> Literacy, Comprehension,
            Conversation, and Production
          </li>
          <li>
            <strong>Duration:</strong> 1 hour
          </li>
          <li>
            <strong>Question Types:</strong> Reading, Writing, Speaking, and
            Listening
          </li>
          <li>
            <strong>Mode:</strong> Fully Online, Taken From Home
          </li>
          <li>
            <strong>Results:</strong> Delivered within 48 hours
          </li>
        </ul>

        <h2>🎯 Why Choose Our Duolingo Coaching?</h2>
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
          <li>Targeted practice for AI-evaluated speaking & writing</li>
          <li>Section-wise improvement drills & feedback</li>
          <li>
            Latest tips and hacks for open response & fill-in-the-blanks
            questions
          </li>
          <li>Vocabulary-building activities with daily practice</li>
          <li>
            Fluency, intonation, and clarity training for speaking responses
          </li>
        </ul>

        <h2>🌍 DET Accepted In</h2>
        <div className="country-grid">
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
            <img src="https://flagcdn.com/w320/de.png" alt="Germany Flag" />
            <p>Germany</p>
          </div>
          <div>
            <img src="https://flagcdn.com/w320/au.png" alt="Australia Flag" />
            <p>Australia</p>
          </div>
        </div>

        <h2>💰 Duolingo Course Pricing</h2>
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
              <td data-label="Course">Duolingo</td>
              <td data-label="No. of Classes">12</td>
              <td data-label="Mock Tests">2</td>
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
          <strong>Score 120+ on your DET with our expert guidance!</strong>{" "}
          Schedule your free trial today and boost your global admission
          chances.
          <Link to="/contact" style={{ color: "#c91432", fontWeight: "bold" }}>
            {" "}
            Contact us
          </Link>{" "}
          to begin your journey.
        </p>
      </div>
    </div>
  );
}

export default Duolingo;
