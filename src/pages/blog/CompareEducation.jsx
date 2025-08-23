// src/pages/CompareEducation.jsx
import React from "react";

export default function CompareEducation() {
  return (
    <div className="compare-education">
      <h1 className="heading-primary">
        Comparing Education Systems – Europe vs. North America vs. Asia
      </h1>

      <section className="section">
        <h2 className="heading-secondary">Introduction</h2>
        <p>
          Choosing the right country for higher education involves understanding how education systems differ globally. 
          Europe, North America, and Asia each have distinct approaches to learning, teaching styles, costs, and career opportunities. 
          Understanding these differences can help students make informed decisions that align with their career goals and budget.
        </p>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Education System in Europe</h2>
        <ul className="list">
          <li><strong>Structure:</strong> Modular and research-oriented, with a mix of theoretical and practical learning.</li>
          <li><strong>Degree Duration:</strong> Bachelor’s (3–4 years), Master’s (1–2 years), PhD (3–4 years).</li>
          <li><strong>Tuition Fees:</strong> Affordable in many countries; some like Germany offer free tuition for public universities.</li>
          <li><strong>Language:</strong> Many English-taught programs available in non-English countries (Germany, Netherlands, France).</li>
          <li><strong>Student Life:</strong> Focus on independence, cultural exposure, and travel opportunities.</li>
        </ul>
        <p><strong>Popular Countries:</strong> Germany, Netherlands, France, Italy, Switzerland</p>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Education System in North America</h2>
        <ul className="list">
          <li><strong>Structure:</strong> Flexible, credit-based system with emphasis on broad-based education and skill development.</li>
          <li><strong>Degree Duration:</strong> Bachelor’s (4 years), Master’s (1–2 years), PhD (4–6 years).</li>
          <li><strong>Tuition Fees:</strong> Higher than Europe; scholarships and assistantships available.</li>
          <li><strong>Language:</strong> Primarily English; easy for Indian students to adapt.</li>
          <li><strong>Student Life:</strong> Vibrant campus culture, internships, and part-time work opportunities.</li>
        </ul>
        <p><strong>Popular Countries:</strong> USA, Canada</p>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Education System in Asia</h2>
        <ul className="list">
          <li><strong>Structure:</strong> Focus on rigorous academics, discipline, and technical skills.</li>
          <li><strong>Degree Duration:</strong> Bachelor’s (3–4 years), Master’s (1–2 years), PhD (3–5 years).</li>
          <li><strong>Tuition Fees:</strong> Moderate to affordable; countries like China, Philippines, Vietnam, and Georgia are cost-effective.</li>
          <li><strong>Language:</strong> Some programs in English; local language may be required for certain courses.</li>
          <li><strong>Student Life:</strong> Opportunities for cultural immersion, internships, and affordable living costs.</li>
        </ul>
        <p><strong>Popular Countries:</strong> Singapore, Philippines, China, Vietnam, Georgia</p>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Key Comparison: Europe vs. North America vs. Asia</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Feature</th>
              <th>Europe</th>
              <th>North America</th>
              <th>Asia</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Feature">Tuition Fees</td>
              <td data-label="Europe">Low to moderate</td>
              <td data-label="North America">High</td>
              <td data-label="Asia">Moderate to low</td>
            </tr>
            <tr>
              <td data-label="Feature">Duration of Bachelor’s</td>
              <td data-label="Europe">3–4 years</td>
              <td data-label="North America">4 years</td>
              <td data-label="Asia">3–4 years</td>
            </tr>
            <tr>
              <td data-label="Feature">Language</td>
              <td data-label="Europe">English-taught & local</td>
              <td data-label="North America">English</td>
              <td data-label="Asia">English-taught & local</td>
            </tr>
            <tr>
              <td data-label="Feature">Teaching Style</td>
              <td data-label="Europe">Research + practical</td>
              <td data-label="North America">Flexible, skill-based</td>
              <td data-label="Asia">Academics + technical focus</td>
            </tr>
            <tr>
              <td data-label="Feature">Post-Study Work Options</td>
              <td data-label="Europe">Good (Germany, Netherlands)</td>
              <td data-label="North America">Excellent (USA, Canada)</td>
              <td data-label="Asia">Moderate (Singapore, China)</td>
            </tr>
            <tr>
              <td data-label="Feature">Cost of Living</td>
              <td data-label="Europe">Moderate</td>
              <td data-label="North America">High</td>
              <td data-label="Asia">Low to moderate</td>
            </tr>
            <tr>
              <td data-label="Feature">Student Life & Exposure</td>
              <td data-label="Europe">Cultural & travel opportunities</td>
              <td data-label="North America">Campus culture & networking</td>
              <td data-label="Asia">Cultural immersion & affordability</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Choosing the Right Education System for You</h2>
        <ul className="list">
          <li><strong>Europe:</strong> Ideal for affordable, high-quality, research-oriented education with global exposure.</li>
          <li><strong>North America:</strong> Best for students seeking flexible learning, internships, and a strong campus experience.</li>
          <li><strong>Asia:</strong> Suitable for cost-effective education, technical skills, and diverse cultural exposure.</li>
        </ul>
        <p className="tip-text">Tip: Consider budget, course preference, career goals, and lifestyle before choosing the system.</p>
      </section>

      <section className="section">
        <h2 className="heading-secondary">FAQs</h2>
        <ul className="list">
          <li><strong>Q:</strong> Which education system is best for Indian students? <br /><strong>A:</strong> It depends on career goals, budget, and preferred learning style. Europe is cost-effective, North America offers flexibility, and Asia is affordable with cultural exposure.</li>
          <li><strong>Q:</strong> Are degrees recognized globally? <br /><strong>A:</strong> Yes, degrees from accredited universities are recognized globally. Check specific country regulations for professional courses.</li>
          <li><strong>Q:</strong> Can I switch countries during my studies? <br /><strong>A:</strong> Some programs allow exchange semesters, but plan carefully to meet credit requirements.</li>
          <li><strong>Q:</strong> How can a consultancy help me? <br /><strong>A:</strong> Consultants provide personalized guidance, compare options, and advise on scholarships, admissions, and visas.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Consultancy Support</h2>
        <ul className="list">
          <li>Compare education systems based on courses, costs, and career prospects</li>
          <li>Shortlist countries and universities matching student goals</li>
          <li>Assist with admissions, applications, and visa guidance</li>
          <li>Provide pre-departure and relocation support</li>
        </ul>
        <p className="cta-text">
          “Not sure which education system suits you best? Our experts analyze your goals, budget, and course preferences to guide you toward the perfect study abroad destination. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
}
