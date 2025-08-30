// src/pages/PreDepartureOrientation.js
import React from "react";

const PreDepartureOrientation = () => {
  return (
    <div className="orientation-container">
      {/* Hero Section */}
     <section className="orientation-hero">
  <div className="orientation-hero-content">
    <div className="orientation-text">
      <h1>Pre-Departure Orientation</h1>
      <p>
        Studying abroad is exciting, but it comes with challenges such as cultural differences, academic expectations, and daily life adjustments. 
        Our pre-departure orientation prepares students for their new environment, ensuring they are confident, informed, and ready to start their international education journey.
      </p>
    </div>
    <div className="orientation-image">
      <img src="/assets/pre-departure.jpg" alt="Pre-Departure Orientation" />
    </div>
  </div>
</section>


      {/* Why Orientation Is Important */}
      <section className="orientation-section">
        <h2>Why Pre-Departure Orientation Is Important</h2>
        <ul>
          <li>Helps students adapt to a new academic and cultural environment.</li>
          <li>Reduces anxiety related to travel, accommodation, and university life.</li>
          <li>Introduces important aspects like student rights, local laws, and safety measures.</li>
          <li>Prepares students for practical challenges like banking, transportation, and healthcare.</li>
        </ul>
      </section>

      {/* How We Help */}
      <section className="orientation-section">
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

      {/* Benefits for Students */}
      <section className="orientation-section">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Smooth transition to the new country and university.</li>
          <li>Enhanced confidence in handling academic and social challenges.</li>
          <li>Awareness of safety, healthcare, and emergency procedures.</li>
          <li>Practical tips for day-to-day life abroad.</li>
          <li>Reduced culture shock and stress during the initial phase of study.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="orientation-section">
        <h2>FAQs</h2>
        <p><strong>Q1:</strong> Is pre-departure orientation mandatory?<br />
          Not legally, but it is highly recommended to ensure a smooth transition and avoid initial difficulties.</p>
        <p><strong>Q2:</strong> How long is the orientation session?<br />
          Typically 1–2 days, depending on the country and program, with follow-up support as needed.</p>
        <p><strong>Q3:</strong> Does it cover visa and travel guidance?<br />
          Yes, it complements visa guidance and includes travel tips, local laws, and university protocols.</p>
      </section>

      {/* Conclusion / CTA */}
      <section className="orientation-cta">
        <p>
          “Start your international education journey confidently! Join our pre-departure orientation to prepare academically, socially, and culturally for life abroad.”
        </p>
      </section>
    </div>
  );
};

export default PreDepartureOrientation;
