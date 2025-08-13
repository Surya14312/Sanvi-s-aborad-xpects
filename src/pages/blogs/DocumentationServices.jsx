import React from "react";
import { Link } from "react-router-dom";

const Documentation = () => {
  return (
    <div className="career-container">
      {/* Hero Section */}
      <section className="career-hero">
        <div className="career-hero-text">
          <h1>Documentation Services</h1>
          <p>
            We provide professional documentation services tailored for visa
            applications, university admissions, career advancement, and more.
            Let your documents speak for your potential.
          </p>
        </div>
        <img
          src="/assets/documentation-banner.jpg"
          alt="Documentation Services"
          className="career-banner-img"
        />
      </section>

      {/* Info Sections */}
      <section className="career-info">
        <h2>Our Expertise</h2>
        <p>
          Our documentation team ensures clarity, professionalism, and precision
          across a wide range of formats. Whether you're applying to a
          university, submitting a visa application, or preparing a business
          proposal — we’ve got you covered.
        </p>
      </section>

      <section className="career-info">
        <h2>Types of Documentation</h2>
        <ul>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LOR)</li>
          <li>Resume & CV Writing</li>
          <li>Cover Letters</li>
          <li>Visa Application Documents</li>
          <li>Project Reports & Research Abstracts</li>
        </ul>
      </section>

      <section className="career-info">
        <h2>Key Benefits</h2>
        <ul>
          <li>Customized to fit each individual's goals</li>
          <li>Reviewed by experts and language professionals</li>
          <li>Fast turnaround and client-friendly revisions</li>
          <li>Confidentiality and quality assurance guaranteed</li>
        </ul>
      </section>

      <section className="career-info">
        <h2>Modern Documentation Trends</h2>
        <p>
          We stay up-to-date with evolving global requirements. Our services
          integrate modern formatting, ATS-friendly layouts, and keyword
          optimization to boost your chances of success.
        </p>
      </section>

      <section className="career-info">
        <h2>How We Deliver</h2>
        <ul>
          <li>Step 1: Share your background and goals</li>
          <li>Step 2: Receive a draft within 48–72 hours</li>
          <li>Step 3: Request edits if needed</li>
          <li>Step 4: Final polished document delivered in PDF/Word</li>
        </ul>
      </section>

      <section className="career-info">
        <h2>Let Your Documents Speak</h2>
        <p>
          Whether you're targeting top universities or leading companies,
          well-prepared documents make all the difference. Reach out to us for
          personalized, professional documentation that reflects your strengths.
        </p>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action" style={{ marginTop: "40px", textAlign: "center" }}>
        <button
          className="apply-button"
          onClick={() => window.location.href = "/contact"}
          style={{
            padding: "12px 28px",
            backgroundColor: "#c91432",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "18px",
            marginRight: "20px",
          }}
        >
          Apply Now
        </button>

        <span style={{ fontSize: "18px" }}>
          Need help?{" "}
          <Link to="/contact" style={{ color: "#c91432", fontWeight: "600" }}>
            Contact Us
          </Link>
        </span>
      </section>
    </div>
  );
};

export default Documentation;
