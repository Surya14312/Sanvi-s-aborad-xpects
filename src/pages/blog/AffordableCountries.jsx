// src/pages/AffordableCountries.jsx
import React, { useState } from "react";

const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    color: "#333",
    lineHeight: 1.8,
    background: "#fdfdfd",
    borderRadius: "16px",
    boxShadow: "0 12px 35px rgba(0, 0, 0, 0.08)",
    margin: "60px auto",
    maxWidth: "1100px",
    padding: "0 25px",
    animation: "fadeInUp 1s ease-in-out"
  },
  hero: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "80px 20px",
    background: "linear-gradient(135deg, #36d1dc, #5b86e5)",
    color: "#fff",
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontWeight: 800,
    borderRadius: "16px 16px 0 0",
    position: "relative",
    overflow: "hidden",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    transition: "transform 0.3s ease"
  },
  heroHover: {
    transform: "scale(1.02)"
  },
  section: {
    marginBottom: "60px"
  },
  sectionHeading: {
    fontSize: "1.8rem",
    marginBottom: "20px",
    color: "#222",
    borderLeft: "6px solid #36d1dc",
    paddingLeft: "12px",
    position: "relative"
  },
  paragraph: {
    fontSize: "1.05rem",
    marginBottom: "20px",
    color: "#555"
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    margin: "25px 0 35px",
    fontSize: "0.95rem",
    borderRadius: "12px",
    overflow: "hidden",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.08)"
  },
  thead: {
    background: "linear-gradient(90deg, #36d1dc, #5b86e5)",
    color: "#fff",
    textAlign: "left"
  },
  thTd: {
    padding: "15px 20px",
    textAlign: "left"
  },
  tbodyTr: {
    background: "#f9f9f9",
    transition: "all 0.3s ease",
    cursor: "pointer"
  },
  tbodyTrEven: {
    background: "#ffffff"
  },
  tbodyTrHover: {
    background: "#e0f7ff",
    transform: "scale(1.01)",
    boxShadow: "0 6px 15px rgba(54, 209, 220, 0.2)"
  },
  ul: {
    marginLeft: "25px",
    marginBottom: "25px"
  },
  li: {
    marginBottom: "12px",
    fontSize: "1rem",
    position: "relative",
    paddingLeft: "20px"
  },
  liBefore: {
    content: '"✔"',
    position: "absolute",
    left: 0,
    color: "#36d1dc",
    fontWeight: "bold"
  },
  faqDetails: {
    background: "#fff",
    padding: "15px 20px",
    borderRadius: "10px",
    marginBottom: "12px",
    boxShadow: "0 5px 15px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "transform 0.2s ease"
  },
  faqSummary: {
    fontWeight: 600,
    fontSize: "1rem"
  },
  ctaText: {
    fontWeight: 600,
    color: "#36d1dc",
    fontSize: "1.05rem",
    marginTop: "20px",
    textAlign: "center"
  },
  ctaBtn: {
    display: "inline-block",
    marginTop: "15px",
    padding: "12px 25px",
    borderRadius: "50px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    fontWeight: 600,
    textDecoration: "none",
    transition: "all 0.3s ease"
  },
  ctaBtnHover: {
    transform: "translateY(-3px)",
    opacity: 0.9
  },
  fadeInUp: {
    animation: "fadeInUp 1s ease-in-out"
  }
};

// Fade-in animation keyframes
const fadeInUpStyle = `
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
`;

const AffordableCountries = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  return (
    <div style={styles.container}>
      <style>{fadeInUpStyle}</style>

      <h1 style={styles.hero}>Affordable Countries to Study in Without Compromising Quality</h1>

      {/* Introduction */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Introduction</h2>
        <p style={styles.paragraph}>
          Studying abroad doesn’t have to be expensive. Several countries offer
          high-quality education at affordable costs, making it possible for
          students to pursue international degrees without financial strain.
          This guide highlights the best destinations for budget-friendly,
          globally recognized education.
        </p>
      </section>

      {/* Europe Section */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>Europe – Affordable & High-Quality</h2>
        <table style={styles.table}>
          <thead style={styles.thead}>
            <tr>
              <th style={styles.thTd}>Country</th>
              <th style={styles.thTd}>Tuition Fees (per year)</th>
              <th style={styles.thTd}>Living Costs (per month)</th>
              <th style={styles.thTd}>Highlights</th>
            </tr>
          </thead>
          <tbody>
            {[
              { country: "Germany", tuition: "€0 – €3,000", living: "€800 – €1,000", highlights: "Tuition-free public universities, research opportunities, post-study work visa" },
              { country: "Poland", tuition: "€2,000 – €5,000", living: "€400 – €600", highlights: "NMC-approved MBBS, affordable cost of living, English-taught programs" },
              { country: "France", tuition: "€2,000 – €5,000", living: "€900 – €1,200", highlights: "Business, arts, scholarships for international students" },
              { country: "Portugal", tuition: "€1,500 – €4,000", living: "€600 – €900", highlights: "Growing educational hub, English programs, affordable lifestyle" },
              { country: "Spain", tuition: "€1,500 – €4,000", living: "€800 – €1,000", highlights: "Vibrant student life, research opportunities, cultural exposure" }
            ].map((row, index) => (
              <tr
                key={index}
                style={{
                  ...((index % 2 === 0) ? styles.tbodyTr : styles.tbodyTrEven),
                  ...(hoveredRow === index ? styles.tbodyTrHover : {})
                }}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
              >
                <td style={styles.thTd}>{row.country}</td>
                <td style={styles.thTd}>{row.tuition}</td>
                <td style={styles.thTd}>{row.living}</td>
                <td style={styles.thTd}>{row.highlights}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p style={styles.paragraph}><strong>Tip:</strong> Europe offers tuition-free or low-cost programs, especially in public universities, without compromising on quality.</p>
      </section>

      {/* FAQs */}
      <section style={styles.section}>
        <h2 style={styles.sectionHeading}>FAQs</h2>
        {[
          { q: "Which countries offer the most affordable study abroad programs?", a: "Germany, Poland, France, Portugal, Spain, Philippines, Vietnam, China, and Georgia." },
          { q: "Can I study MBBS affordably abroad?", a: "Yes, countries like Philippines, Poland, Georgia, China, and Vietnam offer English-taught, NMC-approved MBBS programs." },
          { q: "Do affordable countries provide scholarships?", a: "Yes, many universities offer merit-based and need-based scholarships." },
          { q: "Is living cost included in the affordability calculation?", a: "Yes, total affordability considers tuition, accommodation, food, transportation, and healthcare." }
        ].map((item, idx) => (
          <details key={idx} style={styles.faqDetails}>
            <summary style={styles.faqSummary}>{item.q}</summary>
            <p style={styles.paragraph}>{item.a}</p>
          </details>
        ))}
      </section>

      {/* CTA */}
      <section style={styles.section}>
        <p style={styles.ctaText}>
          Want to study abroad without breaking the bank? Discover affordable, high-quality programs with our expert guidance and secure your international education today.
        </p>
        <a href="/contact" style={styles.ctaBtn}>Book Free Consultation</a>
      </section>
    </div>
  );
};

export default AffordableCountries;
