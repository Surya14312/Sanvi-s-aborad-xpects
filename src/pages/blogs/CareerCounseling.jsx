import React from "react";
import { Link } from "react-router-dom";
import careerData from "../careerContent";

const Section = ({ title, children }) => (
  <section className="career-info">
    <h2>{title}</h2>
    {children}
  </section>
);

const CareerCounseling = () => {
  return (
    <div className="career-container">
      {/* Hero */}
      <section className="career-hero">
        <div className="career-hero-text">
          <h1>{careerData.hero.title}</h1>
          <p>{careerData.hero.subtitle}</p>
          <Link to="/apply" className="apply-button">
            {careerData.hero.cta}
          </Link>
        </div>
        <img
          src={careerData.hero.image}
          alt="Career Counseling"
          className="career-banner-img"
        />
      </section>

      {/* What is Career Counseling */}
      <Section title={careerData.whatIs.title}>
        <p>{careerData.whatIs.description}</p>
      </Section>

      {/* Why Important */}
      <Section title={careerData.whyImportant.title}>
        <ul>
          {careerData.whyImportant.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </Section>

      {/* Other Sections (including FAQs) */}
      {careerData.sections.map((sec, idx) => (
        <Section key={idx} title={sec.title}>
          {sec.content.map((item, pIdx) =>
            item.question && item.answer ? (
              <div key={pIdx} className="faq-item">
                <p><strong>{item.question}</strong></p>
                <p>{item.answer}</p>
              </div>
            ) : (
              <p key={pIdx}>{item}</p>
            )
          )}
        </Section>
      ))}

      {/* Contact */}
      <section className="contact-section">
        <p>
          {careerData.contact.text}{" "}
          <Link to="/contact" className="contact-link">
            {careerData.contact.linkText}
          </Link>
        </p>
      </section>
    </div>
  );
};

export default CareerCounseling;
