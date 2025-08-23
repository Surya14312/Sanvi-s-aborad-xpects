// src/pages/ManageFinances.jsx
import React from "react";

const ManageFinances = () => {
  return (
    <div className="blog-container">
      <h1>Managing Finances as an International Student</h1>

      <section>
        <h2>Introduction</h2>
        <p>
          Studying abroad is an exciting experience, but managing finances effectively is crucial 
          for a stress-free academic journey. International students need to plan for tuition, living 
          expenses, travel, and emergencies while making the most of scholarships and part-time work 
          opportunities. This guide provides actionable strategies to manage money wisely abroad.
        </p>
      </section>

      <section>
        <h2>Estimate Your Total Expenses</h2>
        <p>Before departure, calculate all potential costs:</p>
        <ul>
          <li>Tuition Fees – Annual or semester-wise</li>
          <li>Accommodation – On-campus, shared, or private apartments</li>
          <li>Living Expenses – Food, transportation, utilities, and leisure</li>
          <li>Books & Supplies – Textbooks, stationery, equipment</li>
          <li>Healthcare & Insurance – Mandatory health coverage or medical insurance</li>
          <li>Travel & Emergencies – Flights, local travel, and unforeseen costs</li>
        </ul>
        <p><strong>Tip:</strong> Use a spreadsheet to track estimated vs. actual expenses.</p>
      </section>

      <section>
        <h2>Create a Monthly Budget</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Approx. % of Monthly Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Category">Accommodation</td>
              <td data-label="Approx. % of Monthly Budget">30–40%</td>
            </tr>
            <tr>
              <td data-label="Category">Food & Groceries</td>
              <td data-label="Approx. % of Monthly Budget">20–25%</td>
            </tr>
            <tr>
              <td data-label="Category">Transportation</td>
              <td data-label="Approx. % of Monthly Budget">10–15%</td>
            </tr>
            <tr>
              <td data-label="Category">Study Materials</td>
              <td data-label="Approx. % of Monthly Budget">5–10%</td>
            </tr>
            <tr>
              <td data-label="Category">Leisure & Social Life</td>
              <td data-label="Approx. % of Monthly Budget">5–10%</td>
            </tr>
            <tr>
              <td data-label="Category">Savings / Emergencies</td>
              <td data-label="Approx. % of Monthly Budget">10–15%</td>
            </tr>
          </tbody>
        </table>
        <p><strong>Tip:</strong> Always maintain an emergency fund for unexpected expenses.</p>
      </section>

      <section>
        <h2>Reduce Living Costs</h2>
        <ul>
          <li><strong>Accommodation:</strong> Share apartments or choose dorms for cost efficiency.</li>
          <li><strong>Food:</strong> Cook at home, buy from local markets, and use student discounts.</li>
          <li><strong>Transportation:</strong> Use public transport, bicycles, or student passes.</li>
        </ul>
      </section>

      <section>
        <h2>Work Part-Time & Internships</h2>
        <ul>
          <li>Most countries allow part-time work (usually 20 hours/week).</li>
          <li>Look for internships related to your field to gain experience and supplement income.</li>
          <li>Balance work and studies to avoid stress and academic pressure.</li>
        </ul>
      </section>

      <section>
        <h2>Scholarships & Financial Aid</h2>
        <ul>
          <li>Apply for merit-based, need-based, or country-specific scholarships.</li>
          <li>Some scholarships cover tuition and living expenses, easing financial burden.</li>
          <li>Consultancies can identify scholarships matching your profile and guide applications.</li>
        </ul>
      </section>

      <section>
        <h2>Track & Control Spending</h2>
        <ul>
          <li>Use budgeting apps, spreadsheets, or finance trackers.</li>
          <li>Set weekly/monthly limits and review spending regularly.</li>
          <li>Avoid unnecessary expenses and prioritize essential costs.</li>
        </ul>
      </section>

      <section>
        <h2>Bank Accounts & Currency Management</h2>
        <ul>
          <li>Open a local bank account for easier transactions and reduced fees.</li>
          <li>Use international cards or apps for secure and convenient payments.</li>
          <li>Monitor currency fluctuations if sending money from home.</li>
        </ul>
      </section>

      <section>
        <h2>Emergency Fund & Insurance</h2>
        <ul>
          <li>Keep 3–6 months of living expenses in an accessible account.</li>
          <li>Ensure health and travel insurance covers emergencies, accidents, or illnesses.</li>
          <li>Some universities require mandatory insurance for enrollment.</li>
        </ul>
      </section>

      <section>
        <h2>FAQs</h2>
        <ul>
          <li><strong>Q1:</strong> How much should I budget monthly as an international student?<br/>
              <strong>A:</strong> Costs vary by country, but typically $500–$1,500/month, including accommodation, food, and transportation.</li>
          <li><strong>Q2:</strong> Can I study abroad on a budget?<br/>
              <strong>A:</strong> Yes, with careful planning, scholarships, and part-time work, students can manage expenses effectively.</li>
          <li><strong>Q3:</strong> Are scholarships enough to cover living costs?<br/>
              <strong>A:</strong> Some scholarships cover both tuition and living expenses, but having a backup budget is recommended.</li>
          <li><strong>Q4:</strong> Can a consultancy help with financial planning?<br/>
              <strong>A:</strong> Yes, consultants guide in budgeting, scholarship applications, and cost-effective living strategies.</li>
        </ul>
      </section>

      <section>
        <h2>Consultancy Angle</h2>
        <p>Our consultancy helps students:</p>
        <ul>
          <li>Estimate realistic expenses for tuition and living abroad</li>
          <li>Identify scholarships, grants, and financial aid</li>
          <li>Advise on part-time work, banking, and budgeting strategies</li>
          <li>Provide pre-departure financial guidance for a smooth experience</li>
        </ul>
        <p>
          <strong>“Want to manage your finances efficiently while studying abroad? Our experts help you plan budgets, identify scholarships, and save money for a stress-free international education journey. Book your free consultation today!”</strong>
        </p>
      </section>
    </div>
  );
};

export default ManageFinances;
