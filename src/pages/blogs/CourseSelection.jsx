// src/pages/CourseSelection.jsx
import React from "react";


const CourseSelection = () => {
  return (
    <div className="course-selection-container">
      {/* ================= Course Selection Intro ================= */}
      <section className="course-intro">
        <h1>Course Selection</h1>
        <p>
          With thousands of courses offered worldwide, it can be overwhelming for students to decide which one best suits their academic background and future ambitions. Our course selection service helps students identify programs that align with their strengths, interests, and long-term career goals.
        </p>
      </section>

      <hr />

      {/* ================= Why Course Selection is Important ================= */}
      <section className="course-why-important">
        <h2>Why Course Selection is Important</h2>
        <ul>
          <li>Avoids the risk of enrolling in courses with low career prospects.</li>
          <li>Ensures that the student’s chosen program matches their academic eligibility.</li>
          <li>Helps students explore interdisciplinary and emerging fields.</li>
          <li>Saves time and money by avoiding course switches later.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="course-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Detailed evaluation of the student’s academic profile and career aspirations.</li>
          <li>Suggesting undergraduate, postgraduate, diploma, or certification programs as per the student’s needs.</li>
          <li>Highlighting trending and high-demand courses across countries.</li>
          <li>Providing insights on STEM, Management, Law, Arts, Medicine, and niche courses.</li>
          <li>Offering comparisons of similar programs in different universities/countries.</li>
        </ul>
      </section>

      <hr />

      {/* ================= Key Benefits ================= */}
      <section className="course-benefits">
        <h2>Key Benefits for Students</h2>
        <ul>
          <li>Confidence in choosing the right path.</li>
          <li>Knowledge of future career opportunities for each course.</li>
          <li>Customized course recommendations instead of generic suggestions.</li>
          <li>Access to global options rather than being restricted to one region.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="course-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: Can I change my course later if I am not satisfied?</strong>
          <p>Yes, but it can be costly and time-consuming. Our service helps you avoid such confusion by choosing the right course from the beginning.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Do you recommend only popular courses?</strong>
          <p>No, we recommend courses based on your profile. Sometimes niche programs may provide better career opportunities.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="course-callout">
        <blockquote>
          “Not sure which course to choose? Our expert counsellors will guide you towards programs that fit your dreams and secure your future.”
        </blockquote>
      </section>
    </div>
  );
};

export default CourseSelection;
