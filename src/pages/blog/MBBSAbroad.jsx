// src/pages/MBBSAbroad.jsx
import React from "react";

export default function MBBSAbroad() {
  // --- Inline Styles ---
  const containerStyle = {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.7",
    color: "#333",
  };

  const headingPrimary = {
    fontSize: "2.5rem",
    textAlign: "center",
    marginBottom: "30px",
    fontWeight: "700",
    color: "#1a73e8",
  };

  const sectionStyle = {
    marginBottom: "50px",
    padding: "25px",
    background: "#f9fafc",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.05)",
  };

  const headingSecondary = {
    fontSize: "1.8rem",
    marginBottom: "15px",
    color: "#0d47a1",
    borderBottom: "3px solid #1a73e8",
    display: "inline-block",
    paddingBottom: "5px",
  };

  const listStyle = {
    paddingLeft: "20px",
    marginTop: "10px",
  };

  const listItem = {
    marginBottom: "10px",
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "15px",
    fontSize: "1rem",
  };

  const thStyle = {
    background: "#1a73e8",
    color: "#fff",
    padding: "12px",
    textAlign: "left",
    border: "1px solid #ddd",
  };

  const tdStyle = {
    padding: "12px",
    border: "1px solid #ddd",
    background: "#fff",
  };

  const ctaText = {
    marginTop: "20px",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#1a73e8",
    background: "#e3f2fd",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 3px 6px rgba(0,0,0,0.08)",
  };

  return (
    <div style={containerStyle}>
      {/* --- Mobile Responsiveness --- */}
      <style>{`
        @media (max-width: 768px) {
          h1 {
            font-size: 1.8rem !important;
            margin-bottom: 20px !important;
          }
          h2 {
            font-size: 1.3rem !important;
          }
          p, li {
            font-size: 0.95rem !important;
          }
          section {
            padding: 15px !important;
            margin-bottom: 25px !important;
          }
          table {
            display: block;
            width: 100% !important;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }
          th, td {
            font-size: 0.9rem !important;
            padding: 8px !important;
          }
          ul {
            padding-left: 15px !important;
          }
          .cta {
            font-size: 1rem !important;
            padding: 15px !important;
          }
        }

        @media (max-width: 480px) {
          h1 {
            font-size: 1.5rem !important;
          }
          h2 {
            font-size: 1.2rem !important;
          }
          p, li {
            font-size: 0.9rem !important;
          }
          table {
            font-size: 0.85rem !important;
          }
        }
      `}</style>

      {/* Main Heading */}
      <h1 style={headingPrimary}>
        MBBS Abroad: Study Medicine in Philippines, Belarus, China, Georgia, and Vietnam
      </h1>

      {/* Introduction */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Introduction</h2>
        <p>
          Pursuing an MBBS degree abroad is a popular choice among Indian students seeking affordable,
          quality medical education. Countries like Philippines, Belarus, China, Georgia, and Vietnam
          offer NMC-approved programs, English-taught courses, and modern facilities. Studying abroad
          not only saves tuition costs but also provides global exposure and career opportunities.
        </p>
      </section>

      {/* Why Choose */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Why Choose These Countries for MBBS?</h2>
        <ul style={listStyle}>
          <li style={listItem}><strong>Affordable Tuition:</strong> Tuition fees are significantly lower than private medical colleges in India.</li>
          <li style={listItem}><strong>NMC Recognition:</strong> Degrees are recognized by the National Medical Commission (NMC) in India.</li>
          <li style={listItem}><strong>English-Taught Programs:</strong> No need to learn the local language initially.</li>
          <li style={listItem}><strong>Modern Infrastructure & Clinical Exposure:</strong> Well-equipped hospitals, labs, and research facilities.</li>
          <li style={listItem}><strong>Cultural Exposure:</strong> Experience diverse cultures while studying medicine.</li>
        </ul>
      </section>

      {/* Country Overview */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Country-Wise Overview</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Tuition Fee (per year)</th>
              <th style={thStyle}>Duration</th>
              <th style={thStyle}>Advantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Philippines</td>
              <td style={tdStyle}>$4,000 – $6,000</td>
              <td style={tdStyle}>5–6 years</td>
              <td style={tdStyle}>English medium, US-based curriculum, global recognition</td>
            </tr>
            <tr>
              <td style={tdStyle}>Belarus</td>
              <td style={tdStyle}>$3,500 – $5,000</td>
              <td style={tdStyle}>6 years</td>
              <td style={tdStyle}>Affordable, European lifestyle, NMC-approved</td>
            </tr>
            <tr>
              <td style={tdStyle}>China</td>
              <td style={tdStyle}>$4,000 – $6,000</td>
              <td style={tdStyle}>6 years</td>
              <td style={tdStyle}>Advanced hospitals, strong research programs</td>
            </tr>
            <tr>
              <td style={tdStyle}>Georgia</td>
              <td style={tdStyle}>$4,000 – $7,000</td>
              <td style={tdStyle}>6 years</td>
              <td style={tdStyle}>English programs, low cost of living, NMC-approved</td>
            </tr>
            <tr>
              <td style={tdStyle}>Vietnam</td>
              <td style={tdStyle}>$4,000 – $6,500</td>
              <td style={tdStyle}>6 years</td>
              <td style={tdStyle}>Affordable, good clinical exposure, English-taught MBBS</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Admission Requirements */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Admission Requirements</h2>
        <ul style={listStyle}>
          <li style={listItem}>Minimum Qualification – 10+2 with Physics, Chemistry, Biology, and English.</li>
          <li style={listItem}>Entrance Exams – Some countries/universities require NEET qualification for Indian students.</li>
          <li style={listItem}>Language Proficiency – English-taught programs may require IELTS/TOEFL for some countries.</li>
          <li style={listItem}>Documents Required – Passport, academic transcripts, NEET scorecard, medical certificate, passport-sized photos, application form.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Benefits of Studying MBBS Abroad</h2>
        <ul style={listStyle}>
          <li style={listItem}>Affordable Education – Low tuition fees compared to private medical colleges in India.</li>
          <li style={listItem}>Global Recognition – Opportunity to work internationally after graduation.</li>
          <li style={listItem}>Quality Clinical Training – Exposure to diverse patient cases in teaching hospitals.</li>
          <li style={listItem}>English-Taught Programs – Smooth transition for Indian students without prior language barriers.</li>
          <li style={listItem}>Career Flexibility – Graduates can pursue PG studies abroad or in India after clearing FMGE/NExT.</li>
        </ul>
      </section>

      {/* Cost of Living */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Cost of Living</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Country</th>
              <th style={thStyle}>Monthly Living Costs</th>
              <th style={thStyle}>Accommodation</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={tdStyle}>Philippines</td>
              <td style={tdStyle}>$300 – $500</td>
              <td style={tdStyle}>Shared hostels / university dorms</td>
            </tr>
            <tr>
              <td style={tdStyle}>Belarus</td>
              <td style={tdStyle}>$250 – $400</td>
              <td style={tdStyle}>Hostels / PG accommodations</td>
            </tr>
            <tr>
              <td style={tdStyle}>China</td>
              <td style={tdStyle}>$400 – $600</td>
              <td style={tdStyle}>University dorms / shared apartments</td>
            </tr>
            <tr>
              <td style={tdStyle}>Georgia</td>
              <td style={tdStyle}>$300 – $500</td>
              <td style={tdStyle}>Hostels / shared apartments</td>
            </tr>
            <tr>
              <td style={tdStyle}>Vietnam</td>
              <td style={tdStyle}>$250 – $400</td>
              <td style={tdStyle}>Shared hostels / dormitories</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* FAQs */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>FAQs</h2>
        <ul style={listStyle}>
          <li style={listItem}><strong>Q:</strong> Are these MBBS degrees valid in India? <br /><strong>A:</strong> Yes, if the university is NMC-approved. Graduates must clear FMGE/NExT to practice in India.</li>
          <li style={listItem}><strong>Q:</strong> Can I pursue PG after MBBS abroad? <br /><strong>A:</strong> Yes, you can apply for PG courses in India or abroad after completing the degree and passing necessary exams.</li>
          <li style={listItem}><strong>Q:</strong> Do I need to know the local language? <br /><strong>A:</strong> Most universities offer English-taught programs; learning local language recommended for clinical practice.</li>
          <li style={listItem}><strong>Q:</strong> What is the total cost for MBBS abroad? <br /><strong>A:</strong> Tuition + living expenses range from $20,000 to $40,000 depending on country and city.</li>
        </ul>
      </section>

      {/* Consultancy */}
      <section style={sectionStyle}>
        <h2 style={headingSecondary}>Consultancy Support</h2>
        <ul style={listStyle}>
          <li style={listItem}>Shortlist NMC-approved universities with affordable fees</li>
          <li style={listItem}>Assist with admission and document preparation</li>
          <li style={listItem}>Guide through visa applications and pre-departure support</li>
          <li style={listItem}>Provide career guidance and PG study options after MBBS</li>
        </ul>
        <p style={{ ...ctaText }} className="cta">
          “Dreaming of becoming a doctor? Secure your MBBS seat abroad in the Philippines, Belarus,
          China, Georgia, or Vietnam with our expert guidance. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
}
