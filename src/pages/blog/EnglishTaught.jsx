// src/pages/EnglishTaughtPrograms.jsx
import React, { useState, useEffect } from "react";

export default function EnglishTaughtPrograms() {
  const [isMobile, setIsMobile] = useState(false);

  // ✅ Handle screen resize for responsiveness
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      fontFamily: "'Inter', sans-serif",
      padding: isMobile ? "20px 12px" : "40px",
      backgroundColor: "#f9fafb",
      color: "#1f2937",
      lineHeight: 1.7,
    },
    headingPrimary: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      textAlign: "center",
      marginBottom: isMobile ? "20px" : "30px",
      color: "#111827",
      fontWeight: "700",
    },
    section: {
      marginBottom: isMobile ? "25px" : "40px",
      padding: isMobile ? "15px" : "25px",
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
    },
    headingSecondary: {
      fontSize: isMobile ? "1.3rem" : "1.75rem",
      marginBottom: "15px",
      color: "#2563eb",
      fontWeight: "600",
    },
    paragraph: {
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      marginBottom: "15px",
      color: "#374151",
    },
    list: {
      listStyleType: "disc",
      paddingLeft: "20px",
      marginBottom: "15px",
    },
    listItem: {
      marginBottom: "8px",
      fontSize: isMobile ? "0.9rem" : "1.05rem",
    },
    tableWrapper: {
      overflowX: "auto", // ✅ allows horizontal scroll on mobile
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "15px",
      marginBottom: "15px",
      fontSize: isMobile ? "0.85rem" : "1rem",
      minWidth: "600px", // ensures scroll
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
    },
    th: {
      backgroundColor: "#2563eb",
      color: "#fff",
      padding: isMobile ? "8px" : "12px",
      textAlign: "left",
    },
    td: {
      padding: isMobile ? "8px" : "12px",
      borderBottom: "1px solid #e5e7eb",
    },
    ctaText: {
      fontSize: isMobile ? "1rem" : "1.2rem",
      fontWeight: "600",
      color: "#1d4ed8",
      marginTop: "15px",
      padding: isMobile ? "10px" : "15px",
      textAlign: "center",
      background: "#f0f9ff",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.headingPrimary}>
        English-Taught Programs in Non-English Speaking Countries – What You Need to Know
      </h1>

      {/* ✅ Sections */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Introduction</h2>
        <p style={styles.paragraph}>
          Many students assume that studying in countries like Germany, France, Netherlands, or Italy requires fluency in the local language.
          English-taught programs have changed this landscape, allowing international students to pursue high-quality education without language barriers.
          These programs are gaining popularity due to global recognition, career opportunities, and affordability.
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>What Are English-Taught Programs?</h2>
        <p style={styles.paragraph}>
          English-taught programs are full degree courses conducted entirely in English, even in countries where English is not the primary language.
        </p>
        <ul style={styles.list}>
          <li style={styles.listItem}>Bachelor’s programs</li>
          <li style={styles.listItem}>Master’s programs</li>
          <li style={styles.listItem}>PhD programs</li>
        </ul>
        <p style={{ ...styles.paragraph, fontWeight: "600" }}>Advantages:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}>No need to learn the local language initially</li>
          <li style={styles.listItem}>Internationally recognized degrees</li>
          <li style={styles.listItem}>Opportunity to study in affordable, high-quality universities</li>
        </ul>
      </section>

      {/* ✅ Scrollable Table */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Popular Countries Offering English-Taught Programs</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Country</th>
                <th style={styles.th}>Popular Courses</th>
                <th style={styles.th}>Key Advantages</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.td}>Germany</td>
                <td style={styles.td}>Engineering, Data Science</td>
                <td style={styles.td}>Affordable tuition, strong industry links</td>
              </tr>
              <tr>
                <td style={styles.td}>Netherlands</td>
                <td style={styles.td}>Business, IT, Engineering</td>
                <td style={styles.td}>English programs widely available</td>
              </tr>
              <tr>
                <td style={styles.td}>France</td>
                <td style={styles.td}>Business, Hospitality, Arts</td>
                <td style={styles.td}>Affordable, scholarships available</td>
              </tr>
              <tr>
                <td style={styles.td}>Italy</td>
                <td style={styles.td}>Arts, Design, Hospitality</td>
                <td style={styles.td}>Cultural experience, top universities</td>
              </tr>
              <tr>
                <td style={styles.td}>Spain</td>
                <td style={styles.td}>Business, IR</td>
                <td style={styles.td}>Vibrant student life</td>
              </tr>
              <tr>
                <td style={styles.td}>Poland</td>
                <td style={styles.td}>Medicine, Engineering</td>
                <td style={styles.td}>Low cost, NMC-approved MBBS</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Other sections (Admission, Benefits, Challenges, FAQs, Consultancy) same as before... */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Consultancy Support</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Identify English-taught programs</li>
          <li style={styles.listItem}>Assist with admission & documents</li>
          <li style={styles.listItem}>Guide scholarships & aid</li>
          <li style={styles.listItem}>Pre-departure & adaptation support</li>
        </ul>
        <p style={styles.ctaText}>
          “Want to study abroad without language barriers? Book your free consultation today!”
        </p>
      </section>
    </div>
  );
}
