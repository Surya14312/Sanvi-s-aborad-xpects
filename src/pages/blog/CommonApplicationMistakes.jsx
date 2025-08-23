// src/pages/CommonApplicationMistakes.jsx
import React from "react";

const CommonApplicationMistakes = () => {
  return (
    <div className="blog-container">
      <h1>Common Mistakes in University Applications and How to Avoid Them</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Applying to universities abroad is competitive, and even small mistakes can reduce your chances
          of admission. Awareness of common pitfalls helps students submit strong, error-free applications
          and stand out in the selection process. This guide highlights the most frequent mistakes and
          actionable tips to avoid them.
        </p>
      </section>

      {/* Summary Table for Responsive Mobile View */}
      <section>
        <h2>Common Mistakes Summary</h2>
        <table className="mistakes-table">
          <thead>
            <tr>
              <th>Mistake</th>
              <th>Description</th>
              <th>How to Avoid</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Mistake">Missing Deadlines</td>
              <td data-label="Description">Submitting applications late or missing scholarship deadlines</td>
              <td data-label="How to Avoid">Create a timeline, start 12–18 months in advance, set reminders</td>
            </tr>
            <tr>
              <td data-label="Mistake">Ignoring Eligibility Requirements</td>
              <td data-label="Description">Applying without meeting academic, language, or course prerequisites</td>
              <td data-label="How to Avoid">Review grades, test scores, course prerequisites, and scholarship eligibility</td>
            </tr>
            <tr>
              <td data-label="Mistake">Weak or Generic SOP</td>
              <td data-label="Description">Unstructured or generic statement of purpose</td>
              <td data-label="How to Avoid">Tailor SOP to each university, highlight achievements, proofread</td>
            </tr>
            <tr>
              <td data-label="Mistake">Poor Recommendation Letters</td>
              <td data-label="Description">LORs that lack detail or come from inappropriate references</td>
              <td data-label="How to Avoid">Choose familiar referees, highlight strengths, provide guidelines</td>
            </tr>
            <tr>
              <td data-label="Mistake">Incomplete Documents</td>
              <td data-label="Description">Missing transcripts, test scores, or incorrect formats</td>
              <td data-label="How to Avoid">Double-check documents, keep backups, follow university instructions</td>
            </tr>
            <tr>
              <td data-label="Mistake">Overlooking Financial Planning</td>
              <td data-label="Description">Not budgeting for tuition, living costs, or visa fees</td>
              <td data-label="How to Avoid">Prepare a detailed budget, research costs, and plan scholarships</td>
            </tr>
            <tr>
              <td data-label="Mistake">Applying to Too Few or Too Many Universities</td>
              <td data-label="Description">Imbalanced application strategy</td>
              <td data-label="How to Avoid">Apply to a balanced list: safety, target, and reach universities</td>
            </tr>
            <tr>
              <td data-label="Mistake">Ignoring Visa Requirements</td>
              <td data-label="Description">Late or incomplete visa application</td>
              <td data-label="How to Avoid">Research visa early, attend consultancy guidance, submit on time</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>FAQs</h2>
        <ul>
          <li><strong>Q1:</strong> What is the most common mistake in university applications?<br/>
              <strong>A:</strong> Missing deadlines, not meeting eligibility criteria, and submitting weak SOPs are the most common mistakes.</li>
          <li><strong>Q2:</strong> Can a consultancy help avoid application errors?<br/>
              <strong>A:</strong> Yes, consultants review applications, guide SOPs and LORs, and ensure all documents meet university standards.</li>
          <li><strong>Q3:</strong> How early should I start preparing my documents?<br/>
              <strong>A:</strong> Start 12–18 months before the intended course start date to avoid errors and delays.</li>
          <li><strong>Q4:</strong> Are financial mistakes common in applications?<br/>
              <strong>A:</strong> Yes, not planning for tuition, living costs, and visa fees can jeopardize your study abroad plans.</li>
        </ul>
      </section>

      <section>
        <h2>Consultancy Angle</h2>
        <p>Our consultancy helps students:</p>
        <ul>
          <li>Review and refine applications to avoid errors</li>
          <li>Guide in SOP writing, LORs, and document preparation</li>
          <li>Assist with financial planning, scholarships, and visa documentation</li>
          <li>Provide pre-departure and admission support for a smooth journey</li>
        </ul>
        <p><strong>“Avoid costly mistakes in your study abroad applications. Let our experts guide you through each step to ensure a strong, error-free application. Book your free consultation today!”</strong></p>
      </section>
    </div>
  );
};

export default CommonApplicationMistakes;
