// src/pages/VisaAssistance.jsx
import React from "react";
import { Link } from "react-router-dom";

const VisaAssistance = () => {
  return (
    <div className="visa-assistance-container">
      {/* ================= Intro ================= */}
      <section className="visa-intro">
        <h1>Visa Assistance</h1>
        <p>
          The student visa is the final and most crucial step in your study abroad journey. Every country has specific requirements, documentation, and interview procedures, and even minor errors can lead to delays or rejection. Our visa assistance services provide expert guidance throughout the process — from preparing documents to interview training — to ensure you secure your visa smoothly.
        </p>
      </section>

      <hr />

      {/* ================= Why Visa Assistance Is Important ================= */}
      <section className="visa-why-important">
        <h2>Why Visa Assistance Is Important</h2>
        <ul>
          <li>Visa rules differ for each country and change frequently.</li>
          <li>Even a small mistake in financial documents can cause rejection.</li>
          <li>Embassy interviews require preparation and confidence.</li>
          <li>Each country has unique health, insurance, and biometric requirements.</li>
          <li>A well-prepared visa file increases approval chances significantly.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="visa-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Visa Guidance – Country-specific visa process explained step-by-step.</li>
          <li>Document Preparation – Financial statements, sponsorship letters, insurance, admission proof.</li>
          <li>Mock Interviews – One-on-one training to build confidence for embassy interviews.</li>
          <li>Application Filing – Assistance in filling and submitting visa application forms correctly.</li>
          <li>Visa Fee Guidance – Information on fee payment methods and requirements.</li>
          <li>Updates & Alerts – Stay informed about embassy appointment dates and latest visa rules.</li>
          <li>Post-Visa Guidance – Next steps after visa approval (travel, compliance, reporting).</li>
        </ul>
      </section>

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="visa-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Increased chances of visa approval.</li>
          <li>Stress-free and organized visa preparation.</li>
          <li>Clarity on financial proofs and sponsorship requirements.</li>
          <li>Interview training to reduce nervousness.</li>
          <li>Timely application submission before deadlines.</li>
          <li>Country-specific expertise (USA, UK, Canada, Europe, Asia).</li>
        </ul>
      </section>

      <hr />

      {/* ================= Key Focus Areas ================= */}
      <section className="visa-focus">
        <h2>Key Focus Areas in Visa Assistance</h2>
        <ul>
          <li>Financial Proofs: Showing adequate funds (bank balance, loan, scholarships).</li>
          <li>Ties to Home Country: Guidance on presenting strong ties for visa acceptance.</li>
          <li>Statement of Purpose for Visa: Helping draft a convincing explanation of study goals.</li>
          <li>Travel Insurance Guidance: For countries where it is mandatory (e.g., Schengen visa).</li>
          <li>Medical Test Requirements: Assistance for countries like Australia, New Zealand, UK, Canada.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Common Mistakes ================= */}
      <section className="visa-mistakes">
        <h2>Common Mistakes Students Make (and We Avoid)</h2>
        <ul>
          <li>Submitting incomplete financial documents.</li>
          <li>Misunderstanding embassy interview questions.</li>
          <li>Missing deadlines for visa applications.</li>
          <li>Providing inconsistent information between university and visa documents.</li>
          <li>Not purchasing proper medical insurance where required.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="visa-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: When should I apply for a student visa?</strong>
          <p>Ideally, as soon as you receive your admission letter. Each country has specific timelines (e.g., USA – 120 days before, UK – 6 months before).</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Do I need to show bank balance for all countries?</strong>
          <p>Yes, most countries require proof of funds. The amount varies (e.g., Canada – CAD 20,635, UK – GBP 1,023/month).</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Will you help me prepare for the visa interview?</strong>
          <p>Yes, we conduct mock interviews to ensure you answer confidently and professionally.</p>
        </div>
        <div className="faq-item">
          <strong>Q4: What happens if my visa gets rejected?</strong>
          <p>We analyze the rejection reason, correct errors, and guide you for reapplication.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="visa-callout">
       {/* Blockquote */}
      <blockquote>
        “Your dream university is just a visa away. Let us guide you through every step of your visa journey — with expert document support, interview training, and country-specific guidance.”
      </blockquote>

      {/* Apply Now Button */}
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

export default VisaAssistance;
