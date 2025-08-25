// src/pages/StudentVisaInterview.jsx
import React from "react";

const StudentVisaInterview = () => {
  const styles = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "#f9fafc",
      padding: "40px 20px",
      maxWidth: "1000px",
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
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
      backgroundColor: "#fff",
      minWidth: "400px", // ensures horizontal scroll on small screens
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

  const questions = [
    "Why do you want to study abroad?",
    "Why did you choose this particular country/university/course?",
    "What are your future career plans after completing the course?",
    "How do you plan to fund your education?",
    "Do you have family or relatives in the country?",
    "Why not study in your home country?",
    "Do you intend to return to your home country after studies?",
    "What is your academic background and achievements?",
    "How will this course benefit your career?",
    "Are you aware of the living costs and accommodation in the country?",
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.headingPrimary}>Common Student Visa Interview Questions and How to Prepare</h1>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Introduction</h2>
        <p>
          Securing a student visa is a critical step in studying abroad. Visa officers often assess 
          whether a candidate is genuine, prepared, and financially capable. Understanding common 
          questions and preparation strategies can significantly improve your chances of approval.
        </p>
      </section>

      {/* Questions Table */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Common Student Visa Interview Questions</h2>
        <div style={styles.tableWrapper}>
          <table style={styles.compareTable}>
            <thead>
              <tr>
                <th style={styles.tableTh}>Question No.</th>
                <th style={styles.tableTh}>Question</th>
              </tr>
            </thead>
            <tbody>
              {questions.map((q, idx) => (
                <tr key={idx}>
                  <td style={styles.tableTd} data-label="Question No.">{idx + 1}</td>
                  <td style={styles.tableTd} data-label="Question">{q}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Preparation Tips */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Tips to Prepare for the Interview</h2>
        <ul style={styles.list}>
          <li><strong style={styles.strong}>Be Honest and Confident:</strong> Give clear and truthful answers; avoid memorized scripts.</li>
          <li><strong style={styles.strong}>Know Your Course and University:</strong> Research curriculum, specializations, and faculty; understand how it aligns with your goals.</li>
          <li><strong style={styles.strong}>Prepare Financial Proof:</strong> Keep bank statements, scholarship letters, and financial guarantees ready.</li>
          <li><strong style={styles.strong}>Highlight Career Plans:</strong> Explain how the course contributes to long-term goals and show intent to return or gain experience.</li>
          <li><strong style={styles.strong}>Practice Common Questions:</strong> Conduct mock interviews with mentors or consultants; focus on clarity, brevity, and confidence.</li>
          <li><strong style={styles.strong}>Maintain Proper Documentation:</strong> Carry all original documents and copies neatly organized (transcripts, admission letters, financial proof, passport, ID).</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Common Mistakes to Avoid</h2>
        <ul style={styles.list}>
          <li>Providing vague or generic answers</li>
          <li>Showing uncertainty about your course or university</li>
          <li>Appearing overly nervous or unprepared</li>
          <li>Submitting incomplete or incorrect documents</li>
          <li>Mentioning intention to work illegally or overstay</li>
        </ul>
      </section>

      {/* Country Specific */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Country-Specific Tips</h2>
        <ul style={styles.list}>
          <li><strong style={styles.strong}>USA/Canada:</strong> Focus on ties to home country and career goals.</li>
          <li><strong style={styles.strong}>UK/Ireland:</strong> Be clear about course choice and post-study plans.</li>
          <li><strong style={styles.strong}>Europe (Germany, France, Netherlands):</strong> Highlight language readiness and integration plans.</li>
          <li><strong style={styles.strong}>Australia/New Zealand:</strong> Emphasize financial stability and genuine student intent.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>FAQs</h2>
        <ul style={styles.list}>
          <li><strong>Q1:</strong> How long does a student visa interview take?<br/>
              <strong>A:</strong> Typically 10–30 minutes, depending on the country and complexity of your application.</li>
          <li><strong>Q2:</strong> Can I get rejected if I’m nervous?<br/>
              <strong>A:</strong> Nervousness is natural, but confidence and clear answers are key. Practice helps.</li>
          <li><strong>Q3:</strong> Do I need to carry original documents?<br/>
              <strong>A:</strong> Yes, all original documents and certified copies are usually required.</li>
          <li><strong>Q4:</strong> Can a consultancy help me prepare for visa interviews?<br/>
              <strong>A:</strong> Yes, consultants provide mock interviews, document checks, and guidance on answering questions confidently.</li>
        </ul>
      </section>

      {/* Consultancy */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Consultancy Angle</h2>
        <p>Our consultancy helps students:</p>
        <ul style={styles.list}>
          <li>Conduct mock visa interviews with expert feedback</li>
          <li>Organize and verify all required documentation</li>
          <li>Guide on answering questions effectively and confidently</li>
          <li>Provide country-specific interview preparation to maximize approval chances</li>
        </ul>
        <p style={styles.ctaText}>
          “Worried about your student visa interview? Let our experts help you prepare, organize documents, and answer questions confidently to secure your visa. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
};

export default StudentVisaInterview;
