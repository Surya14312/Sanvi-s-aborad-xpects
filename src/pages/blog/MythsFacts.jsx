// src/pages/MythsFacts.jsx
import React from "react";


export default function MythsFacts() {
  return (
    <div className="myths-facts">
      <h1 className="heading-primary">Myths vs. Facts About Studying Abroad</h1>

      <section className="section">
        <h2 className="heading-secondary">Introduction</h2>
        <p>
          Studying abroad is a dream for many students, but it is often surrounded by misconceptions and myths. 
          Understanding the facts can help students make informed decisions, avoid unnecessary stress, and plan their future effectively. 
          This guide addresses the most common myths and clarifies the reality of studying abroad.
        </p>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Common Myths & Facts</h2>

        <div className="myth-item">
          <h3 className="myth-title">Myth: Studying Abroad is Too Expensive</h3>
          <ul className="list">
            <li>Many countries offer affordable education.</li>
            <li>Europe has low or free tuition in countries like Germany, Poland, and France.</li>
            <li>Scholarships, grants, and part-time jobs can further reduce costs.</li>
          </ul>
          <p className="tip">Tip: Proper budgeting and consultancy guidance can make studying abroad cost-effective.</p>
        </div>

        <div className="myth-item">
          <h3 className="myth-title">Myth: You Must Speak the Local Language</h3>
          <ul className="list">
            <li>Many universities offer English-taught programs in non-English countries.</li>
            <li>Countries like Germany, Netherlands, France, Italy, Poland, and Vietnam provide complete programs in English.</li>
            <li>Learning the local language is optional but helpful for cultural integration.</li>
          </ul>
        </div>

        <div className="myth-item">
          <h3 className="myth-title">Myth: Studying Abroad is Only for the Rich</h3>
          <ul className="list">
            <li>Many students finance education through scholarships, educational loans, and assistantships.</li>
            <li>Affordable countries and programs make it accessible to middle-income families.</li>
            <li>Planning and expert guidance can reduce financial strain significantly.</li>
          </ul>
        </div>

        <div className="myth-item">
          <h3 className="myth-title">Myth: Jobs After Graduation are Hard to Find Abroad</h3>
          <ul className="list">
            <li>Countries like Germany, Canada, Netherlands, Ireland, and Dubai offer post-study work visas.</li>
            <li>International students gain practical experience through internships.</li>
            <li>Global exposure enhances career prospects worldwide.</li>
          </ul>
        </div>

        <div className="myth-item">
          <h3 className="myth-title">Myth: Studying Abroad Means Leaving Family Forever</h3>
          <ul className="list">
            <li>Modern communication tools make it easy to stay connected.</li>
            <li>Most programs last 1–6 years; students often return home with international qualifications.</li>
            <li>Cultural exchange and independence build personal growth and confidence.</li>
          </ul>
        </div>

        <div className="myth-item">
          <h3 className="myth-title">Myth: Only High-Ranking Universities are Worth It</h3>
          <ul className="list">
            <li>High-ranking universities are great, but fit and course quality matter more.</li>
            <li>Many mid-tier or specialized universities provide excellent programs, affordable fees, and better practical experience.</li>
          </ul>
        </div>

        <div className="myth-item">
          <h3 className="myth-title">Myth: Student Visa Process is Complicated</h3>
          <ul className="list">
            <li>With the right guidance, visa applications are straightforward.</li>
            <li>Consultants provide step-by-step support, document preparation, and interview coaching.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Example Table of Myths vs Facts (Responsive)</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Myth</th>
              <th>Fact</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Myth">Studying Abroad is Too Expensive</td>
              <td data-label="Fact">Many countries offer affordable education</td>
              <td data-label="Notes">Scholarships, part-time jobs, and low tuition make it feasible</td>
            </tr>
            <tr>
              <td data-label="Myth">You Must Speak the Local Language</td>
              <td data-label="Fact">English-taught programs available</td>
              <td data-label="Notes">Optional local language learning helps cultural integration</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2 className="heading-secondary">FAQs</h2>
        <ul className="list">
          <li><strong>Q:</strong> Is studying abroad really worth it? <br /> <strong>A:</strong> Yes, it offers global exposure, career opportunities, and personal growth that cannot be matched by local education alone.</li>
          <li><strong>Q:</strong> Are scholarships easy to get? <br /> <strong>A:</strong> Many universities offer merit-based and need-based scholarships, and consultancy guidance increases your chances.</li>
          <li><strong>Q:</strong> Can I work while studying abroad? <br /> <strong>A:</strong> Most countries allow part-time work (usually 20 hours/week) and internships to gain experience.</li>
          <li><strong>Q:</strong> Will I face culture shock? <br /> <strong>A:</strong> Cultural adaptation is normal, but orientation programs and support from consultants make transition smooth.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Consultancy Support</h2>
        <ul className="list">
          <li>Debunk myths and provide accurate information</li>
          <li>Guide through university selection, admissions, and visas</li>
          <li>Assist with scholarships, financial planning, and pre-departure support</li>
          <li>Provide continuous support during the study abroad journey</li>
        </ul>
        <p className="cta-text">
          “Confused by myths about studying abroad? Our experts provide clear, personalized guidance to help you plan your international education journey confidently. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
}
