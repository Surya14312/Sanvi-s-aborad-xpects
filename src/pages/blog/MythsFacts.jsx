// src/pages/MythsFacts.jsx
import React from "react";

export default function MythsFacts() {
  const styles = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "#f9fafc",
      padding: "40px 20px",
      maxWidth: "1100px",
      margin: "0 auto",
    },
    headingPrimary: {
      fontSize: "2.5rem",
      fontWeight: "700",
      color: "#2c3e50",
      textAlign: "center",
      marginBottom: "40px",
    },
    section: {
      backgroundColor: "#fff",
      padding: "30px",
      marginBottom: "30px",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    },
    headingSecondary: {
      fontSize: "1.75rem",
      fontWeight: "600",
      color: "#34495e",
      marginBottom: "20px",
      borderLeft: "5px solid #3498db",
      paddingLeft: "12px",
    },
    mythItem: {
      marginBottom: "25px",
      padding: "20px",
      borderRadius: "10px",
      backgroundColor: "#f0f6ff",
      border: "1px solid #d6e4ff",
    },
    mythTitle: {
      fontSize: "1.3rem",
      fontWeight: "600",
      color: "#1d3557",
      marginBottom: "12px",
    },
    list: {
      margin: "0",
      padding: "0 0 0 20px",
      color: "#444",
    },
    tip: {
      marginTop: "10px",
      fontStyle: "italic",
      background: "#eafaf1",
      padding: "10px 15px",
      borderRadius: "8px",
      color: "#2e7d32",
      borderLeft: "5px solid #27ae60",
    },
    tableWrapper: {
      overflowX: "auto",
      marginTop: "15px",
    },
    compareTable: {
      width: "100%",
      borderCollapse: "collapse",
      background: "#fff",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
      minWidth: "500px", // keeps layout consistent on small screens
    },
    tableTh: {
      background: "#3498db",
      color: "#fff",
      padding: "12px",
      textAlign: "left",
      fontSize: "1rem",
    },
    tableTd: {
      border: "1px solid #eee",
      padding: "12px",
      fontSize: "0.95rem",
    },
    ctaText: {
      marginTop: "20px",
      fontWeight: "600",
      color: "#2c3e50",
      fontSize: "1.1rem",
      background: "#eaf4ff",
      padding: "15px",
      borderRadius: "10px",
      borderLeft: "6px solid #3498db",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.headingPrimary}>Myths vs. Facts About Studying Abroad</h1>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Introduction</h2>
        <p>
          Studying abroad is a dream for many students, but it is often surrounded by misconceptions and myths.
          Understanding the facts can help students make informed decisions, avoid unnecessary stress, and plan
          their future effectively. This guide addresses the most common myths and clarifies the reality of
          studying abroad.
        </p>
      </section>

      {/* Myths & Facts */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Common Myths & Facts</h2>

        <div style={styles.mythItem}>
          <h3 style={styles.mythTitle}>Myth: Studying Abroad is Too Expensive</h3>
          <ul style={styles.list}>
            <li>Many countries offer affordable education.</li>
            <li>Europe has low or free tuition in countries like Germany, Poland, and France.</li>
            <li>Scholarships, grants, and part-time jobs can further reduce costs.</li>
          </ul>
          <p style={styles.tip}>
            Tip: Proper budgeting and consultancy guidance can make studying abroad cost-effective.
          </p>
        </div>

        <div style={styles.mythItem}>
          <h3 style={styles.mythTitle}>Myth: You Must Speak the Local Language</h3>
          <ul style={styles.list}>
            <li>Many universities offer English-taught programs in non-English countries.</li>
            <li>Countries like Germany, Netherlands, France, Italy, Poland, and Vietnam provide complete programs in English.</li>
            <li>Learning the local language is optional but helpful for cultural integration.</li>
          </ul>
        </div>

        <div style={styles.mythItem}>
          <h3 style={styles.mythTitle}>Myth: Studying Abroad is Only for the Rich</h3>
          <ul style={styles.list}>
            <li>Many students finance education through scholarships, educational loans, and assistantships.</li>
            <li>Affordable countries and programs make it accessible to middle-income families.</li>
            <li>Planning and expert guidance can reduce financial strain significantly.</li>
          </ul>
        </div>

        <div style={styles.mythItem}>
          <h3 style={styles.mythTitle}>Myth: Jobs After Graduation are Hard to Find Abroad</h3>
          <ul style={styles.list}>
            <li>Countries like Germany, Canada, Netherlands, Ireland, and Dubai offer post-study work visas.</li>
            <li>International students gain practical experience through internships.</li>
            <li>Global exposure enhances career prospects worldwide.</li>
          </ul>
        </div>

        <div style={styles.mythItem}>
          <h3 style={styles.mythTitle}>Myth: Studying Abroad Means Leaving Family Forever</h3>
          <ul style={styles.list}>
            <li>Modern communication tools make it easy to stay connected.</li>
            <li>Most programs last 1–6 years; students often return home with international qualifications.</li>
            <li>Cultural exchange and independence build personal growth and confidence.</li>
          </ul>
        </div>

        <div style={styles.mythItem}>
          <h3 style={styles.mythTitle}>Myth: Only High-Ranking Universities are Worth It</h3>
          <ul style={styles.list}>
            <li>High-ranking universities are great, but fit and course quality matter more.</li>
            <li>Many mid-tier or specialized universities provide excellent programs, affordable fees, and better practical experience.</li>
          </ul>
        </div>

        <div style={styles.mythItem}>
          <h3 style={styles.mythTitle}>Myth: Student Visa Process is Complicated</h3>
          <ul style={styles.list}>
            <li>With the right guidance, visa applications are straightforward.</li>
            <li>Consultants provide step-by-step support, document preparation, and interview coaching.</li>
          </ul>
        </div>
      </section>

      {/* Example Table */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Example Table of Myths vs Facts</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.compareTable}>
            <thead>
              <tr>
                <th style={styles.tableTh}>Myth</th>
                <th style={styles.tableTh}>Fact</th>
                <th style={styles.tableTh}>Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableTd} data-label="Myth">Studying Abroad is Too Expensive</td>
                <td style={styles.tableTd} data-label="Fact">Many countries offer affordable education</td>
                <td style={styles.tableTd} data-label="Notes">Scholarships, part-time jobs, and low tuition make it feasible</td>
              </tr>
              <tr>
                <td style={styles.tableTd} data-label="Myth">You Must Speak the Local Language</td>
                <td style={styles.tableTd} data-label="Fact">English-taught programs available</td>
                <td style={styles.tableTd} data-label="Notes">Optional local language learning helps cultural integration</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>FAQs</h2>
        <ul style={styles.list}>
          <li><strong>Q:</strong> Is studying abroad really worth it? <br /> <strong>A:</strong> Yes, it offers global exposure, career opportunities, and personal growth that cannot be matched by local education alone.</li>
          <li><strong>Q:</strong> Are scholarships easy to get? <br /> <strong>A:</strong> Many universities offer merit-based and need-based scholarships, and consultancy guidance increases your chances.</li>
          <li><strong>Q:</strong> Can I work while studying abroad? <br /> <strong>A:</strong> Most countries allow part-time work (usually 20 hours/week) and internships to gain experience.</li>
          <li><strong>Q:</strong> Will I face culture shock? <br /> <strong>A:</strong> Cultural adaptation is normal, but orientation programs and support from consultants make transition smooth.</li>
        </ul>
      </section>

      {/* Consultancy Support */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Consultancy Support</h2>
        <ul style={styles.list}>
          <li>Debunk myths and provide accurate information</li>
          <li>Guide through university selection, admissions, and visas</li>
          <li>Assist with scholarships, financial planning, and pre-departure support</li>
          <li>Provide continuous support during the study abroad journey</li>
        </ul>
        <p style={styles.ctaText}>
          “Confused by myths about studying abroad? Our experts provide clear, personalized guidance to help you plan your international education journey confidently. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
}
