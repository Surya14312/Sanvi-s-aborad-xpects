import React from "react";
import { Link } from "react-router-dom";
import courseSelectionContent from "./CourseSelectionContent.jsx"; // adjust path if needed

const CourseSelection = () => {
  const { hero, whatIs, whyImportant, sections, contact } =
    courseSelectionContent;

  return (
    <div className="career-container">
      {/* ===============================
          Hero Section
      =============================== */}
      <section className="career-hero">
        <div className="career-hero-text">
          <h1>{hero.title}</h1>
          <p>{hero.subtitle}</p>
          <Link to="/apply" className="apply-button">
            {hero.cta}
          </Link>
        </div>
        <img
          src={hero.image}
          alt="Course Selection Abroad"
          className="career-banner-img"
        />
      </section>

      {/* ===============================
          Intro Section
      =============================== */}
      <section className="career-info">
        <h2>{whatIs.title}</h2>
        <p>{whatIs.description}</p>
      </section>

      {/* ===============================
          Why Course Selection Matters
      =============================== */}
      <section className="career-info">
        <h2>{whyImportant.title}</h2>
        <ul>
          {whyImportant.points.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </section>

      {/* ===============================
          Dynamic Sections (How We Help, Key Benefits, FAQs)
      =============================== */}
      {sections.map((sec, index) => (
        <section key={index} className="career-info">
          <h2>{sec.title}</h2>
          {sec.title === "FAQs" ? (
            <div className="faq-list">
              {sec.content.map((faq, idx) => {
                const [q, a] = faq.split("\n");
                return (
                  <div key={idx} className="faq-item">
                    <h4>{q}</h4>
                    <p>{a}</p>
                  </div>
                );
              })}
            </div>
          ) : (
            <ul>
              {sec.content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {/* ===============================
          Call-to-Action
      =============================== */}
      <section className="contact-section">
        <p>
          {contact.text}{" "}
          <Link to="/contact" className="contact-link">
            {contact.linkText}
          </Link>
        </p>
        <p> Ready to discover your dream study course?{" "} <Link to="/courses" className="Courses-name">  Explore Courses Details  </Link> </p>
      </section>
    </div>
  );
};

export default CourseSelection;
