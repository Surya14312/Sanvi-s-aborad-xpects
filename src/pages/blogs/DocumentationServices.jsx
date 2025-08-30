// src/pages/Documentation.js
import React from "react";
import { Link } from "react-router-dom";


const Documentation = () => {
  return (
    <div className="documentation-container">
      {/* Hero Section */}
      <section className="documentation-hero">
        <div className="documentation-hero-text">
          <h1>Documentation Services</h1>
          <p>
            Accurate documentation is the backbone of every successful study abroad application. From academic transcripts to Statement of Purpose (SOP), Letters of Recommendation (LOR), and financial proofs, each document must be prepared and presented according to university and embassy standards. Our documentation services ensure your application is professional, verified, and impactful.
          </p>
        </div>
        <img
          src="/assets/documentation-banner.jpg"
          alt="Documentation Services"
          className="documentation-banner-img"
        />
      </section>

      {/* Importance Section */}
      <section className="documentation-info">
        <h2>Why Documentation Services Are Important</h2>
        <ul>
          <li>Even small errors in documents can lead to delays or rejection.</li>
          <li>Universities and embassies require documents in a specific format.</li>
          <li>A well-crafted SOP or LOR can make the difference between acceptance and rejection.</li>
          <li>Properly verified documents (HRD, Apostille, Notary) are often mandatory for study visas.</li>
          <li>Properly organized financial and identity documents speed up visa approvals.</li>
        </ul>
      </section>

      {/* How We Help */}
      <section className="documentation-info">
        <h2>How We Help</h2>
        <ul>
          <li>Application Documents: SOP, LORs, Resume/CV, Admission Essays.</li>
          <li>Academic Documents: Transcripts, degree certificates, mark sheets.</li>
          <li>Financial Documents: Bank statements, affidavits, income tax returns.</li>
          <li>Identity Proofs: Passport, photographs, national IDs.</li>
          <li>Editing & Review: Professional review of SOPs, essays, and resumes to highlight strengths.</li>
          <li>Compliance Check: Ensure documents meet university and visa requirements.</li>
        </ul>
      </section>

      {/* Specialized Documentation Support */}
      <section className="documentation-info">
        <h2>Specialized Documentation Support</h2>
        <ul>
          <li>HRD (Human Resource Development) Attestation – Required for verifying educational documents from the issuing state.</li>
          <li>Apostille Services – For countries under the Hague Convention, ensuring international recognition of documents.</li>
          <li>Notary Attestation – Certifying true copies of documents for both universities and visa applications.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="documentation-info">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Hassle-free and complete documentation process.</li>
          <li>Stronger application with professional SOPs and resumes.</li>
          <li>Verified documents that are accepted globally.</li>
          <li>Higher chances of university and visa acceptance.</li>
          <li>Saves time and reduces stress of handling paperwork.</li>
          <li>Expert guidance on financial and supporting documents.</li>
        </ul>
      </section>

      {/* Common Mistakes */}
      <section className="documentation-info">
        <h2>Common Mistakes Students Make (and We Avoid)</h2>
        <ul>
          <li>Submitting incomplete or outdated transcripts.</li>
          <li>SOPs that are generic or copied.</li>
          <li>LORs that don’t highlight relevant strengths.</li>
          <li>Missing mandatory document attestation (HRD/Apostille/Notary).</li>
          <li>Missing deadlines due to poor organization.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="documentation-info">
        <h2>FAQs</h2>
        <p><strong>Q1:</strong> Do I need HRD attestation for all universities?<br />Not all, but many universities and embassies require HRD attestation for degree certificates. We guide you based on the destination country.</p>
        <p><strong>Q2:</strong> What is Apostille, and do I need it?<br />An Apostille certifies your documents for use in countries under the Hague Convention. We help you get this done efficiently.</p>
        <p><strong>Q3:</strong> Will you help with Notary attestation?<br />Yes, we arrange for notarization of required documents to ensure they are legally valid.</p>
        <p><strong>Q4:</strong> Can you prepare my SOPs and LORs?<br />We don’t write them for you, but we edit, review, and guide you to make them strong and authentic.</p>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <button className="apply-button" onClick={() => window.location.href = "/contact"}>
          Apply Now
        </button>
        <span className="contact-link">
          Need help? <Link to="/contact">Contact Us</Link>
        </span>
      </section>

      <p className="documentation-cta">
        “Let us simplify your documentation with HRD attestation, Apostille, Notary, SOPs, LORs, and financial papers — ensuring your application meets every global requirement.”
      </p>
    </div>
  );
};

export default Documentation;
