// src/pages/PreDepartureOrientation.jsx
import React from "react";
import { Link } from "react-router-dom";

const PreDepartureOrientation = () => {
  return (
    <div className="pre-departure-orientation-container">
      {/* ================= Intro ================= */}
      <section className="orientation-intro">
        <h1>Pre-Departure Orientation</h1>
        <p>
          Studying abroad is exciting, but it comes with challenges such as cultural differences, academic expectations, and daily life adjustments. Our pre-departure orientation prepares students for their new environment, ensuring they are confident, informed, and ready to start their international education journey.
        </p>
      </section>

      <hr />

      {/* ================= Why Orientation Is Important ================= */}
      <section className="orientation-why-important">
        <h2>Why Pre-Departure Orientation Is Important</h2>
        <ul>
          <li>Helps students adapt to a new academic and cultural environment.</li>
          <li>Reduces anxiety related to travel, accommodation, and university life.</li>
          <li>Introduces important aspects like student rights, local laws, and safety measures.</li>
          <li>Prepares students for practical challenges like banking, transportation, and healthcare.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="orientation-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Country-Specific Guidance – Overview of culture, lifestyle, climate, and local customs.</li>
          <li>Academic Expectations – Insight into the teaching style, assessment methods, and grading systems.</li>
          <li>Health & Safety – Guidance on health insurance, vaccinations, and emergency protocols.</li>
          <li>Financial Awareness – Tips on budgeting, currency exchange, and managing expenses abroad.</li>
          <li>Travel & Accommodation Tips – Guidance on airports, local transport, and housing arrangements.</li>
          <li>Student Support Systems – Introducing support networks, student communities, and counselling resources.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="orientation-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Smooth transition to the new country and university.</li>
          <li>Enhanced confidence in handling academic and social challenges.</li>
          <li>Awareness of safety, healthcare, and emergency procedures.</li>
          <li>Practical tips for day-to-day life abroad.</li>
          <li>Reduced culture shock and stress during the initial phase of study.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="orientation-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: Is pre-departure orientation mandatory?</strong>
          <p>Not legally, but it is highly recommended to ensure a smooth transition and avoid initial difficulties.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: How long is the orientation session?</strong>
          <p>Typically 1–2 days, depending on the country and program, with follow-up support as needed.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Does it cover visa and travel guidance?</strong>
          <p>Yes, it complements visa guidance and includes travel tips, local laws, and university protocols.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="orientation-callout">
        <blockquote>
          “Start your international education journey confidently! Join our pre-departure orientation to prepare academically, socially, and culturally for life abroad.”
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

export default PreDepartureOrientation;
