import React from "react";

const ApplicationProcedure = () => {
  return (
    <div className="application-container">
      {/* Hero Section */}
      <section className="app-hero">
        <div className="hero-text">
          <h1>Application Procedure</h1>
          <p>
            Follow our simple and guided application process to begin your
            international education journey with The Sanvi’s Abroad Xperts.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/apply-hero.jpg" alt="Application Process" />
        </div>
      </section>

      {/* Step-by-step Guide */}
      <section className="steps-section">
        <h2>Step-by-Step Process</h2>
        <div className="steps">
          {[
            "Initial Counseling & Profile Evaluation",
            "University & Course Selection",
            "Documentation Assistance",
            "Application Submission",
            "Offer Letter & Acceptance",
            "Visa Documentation & Interview Prep",
            "Accommodation & Pre-departure Support",
          ].map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{index + 1}</div>
              <h3>{step}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Required Documents */}
      <section className="document-list-section">
        <h2>Documents Required</h2>
        <ul className="doc-list">
          <li>Academic Transcripts & Certificates</li>
          <li>Valid Passport</li>
          <li>English Proficiency Test Scores (IELTS, TOEFL, etc.)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LOR)</li>
          <li>Updated Resume/CV</li>
          <li>Passport Size Photographs</li>
          <li>Proof of Funds</li>
        </ul>
      </section>

      {/* Tips */}
      <section className="app-tips">
        <h2>Tips for a Successful Application</h2>
        <ul>
          <li>Start early and research well.</li>
          <li>Tailor your SOP to each university.</li>
          <li>Maintain a checklist to track document submissions.</li>
          <li>Practice mock visa interviews with us.</li>
          <li>Consult our experts at each stage for review and improvement.</li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="app-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {[
            {
              q: "Do I need to appear for IELTS/TOEFL?",
              a: "Most universities require proof of English proficiency. We can guide you based on the destination country.",
            },
            {
              q: "How long does the entire process take?",
              a: "Typically 3 to 6 months, depending on your preparedness and intake deadlines.",
            },
            {
              q: "Can I apply to multiple universities at once?",
              a: "Yes! In fact, we recommend applying to at least 3-5 to maximize your chances.",
            },
          ].map((item, index) => (
            <div className="faq-card" key={index}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ApplicationProcedure;
