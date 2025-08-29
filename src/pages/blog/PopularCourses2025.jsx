// src/pages/PopularCourses.jsx
import React from "react";

const PopularCourses = () => {
  const styles = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "#f9fafc",
      padding: "40px 20px",
      
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
    list: {
      margin: "0",
      padding: "0 0 0 20px",
      color: "#444",
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
      minWidth: "500px", // allows horizontal scroll on mobile
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
    strong: {
      color: "#2c3e50",
      fontWeight: "600",
    },
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.headingPrimary}>Most Popular Courses to Study Abroad in 2025 & Beyond</h1>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Introduction</h2>
        <p>
          Choosing the right course is crucial when planning to study abroad. Global trends
          and industry demands influence which programs offer the best career prospects,
          skill development, and international opportunities. Here’s a detailed guide to
          the most popular courses to study abroad in 2025 and beyond.
        </p>
      </section>

      {/* Engineering & Technology */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Engineering & Technology</h2>
        <p><strong style={styles.strong}>Why It’s Popular:</strong></p>
        <ul style={styles.list}>
          <li>Strong global demand for mechanical, electrical, computer, and civil engineers.</li>
          <li>Opportunities in automation, robotics, AI, and renewable energy.</li>
          <li>High employability in countries like Germany, USA, Canada, Netherlands, and Singapore.</li>
        </ul>
        <p><strong style={styles.strong}>Top Courses:</strong></p>
        <ul style={styles.list}>
          <li>Mechanical Engineering</li>
          <li>Electrical & Electronics Engineering</li>
          <li>Computer Science & IT</li>
          <li>Data Science & Artificial Intelligence</li>
          <li>Civil & Environmental Engineering</li>
        </ul>
        <p><strong style={styles.strong}>Career Prospects:</strong> Software Developer, Data Analyst, Civil Engineer, AI Researcher, Renewable Energy Specialist</p>
      </section>

      {/* Engineering Table */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Top Engineering Courses Comparison (Responsive Table)</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.compareTable}>
            <thead>
              <tr>
                <th style={styles.tableTh}>Course</th>
                <th style={styles.tableTh}>Duration</th>
                <th style={styles.tableTh}>Top Countries</th>
                <th style={styles.tableTh}>Career Prospects</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={styles.tableTd} data-label="Course">Mechanical Engineering</td>
                <td style={styles.tableTd} data-label="Duration">4 Years</td>
                <td style={styles.tableTd} data-label="Top Countries">Germany, USA, Canada</td>
                <td style={styles.tableTd} data-label="Career Prospects">Mechanical Engineer, Project Manager</td>
              </tr>
              <tr>
                <td style={styles.tableTd} data-label="Course">Data Science & AI</td>
                <td style={styles.tableTd} data-label="Duration">2-3 Years</td>
                <td style={styles.tableTd} data-label="Top Countries">USA, Netherlands, Singapore</td>
                <td style={styles.tableTd} data-label="Career Prospects">Data Scientist, AI Engineer</td>
              </tr>
              <tr>
                <td style={styles.tableTd} data-label="Course">Civil & Environmental Engineering</td>
                <td style={styles.tableTd} data-label="Duration">4 Years</td>
                <td style={styles.tableTd} data-label="Top Countries">Canada, Germany, UK</td>
                <td style={styles.tableTd} data-label="Career Prospects">Civil Engineer, Environmental Consultant</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Business & Management */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Business & Management</h2>
        <p><strong style={styles.strong}>Why It’s Popular:</strong></p>
        <ul style={styles.list}>
          <li>Global business environment is expanding, requiring skilled managers and strategists.</li>
          <li>Practical exposure through internships, live projects, and networking opportunities.</li>
        </ul>
        <p><strong style={styles.strong}>Top Courses:</strong></p>
        <ul style={styles.list}>
          <li>MBA (Finance, Marketing, HR, International Business)</li>
          <li>Business Analytics</li>
          <li>Entrepreneurship & Innovation</li>
          <li>Supply Chain & Logistics Management</li>
        </ul>
        <p><strong style={styles.strong}>Career Prospects:</strong> Business Analyst, Marketing Manager, Financial Consultant, Supply Chain Manager</p>
      </section>

      {/* Data Science & AI */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Data Science & Artificial Intelligence</h2>
        <p><strong style={styles.strong}>Why It’s Popular:</strong></p>
        <ul style={styles.list}>
          <li>Companies worldwide need data-driven decision-making.</li>
          <li>Growing demand for AI, machine learning, and data analytics experts.</li>
        </ul>
        <p><strong style={styles.strong}>Top Courses:</strong></p>
        <ul style={styles.list}>
          <li>Data Science & Analytics</li>
          <li>Artificial Intelligence & Machine Learning</li>
          <li>Big Data Management</li>
          <li>Business Analytics</li>
        </ul>
        <p><strong style={styles.strong}>Career Prospects:</strong> Data Scientist, AI Engineer, Business Analyst, Machine Learning Developer</p>
      </section>

      {/* FAQs */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>FAQs</h2>
        <ul style={styles.list}>
          <li><strong>Q1:</strong> Which courses are in highest demand globally?<br/>
              <strong>A:</strong> Engineering, Data Science, Business, Healthcare, and Hospitality are among the top globally in 2025.</li>
          <li><strong>Q2:</strong> Can I switch courses after starting abroad?<br/>
              <strong>A:</strong> Some universities allow course changes or interdisciplinary electives, but it depends on university policies.</li>
          <li><strong>Q3:</strong> Do popular courses have scholarships?<br/>
              <strong>A:</strong> Yes, many universities provide merit-based scholarships for high-demand courses.</li>
          <li><strong>Q4:</strong> How to choose a course that ensures career growth?<br/>
              <strong>A:</strong> Analyze global industry trends, personal interests, and employability prospects with expert guidance.</li>
        </ul>
      </section>

      {/* Consultancy Angle */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Consultancy Angle</h2>
        <p>Our consultancy helps students:</p>
        <ul style={styles.list}>
          <li>Choose trending and high-demand courses abroad</li>
          <li>Guide with admissions, scholarships, and career pathways</li>
          <li>Provide insights on global industry trends and course relevance</li>
          <li>Support with pre-departure guidance and relocation</li>
        </ul>
        <p style={styles.ctaText}>
          “Looking to study a high-demand course abroad in 2025? Our experts guide you in selecting the right course, university, and scholarship opportunities for a successful international career. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
};

export default PopularCourses;
