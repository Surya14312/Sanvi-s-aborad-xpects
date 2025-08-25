// src/pages/ManageFinances.jsx
import React from "react";

const ManageFinances = () => {
  // --- Reusable Styles ---
  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
    lineHeight: "1.7",
    backgroundColor: "#f9fafb",
  };

  const headingPrimary = {
    fontSize: "2.2rem",
    fontWeight: "700",
    color: "#1a365d",
    textAlign: "center",
    marginBottom: "30px",
  };

  const sectionStyle = {
    backgroundColor: "#fff",
    borderRadius: "12px",
    padding: "25px 30px",
    marginBottom: "25px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
  };

  const headingSecondary = {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#2c5282",
    marginBottom: "15px",
  };

  const paragraph = {
    fontSize: "1rem",
    marginBottom: "15px",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginBottom: "15px",
  };

  const listItem = {
    marginBottom: "10px",
    fontSize: "1rem",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    margin: "20px 0",
    fontSize: "0.95rem",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "8px",
    overflow: "hidden",
  };

  const thStyle = {
    backgroundColor: "#2b6cb0",
    color: "#fff",
    padding: "12px 15px",
    textAlign: "left",
  };

  const tdStyle = {
    border: "1px solid #ddd",
    padding: "12px 15px",
  };

  const ctaText = {
    fontWeight: "600",
    fontSize: "1.05rem",
    color: "#1a202c",
    marginTop: "15px",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingPrimary}>Managing Finances as an International Student</h1>

      {/* Introduction */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Introduction</h2>
        <p style={paragraph}>
          Studying abroad is an exciting experience, but managing finances effectively is crucial
          for a stress-free academic journey. International students need to plan for tuition,
          living expenses, travel, and emergencies while making the most of scholarships and
          part-time work opportunities. This guide provides actionable strategies to manage money
          wisely abroad.
        </p>
      </section>

      {/* Estimate Expenses */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Estimate Your Total Expenses</h2>
        <p style={paragraph}>Before departure, calculate all potential costs:</p>
        <ul style={listStyle}>
          <li style={listItem}>Tuition Fees – Annual or semester-wise</li>
          <li style={listItem}>Accommodation – On-campus, shared, or private apartments</li>
          <li style={listItem}>Living Expenses – Food, transportation, utilities, and leisure</li>
          <li style={listItem}>Books & Supplies – Textbooks, stationery, equipment</li>
          <li style={listItem}>Healthcare & Insurance – Mandatory health coverage or medical insurance</li>
          <li style={listItem}>Travel & Emergencies – Flights, local travel, and unforeseen costs</li>
        </ul>
        <p style={paragraph}><strong>Tip:</strong> Use a spreadsheet to track estimated vs. actual expenses.</p>
      </section>

      {/* Budget Table */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Create a Monthly Budget</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>Approx. % of Monthly Budget</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Accommodation</td>
              <td style={tdStyle}>30–40%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Food & Groceries</td>
              <td style={tdStyle}>20–25%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Transportation</td>
              <td style={tdStyle}>10–15%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Study Materials</td>
              <td style={tdStyle}>5–10%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Leisure & Social Life</td>
              <td style={tdStyle}>5–10%</td>
            </tr>
            <tr>
              <td style={tdStyle}>Savings / Emergencies</td>
              <td style={tdStyle}>10–15%</td>
            </tr>
          </tbody>
        </table>
        <p style={paragraph}><strong>Tip:</strong> Always maintain an emergency fund for unexpected expenses.</p>
      </section>

      {/* Other Sections */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Reduce Living Costs</h2>
        <ul style={listStyle}>
          <li style={listItem}><strong>Accommodation:</strong> Share apartments or choose dorms for cost efficiency.</li>
          <li style={listItem}><strong>Food:</strong> Cook at home, buy from local markets, and use student discounts.</li>
          <li style={listItem}><strong>Transportation:</strong> Use public transport, bicycles, or student passes.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Work Part-Time & Internships</h2>
        <ul style={listStyle}>
          <li style={listItem}>Most countries allow part-time work (usually 20 hours/week).</li>
          <li style={listItem}>Look for internships related to your field to gain experience and supplement income.</li>
          <li style={listItem}>Balance work and studies to avoid stress and academic pressure.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Scholarships & Financial Aid</h2>
        <ul style={listStyle}>
          <li style={listItem}>Apply for merit-based, need-based, or country-specific scholarships.</li>
          <li style={listItem}>Some scholarships cover tuition and living expenses, easing financial burden.</li>
          <li style={listItem}>Consultancies can identify scholarships matching your profile and guide applications.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Track & Control Spending</h2>
        <ul style={listStyle}>
          <li style={listItem}>Use budgeting apps, spreadsheets, or finance trackers.</li>
          <li style={listItem}>Set weekly/monthly limits and review spending regularly.</li>
          <li style={listItem}>Avoid unnecessary expenses and prioritize essential costs.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Bank Accounts & Currency Management</h2>
        <ul style={listStyle}>
          <li style={listItem}>Open a local bank account for easier transactions and reduced fees.</li>
          <li style={listItem}>Use international cards or apps for secure and convenient payments.</li>
          <li style={listItem}>Monitor currency fluctuations if sending money from home.</li>
        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Emergency Fund & Insurance</h2>
        <ul style={listStyle}>
          <li style={listItem}>Keep 3–6 months of living expenses in an accessible account.</li>
          <li style={listItem}>Ensure health and travel insurance covers emergencies, accidents, or illnesses.</li>
          <li style={listItem}>Some universities require mandatory insurance for enrollment.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>FAQs</h2>
        <ul style={listStyle}>
          <li style={listItem}><strong>Q1:</strong> How much should I budget monthly as an international student?<br/>
              <strong>A:</strong> Costs vary by country, but typically $500–$1,500/month, including accommodation, food, and transportation.</li>
          <li style={listItem}><strong>Q2:</strong> Can I study abroad on a budget?<br/>
              <strong>A:</strong> Yes, with careful planning, scholarships, and part-time work, students can manage expenses effectively.</li>
          <li style={listItem}><strong>Q3:</strong> Are scholarships enough to cover living costs?<br/>
              <strong>A:</strong> Some scholarships cover both tuition and living expenses, but having a backup budget is recommended.</li>
          <li style={listItem}><strong>Q4:</strong> Can a consultancy help with financial planning?<br/>
              <strong>A:</strong> Yes, consultants guide in budgeting, scholarship applications, and cost-effective living strategies.</li>
        </ul>
      </section>

      {/* Consultancy Angle */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Consultancy Angle</h2>
        <p style={paragraph}>Our consultancy helps students:</p>
        <ul style={listStyle}>
          <li style={listItem}>Estimate realistic expenses for tuition and living abroad</li>
          <li style={listItem}>Identify scholarships, grants, and financial aid</li>
          <li style={listItem}>Advise on part-time work, banking, and budgeting strategies</li>
          <li style={listItem}>Provide pre-departure financial guidance for a smooth experience</li>
        </ul>
        <p style={ctaText}>
          <strong>
            “Want to manage your finances efficiently while studying abroad? Our experts help you
            plan budgets, identify scholarships, and save money for a stress-free international
            education journey. Book your free consultation today!”
          </strong>
        </p>
      </section>
    </div>
  );
};

export default ManageFinances;
