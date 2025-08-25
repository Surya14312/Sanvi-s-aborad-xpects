import React, { useState, useEffect } from "react";

const CommonApplicationMistakes = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      maxWidth: "1000px",
      margin: "0 auto",
      padding: isMobile ? "20px 15px" : "40px 20px",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: "1.6",
      color: "#333",
      backgroundColor: "#F9FBFD",
    },
    heading1: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: isMobile ? "20px" : "30px",
      color: "#2C3E50",
    },
    heading2: {
      fontSize: isMobile ? "1.4rem" : "1.8rem",
      margin: isMobile ? "20px 0 10px" : "30px 0 15px",
      color: "#1A5276",
      borderBottom: "3px solid #3498DB",
      display: "inline-block",
      paddingBottom: "5px",
    },
    section: {
      marginBottom: isMobile ? "20px" : "40px",
      background: "#fff",
      padding: isMobile ? "15px" : "25px",
      borderRadius: "12px",
      boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
      transition: "transform 0.2s ease-in-out",
    },
    tableContainer: {
      overflowX: isMobile ? "auto" : "visible",
      marginTop: "15px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: isMobile ? "0.8rem" : "0.95rem",
    },
    th: {
      backgroundColor: "#3498DB",
      color: "#fff",
      padding: "10px",
      textAlign: "left",
      fontWeight: "600",
    },
    td: {
      border: "1px solid #ddd",
      padding: "10px",
      verticalAlign: "top",
    },
    list: {
      paddingLeft: "20px",
      marginTop: "10px",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
    listItem: {
      marginBottom: "10px",
    },
    cta: {
      marginTop: "15px",
      fontSize: isMobile ? "1rem" : "1.1rem",
      fontWeight: "600",
      color: "#2C3E50",
      background: "#EAF6FF",
      padding: isMobile ? "12px" : "18px",
      borderRadius: "10px",
      border: "1px solid #B3D9FF",
      textAlign: "center",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading1}>
        Common Mistakes in University Applications and How to Avoid Them
      </h1>

      <section style={styles.section}>
        <h2 style={styles.heading2}>Introduction</h2>
        <p>
          Applying to universities abroad is competitive, and even small mistakes can reduce your chances
          of admission. Awareness of common pitfalls helps students submit strong, error-free applications
          and stand out in the selection process.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading2}>Common Mistakes Summary</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Mistake</th>
                <th style={styles.th}>Description</th>
                <th style={styles.th}>How to Avoid</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Missing Deadlines</td>
                <td style={styles.td}>Submitting applications late or missing scholarship deadlines</td>
                <td style={styles.td}>Create a timeline, start 12–18 months in advance, set reminders</td>
              </tr>
              <tr>
                <td style={styles.td}>Ignoring Eligibility Requirements</td>
                <td style={styles.td}>Applying without meeting academic, language, or course prerequisites</td>
                <td style={styles.td}>Review grades, test scores, course prerequisites, and scholarship eligibility</td>
              </tr>
              <tr>
                <td style={styles.td}>Weak or Generic SOP</td>
                <td style={styles.td}>Unstructured or generic statement of purpose</td>
                <td style={styles.td}>Tailor SOP to each university, highlight achievements, proofread</td>
              </tr>
              <tr>
                <td style={styles.td}>Poor Recommendation Letters</td>
                <td style={styles.td}>LORs that lack detail or come from inappropriate references</td>
                <td style={styles.td}>Choose familiar referees, highlight strengths, provide guidelines</td>
              </tr>
              <tr>
                <td style={styles.td}>Incomplete Documents</td>
                <td style={styles.td}>Missing transcripts, test scores, or incorrect formats</td>
                <td style={styles.td}>Double-check documents, keep backups, follow university instructions</td>
              </tr>
              <tr>
                <td style={styles.td}>Overlooking Financial Planning</td>
                <td style={styles.td}>Not budgeting for tuition, living costs, or visa fees</td>
                <td style={styles.td}>Prepare a detailed budget, research costs, and plan scholarships</td>
              </tr>
              <tr>
                <td style={styles.td}>Applying to Too Few or Too Many Universities</td>
                <td style={styles.td}>Imbalanced application strategy</td>
                <td style={styles.td}>Apply to a balanced list: safety, target, and reach universities</td>
              </tr>
              <tr>
                <td style={styles.td}>Ignoring Visa Requirements</td>
                <td style={styles.td}>Late or incomplete visa application</td>
                <td style={styles.td}>Research visa early, attend consultancy guidance, submit on time</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading2}>FAQs</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>
            <strong>Q1:</strong> What is the most common mistake in university applications? <br />
            <strong>A:</strong> Missing deadlines, not meeting eligibility criteria, and submitting weak SOPs.
          </li>
          <li style={styles.listItem}>
            <strong>Q2:</strong> Can a consultancy help avoid application errors? <br />
            <strong>A:</strong> Yes, consultants review applications, guide SOPs and LORs, and ensure all documents meet university standards.
          </li>
          <li style={styles.listItem}>
            <strong>Q3:</strong> How early should I start preparing my documents? <br />
            <strong>A:</strong> Start 12–18 months before the intended course start date.
          </li>
          <li style={styles.listItem}>
            <strong>Q4:</strong> Are financial mistakes common in applications? <br />
            <strong>A:</strong> Yes, not planning for tuition, living costs, and visa fees can jeopardize your plans.
          </li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.heading2}>Consultancy Angle</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Review and refine applications to avoid errors</li>
          <li style={styles.listItem}>Guide in SOP writing, LORs, and document preparation</li>
          <li style={styles.listItem}>Assist with financial planning, scholarships, and visa documentation</li>
          <li style={styles.listItem}>Provide pre-departure and admission support</li>
        </ul>
        <p style={styles.cta}>
          “Avoid costly mistakes in your study abroad applications. Let our experts guide you step-by-step. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
};

export default CommonApplicationMistakes;
