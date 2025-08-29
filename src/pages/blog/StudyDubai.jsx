// src/pages/WhyDubai.jsx
import React from "react";

const WhyDubai = () => {
  const styles = {
    page: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      lineHeight: 1.6,
      color: "#333",
      backgroundColor: "#f9fafc",
      padding: "40px 20px",
      // maxWidth: "1000px",
      
    },
    hero: {
      position: "relative",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "350px",
      borderRadius: "15px",
      marginBottom: "40px",
    },
    heroOverlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      textAlign: "center",
      padding: "0 20px",
      borderRadius: "15px",
    },
    heroTitle: {
      fontSize: "2.5rem",
      fontWeight: "700",
      marginBottom: "10px",
    },
    heroSubtitle: {
      fontSize: "1.25rem",
      fontWeight: "400",
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
    paragraph: {
      marginBottom: "15px",
      color: "#444",
    },
    gridList: {
      listStyle: "none",
      padding: 0,
      display: "grid",
      gridTemplateColumns: "1fr",
      rowGap: "12px",
    },
    tip: {
      marginTop: "12px",
      fontStyle: "italic",
      color: "#2c3e50",
      backgroundColor: "#eaf4ff",
      padding: "10px 15px",
      borderRadius: "8px",
      borderLeft: "6px solid #3498db",
    },
    compareTable: {
      width: "100%",
      borderCollapse: "collapse",
      marginTop: "15px",
      borderRadius: "10px",
      overflow: "hidden",
      boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
      backgroundColor: "#fff",
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
    ctaButton: {
      backgroundColor: "#3498db",
      color: "#fff",
      padding: "12px 25px",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "600",
      marginTop: "15px",
    },
    faqQuestion: {
      fontWeight: "600",
      marginBottom: "5px",
    },
    faqAnswer: {
      marginBottom: "12px",
    },
  };

  return (
    <div style={styles.page}>
      {/* Hero */}
      <section style={{ ...styles.hero, backgroundImage: `url('/assets/destinations/dubai.jpg')` }}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>Why Study in Dubai?</h1>
          <p style={styles.heroSubtitle}>Dubai – The Rising Hub for International Students</p>
        </div>
      </section>

      {/* Introduction */}
      <section style={styles.section}>
        <p style={styles.paragraph}>
          Dubai has quickly become a prime destination for international students. Known for its modern infrastructure,
          thriving economy, and global business environment, Dubai offers a unique combination of quality education and
          career opportunities. For students seeking a dynamic learning environment with multicultural exposure,
          Dubai is a top choice.
        </p>
      </section>

      {/* Why Dubai */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Why Dubai is Becoming a Top Study Destination</h2>
        <ul style={styles.gridList}>
          <li><strong>Strategic Location</strong> – Gateway between Europe, Asia, and Africa.</li>
          <li><strong>Modern Infrastructure</strong> – Smart campuses, labs, and libraries.</li>
          <li><strong>Multicultural Environment</strong> – 200+ nationalities study here.</li>
          <li><strong>Career Opportunities</strong> – Hub for finance, tech, and business.</li>
        </ul>
      </section>

      {/* Universities */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Top Universities in Dubai</h2>
        <ul style={styles.gridList}>
          <li>University of Dubai – Business, IT, and Management.</li>
          <li>Heriot-Watt University Dubai – Engineering, Business, Data Science.</li>
          <li>Canadian University Dubai – Business, Engineering, Media Studies.</li>
          <li>American University in Dubai – Liberal Arts, Business, Architecture.</li>
          <li>Murdoch University Dubai – IT, Business, and Media.</li>
        </ul>
        <p style={styles.tip}>Tip: Many universities follow international curricula, ensuring global recognition.</p>
      </section>

      {/* Courses */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Popular Courses in Dubai</h2>
        <ul style={styles.gridList}>
          <li>Business & Management – MBA, Finance, Marketing, Supply Chain</li>
          <li>Engineering & IT – CS, Data Science, Mechanical, Electrical</li>
          <li>Hospitality & Tourism – Hotel & Event Management, Culinary Arts</li>
          <li>Media & Communication – Journalism, Digital Media, Marketing</li>
          <li>Design & Architecture – Fashion, Interior Design, Urban Planning</li>
        </ul>
        <p style={styles.tip}>Tip: Dubai’s booming sectors like tech, finance, and hospitality make these courses highly relevant.</p>
      </section>

      {/* Cost */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Cost of Studying in Dubai</h2>
        <table style={styles.compareTable}>
          <thead>
            <tr>
              <th style={styles.tableTh}>University / Course Type</th>
              <th style={styles.tableTh}>Tuition Fee (per year)</th>
              <th style={styles.tableTh}>Living Costs (per month)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={styles.tableTd}>Public / Government-affiliated</td>
              <td style={styles.tableTd}>AED 25,000 – 50,000</td>
              <td style={styles.tableTd}>AED 2,500 – 3,500</td>
            </tr>
            <tr>
              <td style={styles.tableTd}>Private / International Branch</td>
              <td style={styles.tableTd}>AED 50,000 – 100,000</td>
              <td style={styles.tableTd}>AED 3,000 – 4,500</td>
            </tr>
          </tbody>
        </table>
        <p style={styles.tip}>Tip: Scholarships and early-bird discounts can significantly reduce tuition fees.</p>
      </section>

      {/* Scholarships */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Scholarships & Financial Support</h2>
        <ul style={styles.gridList}>
          <li>Merit-based and need-based scholarships available</li>
          <li>Examples: University of Dubai Merit Scholarship, Heriot-Watt Dubai Awards</li>
          <li>Government and private sponsorships also accessible</li>
        </ul>
      </section>

      {/* Student Life */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Student Life & Networking Opportunities</h2>
        <ul style={styles.gridList}>
          <li>Diverse student community – 200+ nationalities</li>
          <li>Extracurriculars – Sports, clubs, cultural festivals</li>
          <li>Industry exposure – Internships with MNCs</li>
          <li>Entrepreneurship competitions and innovation hubs</li>
        </ul>
      </section>

      {/* Work */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Part-Time Work & Internships</h2>
        <p style={styles.paragraph}>
          Students are allowed to work part-time alongside their studies. Dubai hosts numerous internship opportunities
          in finance, IT, media, and hospitality, helping students gain practical experience and supplement income.
        </p>
      </section>

      {/* FAQs */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>FAQs</h2>
        <div>
          {[
            { q: "Are degrees from Dubai universities recognized internationally?", a: "Yes, many Dubai universities follow international curricula and have global accreditation." },
            { q: "Can I work while studying in Dubai?", a: "Yes, part-time work is allowed, and universities often provide internship opportunities." },
            { q: "Are scholarships available for Indian students?", a: "Yes, most universities offer merit-based scholarships and financial aid for international students." },
            { q: "How much does it cost to study and live in Dubai?", a: "Tuition ranges from AED 25,000 – 100,000 per year, with living costs around AED 2,500 – 4,500 per month." },
          ].map((item, idx) => (
            <div key={idx}>
              <p style={styles.faqQuestion}>Q{idx+1}: {item.q}</p>
              <p style={styles.faqAnswer}>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Consultancy CTA */}
      <section style={styles.section}>
        <h2 style={styles.headingSecondary}>Dreaming of Studying in Dubai?</h2>
        <p style={styles.paragraph}>Our experts guide you in choosing the best university, securing scholarships, and completing your application smoothly.</p>
        <button style={styles.ctaButton}>Book Your Free Consultation</button>
      </section>
    </div>
  );
};

export default WhyDubai;
