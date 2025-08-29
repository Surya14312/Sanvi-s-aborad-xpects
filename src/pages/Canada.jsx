import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Canada() {
  return (
    <div className="canada-container">
      {/* ✅ Hero Section */}
      <section className="canada-hero">
        <div className="canada-hero-content">
          <h1>Study in Canada</h1>
          <p>
            Canada is a top destination for international students due to its high-quality education,
            multicultural society, and safe environment. Canadian universities offer globally recognized
            degrees with strong emphasis on research, innovation, and employability. The country also provides
            excellent post-study work and immigration opportunities, making it ideal for Indian students planning
            long-term careers abroad.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/canada/canada-banner.jpg"
          alt="Study in Canada"
          className="hero-img"
        />
      </section>

      {/* ✅ Canada at a Glance */}
      <section className="canada-glance">
        <h2>Canada at a Glance</h2>
        <ul>
          <li>Number of Universities and Institutions: 100+ universities + 200+ colleges</li>
          <li>Top-ranked Institutions: University of Toronto, University of British Columbia, McGill University, University of Alberta, University of Waterloo</li>
          <li>Tuition Fees (International Students): CAD 15,000 – CAD 35,000/year (~₹10–28 lakh)</li>
          <li>Living Costs: CAD 12,000 – CAD 18,000/year (~₹9.5–14 lakh)</li>
          <li>International Students: 640,000+ from over 180 countries</li>
          <li>Language of Instruction: English and French</li>
          <li>Post-Study Work Opportunities: Post-Graduation Work Permit (PGWP) up to 3 years</li>
        </ul>
      </section>

      {/* ✅ Why Choose Canada */}
      <section className="canada-why">
        <h2>Why Choose Canada?</h2>
        <ul>
          <li>Globally recognized degrees with high employability</li>
          <li>Multicultural and inclusive society</li>
          <li>Strong industries in IT, Engineering, Healthcare, Finance, and Hospitality</li>
          <li>Affordable tuition compared to the USA and UK</li>
          <li>Opportunities for permanent residency through Canadian immigration programs</li>
          <li>Part-time work allowed during studies and post-study work options</li>
        </ul>
      </section>

      {/* ✅ Benefits for Indian Students */}
      <section className="canada-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-medium programs eliminate language barriers</li>
          <li>Post-Graduation Work Permit (PGWP) allows up to 3 years of work</li>
          <li>Scholarships and financial aid are available for meritorious students</li>
          <li>Opportunities to gain Canadian work experience and settle permanently</li>
          <li>Access to world-class research facilities and industry exposure</li>
        </ul>
      </section>
{/* ✅ Top Universities */}
<section className="canada-universities">
  <h2>Top Universities in Canada</h2>
  <div className="university-grid">
    {[
      { name: "University of Toronto", img: "/assets/canada/universities/toronto.jpg" },
      { name: "University of British Columbia (UBC)", img: "/assets/canada/universities/ubc.jpg" },
      { name: "McGill University", img: "/assets/canada/universities/mcgill.jpg" },
      { name: "University of Alberta", img: "/assets/canada/universities/alberta.jpg" },
      { name: "University of Waterloo", img: "/assets/canada/universities/waterloo.jpg" },
      { name: "McMaster University", img: "/assets/canada/universities/mcmaster.jpg" },
      { name: "Queen’s University", img: "/assets/canada/universities/queens.jpg" },
      { name: "University of Montreal", img: "/assets/canada/universities/montreal.jpg" },
    ].map((uni, i) => (
      <div key={i} className="uni-card">
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


     {/* ✅ Popular Courses */}
<section className="canada-courses">
  <h2>Popular Courses in Canada</h2>
  <div className="course-grid">
    {[
      { name: "Engineering (Mechanical, Civil, Electrical, Software)", img: "/assets/canada/courses/engineering.jpg" },
      { name: "Computer Science and Data Science", img: "/assets/canada/courses/computer-science.jpg" },
      { name: "Business Administration and Management", img: "/assets/canada/courses/business.jpg" },
      { name: "Finance and Accounting", img: "/assets/canada/courses/finance.jpg" },
      { name: "Life Sciences and Healthcare", img: "/assets/canada/courses/life-sciences.jpg" },
      { name: "Hospitality and Tourism Management", img: "/assets/canada/courses/hospitality.jpg" },
      { name: "Artificial Intelligence and Robotics", img: "/assets/canada/courses/ai-robotics.jpg" },
      { name: "Law and International Relations", img: "/assets/canada/courses/law.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* ✅ Cost of Studying & Living */}
      <section className="canada-cost">
        <h2>Cost of Studying and Living</h2>
        <ul>
          <li>Undergraduate Tuition Fees: CAD 15,000 – CAD 30,000/year (~₹12–25 lakh)</li>
          <li>Postgraduate Tuition Fees: CAD 18,000 – CAD 35,000/year (~₹14–28 lakh)</li>
          <li>Living Expenses: CAD 12,000–18,000/year (~₹9.5–14 lakh) including accommodation, food, and transport</li>
        </ul>
      </section>

      {/* ✅ Career Prospects */}
      <section className="canada-career">
        <h2>Career Prospects in Canada</h2>
        <ul>
          <li>High demand for skilled professionals in IT, Engineering, Healthcare, Finance, and Business sectors</li>
          <li>PGWP allows international students to gain valuable Canadian work experience</li>
          <li>Opportunities for permanent residency through programs like Express Entry, Provincial Nominee Program (PNP)</li>
          <li>Cities like Toronto, Vancouver, Montreal, and Calgary provide strong employment markets</li>
        </ul>
      </section>

      {/* ✅ Documents Required */}
      <section className="canada-documents">
        <h2>Documents Required (Indians)</h2>
        <h3>For University Application</h3>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English proficiency test scores (IELTS/TOEFL)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
        </ul>

        <h3>For Student Visa Application (Study Permit)</h3>
        <ul>
          <li>Acceptance letter from Canadian institution</li>
          <li>Proof of sufficient funds (~CAD 12,000/year for living expenses)</li>
          <li>Passport copy</li>
          <li>Academic transcripts and English test proof</li>
          <li>Health insurance coverage</li>
          <li>Completed visa application form with biometric data</li>
        </ul>
      </section>

      {/* ✅ Student Visa for Canada */}
      <section className="canada-visa">
        <h2>Student Visa for Canada</h2>
        <ul>
          <li>Type: Study Permit</li>
          <li>Requirements: Acceptance letter, proof of funds, health insurance, passport</li>
          <li>Visa Duration: Program duration + 90 days</li>
          <li>Processing Time: 4–12 weeks</li>
          <li>Work Rights:
            <ul>
              <li>Up to 20 hours/week during term</li>
              <li>Full-time during holidays</li>
              <li>Eligible for PGWP post-graduation</li>
            </ul>
          </li>
        </ul>
      </section>
      <section className="canada-mbbs-student-life">
  <h2>Student Life in Canada</h2>
  <p>
    Canada offers a safe, multicultural, and student-friendly environment with world-class campuses, 
    vibrant cities, and diverse cultural experiences. MBBS students can enjoy internships, networking opportunities, 
    student clubs, and explore Canada’s natural landscapes and urban attractions.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img 
      src="/assets/canada/canada-mbbs-student-life.jpg" 
      alt="Student Life in Canada" 

    />
  </div>
</section>


      {/* ✅ FAQs */}
      <section className="canada-faq">
        <h2>FAQs About Studying in Canada</h2>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, up to 20 hours/week during term and full-time during holidays.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, many universities offer merit-based and need-based scholarships for international students.</p>
        </div>
        <div className="faq-item">
          <h4>How much is living in Canada?</h4>
          <p>CAD 12,000–18,000/year (~₹9.5–14 lakh), including accommodation, food, and transport.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in Canada after graduation?</h4>
          <p>Yes, through Post-Graduation Work Permit (PGWP) for 1–3 years depending on your program.</p>
        </div>
        <div className="faq-item">
          <h4>Is permanent residency possible after studying in Canada?</h4>
          <p>Yes, Canadian work experience can help apply for permanent residency via Express Entry or PNP.</p>
        </div>
      </section>

      {/* ✅ Enroll Section */}
      <EnrollSection country="Canada" />

      {/* ✅ Call to Action */}
      <section className="canada-cta">
        <p>
          Planning to study in Canada? Our consultancy guides Indian students through university selection, 
          scholarship applications, visa processing, and career planning for a successful study abroad experience.
        </p>
        <Link to="/contact" className="apply-btn">
          Get Expert Guidance
        </Link>
      </section>
    </div>
  );
}

export default Canada;
