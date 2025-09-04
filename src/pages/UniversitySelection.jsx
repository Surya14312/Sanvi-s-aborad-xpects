// src/pages/UniversitySelection.jsx
import React from "react";
import { Link } from "react-router-dom";


const UniversitySelection = () => {
  return (
    <div className="university-selection-container">
      {/* ================= Intro ================= */}
      <section className="university-intro">
        <h1>University Selection</h1>
        <p>
          Once the country is chosen, the next big step is selecting the right university. With thousands of universities worldwide, making the right choice can be overwhelming. Our expert guidance helps students shortlist and apply to institutions that match their career goals, academic profile, and budget.
        </p>
      </section>

      <hr />

      {/* ================= Why University Selection Matters ================= */}
      <section className="university-why-important">
        <h2>Why University Selection Matters</h2>
        <ul>
          <li>Universities differ in global ranking, reputation, faculty expertise, and research opportunities.</li>
          <li>Some institutions are better known for specific fields (e.g., MIT for Technology, INSEAD for Business, ETH Zurich for Engineering).</li>
          <li>Admission criteria vary widely; applying blindly may reduce chances of acceptance.</li>
          <li>The university’s network, alumni, and industry partnerships strongly impact future career prospects.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="university-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Shortlisting universities based on ranking, affordability, location, and student preferences.</li>
          <li>Providing detailed information about entry requirements and admission deadlines.</li>
          <li>Matching student profiles (grades, test scores, extracurriculars) with suitable institutions.</li>
          <li>Guiding on safety schools, match schools, and dream schools for a balanced application list.</li>
          <li>Reviewing application guidelines to ensure compliance with each university’s requirements.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Key Benefits ================= */}
      <section className="university-benefits">
        <h2>Key Benefits for Students</h2>
        <ul>
          <li>Personalized university shortlist with the best-fit options.</li>
          <li>Higher chances of admission by targeting universities suited to the student’s profile.</li>
          <li>Access to insider insights about top universities worldwide.</li>
          <li>Saves time by avoiding irrelevant or low-quality options.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="university-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: How many universities should I apply to?</strong>
          <p>We recommend applying to 5–8 universities, including a mix of dream, match, and safe options.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Do you only suggest top-ranked universities?</strong>
          <p>No. We focus on the best-fit universities, balancing rankings, affordability, and career outcomes.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Can you help if I already have a university in mind?</strong>
          <p>Yes, we provide support even if you’ve pre-decided, ensuring your application stands out.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="university-callout">
        <blockquote>
          “Confused between multiple universities? Our expert advisors will help you select the right institution and maximize your admission chances.”
        </blockquote>
         <div style={{ textAlign: "center", marginTop: "25px" }}>
        <Link to="/contact">
          <button
            style={{
              backgroundColor: "#f95738",
              color: "#fff",
              border: "none",
              padding: "12px 28px",
              borderRadius: "8px",
              fontSize: "1rem",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#e04325")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#f95738")}
          >
            Apply Now
          </button>
        </Link>
      </div>
      </section>
    </div>
  );
};

export default UniversitySelection;
