// src/pages/FinancialAssistance.jsx
import React from "react";

const FinancialAssistance = () => {
  return (
    <div className="financial-assistance-container">
      {/* ================= Intro ================= */}
      <section className="financial-intro">
        <h1>Financial Assistance</h1>
        <p>
          Studying abroad requires careful financial planning. From tuition fees and living expenses to travel costs and insurance, managing finances can be challenging. Our financial assistance service helps students plan, secure funding, and manage costs efficiently, ensuring a smooth study abroad experience.
        </p>
      </section>

      <hr />

      {/* ================= Why Financial Assistance Is Important ================= */}
      <section className="financial-why-important">
        <h2>Why Financial Assistance Is Important</h2>
        <ul>
          <li>Helps students understand the total cost of studying abroad, including hidden expenses.</li>
          <li>Provides guidance on loans, scholarships, and sponsorship options.</li>
          <li>Ensures students have enough funds to meet visa requirements.</li>
          <li>Reduces financial stress, allowing students to focus on academics.</li>
        </ul>
      </section>

      <hr />

      {/* ================= How We Help ================= */}
      <section className="financial-how-help">
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

      <hr />

      {/* ================= Benefits for Students ================= */}
      <section className="financial-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Accurate understanding of the financial requirements.</li>
          <li>Access to multiple funding options.</li>
          <li>Reduced stress regarding tuition and living expenses.</li>
          <li>Assistance in preparing loan applications and required documentation.</li>
          <li>Better financial management during the course of study abroad.</li>
        </ul>
      </section>

      <hr />

      {/* ================= FAQs ================= */}
      <section className="financial-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: Can you help me get an education loan?</strong>
          <p>Yes, we guide you through the complete process — eligibility, documents, and repayment options.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Do you provide guidance for partial funding or scholarships?</strong>
          <p>Absolutely, we help identify scholarships and grants that match your profile.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Will you help in preparing financial documents for visa?</strong>
          <p>Yes, we ensure all bank statements, sponsor letters, and proof of funds meet embassy requirements.</p>
        </div>
      </section>

      <hr />

      {/* ================= Callout ================= */}
      <section className="financial-callout">
        <blockquote>
          “Worried about managing finances for studying abroad? Let us help you plan, fund, and manage your international education with expert financial guidance.”
        </blockquote>
      </section>
    </div>
  );
};

export default FinancialAssistance;
