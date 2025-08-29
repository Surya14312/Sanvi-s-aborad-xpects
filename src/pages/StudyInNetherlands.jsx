    // src/components/StudyInNetherlands.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "./EnrollSection"; // Adjust path if needed

function StudyInNetherlands() {
  return (
    <div className="netherlands-container">

      {/* Hero Section */}
      <section className="netherlands-hero">
        <div className="netherlands-hero-content">
          <h1>Study in Netherlands</h1>
          <p>
            The Netherlands is one of Europe’s top study destinations, known for its innovative teaching style, high-quality education, and strong international orientation. Dutch universities are consistently ranked among the best globally, and the country offers over 2,000 programs taught entirely in English. With a multicultural environment, excellent job opportunities, and a high standard of living, the Netherlands attracts thousands of international students every year.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/netherlands-universities/netherlands-banner.jpg"
          alt="Study in Netherlands"
          className="hero-img"
        />
      </section>

      {/* Netherlands at a Glance */}
      <section className="netherlands-glance">
        <h2>Netherlands at a Glance</h2>
        <ul>
          <li>Number of Universities and Institutions: 50+ (including 13 research universities, 36 universities of applied sciences, and several private institutions)</li>
          <li>Top-ranked Institutions: University of Amsterdam, Delft University of Technology, Utrecht University, Erasmus University Rotterdam, Leiden University</li>
          <li>Tuition Fees (International Students): €6,000 – €20,000/year (~₹5.5–18 lakh depending on program and institution)</li>
          <li>Living Costs: €800 – €1,200/month (~₹70,000 – ₹1 lakh)</li>
          <li>International Students: 115,000+ from 160+ countries</li>
          <li>Language of Instruction: English and Dutch (over 2,000 programs in English)</li>
          <li>Post-Study Work Opportunities: One-year “Orientation Year” visa for job search after graduation</li>
        </ul>
      </section>

      {/* Why Choose Netherlands */}
      <section className="netherlands-why">
        <h2>Why Choose Netherlands?</h2>
        <ol>
          <li>Globally recognized universities with research and applied science focus.</li>
          <li>Wide availability of English-taught programs.</li>
          <li>Affordable tuition compared to the UK and USA.</li>
          <li>One-year post-study Orientation Year visa for job seekers.</li>
          <li>Strong industries in engineering, logistics, agriculture, finance, and IT.</li>
          <li>High standard of living with multicultural and inclusive society.</li>
        </ol>
      </section>

      {/* Benefits for Indian Students */}
      <section className="netherlands-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Opportunity to study in top-ranked universities with affordable tuition.</li>
          <li>Programs with strong focus on practical training and employability.</li>
          <li>High demand for skilled professionals in technology, logistics, and finance.</li>
          <li>Short distance to other European countries for travel and career opportunities.</li>
          <li>Good number of scholarships available for Indian students.</li>
        </ul>
      </section>

      {/* Top Institutions */}
      <section className="netherlands-universities">
        <h2>Top Institutions in Netherlands</h2>
        <div className="uni-list">
          {[
            "University of Amsterdam (UvA)",
            "Delft University of Technology (TU Delft)",
            "Utrecht University",
            "Erasmus University Rotterdam",
            "Leiden University",
            "Vrije Universiteit Amsterdam",
            "Wageningen University & Research",
            "Eindhoven University of Technology",
            "Maastricht University",
          ].map((uni, i) => (
            <div className="uni-card" key={i}>{uni}</div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="netherlands-courses">
        <h2>Popular Courses in Netherlands</h2>
        <div className="course-grid">
          {[
            "Business Administration and Management",
            "Engineering (Civil, Mechanical, Electrical, Aerospace)",
            "Computer Science and Data Science",
            "Logistics and Supply Chain Management",
            "Environmental Science and Sustainability",
            "Agriculture and Food Technology",
            "Finance and Economics",
            "Artificial Intelligence",
            "Law and International Relations",
          ].map((course, i) => (
            <div className="course-card" key={i}>{course}</div>
          ))}
        </div>
      </section>

      {/* Cost of Studying and Living */}
      <section className="netherlands-cost">
        <h2>Cost of Studying and Living</h2>
        <ul>
          <li>Bachelor’s Degrees: €6,000 – €12,000/year (~₹5.5–11 lakh)</li>
          <li>Master’s Degrees: €8,000 – €20,000/year (~₹7.5–18 lakh)</li>
          <li>Living Expenses: €800 – €1,200/month (~₹70,000 – ₹1 lakh) including housing, transport, and food</li>
        </ul>
      </section>

      {/* Career Prospects */}
      <section className="netherlands-career">
        <h2>Career Prospects in Netherlands</h2>
        <ul>
          <li>Major industries: Engineering, Logistics, Finance, Agriculture, IT, Renewable Energy</li>
          <li>Graduates can apply for a one-year Orientation Year visa to look for jobs.</li>
          <li>Employers actively recruit international graduates with specialized skills.</li>
          <li>Cities like Amsterdam, Rotterdam, Eindhoven, and Utrecht offer strong job markets.</li>
        </ul>
      </section>

      {/* Documents Required */}
      <section className="netherlands-documents">
        <h2>Documents Required for University/College Application</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English proficiency test scores (IELTS/TOEFL)</li>
          <li>GRE/GMAT (for certain programs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
        </ul>

        <h2>For Student Visa (MVV/Residence Permit)</h2>
        <ul>
          <li>University admission letter</li>
          <li>Completed visa application form</li>
          <li>Valid passport</li>
          <li>Passport-sized photographs</li>
          <li>Proof of sufficient funds (€950/month for living expenses)</li>
          <li>Health insurance proof</li>
          <li>Tuition fee payment receipt</li>
        </ul>
      </section>

      {/* Student Visa */}
      <section className="netherlands-visa">
        <h2>Student Visa for Netherlands</h2>
        <ul>
          <li>Type: MVV (Entry Visa) and Residence Permit (VVR)</li>
          <li>Requirements: Admission letter, proof of funds, and health insurance</li>
          <li>Visa Duration: Program length (with additional one-year Orientation Year)</li>
          <li>Processing Time: 2–3 months</li>
          <li>Work Rights: Part-time up to 16 hours/week, full-time allowed during summer holidays</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="netherlands-faq">
        <h2>FAQs About Studying in Netherlands</h2>
        <div className="faq-item">
          <h4>Do I need to know Dutch to study in the Netherlands?</h4>
          <p>No, many programs are available in English, but learning Dutch helps with jobs.</p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>Yes, international students can work up to 16 hours per week during term.</p>
        </div>
        <div className="faq-item">
          <h4>What is the Orientation Year visa?</h4>
          <p>It allows graduates to stay in the Netherlands for 1 year to find a job.</p>
        </div>
        <div className="faq-item">
          <h4>Is it expensive to study in the Netherlands?</h4>
          <p>Tuition is lower than in the UK and USA, and scholarships help reduce costs.</p>
        </div>
        <div className="faq-item">
          <h4>Can I settle in the Netherlands after studies?</h4>
          <p>Yes, many students transition from the Orientation Year visa to full-time jobs and residence permits.</p>
        </div>
      </section>

      {/* Enroll Section */}
      <EnrollSection country="Netherlands" />

      {/* Closing Promo */}
      <section className="netherlands-promo">
        <p>
          Looking to study in the Netherlands? From world-class universities to excellent job prospects, our consultancy helps you with admissions, scholarships, and visa applications.
        </p>
      </section>

    </div>
  );
}

export default StudyInNetherlands;
