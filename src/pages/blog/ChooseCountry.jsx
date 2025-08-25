import React, { useState, useEffect } from "react";

export default function ChooseCountry() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const countries = [
    { name: "Germany", courses: "Engineering, Data Science", advantages: "Affordable, high-quality, post-study work" },
    { name: "UK", courses: "Business, Management, Arts", advantages: "Global recognition, diverse culture" },
    { name: "Netherlands", courses: "Data Science, Engineering", advantages: "English programs, innovative education" },
    { name: "France", courses: "Business, Hospitality, Arts", advantages: "Affordable, scholarships, rich culture" },
    { name: "Canada", courses: "Engineering, Business, IT", advantages: "Safe, post-study work, quality education" },
    { name: "Singapore", courses: "Business, Data Science, IT", advantages: "Global hub, English-taught, strong job market" },
    { name: "Philippines", courses: "MBBS", advantages: "English-taught, NMC-approved, affordable" }
  ];

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      padding: isMobile ? "20px" : "40px",
      background: "linear-gradient(to right, #f8f9fa, #eef2f3)",
      color: "#333",
      lineHeight: "1.6",
    },
    headingPrimary: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      fontWeight: "700",
      textAlign: "center",
      marginBottom: isMobile ? "20px" : "40px",
      color: "#2c3e50",
    },
    section: {
      background: "#fff",
      padding: isMobile ? "15px" : "30px",
      marginBottom: isMobile ? "15px" : "25px",
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
    },
    headingSecondary: {
      fontSize: isMobile ? "1.4rem" : "1.8rem",
      fontWeight: "600",
      marginBottom: isMobile ? "10px" : "15px",
      color: "#34495e",
      borderLeft: "5px solid #3498db",
      paddingLeft: "10px",
    },
    list: {
      marginLeft: "20px",
      marginTop: "10px",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
    listItem: {
      marginBottom: "10px",
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
      background: "#3498db",
      color: "#fff",
      padding: "10px",
      textAlign: "left",
    },
    td: {
      border: "1px solid #ddd",
      padding: "10px",
    },
    steps: {
      marginLeft: "20px",
      paddingLeft: "10px",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
    stepItem: {
      marginBottom: "8px",
    },
    ctaText: {
      marginTop: "15px",
      padding: isMobile ? "15px" : "20px",
      fontSize: isMobile ? "1rem" : "1.2rem",
      fontWeight: "600",
      textAlign: "center",
      background: "linear-gradient(90deg, #3498db, #2ecc71)",
      color: "#fff",
      borderRadius: "10px",
      boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.headingPrimary}>
        How to Choose the Right Country for Your Higher Education
      </h1>

      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Introduction</h2>
        <p>
          Choosing the right country for higher education is one of the most important decisions a student can make. 
        </p>
      </section>

      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Key Factors to Consider</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Academic Programs and Course Availability</li>
          <li style={styles.listItem}>Tuition Fees and Scholarships</li>
          <li style={styles.listItem}>Language and Cultural Environment</li>
          <li style={styles.listItem}>Post-Study Work Opportunities</li>
          <li style={styles.listItem}>Cost of Living</li>
          <li style={styles.listItem}>Safety and Lifestyle</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Country-Wise Highlights</h2>
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Country</th>
                <th style={styles.th}>Popular Courses</th>
                <th style={styles.th}>Key Advantages</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country, index) => (
                <tr key={index}>
                  <td style={styles.td}>{country.name}</td>
                  <td style={styles.td}>{country.courses}</td>
                  <td style={styles.td}>{country.advantages}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Step-by-Step Approach</h2>
        <ol style={styles.steps}>
          <li style={styles.stepItem}>Identify your goals</li>
          <li style={styles.stepItem}>Research tuition & living costs</li>
          <li style={styles.stepItem}>Check language requirements</li>
          <li style={styles.stepItem}>Explore scholarships & funding</li>
          <li style={styles.stepItem}>Evaluate post-study work opportunities</li>
          <li style={styles.stepItem}>Consider lifestyle & culture</li>
          <li style={styles.stepItem}>Consult experts</li>
        </ol>
      </section>

      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>FAQs</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Which country is best?</li>
          <li style={styles.listItem}>Can I study in non-English countries?</li>
          <li style={styles.listItem}>Should I decide based on rankings?</li>
          <li style={styles.listItem}>How can consultancy help?</li>
        </ul>
      </section>

      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Consultancy Support</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Analyze personal goals and aspirations</li>
          <li style={styles.listItem}>Compare tuition, living costs, and scholarships</li>
          <li style={styles.listItem}>Assist with university applications and visas</li>
          <li style={styles.listItem}>Provide pre-departure guidance</li>
        </ul>
        <p style={styles.ctaText}>
          Confused about which country to choose? 🎓 Book your free consultation today!
        </p>
      </section>
    </div>
  );
}
