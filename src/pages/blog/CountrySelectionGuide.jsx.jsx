import React from "react";
import { Link } from "react-router-dom";


function CountrySelectionGuide() {
  return (
    <div className="country-guide-container">
      {/* Page Heading */}
      <h1>How to Choose the Right Country for Your Higher Education</h1>

      {/* Introduction */}
      <section>
        <p>
          Choosing the right country for higher education is one of the most important decisions a student can make.
          It affects your academic growth, career opportunities, and personal development. With numerous options like
          Europe, North America, Asia, and the Middle East, it’s essential to consider multiple factors to make an informed choice.
        </p>
      </section>

      {/* Key Factors */}
      <section>
        <h2>Key Factors to Consider</h2>
        <ul>
          <li>
            <strong>Academic Programs and Course Availability:</strong>
            <ul>
              <li>Look for countries that offer programs aligned with your career goals.</li>
              <li>Example: Engineering in Germany, Business in UK/France, Data Science in Netherlands/Ireland.</li>
              <li>Check curriculum, research opportunities, and global recognition.</li>
            </ul>
          </li>
          <li>
            <strong>Tuition Fees and Scholarships:</strong>
            <ul>
              <li>Europe offers affordable or tuition-free programs in Germany, Poland, and France.</li>
              <li>North America (USA, Canada) offers high-quality education but higher tuition, with scholarship options.</li>
              <li>Consider scholarships, grants, and financial aid opportunities.</li>
            </ul>
          </li>
          <li>
            <strong>Language and Cultural Environment:</strong>
            <ul>
              <li>If you’re fluent in English, countries with English-taught programs are easier to adapt to.</li>
              <li>For non-English countries (Germany, France, Spain), check English-taught options.</li>
              <li>Consider cultural fit and adaptability for a comfortable student life.</li>
            </ul>
          </li>
          <li>
            <strong>Post-Study Work Opportunities:</strong>
            <ul>
              <li>Countries like Germany, Netherlands, Canada, and Ireland offer post-study work visas for 1–3 years.</li>
              <li>Work experience abroad can enhance your career prospects and international exposure.</li>
            </ul>
          </li>
          <li>
            <strong>Cost of Living:</strong>
            <ul>
              <li>Major cities in Europe and North America are expensive, while smaller cities or countries like Poland, Portugal, or Vietnam are more affordable.</li>
              <li>Include rent, food, transportation, and healthcare in your budget.</li>
            </ul>
          </li>
          <li>
            <strong>Safety and Lifestyle:</strong>
            <ul>
              <li>Research safety, healthcare, and local regulations for international students.</li>
              <li>Student-friendly cities often have efficient public transport, social activities, and support networks.</li>
            </ul>
          </li>
        </ul>
      </section>

      {/* Country Highlights Table */}
      <section>
        <h2>Country-Wise Highlights</h2>
        <table className="country-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Popular Courses</th>
              <th>Key Advantages</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Germany</td><td>Engineering, Data Science</td><td>Affordable, high-quality, post-study work</td></tr>
            <tr><td>UK</td><td>Business, Management, Arts</td><td>Global recognition, diverse culture</td></tr>
            <tr><td>Netherlands</td><td>Data Science, Engineering</td><td>English programs, innovative education</td></tr>
            <tr><td>France</td><td>Business, Hospitality, Arts</td><td>Affordable, scholarships, rich culture</td></tr>
            <tr><td>Canada</td><td>Engineering, Business, IT</td><td>Safe, post-study work, quality education</td></tr>
            <tr><td>Singapore</td><td>Business, Data Science, IT</td><td>Global hub, English-taught, strong job market</td></tr>
            <tr><td>Philippines</td><td>MBBS</td><td>English-taught, NMC-approved, affordable</td></tr>
          </tbody>
        </table>
      </section>

      {/* Step-by-Step Approach */}
      <section>
        <h2>Step-by-Step Approach</h2>
        <ol>
          <li>Identify Your Goals – Shortlist based on your career aspirations and desired field.</li>
          <li>Research Tuition & Living Costs – Compare programs and total expenses.</li>
          <li>Check Language Requirements – Look for English-taught programs if needed.</li>
          <li>Explore Scholarships & Funding – Reduce financial burden with grants.</li>
          <li>Evaluate Post-Study Work Opportunities – Choose countries with job-friendly policies.</li>
          <li>Consider Lifestyle & Culture – Ensure you can adapt comfortably.</li>
          <li>Consult Experts – Seek guidance from study abroad consultants for personalized advice.</li>
        </ol>
      </section>

      {/* FAQs */}
      <section>
        <h2>FAQs</h2>
        <div className="faq-item">
          <strong>Q1: Which country is best for my course?</strong>
          <p>A: It depends on your career goals, budget, language preference, and post-study opportunities.</p>
        </div>
        <div className="faq-item">
          <strong>Q2: Can I study in a country where English is not the main language?</strong>
          <p>A: Yes, many universities offer English-taught programs in Germany, France, Netherlands, and Spain.</p>
        </div>
        <div className="faq-item">
          <strong>Q3: Should I choose a country based on rankings?</strong>
          <p>A: Rankings are important, but personal fit, course relevance, scholarships, and career prospects matter more.</p>
        </div>
        <div className="faq-item">
          <strong>Q4: How can a consultancy help me choose the right country?</strong>
          <p>A: Consultants provide personalized guidance, compare options, and help with admissions and scholarships.</p>
        </div>
      </section>

      {/* Consultancy Callout */}
      <section className="consultancy-callout">
        <blockquote>
          “Confused about which country to choose for your higher education? Our experts provide personalized guidance to help you pick the perfect study destination.”
        </blockquote>
        <div style={{ textAlign: "center", marginTop: "20px" }}>
          <Link to="/contact">
            <button className="apply-btn">Book Your Free Consultation</button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default CountrySelectionGuide;
