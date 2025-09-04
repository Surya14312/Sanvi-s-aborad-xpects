// src/pages/CareerCounselling.jsx
import React from "react";
import { Link } from "react-router-dom";

const CareerCounselling = () => {
  return (
    <div className="career-counselling-container" >      
      {/* ================= Career Counselling Intro ================= */}
      <section>
        <h1>Career Counselling</h1>
        <p>
          Choosing the right career path is one of the most crucial decisions in a student’s life. With countless courses, universities, and countries available, students often feel confused or overwhelmed. Our career counselling service is designed to provide expert guidance based on a student’s academic background, interests, and future aspirations.
        </p>
      </section>

      <hr  />

      {/* ================= Why Career Counselling is Important ================= */}
      <section>
        <h2>Why Career Counselling is Important</h2>
        <ul>
          <li>Helps avoid making uninformed or random choices.</li>
          <li>Provides clarity about suitable fields based on strengths and skills.</li>
          <li>Bridges the gap between student interests and career opportunities.</li>
          <li>Helps students understand future job markets and prospects.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section>
        <h2>How We Help</h2>
        <ul>
          <li>One-on-one sessions with expert counsellors.</li>
          <li>Assessment of academic records, personal interests, and career goals.</li>
          <li>Personality and aptitude mapping.</li>
          <li>Guidance on aligning career goals with the right courses and universities.</li>
          <li>Suggesting alternative career pathways in case of challenges.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Key Benefits ================= */}
      <section>
        <h2>Key Benefits for Students</h2>
        <ul>
          <li>Clarity in decision-making.</li>
          <li>Personalized guidance rather than generic suggestions.</li>
          <li>Awareness of emerging fields and global opportunities.</li>
          <li>Step-by-step roadmap for academics and career success.</li>
        </ul>
      </section>

      <hr  />

      {/* ================= FAQs ================= */}
      <section>
        <h2>FAQs</h2>
        <div >
          <strong>Q1: Do I need career counselling if I already know my course?</strong>
          <p>Yes, because career counselling not only confirms your decision but also helps align your goals with the right country, university, and opportunities.</p>
        </div>
        <div>
          <strong>Q2: Is career counselling only for students after 12th?</strong>
          <p>No, it’s equally valuable for graduates, postgraduates, and even working professionals planning higher studies abroad.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section>
        <blockquote >
          “Confused about your career path? Book a session with our expert counsellors today and take the first step towards a successful future.”
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

export default CareerCounselling;
