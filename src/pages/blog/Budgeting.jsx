import React, { useState, useEffect } from "react";

export default function ChooseCountry() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      color: "#333",
      lineHeight: "1.6",
      background: "#f9f9f9",
      padding: isMobile ? "20px 10px" : "40px 20px",
    },
    headingPrimary: {
      textAlign: "center",
      fontSize: isMobile ? "1.8rem" : "clamp(2rem, 4vw, 2.8rem)",
      fontWeight: "800",
      marginBottom: isMobile ? "25px" : "40px",
      background: "linear-gradient(135deg, #6a11cb, #2575fc)",
      WebkitBackgroundClip: "text",
      color: "transparent",
    },
    section: {
      marginBottom: isMobile ? "25px" : "50px",
      background: "#fff",
      borderRadius: "12px",
      padding: isMobile ? "15px 15px" : "25px 30px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
    },
    headingSecondary: {
      fontSize: isMobile ? "1.3rem" : "clamp(1.5rem, 3vw, 2rem)",
      fontWeight: "700",
      marginBottom: isMobile ? "10px" : "15px",
      color: "#1a1a1a",
      borderLeft: "5px solid #2575fc",
      paddingLeft: "12px",
    },
    paragraph: {
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "#555",
      marginBottom: "10px",
    },
    list: {
      paddingLeft: "20px",
      color: "#444",
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
      borderRadius: "10px",
      overflow: "hidden",
      fontSize: isMobile ? "0.8rem" : "1rem",
      boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
    },
    th: {
      background: "linear-gradient(90deg, #6a11cb, #2575fc)",
      color: "#fff",
      padding: "10px 15px",
      textAlign: "left",
      fontWeight: "600",
      whiteSpace: "nowrap",
    },
    td: {
      padding: "10px 15px",
      borderBottom: "1px solid #ddd",
      background: "#fff",
      whiteSpace: "nowrap",
    },
    tdAlt: {
      background: "#f9f9f9",
    },
    steps: {
      paddingLeft: "20px",
      fontSize: isMobile ? "0.9rem" : "1rem",
      color: "#444",
      lineHeight: "1.6",
    },
    ctaText: {
      marginTop: "15px",
      padding: isMobile ? "10px 12px" : "15px 20px",
      background: "rgba(37,117,252,0.1)",
      borderLeft: "4px solid #2575fc",
      borderRadius: "8px",
      fontStyle: "italic",
      color: "#1a1a1a",
      fontWeight: "500",
      fontSize: isMobile ? "0.9rem" : "1rem",
    },
  };

  const renderTable = (data) => {
    if (isMobile) {
      // Stacked card view for mobile
      return data.map((row, idx) => (
        <div key={idx} style={{ ...styles.section, marginBottom: "15px" }}>
          <p><strong>Country:</strong> {row.country}</p>
          <p><strong>Popular Courses:</strong> {row.courses}</p>
          <p><strong>Key Advantages:</strong> {row.advantages}</p>
        </div>
      ));
    }
    return (
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
            {data.map((row, idx) => (
              <tr key={idx}>
                <td style={styles.td}>{row.country}</td>
                <td style={styles.td}>{row.courses}</td>
                <td style={styles.td}>{row.advantages}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const countryData = [
    { country: "Germany", courses: "Engineering, Data Science", advantages: "Affordable, high-quality, post-study work" },
    { country: "UK", courses: "Business, Management, Arts", advantages: "Global recognition, diverse culture" },
    { country: "Netherlands", courses: "Data Science, Engineering", advantages: "English programs, innovative education" },
    { country: "France", courses: "Business, Hospitality, Arts", advantages: "Affordable, scholarships, rich culture" },
    { country: "Canada", courses: "Engineering, Business, IT", advantages: "Safe, post-study work, quality education" },
    { country: "Singapore", courses: "Business, Data Science, IT", advantages: "Global hub, strong job market" },
    { country: "Philippines", courses: "MBBS", advantages: "English-taught, NMC-approved, affordable" },
  ];

  return (
    <div style={styles.container}>
      <h1 style={styles.headingPrimary}>How to Choose the Right Country for Your Higher Education</h1>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Introduction</h2>
        <p style={styles.paragraph}>
          Choosing the right country for higher education is one of the most important decisions a student can make.
        </p>
      </section>

      {/* Key Factors */}
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

      {/* Country Highlights */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Country-Wise Highlights</h2>
        {renderTable(countryData)}
      </section>

      {/* Steps */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Step-by-Step Approach</h2>
        <ol style={styles.steps}>
          <li>Identify Your Goals</li>
          <li>Research Tuition & Living Costs</li>
          <li>Check Language Requirements</li>
          <li>Explore Scholarships & Funding</li>
          <li>Evaluate Post-Study Work Opportunities</li>
          <li>Consider Lifestyle & Culture</li>
          <li>Consult Experts</li>
        </ol>
      </section>

      {/* FAQs */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>FAQs</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Which country is best for my course?</li>
          <li style={styles.listItem}>Can I study in non-English countries?</li>
          <li style={styles.listItem}>Should I rely only on rankings?</li>
          <li style={styles.listItem}>How can a consultancy help?</li>
        </ul>
      </section>

      {/* Consultancy */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Consultancy Support</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}>Analyze personal goals and career aspirations</li>
          <li style={styles.listItem}>Compare tuition, living costs, and scholarships</li>
          <li style={styles.listItem}>Assist with applications & visa processes</li>
          <li style={styles.listItem}>Provide pre-departure guidance</li>
        </ul>
        <p style={styles.ctaText}>
          “Confused about which country to choose? Our experts provide personalized guidance to help you pick the perfect study destination. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
}
