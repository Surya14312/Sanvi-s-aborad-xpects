import React from "react";

const FinancialAssistance = () => {
  return (
    <div className="financial-container">
      {/* Hero Section */}
      <section className="financial-hero">
        <div className="financial-text">
          <h1>Financial Assistance for International Students</h1>
          <p>
            Explore various financial options to make your study abroad journey
            more affordable and stress-free. From scholarships to education
            loans, we are here to guide you every step of the way.
          </p>
        </div>
        <div className="financial-image">
          <img src="/assets/financial-aid.jpg" alt="Financial Support" />
        </div>
      </section>

      {/* Scholarships */}
      <section className="financial-section">
        <h2>Scholarships</h2>
        <p>
          Many universities and governments offer merit-based and need-based
          scholarships to international students. These can cover tuition,
          accommodation, travel, and living costs.
        </p>
        <ul>
          <li>Merit-Based Scholarships</li>
          <li>Country-Specific Scholarships</li>
          <li>Program-Specific Scholarships</li>
          <li>Private and NGO Scholarships</li>
        </ul>
      </section>

      {/* Part-Time Jobs */}
      <section className="financial-section">
        <h2>Part-Time Work Opportunities</h2>
        <p>
          International students can often work part-time during studies. This
          helps with expenses and builds experience.
        </p>
        <ul>
          <li>Up to 20 hours/week during term time</li>
          <li>Full-time during breaks</li>
          <li>On-campus and off-campus roles</li>
        </ul>
      </section>

      {/* Education Loans */}
      <section className="financial-section">
        <h2>Education Loans</h2>
        <p>
          We assist students in securing education loans from banks and
          financial institutions. We guide you with documentation and
          applications.
        </p>
        <ul>
          <li>Secured and Unsecured Loans</li>
          <li>Flexible Repayment Plans</li>
          <li>Loan Amount Based on Country & Course</li>
        </ul>
      </section>

      {/* Budgeting Tips */}
      <section className="financial-section">
        <h2>Budgeting Tips</h2>
        <p>Manage your money smartly during your studies abroad:</p>
        <ul>
          <li>Track monthly expenses with apps</li>
          <li>Cook your meals to save more</li>
          <li>Use public transport/student passes</li>
          <li>Use student discounts for shopping</li>
        </ul>
      </section>

      {/* Call to Action without Form */}
      <section className="financial-cta">
        <h2>Need Help with Financial Planning?</h2>
        <p>
          Our expert counselors will assist you with scholarships, loans, and
          work options tailored to your destination and goals.
        </p>
        <p>
          Please{" "}
          <a href="/contact" className="contact-link">
            contact us
          </a>{" "}
          to schedule a free consultation.
        </p>
      </section>
    </div>
  );
};

export default FinancialAssistance;
