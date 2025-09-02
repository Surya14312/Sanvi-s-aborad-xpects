// src/pages/USA.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function USA() {
  return (
    <div className="usa-container">

      {/* Hero Section */}
      <section className="usa-hero">
        <div className="usa-hero-content">
          <h1>Study in USA</h1>
          <p>
            The United States is one of the most popular destinations for international students
            due to its world-class universities, diverse courses, cutting-edge research, and global
            recognition of degrees. The USA offers unmatched opportunities for academic growth,
            internships, and career advancement. Indian students choose the USA for its strong
            emphasis on innovation, entrepreneurship, and multicultural exposure.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img src="/assets/usa/usa-hero.jpg" alt="Study in USA" className="hero-img" />
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
  <h2>USA at a Glance</h2>
  <div className="stats-grid">
    {[
      "4,000+ Universities & Institutions (Ivy League, state universities, private institutions, community colleges)",
      "Tuition Fees: $20,000–60,000/year (~₹16–50 lakh)",
      "Living Costs: $12,000–20,000/year (~₹10–16 lakh)",
      "1 million+ International Students",
      "Language of Instruction: English",
      "Post-Study Work: Optional Practical Training (OPT) 12–36 months",
    ].map((text, index) => (
      <div key={index} className="stat-card">{text}</div>
    ))}
  </div>
</section>


      {/* Why Study in USA */}
      <section className="usa-why">
        <h2>Why Choose USA?</h2>
        <ul>
          <li>Globally recognized degrees with high employability.</li>
          <li>Wide range of programs across STEM, business, arts, and humanities.</li>
          <li>Opportunities for research, internships, and industry collaboration.</li>
          <li>Multicultural environment and diverse student community.</li>
          <li>Access to cutting-edge technology and innovation hubs.</li>
          <li>Flexible curriculum allowing exploration across disciplines.</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="usa-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>High-quality education with exposure to global standards.</li>
          <li>Post-study work opportunities via OPT and STEM OPT extension.</li>
          <li>Scholarships and financial aid for international students.</li>
          <li>Networking with top professionals and global alumni.</li>
          <li>Access to internships and research programs in top industries.</li>
        </ul>
      </section>

     {/* Top Universities */}
<section className="usa-universities">
  <h2>Top Universities in USA</h2>
  <div className="universities-grid">
    {[
      { name: "Harvard University", img: "/assets/usa/universities/harvard.jpg" },
      { name: "Massachusetts Institute of Technology (MIT)", img: "/assets/usa/universities/mit.jpg" },
      { name: "Stanford University", img: "/assets/usa/universities/stanford.jpg" },
      { name: "University of California, Berkeley", img: "/assets/usa/universities/berkeley.jpg" },
      { name: "Princeton University", img: "/assets/usa/universities/princeton.jpg" },
      { name: "University of Chicago", img: "/assets/usa/universities/chicago.jpg" },
      { name: "Columbia University", img: "/assets/usa/universities/columbia.jpg" },
      { name: "Yale University", img: "/assets/usa/universities/yale.jpg" },
      { name: "University of Michigan", img: "/assets/usa/universities/michigan.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

     {/* Popular Courses */}
<section className="usa-courses">
  <h2>Popular Courses in USA</h2>
  <div className="course-grid">
    {[
      { name: "Business Administration and Management", img: "/assets/usa/courses/business.jpg" },
      { name: "Computer Science and Data Science", img: "/assets/usa/courses/computer.jpg" },
      { name: "Engineering (Mechanical, Electrical, Civil, Aerospace)", img: "/assets/usa/courses/engineering.jpg" },
      { name: "Medicine and Healthcare", img: "/assets/usa/courses/medicine.jpg" },
      { name: "Finance and Economics", img: "/assets/usa/courses/finance.jpg" },
      { name: "Hospitality and Tourism Management", img: "/assets/usa/courses/hospitality.jpg" },
      { name: "Arts, Design, and Communication", img: "/assets/usa/courses/arts.jpg" },
      { name: "Law and International Relations", img: "/assets/usa/courses/law.jpg" },
      { name: "Artificial Intelligence and Robotics", img: "/assets/usa/courses/ai.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


     {/* Cost & Scholarships */}
<section className="usa-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying and Living in USA</h2>
      <p>
        Undergraduate Tuition Fees: $25,000–50,000/year (~₹20–40 lakh)<br />
        Postgraduate Tuition Fees: $30,000–60,000/year (~₹24–50 lakh)<br />
        Living Expenses: $12,000–20,000/year (~₹10–16 lakh)
      </p>
      <h3>Scholarships</h3>
      <ul>
        <li>Merit-based and need-based scholarships</li>
        <li>University-specific financial aid</li>
      </ul>
    </div>
    {/* <div>
      <img
        src="/assets/usa/scholarships.jpg"
        alt="Scholarships in USA"
       
     
      />
    </div> */}
  </div>
</section>


      {/* Career Prospects */}
      <section className="usa-career">
        <h2>Career Prospects in USA</h2>
        <p>
          Major industries: IT, Engineering, Finance, Healthcare, Hospitality, Research, and Entrepreneurship.<br />
          Optional Practical Training (OPT) allows students to work for 12 months; STEM graduates can extend to 36 months.<br />
          High demand for skilled professionals in technology, healthcare, and finance sectors.<br />
          Networking opportunities with top multinational companies and startups.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="usa-documents">
        <h2>Documents Required (Indians)</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English proficiency test scores (IELTS/TOEFL)</li>
          <li>GRE/GMAT (for certain programs)</li>
          <li>Statement of Purpose (SOP)</li>
          <li>Letters of Recommendation (LORs)</li>
          <li>CV/Resume</li>
          <li>Passport copy</li>
          <li>I-20 form issued by the university</li>
          <li>DS-160 visa application form</li>
          <li>SEVIS fee receipt</li>
          <li>Visa appointment confirmation</li>
          <li>Proof of sufficient funds</li>
          <li>Passport-sized photographs</li>
        </ul>

        <h2>Student Visa for USA</h2>
        <p>
          Type: F1 Visa (Student Visa)<br />
          Requirements: I-20 form, proof of funds, passport, visa interview<br />
          Visa Duration: Valid for program duration + 60-day grace period<br />
          Processing Time: 2–8 weeks<br />
          Work Rights: On-campus 20 hours/week during term; OPT/CPT for off-campus
        </p>
      </section>
     {/* <section className="usa-student-life">
  <h2>Student Life</h2>
  <p>
    The USA offers a dynamic student lifestyle with diverse cultures, world-class campuses,
    exciting extracurricular activities, internships, and opportunities to explore iconic cities
    and natural landscapes.
  </p>

 
  <div className="student-life-image">
    <img src="/assets/usa/usa-student-life.jpg" alt="Student Life in USA" />
  </div>
</section> */}



      {/* FAQs */}
      <section className="usa-faq">
        <h2>FAQs About Studying in USA</h2>
        <div className="faq-item">
          <h4>Is GRE/GMAT mandatory for all programs?</h4>
          <p>No, only required for certain master’s and MBA programs.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, 20 hours/week on-campus; OPT allows post-graduation employment.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, merit-based, need-based, and university-specific scholarships are available.</p>
        </div>
        <div className="faq-item">
          <h4>How much is living in the USA?</h4>
          <p>$12,000–20,000/year including accommodation, food, and transport.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in the USA after graduation?</h4>
          <p>Yes, through OPT and STEM OPT extension, depending on your field of study.</p>
        </div>
      </section>

      {/* <EnrollSection country="USA" /> */}

    <section
  style={{
    maxWidth: "900px",
    margin: "40px auto",
    padding: "25px 30px",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
    textAlign: "center",
    fontFamily: '"Segoe UI", Tahoma, sans-serif',
    color: "#333",
    lineHeight: 1.6,
  }}
>
  <h2
    style={{
      fontSize: "1.8rem",
      marginBottom: "15px",
      color: "#003566",
      fontWeight: "700",
    }}
  >
    Planning to study in the USA?
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    Our consultancy assists Indian students with admissions, scholarships,
    visa applications, and career guidance to ensure a successful study abroad journey.
  </p>
  <button
    onClick={() => (window.location.href = "/contact")}
    style={{
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#fff",
      background: "#003566",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.background = "#002244")}
    onMouseOut={(e) => (e.currentTarget.style.background = "#003566")}
  >
    Apply Now
  </button>
</section>

    </div>
  );
}

export default USA;