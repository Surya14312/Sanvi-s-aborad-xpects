// src/pages/TestPreparations.jsx
import React from "react";
import { Link } from "react-router-dom";

const TestPreparations = () => {
  return (
    <div className="test-preparations-container">
      {/* ================= Intro ================= */}
      <section className="test-intro">
        <h1>Test Preparations</h1>
        <p>
          Standardized tests play a crucial role in university admissions abroad. Whether it’s proving your English proficiency or showcasing your aptitude for graduate-level study, the right preparation can make all the difference. We provide personalized coaching and guidance for all major tests required for studying abroad, ensuring you achieve your target scores with confidence.
        </p>
      </section>

      <hr />

      {/* ================= Why Test Preparation Matters ================= */}
      <section className="test-why-important">
        <h2>Why Test Preparation Matters</h2>
        <ul>
          <li>Most universities require proof of English proficiency (IELTS, TOEFL, PTE, Duolingo).</li>
          <li>Competitive programs (MBA, MS, PhD) often demand GRE/GMAT scores.</li>
          <li>Undergraduate admissions frequently look at SAT scores.</li>
          <li>Language proficiency (German, French) opens opportunities in non-English speaking countries and improves employability.</li>
          <li>A high score can also increase eligibility for scholarships.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="test-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Diagnostic tests to assess current skill level.</li>
          <li>Customized study plans tailored to each student’s strengths and weaknesses.</li>
          <li>Expert trainers with years of test-prep experience.</li>
          <li>Practice sessions with official and mock test formats.</li>
          <li>One-on-one mentoring for speaking, writing, and problem-solving skills.</li>
          <li>Proven strategies to maximize scores in limited time.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Tests We Cover ================= */}
      <section className="test-list">
        <h2>Tests We Cover</h2>
        <ul>
          <li><Link to="/ielts">IELTS – Academic and General Training modules</Link></li>
          <li><Link to="/toefl">TOEFL – Internet-based test for English proficiency</Link></li>
          <li><Link to="/pte">PTE Academic – Computer-based test focusing on practical English skills</Link></li>
          <li><Link to="/duolingo">Duolingo English Test – Affordable, fast, and widely accepted by universities</Link></li>
          <li><Link to="/gre">GRE & GMAT– Required for master’s and PhD programs, measuring verbal, quantitative, and analytical writing</Link></li>
          {/* <li><Link to="/gmat">GMAT – Focused on business and management programs worldwide</Link></li> */}
          <li><Link to="/sat">SAT – For undergraduate admissions in the USA and other countries</Link></li>
          <li><Link to="/german">German Language Courses (A1 to C1) – For study and career opportunities in Germany</Link></li>
          <li><Link to="/french">French Language Courses (A1 to C1) – For study opportunities in France, Canada, Switzerland, and Africa</Link></li>
        </ul>
      </section>

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="test-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Comprehensive preparation under one roof.</li>
          <li>Flexible batches – weekday/weekend, online/offline options.</li>
          <li>Updated study material aligned with the latest test formats.</li>
          <li>Personalized mentoring to boost weak areas.</li>
          <li>Mock exams for real-time practice and confidence building.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="test-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: How long does test preparation usually take?</strong>
          <p>On average, 6–12 weeks depending on the exam and your current proficiency.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Do you provide online classes?</strong>
          <p>Yes, we offer both online and offline classes for maximum convenience.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Can you help me improve just in Speaking/Writing?</strong>
          <p>Absolutely. We offer focused training modules for individual skills.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="test-callout">
        <blockquote>
          “Maximize your chances of admission and scholarships with top test scores. Enroll in our expert-led test preparation programs today.”
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

export default TestPreparations;
