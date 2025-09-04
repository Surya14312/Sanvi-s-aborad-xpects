// src/pages/PostArrivalSupport.jsx
import React from "react";
import { Link } from "react-router-dom";

const PostArrivalSupport = () => {
  return (
    <div className="post-arrival-support-container">
      {/* ================= Intro ================= */}
      <section className="arrival-intro">
        <h1>Post-Arrival Support</h1>
        <p>
          Arriving in a new country can be overwhelming, especially for first-time international students. Our post-arrival support ensures students settle smoothly, adjust to the new environment, and quickly become comfortable with their academic and daily life.
        </p>
      </section>

      <hr />

      {/* ================= Why Post-Arrival Support Is Important ================= */}
      <section className="arrival-why-important">
        <h2>Why Post-Arrival Support Is Important</h2>
        <ul>
          <li>Helps students navigate a new city, culture, and university system.</li>
          <li>Reduces stress related to accommodation, banking, and transportation.</li>
          <li>Provides guidance on emergency contacts, local healthcare, and legal requirements.</li>
          <li>Ensures students can focus on academics and social integration.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="arrival-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Airport Pickup Assistance – Safe arrival at accommodation or university housing.</li>
          <li>Accommodation Guidance – Help with university dorms, hostels, or private rentals.</li>
          <li>Local Orientation – Introductions to transport systems, banks, SIM cards, grocery stores, and essential services.</li>
          <li>University Registration – Guidance on completing enrollment, ID cards, and course registration.</li>
          <li>Healthcare & Insurance – Assistance with medical registration, insurance claims, and local hospitals.</li>
          <li>Emergency Support – Access to 24/7 guidance in case of urgent situations.</li>
          <li>Cultural & Social Integration – Tips for adapting to local culture, norms, and student communities.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="arrival-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Quick and smooth settlement in the new country.</li>
          <li>Reduced anxiety and culture shock.</li>
          <li>Support in managing administrative and academic requirements.</li>
          <li>Faster adaptation to new academic and social environments.</li>
          <li>Peace of mind for parents knowing their child has ongoing support.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="arrival-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: How long does post-arrival support last?</strong>
          <p>Typically 1–3 months, or until the student feels comfortable navigating the new environment.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Does post-arrival support include help with academic issues?</strong>
          <p>Yes, we provide guidance on course registration, professors, and academic support resources.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Is emergency support available 24/7?</strong>
          <p>Yes, we provide round-the-clock guidance for urgent issues like medical emergencies or visa queries.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="arrival-callout">
        <blockquote>
          “Ensure a smooth start to your international journey! Our post-arrival support helps you settle, adapt, and thrive in your new country with confidence.”
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

export default PostArrivalSupport;
