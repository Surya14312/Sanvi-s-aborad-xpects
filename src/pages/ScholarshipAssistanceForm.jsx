// src/pages/ScholarshipAssistanceForm.js
import React from "react";
import { useLocation } from "react-router-dom";


const ScholarshipAssistanceForm = () => {
  const { state } = useLocation();
  const selectedCountry = state?.country || "";

  return (
    <div className="scholarship-container">
   <section className="scholarship-hero">
  <div className="scholarship-hero-image">
    <img 
      src="/assets/scholarship-hero.jpg"  // <-- Place your hero image in the public/assets folder
      alt="Scholarship Assistance" 
    />
    <div className="scholarship-hero-overlay">
      <h2 className="scholarship-title">🎓 Scholarship Assistance</h2>
      <p className="scholarship-intro">
        Studying abroad can be expensive, but scholarships can significantly reduce financial burden. Our
        team provides end-to-end support in identifying, applying, and securing the right scholarships for your
        chosen program and destination. With our guidance, you increase your chances of receiving financial aid
        and making your dream education more affordable.
      </p>
    </div>
  </div>
</section>


      <section>
        <h3>Why Scholarship Assistance Matters</h3>
        <ul>
          <li>Universities abroad offer merit-based, need-based, and country-specific scholarships.</li>
          <li>Many students miss opportunities simply because they are unaware of available options.</li>
          <li>Early and correct application increases your chances of securing funding.</li>
          <li>Scholarships not only ease financial stress but also strengthen your profile.</li>
        </ul>
      </section>

      <section>
        <h3>How We Help</h3>
        <ul>
          <li>Identify suitable scholarships based on your academic profile, chosen country, and program.</li>
          <li>Guide you on eligibility requirements and deadlines.</li>
          <li>Assist in preparing strong application documents (SOPs, LORs, essays).</li>
          <li>Provide tips for interview rounds, if required.</li>
          <li>Ensure applications are submitted correctly and on time.</li>
        </ul>
      </section>

      <section>
        <h3>Types of Scholarships We Assist With</h3>
        <ul>
          <li>University-funded scholarships – offered directly by the institution.</li>
          <li>Government-funded scholarships – like Erasmus+ (EU), Chevening (UK), DAAD (Germany), Fulbright (USA), etc.</li>
          <li>Private/NGO scholarships – funded by organizations and foundations.</li>
          <li>Country-specific scholarships for Indians – like Commonwealth Scholarships, Inlaks, Tata Trusts, and more.</li>
        </ul>
      </section>

      <section>
        <h3>Benefits for Students</h3>
        <ul>
          <li>Access to a wide database of international scholarships.</li>
          <li>Personalized matching with opportunities relevant to your field.</li>
          <li>Professional editing and drafting support for essays and statements.</li>
          <li>Increased chances of securing partial or full funding.</li>
          <li>Reduced overall cost of studying abroad.</li>
        </ul>
      </section>

      <section>
        <h3>FAQs</h3>
        <p><strong>Q1:</strong> Can I apply for multiple scholarships at once?<br />Yes, you can apply to multiple scholarships if you meet eligibility criteria.</p>
        <p><strong>Q2:</strong> Are there scholarships available for average students?<br />Absolutely. Apart from merit-based, there are scholarships for financial need, specific regions, and particular fields of study.</p>
        <p><strong>Q3:</strong> How much funding can I expect?<br />This depends on the scholarship — some cover tuition fees, others include living costs, travel, or full expenses.</p>
      </section>

      <p className="selected-country">
        Selected Country: <strong>{selectedCountry || "Not selected"}</strong>
      </p>

      <p className="scholarship-cta">
        “Don’t let finances stop you from achieving your international education dream. Explore your scholarship opportunities with us today.”
      </p>
    </div>
  );
};

export default ScholarshipAssistanceForm;
