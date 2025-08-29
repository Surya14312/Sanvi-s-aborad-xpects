import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function NewZealand() {
  return (
    <div className="newzealand-container">
      {/* Hero Section */}
      <section className="newzealand-hero">
        <div className="newzealand-hero-content">
          <h1>Study in New Zealand</h1>
          <p>
            New Zealand is a top choice for international students seeking quality education combined
            with a safe and welcoming environment. Known for innovation, research, and a high standard
            of living, New Zealand’s universities offer globally recognized degrees. Students benefit
            from modern teaching methods, practical exposure, and strong career pathways in various industries.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/newzealand/nz-hero.jpg"
          alt="Study in New Zealand"
          className="newzealand-hero-img"
        />
      </section>

      {/* Quick Stats */}
      <section className="newzealand-glance">
        <h2 className="glance-heading">New Zealand at a Glance</h2>
        <div className="newzealand-stats-grid">
          {[
            "8 Public Universities + Polytechnics & Private Institutions",
            "Tuition Fees: NZD 22,000–40,000/year (~₹11–20 lakh)",
            "Living Costs: NZD 12,000–18,000/year (~₹6–9 lakh)",
            "125,000+ International Students",
            "Language of Instruction: English",
            "Post-Study Work Visa: Up to 3 years",
          ].map((text, index) => (
            <div key={index} className="newzealand-stat-card">{text}</div>
          ))}
        </div>
      </section>

      {/* Why Study in New Zealand */}
      <section className="newzealand-why">
        <h2>Why Choose New Zealand?</h2>
        <ul>
          <li>Globally recognized qualifications with excellent employability.</li>
          <li>Safe, multicultural, and student-friendly environment.</li>
          <li>Strong focus on research, innovation, and hands-on learning.</li>
          <li>Work while studying and post-study work opportunities.</li>
          <li>Short course durations for master’s programs (1–2 years).</li>
          <li>Opportunities in high-demand sectors like IT, Engineering, Healthcare, and Hospitality.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="newzealand-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-medium programs, eliminating language barriers.</li>
          <li>Work up to 20 hours/week during term and full-time during holidays.</li>
          <li>Scholarships available (New Zealand International Scholarships, university-specific awards).</li>
          <li>High demand for skilled professionals in healthcare, IT, engineering, and business sectors.</li>
          <li>Pathways to residency and long-term employment after graduation.</li>
        </ul>
      </section>

     {/* Top Universities */}
<section className="newzealand-universities">
  <h2>Top Universities in New Zealand</h2>
  <div className="universities-grid">
    {[
      { name: "University of Auckland", img: "/assets/newzealand/universities/auckland.jpg" },
      { name: "University of Otago", img: "/assets/newzealand/universities/otago.jpg" },
      { name: "University of Canterbury", img: "/assets/newzealand/universities/canterbury.jpg" },
      { name: "Victoria University of Wellington", img: "/assets/newzealand/universities/victoria.jpg" },
      { name: "University of Waikato", img: "/assets/newzealand/universities/waikato.jpg" },
      { name: "Massey University", img: "/assets/newzealand/universities/massey.jpg" },
      { name: "AUT University", img: "/assets/newzealand/universities/aut.jpg" },
      { name: "Lincoln University", img: "/assets/newzealand/universities/lincoln.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Popular Courses */}
      <section className="newzealand-courses">
        <h2>Popular Courses in New Zealand</h2>
        <div className="course-grid">
          {[
            { name: "Business Administration and Management", img: "/assets/newzealand/courses/business.jpg" },
            { name: "Engineering (Mechanical, Civil, Electrical)", img: "/assets/newzealand/courses/engineering.jpg" },
            { name: "Computer Science and Data Science", img: "/assets/newzealand/courses/computer.jpg" },
            { name: "Hospitality and Tourism Management", img: "/assets/newzealand/courses/hospitality.jpg" },
            { name: "Finance and Accounting", img: "/assets/newzealand/courses/finance.jpg" },
            { name: "Environmental Science and Sustainability", img: "/assets/newzealand/courses/environment.jpg" },
            { name: "Life Sciences and Healthcare", img: "/assets/newzealand/courses/healthcare.jpg" },
            { name: "Education and Social Sciences", img: "/assets/newzealand/courses/education.jpg" },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost of Study & Scholarships */}
      <section className="newzealand-cost">
        <div className="cost-content">
          <div className="cost-text">
            <h2>Cost of Studying and Living</h2>
            <p>
              Undergraduate: NZD 22,000 – 32,000/year (~₹11–16 lakh)<br />
              Postgraduate: NZD 25,000 – 40,000/year (~₹12–20 lakh)<br />
              Living Expenses: NZD 1,000–1,500/month (~₹50,000–75,000)
            </p>
            <h3>Scholarships</h3>
            <ul>
              <li>New Zealand International Scholarships</li>
              <li>University-Specific Merit Awards</li>
            </ul>
          </div>
          <div className="cost-image">
            <img src="/assets/newzealand/scholarship.jpg" alt="Scholarships in New Zealand" />
          </div>
        </div>
      </section>

      {/* Career Prospects */}
      <section className="newzealand-career">
        <h2>Career Prospects in New Zealand</h2>
        <p>
          Major industries: IT, Engineering, Healthcare, Hospitality, Finance, Agriculture.<br />
          Postgraduate students can apply for Post-Study Work Visa for up to 3 years depending on qualification.<br />
          High demand for skilled professionals with international exposure.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="newzealand-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English proficiency test scores (IELTS/TOEFL/PTE)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
          <li>Offer letter from New Zealand university</li>
          <li>Proof of sufficient funds (~NZD 15,000/year for living expenses)</li>
          <li>Health insurance coverage</li>
        </ul>

        <h2>Student Visa for New Zealand</h2>
        <p>
          Type: Student Visa (Immigration New Zealand)<br />
          Requirements: Admission letter, proof of funds, health insurance, passport<br />
          Visa Duration: Covers course duration + 3 months<br />
          Work Rights: Up to 20 hours/week during term, full-time during holidays
        </p>
      </section>

      {/* Student Life */}
      <section className="newzealand-student-life">
  <h2>Student Life in New Zealand</h2>
  <p>
    New Zealand provides a safe, multicultural, and vibrant student experience with internships, 
    networking opportunities, campus events, and the chance to explore stunning natural landscapes.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img src="/assets/newzealand/newzealand-student-life.jpg" alt="Student Life in New Zealand" />
  </div>
</section>


      <EnrollSection country="New Zealand" />

      {/* FAQs */}
      <section className="newzealand-faq">
        <h2>FAQs About Studying in New Zealand</h2>
        <div className="faq-item">
          <h4>Is IELTS mandatory for New Zealand universities?</h4>
          <p>Yes, unless prior education was in English-medium schools recognized by universities.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, up to 20 hours/week during term and full-time during holidays.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in New Zealand after graduation?</h4>
          <p>Yes, through Post-Study Work Visa (1–3 years depending on degree).</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, New Zealand International Scholarships and university-specific merit awards are available.</p>
        </div>
        <div className="faq-item">
          <h4>How much is the cost of living?</h4>
          <p>NZD 1,000–1,500/month (~₹50,000–75,000), depending on location and lifestyle.</p>
        </div>
   <p>“Looking to study in New Zealand? Our consultancy guides Indian students through university selection, scholarship applications, visa processes, and career planning for a smooth study abroad journey.”</p>
      </section>
    </div>
  );
}

export default NewZealand;
