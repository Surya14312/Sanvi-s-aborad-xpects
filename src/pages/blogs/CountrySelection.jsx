// src/pages/CountrySelection.jsx
import React from "react";


const CountrySelection = () => {
  return (
    <div className="country-selection-container">
      {/* ================= Intro ================= */}
      <section className="country-intro">
        <h1>Country Selection</h1>
        <p>
          Choosing the right study-abroad destination is just as important as selecting the right course. Each country has its own education system, cost of living, post-study opportunities, and lifestyle. Our country selection service ensures students make an informed decision that matches both their academic goals and personal preferences.
        </p>
      </section>

      <hr />

      {/* ================= Why Country Selection is Important ================= */}
      <section className="country-why-important">
        <h2>Why Country Selection is Important</h2>
        <ul>
          <li>Different countries specialize in different fields of study (e.g., Germany for Engineering, UK for Business, Switzerland for Hospitality).</li>
          <li>Tuition fees, scholarships, and living costs vary widely.</li>
          <li>Language requirements and teaching styles differ from country to country.</li>
          <li>Post-study work opportunities and immigration policies influence long-term career paths.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="country-how-help">
        <h2>How We Help</h2>
        <ul>
          <li>Detailed analysis of countries based on the student’s budget, field of interest, and lifestyle preferences.</li>
          <li>Explaining visa rules, work rights, and residency options for each country.</li>
          <li>Sharing insights on the cultural environment and safety for international students.</li>
          <li>Providing data on employment trends and industries in demand in different regions.</li>
          <li>Offering a realistic comparison between multiple destinations (Europe vs. North America vs. Asia).</li>
        </ul>
      </section>

      <hr />

      {/* ================= Key Benefits ================= */}
      <section className="country-benefits">
        <h2>Key Benefits for Students</h2>
        <ul>
          <li>Confidence in selecting a country that aligns with personal and professional goals.</li>
          <li>Access to updated information on top study-abroad destinations.</li>
          <li>Balanced recommendations (cost, quality, lifestyle, opportunities).</li>
          <li>Saves time and eliminates confusion between popular destinations.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="country-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: Can I apply to more than one country at the same time?</strong>
          <p>Yes, applying to multiple destinations increases your chances, but our team helps narrow down options to the most suitable ones.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Do you suggest only English-speaking countries?</strong>
          <p>No, we also recommend non-English-speaking countries that offer English-taught programs (e.g., Germany, France, Netherlands).</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="country-callout">
        <blockquote>
          “Not sure whether to choose the UK, Canada, Germany, or another destination? Let us help you compare and finalize the best country for your academic success.”
        </blockquote>
      </section>
    </div>
  );
};

export default CountrySelection;
