// src/pages/WhyDubai.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
// ✅ Updated for Vite & React 18

const WhyDubai = () => {
  return (
    <div className="why-dubai">
      {/* SEO */}
      <Helmet>
        <title>Why Study in Dubai? | The Rising Hub for International Students</title>
        <meta
          name="description"
          content="Discover why Dubai is a top destination for international students: world-class universities, scholarships, career opportunities, and a multicultural environment."
        />
      </Helmet>

      {/* Hero */}
      <section
        className="hero"
        style={{ backgroundImage: `url('/assets/destinations/dubai.jpg')` }}
      >
        <div className="hero-overlay">
          <h1>Why Study in Dubai?</h1>
          <p>Dubai – The Rising Hub for International Students</p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section intro">
        <p>
          Dubai has quickly become a prime destination for international students. Known for its modern infrastructure,
          thriving economy, and global business environment, Dubai offers a unique combination of quality education and
          career opportunities. For students seeking a dynamic learning environment with multicultural exposure,
          Dubai is a top choice.
        </p>
      </section>

      {/* Why Dubai */}
      <section className="section why">
        <h2>Why Dubai is Becoming a Top Study Destination</h2>
        <ul className="grid-list">
          <li><strong>Strategic Location</strong> – Gateway between Europe, Asia, and Africa.</li>
          <li><strong>Modern Infrastructure</strong> – Smart campuses, labs, and libraries.</li>
          <li><strong>Multicultural Environment</strong> – 200+ nationalities study here.</li>
          <li><strong>Career Opportunities</strong> – Hub for finance, tech, and business.</li>
        </ul>
      </section>

      {/* Universities */}
      <section className="section universities">
        <h2>Top Universities in Dubai</h2>
        <ul className="grid-list">
          <li>University of Dubai – Business, IT, and Management.</li>
          <li>Heriot-Watt University Dubai – Engineering, Business, Data Science.</li>
          <li>Canadian University Dubai – Business, Engineering, Media Studies.</li>
          <li>American University in Dubai – Liberal Arts, Business, Architecture.</li>
          <li>Murdoch University Dubai – IT, Business, and Media.</li>
        </ul>
        <p className="tip">Tip: Many universities follow international curricula, ensuring global recognition.</p>
      </section>

      {/* Courses */}
      <section className="section courses">
        <h2>Popular Courses in Dubai</h2>
        <ul className="grid-list">
          <li>Business & Management – MBA, Finance, Marketing, Supply Chain</li>
          <li>Engineering & IT – CS, Data Science, Mechanical, Electrical</li>
          <li>Hospitality & Tourism – Hotel & Event Management, Culinary Arts</li>
          <li>Media & Communication – Journalism, Digital Media, Marketing</li>
          <li>Design & Architecture – Fashion, Interior Design, Urban Planning</li>
        </ul>
        <p className="tip">Tip: Dubai’s booming sectors like tech, finance, and hospitality make these courses highly relevant.</p>
      </section>

      {/* Cost */}
      <section className="section cost">
        <h2>Cost of Studying in Dubai</h2>
        <div className="table-container">
          <table className="compare-table">
            <thead>
              <tr>
                <th>University / Course Type</th>
                <th>Tuition Fee (per year)</th>
                <th>Living Costs (per month)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="University / Course Type">Public / Government-affiliated</td>
                <td data-label="Tuition Fee (per year)">AED 25,000 – 50,000</td>
                <td data-label="Living Costs (per month)">AED 2,500 – 3,500</td>
              </tr>
              <tr>
                <td data-label="University / Course Type">Private / International Branch</td>
                <td data-label="Tuition Fee (per year)">AED 50,000 – 100,000</td>
                <td data-label="Living Costs (per month)">AED 3,000 – 4,500</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="tip">Tip: Scholarships and early-bird discounts can significantly reduce tuition fees.</p>
      </section>

      {/* Scholarships */}
      <section className="section scholarships">
        <h2>Scholarships & Financial Support</h2>
        <ul className="list">
          <li>Merit-based and need-based scholarships available</li>
          <li>Examples: University of Dubai Merit Scholarship, Heriot-Watt Dubai Awards</li>
          <li>Government and private sponsorships also accessible</li>
        </ul>
      </section>

      {/* Student Life */}
      <section className="section student-life">
        <h2>Student Life & Networking Opportunities</h2>
        <ul className="grid-list">
          <li>Diverse student community – 200+ nationalities</li>
          <li>Extracurriculars – Sports, clubs, cultural festivals</li>
          <li>Industry exposure – Internships with MNCs</li>
          <li>Entrepreneurship competitions and innovation hubs</li>
        </ul>
      </section>

      {/* Work */}
      <section className="section work">
        <h2>Part-Time Work & Internships</h2>
        <p>
          Students are allowed to work part-time alongside their studies. Dubai hosts numerous internship opportunities
          in finance, IT, media, and hospitality, helping students gain practical experience and supplement income.
        </p>
      </section>

      {/* FAQs */}
      <section className="section faqs">
        <h2>FAQs</h2>
        <div className="faqs-list">
          <div>
            <p className="faq-question">Q1: Are degrees from Dubai universities recognized internationally?</p>
            <p>A: Yes, many Dubai universities follow international curricula and have global accreditation.</p>
          </div>
          <div>
            <p className="faq-question">Q2: Can I work while studying in Dubai?</p>
            <p>A: Yes, part-time work is allowed, and universities often provide internship opportunities.</p>
          </div>
          <div>
            <p className="faq-question">Q3: Are scholarships available for Indian students?</p>
            <p>A: Yes, most universities offer merit-based scholarships and financial aid for international students.</p>
          </div>
          <div>
            <p className="faq-question">Q4: How much does it cost to study and live in Dubai?</p>
            <p>A: Tuition ranges from AED 25,000 – 100,000 per year, with living costs around AED 2,500 – 4,500 per month.</p>
          </div>
        </div>
      </section>

      {/* Consultancy CTA */}
      <section className="section consultancy">
        <h2>Dreaming of Studying in Dubai?</h2>
        <p>Our experts guide you in choosing the best university, securing scholarships, and completing your application smoothly.</p>
        <button>Book Your Free Consultation</button>
      </section>
    </div>
  );
};

export default WhyDubai;
