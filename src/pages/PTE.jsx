import React, { useEffect } from "react";
import { Link } from "react-router-dom";

function PTA() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pte-container">
      <h1>PTE Academic Online Coaching</h1>

      <div className="pte-intro">
        <img
          src="/assets/pte-banner.jpg"
          alt="PTE Banner"
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
          <strong>The Sanvi’s Academy</strong> offers high‑impact online
          coaching for the{" "}
          <strong>Pearson Test of English Academic (PTE Academic)</strong>. Our
          certified trainers guide you through the{" "}
          <strong>Speaking, Writing, Reading, and Listening</strong> modules
          with live classes and mock exams.
        </p>
      </div>

      <div className="pte-details">
        <h2>📘 PTE Overview Highlights</h2>
        <ul>
          <li>
            <strong>Total Score:</strong>Measured on 10–90
          </li>
          <li>
            <strong>Test Type:</strong> Computer‑based, AI‑evaluated
          </li>
          <li>
            <strong>Duration:</strong> Approximately 2 hours
          </li>
          <li>
            <strong>Test Sections:</strong>
            <ul>
              <li>Speaking & Writing: ~55–67 minutes</li>
              <li>Reading: 29–30 minutes</li>
              <li>Listening: 30–43 minutes</li>
            </ul>
          </li>
        </ul>

        <h2>🎯 Why Choose Our PTE Coaching?</h2>
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
          <li>Interactive live classes with AI‑scored practice</li>
          <li>
            Targeted training for all four modules – Speaking, Writing, Reading,
            Listening
          </li>
          <li>Real-time speaking fluency analysis with pronunciation tips</li>
          <li>
            Score booster strategies for difficult question types like Repeat
            Sentence & Essay
          </li>
          <li>Expert feedback on writing tasks with improvement suggestions</li>
        </ul>

        <h2>🌍 PTE is Accepted In</h2>
        <div className="country-grid">
          {[
            { flag: "au", name: "Australia" },
            { flag: "nz", name: "New Zealand" },
            { flag: "ca", name: "Canada" },
            { flag: "gb", name: "United Kingdom" },
            { flag: "us", name: "USA" },
          ].map(({ flag, name }) => (
            <div key={flag}>
              <img
                src={`https://flagcdn.com/w320/${flag}.png`}
                alt={`${name} Flag`}
                className="country-flag"
              />
              <p>{name}</p>
            </div>
          ))}
        </div>

        <h2>💰PTE Course Pricing</h2>
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
              <td data-label="Course">PTE</td>
              <td data-label="No. of Classes">20</td>
              <td data-label="Mock Tests">1</td>
              <td data-label="Benefits">Study Material, Class Recording</td>
              <td data-label="Fees">8000 INR</td>
              <td data-label="Discount">15%</td>
              <td data-label="Final Fee">
                <div className="final-fee-box">6,800 INR</div>
              </td>{" "}
              {/* New Value */}
            </tr>
          </tbody>
        </table>

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
              <td>12 Live Classes + Study Material + Practice Sets</td>
              <td>₹8,000</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Basic + 3 Full Mock Tests + Feedback Sessions</td>
              <td>₹10,500</td>
            </tr>
            <tr>
              <td>Pro</td>
              <td>Premium + 1‑on‑1 Speaking & Writing Correction</td>
              <td>₹12,000</td>
            </tr>
          </tbody>
        </table> */}

        <p style={{ marginTop: "20px" }}>
          <strong>Get PTE‑ready with us!</strong> Achieve your dream score with
          structured guidance.{" "}
          <Link to="/contact" style={{ color: "#c91432", fontWeight: "bold" }}>
            {" "}
            Contact us
          </Link>{" "}
          today for a free trial.
        </p>
       
      </div>
    </div>
  );
}

export default PTA;
