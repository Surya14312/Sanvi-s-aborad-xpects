import React, { useState, useEffect } from "react";

const BestCountriesStudies = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const styles = {
    container: {
      fontFamily: "'Poppins', sans-serif",
      color: "#333",
      lineHeight: 1.8,
      background: "#fdfdfd",
      borderRadius: "16px",
      boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
      margin: isMobile ? "15px 10px" : "60px auto",
      maxWidth: "1100px",
      padding: isMobile ? "15px" : "25px",
    },
    h1: {
      fontSize: isMobile ? "1.8rem" : "2.5rem",
      textAlign: "center",
      fontWeight: 700,
      marginBottom: isMobile ? "25px" : "50px",
      color: "#2c3e50",
    },
    h2: {
      fontSize: isMobile ? "1.4rem" : "1.8rem",
      marginBottom: "20px",
      color: "#34495e",
      borderLeft: "6px solid #36d1dc",
      paddingLeft: "12px",
    },
    paragraph: {
      fontSize: isMobile ? "0.95rem" : "1.05rem",
      marginBottom: "20px",
      color: "#555",
    },
    tableContainer: {
      overflowX: isMobile ? "auto" : "visible",
      marginBottom: "30px",
    },
    table: {
      width: "100%",
      borderCollapse: "collapse",
      fontSize: isMobile ? "0.85rem" : "0.95rem",
      minWidth: "600px",
    },
    th: {
      background: "#36d1dc",
      color: "#fff",
      padding: "12px 15px",
      textAlign: "left",
      fontWeight: 600,
      whiteSpace: "nowrap",
    },
    td: {
      padding: "12px 15px",
      borderBottom: "1px solid #ddd",
      whiteSpace: "nowrap",
    },
    ul: {
      marginLeft: isMobile ? "15px" : "25px",
      marginBottom: "25px",
      paddingLeft: "0",
    },
    li: {
      marginBottom: "12px",
      fontSize: isMobile ? "0.95rem" : "1rem",
      listStyleType: "disc",
    },
    faqSection: {
      marginBottom: "30px",
    },
    cardContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "15px",
      marginBottom: "25px",
    },
    card: {
      background: "#f6f8fa",
      borderRadius: "12px",
      padding: "15px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
    },
    cardRow: {
      marginBottom: "8px",
      fontSize: "0.95rem",
    },
    cardLabel: {
      fontWeight: 600,
      marginRight: "5px",
      color: "#36d1dc",
    },
  };

  const renderTable = (data) => {
    if (isMobile) {
      return (
        <div style={styles.cardContainer}>
          {data.map((row, idx) => (
            <div key={idx} style={styles.card}>
              <div style={styles.cardRow}><span style={styles.cardLabel}>Country:</span> {row.country}</div>
              <div style={styles.cardRow}><span style={styles.cardLabel}>Why Study:</span> {row.why}</div>
              <div style={styles.cardRow}><span style={styles.cardLabel}>Popular Courses:</span> {row.courses}</div>
              <div style={styles.cardRow}><span style={styles.cardLabel}>Career Prospects:</span> {row.career}</div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div style={styles.tableContainer}>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Country</th>
                <th style={styles.th}>Why Study</th>
                <th style={styles.th}>Popular Courses</th>
                <th style={styles.th}>Career Prospects</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, idx) => (
                <tr key={idx}>
                  <td style={styles.td}>{row.country}</td>
                  <td style={styles.td}>{row.why}</td>
                  <td style={styles.td}>{row.courses}</td>
                  <td style={styles.td}>{row.career}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Best Countries for Engineering, Business, Data Science, and Hospitality Studies</h1>

      {/* Introduction */}
      <section>
        <h2 style={styles.h2}>Introduction</h2>
        <p style={styles.paragraph}>
          When planning to study abroad, choosing the right country for your field of study
          is crucial. Different countries offer unique advantages in terms of course quality,
          industry connections, career opportunities, and cultural exposure. This guide highlights
          the best destinations for Engineering, Business, Data Science, and Hospitality studies.
        </p>
      </section>

      {/* Engineering */}
      <section>
        <h2 style={styles.h2}>Engineering</h2>
        {renderTable([
          { country: "Germany", why: "Tuition-free or low-cost education, strong research facilities, practical experience", courses: "Mechanical, Electrical, Civil, Computer Science, Data Science, Robotics", career: "Software Developer, Civil Engineer, Data Analyst, Robotics Engineer" },
          { country: "USA", why: "Cutting-edge technology, flexible learning, strong internships and job opportunities", courses: "Computer Science, AI, Robotics, Electrical, Mechanical", career: "Software Developer, Research Scientist, AI Engineer" },
          { country: "Canada", why: "Modern labs, co-op programs, post-study work visa opportunities", courses: "Engineering, Data Science, AI, Computer Science", career: "Data Analyst, Software Engineer, Robotics Engineer" },
          { country: "Netherlands", why: "Innovative teaching, English-taught programs, industry-oriented curriculum", courses: "Computer Science, Electrical, Civil, AI", career: "Software Developer, Engineer, Data Analyst" },
          { country: "Singapore", why: "Tech hub in Asia, English-medium education, global career exposure", courses: "Engineering, Data Science, AI, Computer Science", career: "Software Engineer, Data Analyst, Robotics Engineer" },
        ])}
      </section>

      {/* Business */}
      <section>
        <h2 style={styles.h2}>Business & Management</h2>
        {renderTable([
          { country: "UK", why: "Globally recognized MBAs, strong corporate connections, diverse student community", courses: "MBA, Business Analytics, International Business, Finance, Marketing", career: "Business Analyst, Financial Consultant, Marketing Manager, Entrepreneur" },
          { country: "France", why: "Affordable MBA programs, scholarships, exposure to luxury and hospitality industries", courses: "MBA, Finance, Marketing", career: "Business Analyst, Consultant, Marketing Manager" },
          { country: "Netherlands", why: "Focus on business analytics and entrepreneurship, English-taught programs", courses: "MBA, Business Analytics, International Business", career: "Business Analyst, Entrepreneur, Consultant" },
          { country: "Ireland", why: "English-speaking, startup-friendly environment, internships for students", courses: "MBA, Finance, International Business", career: "Business Analyst, Consultant, Manager" },
          { country: "Singapore", why: "International business hub, networking opportunities, high employability", courses: "MBA, Finance, Marketing, Business Analytics", career: "Business Analyst, Manager, Entrepreneur" },
        ])}
      </section>

      {/* Data Science */}
      <section>
        <h2 style={styles.h2}>Data Science & AI</h2>
        {renderTable([
          { country: "USA", why: "Top universities offering AI and ML programs, access to tech giants and research opportunities", courses: "Data Science, Machine Learning, AI, Business Analytics, Big Data", career: "Data Scientist, AI Engineer, Machine Learning Specialist, Business Analyst" },
          { country: "Canada", why: "Strong focus on data analytics and AI, work opportunities post-study", courses: "Data Science, AI, Machine Learning, Big Data", career: "Data Scientist, AI Engineer, ML Engineer" },
          { country: "Germany", why: "Research-oriented programs, affordable tuition, practical training", courses: "Data Science, AI, ML", career: "Data Analyst, Data Scientist, ML Engineer" },
          { country: "Netherlands", why: "English-taught programs, innovative curriculum, high industry collaboration", courses: "Data Science, AI, ML, Business Analytics", career: "Data Scientist, AI Engineer, Business Analyst" },
          { country: "UK", why: "Cutting-edge technology programs, strong demand for AI and data science professionals", courses: "Data Science, AI, Machine Learning, Big Data", career: "Data Scientist, AI Engineer, ML Specialist" },
        ])}
      </section>

      {/* Hospitality */}
      <section>
        <h2 style={styles.h2}>Hospitality & Tourism Management</h2>
        {renderTable([
          { country: "Switzerland", why: "Globally recognized hospitality programs, hands-on training in luxury hotels", courses: "Hotel Management, Culinary Arts, Tourism Management, Event Management", career: "Hotel Manager, Event Planner, Executive Chef, Tourism Consultant" },
          { country: "France", why: "Culinary arts and hospitality management programs, cultural immersion", courses: "Hospitality Management, Culinary Arts, Tourism", career: "Hotel Manager, Chef, Tourism Consultant" },
          { country: "Italy", why: "Focus on design and luxury hospitality, English-taught programs available", courses: "Hotel Management, Culinary Arts", career: "Hotel Manager, Chef, Event Planner" },
          { country: "Dubai", why: "International business hub, internships in luxury resorts and hotels", courses: "Hospitality Management, Tourism, Event Management", career: "Hotel Manager, Event Planner, Tourism Consultant" },
          { country: "Singapore", why: "Hospitality management with strong industry exposure, English medium", courses: "Hospitality Management, Culinary Arts", career: "Hotel Manager, Event Planner, Chef" },
        ])}
      </section>

      {/* Key Factors */}
      <section>
        <h2 style={styles.h2}>Key Factors to Choose a Country</h2>
        <ul style={styles.ul}>
          <li style={styles.li}>Course Quality & Global Recognition – Check accreditation and international recognition.</li>
          <li style={styles.li}>Cost & Scholarships – Consider tuition fees, living costs, and available financial aid.</li>
          <li style={styles.li}>Post-Study Work Opportunities – Countries like Germany, Canada, and Dubai offer work permits.</li>
          <li style={styles.li}>Industry Connections – Opportunities for internships, research, and employment.</li>
          <li style={styles.li}>Language & Cultural Fit – English-taught programs help smooth adaptation; consider lifestyle preferences.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section style={styles.faqSection}>
        <h2 style={styles.h2}>FAQs</h2>
        <ul style={styles.ul}>
          <li style={styles.li}><strong>Q1:</strong> Which country is best for engineering abroad?<br/>
            <strong>A:</strong> Germany, USA, Canada, Netherlands, and Singapore.</li>
          <li style={styles.li}><strong>Q2:</strong> Which country offers the best business studies?<br/>
            <strong>A:</strong> UK, France, Netherlands, Ireland, and Singapore.</li>
          <li style={styles.li}><strong>Q3:</strong> Can I study AI and Data Science abroad?<br/>
            <strong>A:</strong> Yes, top countries include USA, Canada, Germany, Netherlands, and UK.</li>
          <li style={styles.li}><strong>Q4:</strong> Which country is best for hospitality studies?<br/>
            <strong>A:</strong> Switzerland, France, Italy, Dubai, and Singapore.</li>
        </ul>
      </section>

      {/* Consultancy */}
      <section>
        <h2 style={styles.h2}>Consultancy Angle</h2>
        <p style={styles.paragraph}>Our consultancy helps students:</p>
        <ul style={styles.ul}>
          <li style={styles.li}>Identify the best countries based on course, career goals, and budget</li>
          <li style={styles.li}>Assist with admissions, scholarships, and visa applications</li>
          <li style={styles.li}>Provide career guidance and post-study work support</li>
          <li style={styles.li}>Offer pre-departure and relocation assistance</li>
        </ul>
        <p style={styles.paragraph}><strong>“Want to study in the best country for your chosen field? Our experts guide you in selecting the right country, university, and program for global career success. Book your free consultation today!”</strong></p>
      </section>
    </div>
  );
};

export default BestCountriesStudies;
