// src/pages/ApplicationProcedure.jsx
import React from "react";
import { Link } from "react-router-dom";

const ApplicationProcedure = () => {
  return (
    <div className="application-procedure-container">
      {/* ================= Intro ================= */}
      <section className="application-intro">
        <h1>Application Procedure</h1>
        <p>
          The university application process is one of the most critical stages in a student’s study abroad journey. From filling out forms to writing compelling essays and preparing required documents, each step must be handled carefully. A small mistake can lead to delays or even rejection. We provide complete end-to-end guidance to ensure your applications are accurate, timely, and impactful.
        </p>
      </section>

      <hr />

      {/* ================= Why Support is Important ================= */}
      <section className="application-why-important">
        <h2>Why Application Procedure Support is Important</h2>
        <ul>
          <li>University applications often require multiple documents (transcripts, SOP, LORs, test scores, financial proofs).</li>
          <li>Each institution has its own guidelines, formats, and deadlines.</li>
          <li>Missing even a single requirement may result in rejection.</li>
          <li>Competitive admissions demand well-crafted Statements of Purpose (SOPs) and Letters of Recommendation (LORs).</li>
          <li>Students often underestimate the importance of presentation and detailing.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="application-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Guiding students through the entire application timeline.</li>
          <li>Preparing a checklist of required documents per university.</li>
          <li>Assisting in drafting and refining SOPs, essays, and resumes.</li>
          <li>Coordinating with recommenders for strong LORs.</li>
          <li>Submitting applications on behalf of students where permitted.</li>
          <li>Tracking application status and ensuring no deadlines are missed.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Key Benefits ================= */}
      <section className="application-benefits">
        <h2>Key Benefits for Students</h2>
        <ul>
          <li>Stress-free and streamlined application process.</li>
          <li>Professional guidance for impactful SOPs and essays.</li>
          <li>Increased chances of acceptance due to error-free, well-presented applications.</li>
          <li>Save time and effort with organized documentation and tracking.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="application-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: When should I start my university applications?</strong>
          <p>Ideally, 8–12 months before your intended intake.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Do you help in writing SOPs and LORs?</strong>
          <p>Yes, we guide you in drafting personalized, plagiarism-free, and impressive documents.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: What if I miss a deadline?</strong>
          <p>We ensure reminders and tracking, but if a deadline is missed, we guide you with the next available intakes or alternate universities.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="application-callout">
        <blockquote>
          “Applying abroad doesn’t have to be stressful. Let us handle the process while you focus on preparing for your new journey.”
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

export default ApplicationProcedure;
