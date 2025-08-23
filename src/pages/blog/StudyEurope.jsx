// src/pages/WhyEurope.jsx
import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const Stat = ({ label, value }) => (
  <div className="stat-card">
    <span className="stat-value">{value}</span>
    <span className="stat-label">{label}</span>
  </div>
);

const Tip = ({ children }) => (
  <div className="tip-box">
    <strong>Tip:</strong> <span>{children}</span>
  </div>
);

export default function WhyEurope() {
  return (
    <HelmetProvider>
      <main className="why-europe">
        <Helmet>
          <title>Why Study in Europe? – Ultimate Guide for 2025 & Beyond</title>
          <meta
            name="description"
            content="Affordable tuition, world-class universities, post-study work visas, and top countries like Germany, France, Netherlands, Italy, Switzerland, and Spain."
          />
        </Helmet>

        {/* Hero */}
        <section className="hero">
          <div className="hero-content">
            <h1>Why Study in Europe? <span>Your Ultimate Guide (2025 & Beyond)</span></h1>
            <p>
              Europe blends high-quality, globally recognized education with rich cultural exposure and excellent post-study career opportunities.
            </p>
            <div className="stats-grid">
              <Stat value="40K+" label="English‑taught programs" />
              <Stat value="27" label="EU countries to explore" />
              <Stat value="€0–€3K" label="Typical public tuition (DE)" />
              <Stat value="1–3 yrs" label="Post‑study work options" />
            </div>
          </div>
        </section>

        <div className="content-wrapper">
          {/* Introduction */}
          <section className="section intro">
            <h2>Introduction</h2>
            <p>
              Europe has long been one of the top destinations for international students...
            </p>
          </section>

          {/* Top Countries */}
          <section className="section top-countries">
            <h2>Top Countries to Study in Europe</h2>
            <ul>
              <li><strong>Germany</strong> – Low or no tuition fees, strong engineering/technical programs.</li>
              <li><strong>France</strong> – Business, arts, culinary; affordable tuition.</li>
              <li><strong>Netherlands</strong> – English‑taught programs, innovation-driven universities.</li>
              <li><strong>Italy</strong> – Arts, fashion, design; rich cultural heritage.</li>
              <li><strong>Switzerland</strong> – Hospitality, finance excellence; global networking.</li>
              <li><strong>Spain</strong> – Vibrant student life, affordable living.</li>
            </ul>
          </section>

          {/* Benefits */}
          <section className="section benefits">
            <h2>Benefits of Studying in Europe</h2>
            <div className="benefits-grid">
              <div className="benefit-card">
                <h3>1) Affordable Education</h3>
                <ul>
                  <li>Many European countries offer tuition‑free or low‑cost programs.</li>
                  <li>Scholarships and grants widely available.</li>
                </ul>
              </div>
              <div className="benefit-card">
                <h3>2) High‑Quality Education</h3>
                <ul>
                  <li>Universities recognized globally.</li>
                  <li>Programs often research‑oriented and practical.</li>
                </ul>
              </div>
              <div className="benefit-card">
                <h3>3) Cultural Diversity & Exposure</h3>
                <ul>
                  <li>Study with peers from around the world and build cross‑cultural skills.</li>
                  <li>Travel easily and experience multiple cultures.</li>
                </ul>
              </div>
              <div className="benefit-card">
                <h3>4) Post‑Study Work Opportunities</h3>
                <ul>
                  <li>Germany, Netherlands, and Ireland offer post‑study work visas.</li>
                </ul>
              </div>
              <div className="benefit-card full-width">
                <h3>5) Global Recognition</h3>
                <ul>
                  <li>Degrees widely accepted worldwide and aligned to international standards.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Popular Courses */}
          <section className="section courses">
            <h2>Popular Courses in Europe</h2>
            <ul className="courses-list">
              <li><strong>Engineering & Technology</strong> – Germany, Netherlands, France</li>
              <li><strong>Business & Management</strong> – UK, France, Switzerland</li>
              <li><strong>Data Science & IT</strong> – Germany, Ireland, Netherlands</li>
              <li><strong>Hospitality & Tourism</strong> – Switzerland, France, Spain</li>
              <li><strong>Arts, Fashion & Design</strong> – Italy, France, UK</li>
              <li><strong>Healthcare & MBBS</strong> – Italy, Poland, Georgia, Spain</li>
            </ul>
            <Tip>When selecting a country, consider the program’s reputation, post‑study work opportunities, and scholarships.</Tip>
          </section>

          {/* Cost Table */}
          <section className="section cost">
            <h2>Cost of Studying in Europe</h2>
            <div className="table-wrapper">
              <table>
                <thead>
                  <tr>
                    <th>Country</th>
                    <th>Average Tuition Fee (per year)</th>
                    <th>Living Costs (per month)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Germany</td><td>€0 – €3,000</td><td>€800 – €1,000</td></tr>
                  <tr><td>France</td><td>€2,000 – €5,000</td><td>€900 – €1,200</td></tr>
                  <tr><td>Netherlands</td><td>€6,000 – €15,000</td><td>€1,000 – €1,400</td></tr>
                  <tr><td>Italy</td><td>€1,500 – €4,000</td><td>€800 – €1,200</td></tr>
                  <tr><td>Switzerland</td><td>CHF 1,000 – 4,000</td><td>CHF 1,500 – 2,500</td></tr>
                  <tr><td>Spain</td><td>€1,500 – €4,000</td><td>€800 – €1,000</td></tr>
                </tbody>
              </table>
            </div>
            <Tip>Tuition fees vary by university and program. Scholarships can significantly reduce costs.</Tip>
          </section>

          {/* Student Life */}
          <section className="section student-life">
            <h2>Student Life & Culture</h2>
            <ul>
              <li>Vibrant city experiences and rich historical exploration.</li>
              <li>Student discounts, cultural events, and seamless travel opportunities.</li>
              <li>Costs vary by city; Zurich, Paris, and Amsterdam are higher than smaller cities.</li>
            </ul>
          </section>

          {/* FAQs */}
          <section className="section faqs">
            <h2>FAQs</h2>
            <div className="faqs-list">
              <details>
                <summary>Which European country is best for Indian students?</summary>
                <p>Germany, Netherlands, France, Italy, and Switzerland are top choices.</p>
              </details>
              <details>
                <summary>Are scholarships available for studying in Europe?</summary>
                <p>Yes. Examples include Erasmus Mundus, DAAD, and French Government Scholarships.</p>
              </details>
              <details>
                <summary>Do I need to know the local language?</summary>
                <p>Many programs are offered in English; local language is optional.</p>
              </details>
              <details>
                <summary>Can I work while studying in Europe?</summary>
                <p>Yes. Most countries allow part‑time work for students, typically up to 20 hours per week.</p>
              </details>
            </div>
          </section>

          {/* CTA */}
          <section className="section cta">
            <h2>Ready to start your European study journey?</h2>
            <p>Our experts help you choose the perfect university, secure scholarships, and guide you every step of the way.</p>
            <div className="cta-buttons">
              <a href="/consultation" className="cta-btn primary">Book Free Consultation</a>
              <a href="/contact" className="cta-btn secondary">Talk to an Advisor</a>
            </div>
          </section>

        </div>
      </main>
    </HelmetProvider>
  );
}
