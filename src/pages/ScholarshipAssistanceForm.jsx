// src/pages/ScholarshipAssistance.jsx
import React from "react";
import { Link } from "react-router-dom";

const ScholarshipAssistance = () => {
  return (
    <div className="scholarship-assistance-container">
      {/* ================= Intro ================= */}
      <section className="scholarship-intro">
        <h1>Scholarship Assistance</h1>
        <p>
          Studying abroad can be expensive, but scholarships can significantly reduce financial burden. Our team provides end-to-end support in identifying, applying, and securing the right scholarships for your chosen program and destination. With our guidance, you increase your chances of receiving financial aid and making your dream education more affordable.
        </p>
      </section>

      <hr />

      {/* ================= Why Scholarship Assistance Matters ================= */}
      <section className="scholarship-why-important">
        <h2>Why Scholarship Assistance Matters</h2>
        <ul>
          <li>Universities abroad offer merit-based, need-based, and country-specific scholarships.</li>
          <li>Many students miss opportunities simply because they are unaware of available options.</li>
          <li>Early and correct application increases your chances of securing funding.</li>
          <li>Scholarships not only ease financial stress but also strengthen your profile.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="scholarship-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Identify suitable scholarships based on your academic profile, chosen country, and program.</li>
          <li>Guide you on eligibility requirements and deadlines.</li>
          <li>Assist in preparing strong application documents (SOPs, LORs, essays).</li>
          <li>Provide tips for interview rounds, if required.</li>
          <li>Ensure applications are submitted correctly and on time.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Types of Scholarships ================= */}
      <section className="scholarship-types">
        <h2>Types of Scholarships We Assist With</h2>
        <ul>
          <li>University-funded scholarships – offered directly by the institution.</li>
          <li>Government-funded scholarships – like Erasmus+ (EU), Chevening (UK), DAAD (Germany), Fulbright (USA), etc.</li>
          <li>Private/NGO scholarships – funded by organizations and foundations.</li>
          <li>Country-specific scholarships for Indians – like Commonwealth Scholarships, Inlaks, Tata Trusts, and more.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="scholarship-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Access to a wide database of international scholarships.</li>
          <li>Personalized matching with opportunities relevant to your field.</li>
          <li>Professional editing and drafting support for essays and statements.</li>
          <li>Increased chances of securing partial or full funding.</li>
          <li>Reduced overall cost of studying abroad.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="scholarship-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: Can I apply for multiple scholarships at once?</strong>
          <p>Yes, you can apply to multiple scholarships if you meet eligibility criteria.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Are there scholarships available for average students?</strong>
          <p>Absolutely. Apart from merit-based, there are scholarships for financial need, specific regions, and particular fields of study.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: How much funding can I expect?</strong>
          <p>This depends on the scholarship — some cover tuition fees, others include living costs, travel, or full expenses.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="scholarship-callout">
        <blockquote>
          “Don’t let finances stop you from achieving your international education dream. Explore your scholarship opportunities with us today.”
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

export default ScholarshipAssistance;
