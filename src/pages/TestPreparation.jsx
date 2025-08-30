// src/pages/TestPreparation.js
import React from "react";
import { Link } from "react-router-dom";

const TestPreparation = () => {
  return (
    <div className="test-prep-container">
      {/* Main Heading */}
      <h1 className="title">
        Test Preparations (IELTS, TOEFL, GRE/GMAT, PTE, SAT, Duolingo, German, French)
      </h1>

      {/* Intro */}
      <p className="intro">
        Standardized tests play a crucial role in university admissions abroad. Whether it’s proving your
        English proficiency or showcasing your aptitude for graduate-level study, the right preparation can
        make all the difference. We provide personalized coaching and guidance for all major tests required
        for studying abroad, ensuring you achieve your target scores with confidence.
      </p>

      {/* Why Test Preparation Matters */}
      <section>
        <h2>Why Test Preparation Matters</h2>
        <ul>
          <li>Most universities require proof of English proficiency (IELTS, TOEFL, PTE, Duolingo).</li>
          <li>Competitive programs (MBA, MS, PhD) often demand GRE/GMAT scores.</li>
          <li>Undergraduate admissions frequently look at SAT scores.</li>
          <li>
            Language proficiency (German, French) opens opportunities in non-English speaking countries and
            improves employability.
          </li>
          <li>A high score can also increase eligibility for scholarships.</li>
        </ul>
      </section>

      {/* How We Help */}
      <section>
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

      {/* Tests We Cover */}
     <h1 style={{ textAlign: 'center', fontSize: '2.5rem', color: '#333' }}>
  Examinations
</h1>

      <ul>
  <li>
    <Link to="/ielts" className="test-link">
      IELTS – Academic and General Training modules.
    </Link>
  </li>
  <li>
    <Link to="/toefl" className="test-link">
      TOEFL – Internet-based test for English proficiency.
    </Link>
  </li>
  <li>
    <Link to="/pte" className="test-link">
      PTE Academic – Computer-based test focusing on practical English skills.
    </Link>
  </li>
  <li>
    <Link to="/duolingo" className="test-link">
      Duolingo English Test – Affordable, fast, and widely accepted by universities.
    </Link>
  </li>
  <li>
    <Link to="/gre" className="test-link">
      GRE – Required for master’s and PhD programs, measuring verbal, quantitative, and analytical writing.
    </Link>
  </li>
  <li>
    <Link to="/gmat" className="test-link">
      GMAT – Focused on business and management programs worldwide.
    </Link>
  </li>
  <li>
    <Link to="/sat" className="test-link">
      SAT – For undergraduate admissions in the USA and other countries.
    </Link>
  </li>
  <li>
    <Link to="/german" className="test-link">
      German Language Courses (A1 to C1) – For study and career opportunities in Germany.
    </Link>
  </li>
  <li>
    <Link to="/french" className="test-link">
      French Language Courses (A1 to C1) – For study opportunities in France, Canada, Switzerland, and Africa.
    </Link>
  </li>
</ul>


      {/* Benefits for Students */}
      <section>
        <h2>Benefits for Students</h2>
        <ul>
          <li>Comprehensive preparation under one roof.</li>
          <li>Flexible batches – weekday/weekend, online/offline options.</li>
          <li>Updated study material aligned with the latest test formats.</li>
          <li>Personalized mentoring to boost weak areas.</li>
          <li>Mock exams for real-time practice and confidence building.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section>
        <h2>FAQs</h2>
        <p>
          <strong>Q1: How long does test preparation usually take?</strong>
          <br />
          On average, 6–12 weeks depending on the exam and your current proficiency.
        </p>
        <p>
          <strong>Q2: Do you provide online classes?</strong>
          <br />
          Yes, we offer both online and offline classes for maximum convenience.
        </p>
        <p>
          <strong>Q3: Can you help me improve just in Speaking/Writing?</strong>
          <br />
          Absolutely. We offer focused training modules for individual skills.
        </p>
      </section>

      {/* Closing Statement */}
      <blockquote className="closing">
        “Maximize your chances of admission and scholarships with top test scores. Enroll in our expert-led
        test preparation programs today.”
      </blockquote>
    </div>
  );
};

export default TestPreparation;
