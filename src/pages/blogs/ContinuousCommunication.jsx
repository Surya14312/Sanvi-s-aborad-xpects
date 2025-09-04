// src/pages/ContinuousCommunication.jsx
import React from "react";
import { Link } from "react-router-dom";

const ContinuousCommunication = () => {
  return (
    <div className="continuous-communication-container">
      {/* ================= Intro ================= */}
      <section className="communication-intro">
        <h1>Continuous Communication</h1>
        <p>
          Studying abroad is a journey that requires ongoing guidance and support. Our continuous communication service ensures that students and parents are always informed, updated, and connected with our consultancy from the application stage to post-arrival and beyond.
        </p>
      </section>

      <hr />

      {/* ================= Why Continuous Communication Is Important ================= */}
      <section className="communication-why-important">
        <h2>Why Continuous Communication Is Important</h2>
        <ul>
          <li>Students may have questions at any stage of the application or study journey.</li>
          <li>Visa updates, university notifications, and travel alerts require timely communication.</li>
          <li>Continuous guidance prevents confusion and reduces stress.</li>
          <li>Parents get reassurance about their child’s progress and safety abroad.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="communication-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Regular Updates – Keep students informed about application status, visa processing, and scholarship results.</li>
          <li>Dedicated Counsellor – Each student gets a point of contact for queries and guidance.</li>
          <li>Prompt Responses – Quick resolution of doubts regarding universities, courses, or living abroad.</li>
          <li>Follow-Ups – Monitoring post-arrival adaptation, academics, and wellbeing.</li>
          <li>Multi-Channel Communication – Support via email, phone, WhatsApp, or video calls.</li>
          <li>Feedback & Guidance – Continuous feedback on documents, test preparations, and university applications.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="communication-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Peace of mind knowing help is always available.</li>
          <li>Timely updates on deadlines, requirements, and changes.</li>
          <li>Personalized support for every stage of the journey.</li>
          <li>Stronger relationship with the consultancy for long-term guidance.</li>
          <li>Enhanced confidence in decision-making and problem-solving abroad.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="communication-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: How long does continuous communication last?</strong>
          <p>We provide support from the moment you start your journey with us until you are comfortably settled abroad — and beyond if needed.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: How can I contact my counsellor?</strong>
          <p>You can reach your counsellor through multiple channels — email, phone, WhatsApp, or video calls.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Does this service include post-arrival issues?</strong>
          <p>Yes, any queries related to academics, accommodation, travel, or cultural adjustment are included.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="communication-callout">
        <blockquote>
          “Stay informed, supported, and confident throughout your international education journey. Connect with us anytime — we are with you every step of the way!”
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

export default ContinuousCommunication;
