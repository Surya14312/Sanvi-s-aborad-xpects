import React, { useState } from "react";

const visaData = [
  {
    country: "UK",
    checklist: [
      "CAS Letter",
      "Valid Passport",
      "Financial Proof (28-day bank balance)",
      "IELTS/TOEFL Scorecard",
      "Academic Transcripts",
      "TB Test Report",
      "Online Application Form",
      "Visa Fee Receipt",
    ],
  },
  {
    country: "Canada",
    checklist: [
      "Letter of Acceptance",
      "Passport",
      "Financial Statements",
      "Medical Exam",
      "Police Clearance",
      "Visa Application Form",
      "Photographs",
    ],
  },
  {
    country: "Singapore",
    checklist: [
      "Student Pass Application (SOLAR)",
      "Passport",
      "School Offer Letter",
      "Financial Documents",
      "Health Examination",
    ],
  },
  {
    country: "Ireland",
    checklist: [
      "Acceptance Letter",
      "Passport",
      "Proof of Funds",
      "Medical Insurance",
      "English Language Test Results",
    ],
  },
  {
    country: "France",
    checklist: [
      "Campus France Registration",
      "Passport",
      "Visa Application Form",
      "Proof of Funds",
      "Flight and Accommodation Bookings",
    ],
  },
  {
    country: "Germany",
    checklist: [
      "Admission Letter",
      "Passport",
      "Blocked Account Proof",
      "Health Insurance",
      "Academic Transcripts",
      "Language Certificate",
    ],
  },
  {
    country: "Switzerland",
    checklist: [
      "Acceptance Letter",
      "Passport",
      "Proof of Funds",
      "Travel Insurance",
      "Accommodation Confirmation",
    ],
  },
  {
    country: "Dubai",
    checklist: [
      "University Offer Letter",
      "Passport",
      "Visa Application Form",
      "Proof of Funds",
      "Passport-sized Photos",
    ],
  },
  {
    country: "Spain",
    checklist: [
      "Admission Letter",
      "Passport",
      "Proof of Financial Means",
      "Medical Certificate",
      "Health Insurance",
      "Visa Form",
    ],
  },
  {
    country: "Malaysia",
    checklist: [
      "EMGS Approval",
      "Passport",
      "Medical Exam",
      "Acceptance Letter",
      "Visa Form",
    ],
  },
  {
    country: "Mauritius",
    checklist: [
      "University Admission Letter",
      "Passport",
      "Medical Certificate",
      "Proof of Funds",
      "Visa Form",
    ],
  },
  {
    country: "India",
    checklist: [
      "University Admission Letter",
      "Student Visa Form",
      "Passport",
      "Proof of Residence Abroad",
    ],
  },
  {
    country: "Netherlands",
    checklist: [
      "MVV Visa Application",
      "Passport",
      "Proof of Funds",
      "Health Insurance",
      "University Acceptance",
    ],
  },
  {
    country: "Italy",
    checklist: [
      "University Pre-enrollment",
      "Visa Application Form",
      "Passport",
      "Proof of Accommodation",
      "Proof of Funds",
    ],
  },
];

const VisaAssistance = () => {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  return (
    <div className="visa-container">
      <section className="visa-hero">
        <h1>Visa Assistance</h1>
        <p>
          At Sanvi’s Abroad Xperts, we provide expert visa guidance and
          personalized support to help you confidently obtain your student visa
          and study abroad with peace of mind.
        </p>
      </section>

      <section className="visa-why">
        <h2>Why Visa Assistance Matters</h2>
        <ul>
          <li>Ensure complete and accurate documentation</li>
          <li>Stay updated with latest embassy guidelines</li>
          <li>Boost visa approval chances with expert help</li>
          <li>Eliminate stress from complex application processes</li>
        </ul>
      </section>

      <section className="visa-services">
        <h2>Our Visa Assistance Services</h2>
        <ul>
          <li><strong>Eligibility Check:</strong> Academic, financial & language score evaluation</li>
          <li><strong>Financial Documentation:</strong> Bank statements, affidavits, ITRs</li>
          <li><strong>Form Filling:</strong> Error-free online/offline visa application</li>
          <li><strong>Appointment Booking:</strong> Embassy/VFS/TLScenter slots</li>
          <li><strong>Mock Interviews:</strong> USA/Germany visa question training</li>
          <li><strong>Visa SOP & Letters:</strong> SOP, sponsor & cover letters</li>
          <li><strong>Fee Guidance:</strong> Help with DDs, bank transfers, online pay</li>
          <li><strong>Final Document Check:</strong> Validity, translation, notarization</li>
          <li><strong>Status Tracking:</strong> Application monitoring & embassy follow-ups</li>
        </ul>
      </section>

      <section className="visa-special">
        <h2>Specialized Visa Support</h2>
        <ul>
          <li>Rejection Case Re-application</li>
          <li>Gap Year Justification Letters</li>
          <li>Spouse/Dependent Visa Guidance</li>
        </ul>
      </section>

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

      <section className="visa-benefits">
        <h2>Why Choose Sanvi’s Abroad Xperts?</h2>
        <ul>
          <li>95%+ visa success rate</li>
          <li>10+ years of visa processing experience</li>
          <li>Country-specific expert teams</li>
          <li>Complete documentation to stamping support</li>
        </ul>
      </section>

      <section className="visa-contact">
        <h2>Book Your Free Visa Consultation</h2>
        <p>
          Email:{" "}
          <a href="mailto:thesanvisacademy@gmail.com">
            thesanvisacademy@gmail.com
          </a>
        </p>
        <p>Phone: +91 9966428787</p>
        <p>Visit your nearest Sanvi’s Abroad Xperts branch today!</p>
      </section>
    </div>
  );
};

export default VisaAssistance;
