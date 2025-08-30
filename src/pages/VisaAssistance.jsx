// src/pages/VisaAssistance.js
import React, { useState } from "react";

const visaData = [
  { country: "UK", checklist: ["CAS Letter", "Valid Passport", "Financial Proof (28-day bank balance)", "IELTS/TOEFL Scorecard", "Academic Transcripts", "TB Test Report", "Online Application Form", "Visa Fee Receipt"] },
  { country: "Canada", checklist: ["Letter of Acceptance", "Passport", "Financial Statements", "Medical Exam", "Police Clearance", "Visa Application Form", "Photographs"] },
  { country: "Singapore", checklist: ["Student Pass Application (SOLAR)", "Passport", "School Offer Letter", "Financial Documents", "Health Examination"] },
  { country: "Ireland", checklist: ["Acceptance Letter", "Passport", "Proof of Funds", "Medical Insurance", "English Language Test Results"] },
  { country: "France", checklist: ["Campus France Registration", "Passport", "Visa Application Form", "Proof of Funds", "Flight and Accommodation Bookings"] },
  { country: "Germany", checklist: ["Admission Letter", "Passport", "Blocked Account Proof", "Health Insurance", "Academic Transcripts", "Language Certificate"] },
  { country: "Switzerland", checklist: ["Acceptance Letter", "Passport", "Proof of Funds", "Travel Insurance", "Accommodation Confirmation"] },
  { country: "Dubai", checklist: ["University Offer Letter", "Passport", "Visa Application Form", "Proof of Funds", "Passport-sized Photos"] },
  { country: "Spain", checklist: ["Admission Letter", "Passport", "Proof of Financial Means", "Medical Certificate", "Health Insurance", "Visa Form"] },
  { country: "Malaysia", checklist: ["EMGS Approval", "Passport", "Medical Exam", "Acceptance Letter", "Visa Form"] },
  { country: "Mauritius", checklist: ["University Admission Letter", "Passport", "Medical Certificate", "Proof of Funds", "Visa Form"] },
  { country: "India", checklist: ["University Admission Letter", "Student Visa Form", "Passport", "Proof of Residence Abroad"] },
  { country: "Netherlands", checklist: ["MVV Visa Application", "Passport", "Proof of Funds", "Health Insurance", "University Acceptance"] },
  { country: "Italy", checklist: ["University Pre-enrollment", "Visa Application Form", "Passport", "Proof of Accommodation", "Proof of Funds"] },
];

const VisaAssistance = () => {
  const [expanded, setExpanded] = useState(null);
  const toggleExpand = (index) => setExpanded(expanded === index ? null : index);

  return (
    <div className="visa-container">
      <section className="visa-hero">
  <div className="visa-hero-image">
    <img 
      src="/assets/visa-hero.jpg"  // <-- Put your hero image in the public/assets folder
      alt="Visa Assistance" 
    />
    <div className="visa-hero-overlay">
      <h1>Visa Assistance</h1>
      <p>
        The student visa is the final and most crucial step in your study abroad journey. Every country has specific requirements, documentation, and interview procedures, and even minor errors can lead to delays or rejection. Our visa assistance services provide expert guidance throughout the process — from preparing documents to interview training — to ensure you secure your visa smoothly.
      </p>
    </div>
  </div>
</section>


      <section className="visa-importance">
        <h2>Why Visa Assistance Is Important</h2>
        <ul>
          <li>Visa rules differ for each country and change frequently.</li>
          <li>Even a small mistake in financial documents can cause rejection.</li>
          <li>Embassy interviews require preparation and confidence.</li>
          <li>Each country has unique health, insurance, and biometric requirements.</li>
          <li>A well-prepared visa file increases approval chances significantly.</li>
        </ul>
      </section>

      <section className="visa-how">
        <h2>How We Help</h2>
        <ul>
          <li>Visa Guidance – Country-specific visa process explained step-by-step.</li>
          <li>Document Preparation – Financial statements, sponsorship letters, insurance, admission proof.</li>
          <li>Mock Interviews – One-on-one training to build confidence for embassy interviews.</li>
          <li>Application Filing – Assistance in filling and submitting visa application forms correctly.</li>
          <li>Visa Fee Guidance – Information on fee payment methods and requirements.</li>
          <li>Updates & Alerts – Stay informed about embassy appointment dates and latest visa rules.</li>
          <li>Post-Visa Guidance – Next steps after visa approval (travel, compliance, reporting).</li>
        </ul>
      </section>

      <section className="visa-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Increased chances of visa approval.</li>
          <li>Stress-free and organized visa preparation.</li>
          <li>Clarity on financial proofs and sponsorship requirements.</li>
          <li>Interview training to reduce nervousness.</li>
          <li>Timely application submission before deadlines.</li>
          <li>Country-specific expertise (USA, UK, Canada, Europe, Asia).</li>
        </ul>
      </section>

      <section className="visa-focus">
        <h2>Key Focus Areas in Visa Assistance</h2>
        <ul>
          <li>Financial Proofs: Showing adequate funds (bank balance, loan, scholarships).</li>
          <li>Ties to Home Country: Guidance on presenting strong ties for visa acceptance.</li>
          <li>Statement of Purpose for Visa: Helping draft a convincing explanation of study goals.</li>
          <li>Travel Insurance Guidance: For countries where it is mandatory (e.g., Schengen visa).</li>
          <li>Medical Test Requirements: Assistance for countries like Australia, New Zealand, UK, Canada.</li>
        </ul>
      </section>

      <section className="visa-mistakes">
        <h2>Common Mistakes Students Make (and We Avoid)</h2>
        <ul>
          <li>Submitting incomplete financial documents.</li>
          <li>Misunderstanding embassy interview questions.</li>
          <li>Missing deadlines for visa applications.</li>
          <li>Providing inconsistent information between university and visa documents.</li>
          <li>Not purchasing proper medical insurance where required.</li>
        </ul>
      </section>

      <section className="visa-faqs">
        <h2>FAQs</h2>
        <p><strong>Q1:</strong> When should I apply for a student visa?<br />
           Ideally, as soon as you receive your admission letter. Each country has specific timelines (e.g., USA – 120 days before, UK – 6 months before).</p>
        <p><strong>Q2:</strong> Do I need to show bank balance for all countries?<br />
           Yes, most countries require proof of funds. The amount varies (e.g., Canada – CAD 20,635, UK – GBP 1,023/month).</p>
        <p><strong>Q3:</strong> Will you help me prepare for the visa interview?<br />
           Yes, we conduct mock interviews to ensure you answer confidently and professionally.</p>
        <p><strong>Q4:</strong> What happens if my visa gets rejected?<br />
           We analyze the rejection reason, correct errors, and guide you for reapplication.</p>
      </section>

      {/* Country-wise Visa Checklist Accordion */}
      <section className="visa-country-section">
        <h2>Country-Wise Visa Document Checklist</h2>
        {visaData.map((item, index) => (
          <div key={index} className="visa-country">
            <button className="visa-toggle" onClick={() => toggleExpand(index)}>
              {item.country}
            </button>
            {expanded === index && (
              <ul className="visa-checklist">
                {item.checklist.map((doc, i) => (
                  <li key={i}>{doc}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="visa-conclusion">
        <p>
          “Your dream university is just a visa away. Let us guide you through every step of your visa journey — with expert document support, interview training, and country-specific guidance.”
        </p>
      </section>
    </div>
  );
};

export default VisaAssistance;
