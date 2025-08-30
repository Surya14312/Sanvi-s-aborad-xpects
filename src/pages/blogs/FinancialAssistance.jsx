// src/pages/FinancialAssistance.js
import React from "react";

const FinancialAssistance = () => {
  return (
    <div className="financial-container">
      {/* Hero Section */}
      <section className="financial-hero">
        <div className="financial-text">
          <h1>Financial Assistance for International Students</h1>
          <p>
            Studying abroad requires careful financial planning. From tuition
            fees and living expenses to travel costs and insurance, managing
            finances can be challenging. Our financial assistance service helps
            students plan, secure funding, and manage costs efficiently,
            ensuring a smooth study abroad experience.
          </p>
        </div>
        <div className="financial-image">
          <img src="/assets/financial-aid.jpg" alt="Financial Support" />
        </div>
      </section>

      {/* Why Financial Assistance Is Important */}
      <section className="financial-section">
        <h2>Why Financial Assistance Is Important</h2>
        <ul>
          <li>Helps students understand the total cost of studying abroad, including hidden expenses.</li>
          <li>Provides guidance on loans, scholarships, and sponsorship options.</li>
          <li>Ensures students have enough funds to meet visa requirements.</li>
          <li>Reduces financial stress, allowing students to focus on academics.</li>
        </ul>
      </section>

      {/* How We Help */}
      <section className="financial-section">
        <h2>How We Help</h2>
        <ul>
          <li>Budget Planning – Estimate tuition, living costs, travel, insurance, and miscellaneous expenses.</li>
          <li>Education Loans – Guidance on bank loans, eligibility, documentation, and repayment options.</li>
          <li>Scholarship Guidance – Assistance in identifying and applying for scholarships and grants.</li>
          <li>Sponsorship Assistance – Support in preparing sponsor letters and financial documents.</li>
          <li>Currency & Payment Guidance – Advice on international payment methods and managing currency exchange.</li>
          <li>Financial Document Preparation – Help in preparing documents required for university admission and visa.</li>
        </ul>
      </section>

      {/* Benefits for Students */}
      <section className="financial-section">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Accurate understanding of the financial requirements.</li>
          <li>Access to multiple funding options.</li>
          <li>Reduced stress regarding tuition and living expenses.</li>
          <li>Assistance in preparing loan applications and required documentation.</li>
          <li>Better financial management during the course of study abroad.</li>
        </ul>
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

      {/* FAQs */}
      <section className="financial-section">
        <h2>FAQs</h2>
        <p><strong>Q1:</strong> Can you help me get an education loan?<br />
           Yes, we guide you through the complete process — eligibility, documents, and repayment options.</p>
        <p><strong>Q2:</strong> Do you provide guidance for partial funding or scholarships?<br />
           Absolutely, we help identify scholarships and grants that match your profile.</p>
        <p><strong>Q3:</strong> Will you help in preparing financial documents for visa?<br />
           Yes, we ensure all bank statements, sponsor letters, and proof of funds meet embassy requirements.</p>
      </section>

      {/* Call to Action */}
      <section className="financial-cta">
        <h2>Worried about managing finances for studying abroad?</h2>
        <p>
          Let us help you plan, fund, and manage your international education with expert financial guidance.
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
