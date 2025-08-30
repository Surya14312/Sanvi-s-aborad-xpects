



// src/pages/UniversitySelection.jsx
import React from "react";
import heroVideo from "./blogs/videos/university-hero.mp4"; // ✅ Place your video file inside src/assets/


const UniversitySelection = () => {
  return (
    <div className="university-selection-container">
      {/* ================= Hero Section ================= */}
      <div className="hero-section">
        <video
          className="hero-video"
          src={heroVideo}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-overlay">
          <h1>University Selection</h1>
          <p>
            Once the country is chosen, the next big step is selecting the right
            university. With thousands of universities worldwide, our expert
            guidance helps you shortlist and apply to institutions that match
            your career goals, academic profile, and budget.
          </p>
        </div>
      </div>

      {/* ================= Info Section ================= */}
      <div className="info-section">
        <h2>Why University Selection Matters</h2>
        <ul>
          <li>
            Universities differ in global ranking, reputation, faculty expertise,
            and research opportunities.
          </li>
          <li>
            Some institutions are better known for specific fields (e.g., MIT for
            Technology, INSEAD for Business, ETH Zurich for Engineering).
          </li>
          <li>
            Admission criteria vary widely; applying blindly may reduce chances
            of acceptance.
          </li>
          <li>
            The university’s network, alumni, and industry partnerships strongly
            impact future career prospects.
          </li>
        </ul>

        <h3>How We Help</h3>
        <ul>
          <li>
            Shortlisting universities based on ranking, affordability, location,
            and student preferences.
          </li>
          <li>
            Providing detailed information about entry requirements and admission
            deadlines.
          </li>
          <li>
            Matching student profiles (grades, test scores, extracurriculars)
            with suitable institutions.
          </li>
          <li>
            Guiding on safety schools, match schools, and dream schools for a
            balanced application list.
          </li>
          <li>
            Reviewing application guidelines to ensure compliance with each
            university’s requirements.
          </li>
        </ul>

        <h3>Key Benefits for Students</h3>
        <ul>
          <li>Personalized university shortlist with the best-fit options.</li>
          <li>
            Higher chances of admission by targeting universities suited to the
            student’s profile.
          </li>
          <li>
            Access to insider insights about top universities worldwide.
          </li>
          <li>
            Saves time by avoiding irrelevant or low-quality options.
          </li>
        </ul>

        <h3>FAQs</h3>
        <p>
          <strong>Q1: How many universities should I apply to?</strong>
          <br />
          We recommend applying to 5–8 universities, including a mix of dream,
          match, and safe options.
        </p>
        <p>
          <strong>Q2: Do you only suggest top-ranked universities?</strong>
          <br />
          No. We focus on the best-fit universities, balancing rankings,
          affordability, and career outcomes.
        </p>
        <p>
          <strong>Q3: Can you help if I already have a university in mind?</strong>
          <br />
          Yes, we provide support even if you’ve pre-decided, ensuring your
          application stands out.
        </p>

        <blockquote>
          “Confused between multiple universities? Our expert advisors will help
          you select the right institution and maximize your admission chances.”
        </blockquote>
      </div>
    </div>
  );
};

export default UniversitySelection;
