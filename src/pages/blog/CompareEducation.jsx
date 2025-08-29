// src/pages/CompareEducation.jsx
import React, { useState, useEffect } from "react";

export default function CompareEducation() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Detect screen resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Inline style objects with responsiveness
  const styles = {
    container: {
     
      margin: "0 auto",
      padding: isMobile ? "20px 10px" : "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: "1.7",
      color: "#333",
    },
    heading1: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: isMobile ? "20px" : "30px",
      color: "#2C3E50",
    },
    heading2: {
      fontSize: isMobile ? "1.3rem" : "1.8rem",
      margin: isMobile ? "20px 0 10px" : "30px 0 15px",
      color: "#1A5276",
      borderBottom: "3px solid #3498DB",
      display: "inline-block",
      paddingBottom: "5px",
    },
    section: {
      marginBottom: isMobile ? "25px" : "40px",
      background: "#fff",
      padding: isMobile ? "15px" : "25px",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    },
    list: {
      paddingLeft: "20px",
    },
    listItem: {
      marginBottom: "10px",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
    tableWrapper: {
      overflowX: "auto", // ✅ Makes table scrollable on mobile
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "20px",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      minWidth: "600px", // Ensures proper scroll
    },
    th: {
      backgroundColor: "#3498DB",
      color: "#fff",
      padding: isMobile ? "8px" : "12px",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: isMobile ? "8px" : "12px",
      verticalAlign: "top",
    },
    tip: {
      background: "#EAF6FF",
      padding: isMobile ? "10px" : "15px",
      borderRadius: "10px",
      border: "1px solid #B3D9FF",
      marginTop: "12px",
      fontWeight: "500",
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "#2C3E50",
    },
    cta: {
      marginTop: "15px",
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "600",
      color: "#2C3E50",
      background: "#F0F9F4",
      padding: isMobile ? "12px" : "18px",
      borderRadius: "10px",
      border: "1px solid #B2E0C2",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>
        Comparing Education Systems – Europe vs. North America vs. Asia
      </h1>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.heading2}>Introduction</h2>
        <p>
          Choosing the right country for higher education involves understanding
          how education systems differ globally. Europe, North America, and Asia
          each have distinct approaches to learning, teaching styles, costs, and
          career opportunities. Understanding these differences can help
          students make informed decisions that align with their career goals
          and budget.
        </p>
      </section>

      {/* Europe Section */}
      <section style={styles.section}>
        <h2 style={styles.heading2}>Education in Europe</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Tuition fees are often low or subsidized.</li>
          <li style={styles.listItem}>Focus on research and critical thinking.</li>
          <li style={styles.listItem}>Wide opportunities for international students.</li>
          <li style={styles.listItem}>Programs available in multiple languages.</li>
        </ul>
        <div style={styles.tip}>
          💡 Tip: Germany, France, and the Netherlands are top study
          destinations in Europe.
        </div>
      </section>

      {/* North America Section */}
      <section style={styles.section}>
        <h2 style={styles.heading2}>Education in North America</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>High tuition costs, but many scholarships available.</li>
          <li style={styles.listItem}>Flexible programs with wide subject choice.</li>
          <li style={styles.listItem}>Practical learning with internships and co-ops.</li>
          <li style={styles.listItem}>Focus on innovation and entrepreneurship.</li>
        </ul>
        <div style={styles.tip}>
          💡 Tip: USA and Canada are popular for cutting-edge research
          facilities.
        </div>
      </section>

      {/* Asia Section */}
      <section style={styles.section}>
        <h2 style={styles.heading2}>Education in Asia</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Affordable tuition and living costs.</li>
          <li style={styles.listItem}>Strong emphasis on discipline and academics.</li>
          <li style={styles.listItem}>Rapidly growing global recognition of degrees.</li>
          <li style={styles.listItem}>Advanced technology-driven teaching in countries like Japan and South Korea.</li>
        </ul>
        <div style={styles.tip}>
          💡 Tip: Singapore, Japan, and South Korea are Asian education hubs.
        </div>
      </section>

      {/* Comparison Table */}
      <section style={styles.section}>
        <h2 style={styles.heading2}>
          Key Comparison: Europe vs. North America vs. Asia
        </h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Feature</th>
                <th style={styles.th}>Europe</th>
                <th style={styles.th}>North America</th>
                <th style={styles.th}>Asia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Tuition Fees</td>
                <td style={styles.td}>Low to moderate</td>
                <td style={styles.td}>High</td>
                <td style={styles.td}>Moderate to low</td>
              </tr>
              <tr>
                <td style={styles.td}>Duration of Bachelor’s</td>
                <td style={styles.td}>3–4 years</td>
                <td style={styles.td}>4 years</td>
                <td style={styles.td}>3–4 years</td>
              </tr>
              <tr>
                <td style={styles.td}>Teaching Style</td>
                <td style={styles.td}>Research and critical thinking</td>
                <td style={styles.td}>Interactive and practical</td>
                <td style={styles.td}>Structured and exam-focused</td>
              </tr>
              <tr>
                <td style={styles.td}>Popular Courses</td>
                <td style={styles.td}>Engineering, Arts, Medicine</td>
                <td style={styles.td}>Business, Tech, Sciences</td>
                <td style={styles.td}>Technology, Medicine, Finance</td>
              </tr>
              <tr>
                <td style={styles.td}>Post-study Opportunities</td>
                <td style={styles.td}>EU work permits</td>
                <td style={styles.td}>OPT, PGWP options</td>
                <td style={styles.td}>Strong local job markets</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Choosing Factors */}
      <section style={styles.section}>
        <h2 style={styles.heading2}>How to Choose the Right Destination?</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Budget for tuition and living costs.</li>
          <li style={styles.listItem}>Career opportunities post-graduation.</li>
          <li style={styles.listItem}>Preferred teaching style and learning environment.</li>
          <li style={styles.listItem}>Language of instruction.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section style={styles.section}>
        <h2 style={styles.heading2}>Frequently Asked Questions</h2>
        <p><strong>Q:</strong> Which is the most affordable region?</p>
        <p><strong>A:</strong> Asia and some parts of Europe (like Germany) are generally more affordable.</p>

        <p><strong>Q:</strong> Where can I get the best career opportunities?</p>
        <p><strong>A:</strong> North America provides vast opportunities, especially in STEM fields.</p>
      </section>

      {/* Consultancy CTA */}
      <div style={styles.cta}>
        🚀 Need help choosing? Contact our study abroad consultancy today!
      </div>
    </div>
  );
}
