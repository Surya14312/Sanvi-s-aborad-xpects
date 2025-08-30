import React from "react";

const ApplicationProcedure = () => {
  return (
    <div className="application-container">
      {/* Hero Section */}
      <section className="app-hero">
        <div className="hero-text">
          <h1>Application Procedure</h1>
          <p>
            The university application process is one of the most critical stages
            in a student’s study abroad journey. From filling out forms to writing
            compelling essays and preparing required documents, each step must be
            handled carefully. A small mistake can lead to delays or even rejection.
            We provide complete end-to-end guidance to ensure your applications are
            accurate, timely, and impactful.
          </p>
        </div>
        <div className="hero-image">
          <img src="/assets/apply-hero.jpg" alt="Application Process" />
        </div>
      </section>

      {/* Why Important */}
      <section className="app-importance">
        <h2>Why Application Procedure Support is Important</h2>
        <ul>
          <li>
            University applications often require multiple documents (transcripts,
            SOP, LORs, test scores, financial proofs).
          </li>
          <li>
            Each institution has its own guidelines, formats, and deadlines.
          </li>
          <li>Missing even a single requirement may result in rejection.</li>
          <li>
            Competitive admissions demand well-crafted Statements of Purpose (SOPs)
            and Letters of Recommendation (LORs).
          </li>
          <li>
            Students often underestimate the importance of presentation and
            detailing.
          </li>
        </ul>
      </section>

      {/* How We Help */}
      <section className="app-help">
        <h2>How We Help</h2>
        <ul>
          <li>Guiding students through the entire application timeline.</li>
          <li>Preparing a checklist of required documents per university.</li>
          <li>Assisting in drafting and refining SOPs, essays, and resumes.</li>
          <li>Coordinating with recommenders for strong LORs.</li>
          <li>
            Submitting applications on behalf of students where permitted.
          </li>
          <li>
            Tracking application status and ensuring no deadlines are missed.
          </li>
        </ul>
      </section>

      {/* Key Benefits */}
      <section className="app-benefits">
        <h2>Key Benefits for Students</h2>
        <ul>
          <li>Stress-free and streamlined application process.</li>
          <li>Professional guidance for impactful SOPs and essays.</li>
          <li>
            Increased chances of acceptance due to error-free, well-presented
            applications.
          </li>
          <li>
            Save time and effort with organized documentation and tracking.
          </li>
        </ul>
      </section>

      {/* FAQ */}
      <section className="app-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-items">
          {[
            {
              q: "When should I start my university applications?",
              a: "Ideally, 8–12 months before your intended intake.",
            },
            {
              q: "Do you help in writing SOPs and LORs?",
              a: "Yes, we guide you in drafting personalized, plagiarism-free, and impressive documents.",
            },
            {
              q: "What if I miss a deadline?",
              a: "We ensure reminders and tracking, but if a deadline is missed, we guide you with the next available intakes or alternate universities.",
            },
          ].map((item, index) => (
            <div className="faq-card" key={index}>
              <h4>{item.q}</h4>
              <p>{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Line */}
      <section className="closing-quote">
        <p>
          “Applying abroad doesn’t have to be stressful. Let us handle the process
          while you focus on preparing for your new journey.”
        </p>
      </section>
    </div>
  );
};

export default ApplicationProcedure;
