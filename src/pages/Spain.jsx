// src/pages/Spain.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Spain() {
  return (
    <div className="spain-container">
      
      {/* Hero Section */}
      <section className="spain-hero">
        <div className="spain-hero-text">
          <h1>Study in Spain</h1>
          <p>
            Spain is a popular study destination in Europe, combining vibrant culture, 
            high-quality education, and affordable tuition. With world-ranked universities, 
            English-taught programs, and a Mediterranean lifestyle, Spain offers Indian 
            students both academic and cultural growth.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/spain/spain-banner.jpg"
          alt="Study in Spain"
          className="spain-hero-img"
        />
      </section>

      {/* Spain at a Glance */}
     <section className="stats-section">
  <h2>Spain at a Glance</h2>
  <div className="stats-grid">
    {[
      "76 Public + 36 Private Universities",
      "Top: University of Barcelona, UAM, Complutense Madrid, IE, Valencia",
      "Tuition: €1,500–€4,000 (public), €5,000–€20,000 (private)",
      "Living: €8,000–€12,000/year (~₹7–10 lakh)",
      "125,000+ International Students",
      "Languages: Spanish & English",
      "Post-Study Stay Back: 12 months",
    ].map((stat, i) => (
      <div key={i} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Choose Spain */}
      <section className="spain-why-choose">
        <h2>Why Choose Spain?</h2>
        <ul>
          <li>Affordable tuition fees & living costs compared to Western Europe</li>
          <li>Wide range of English-taught programs</li>
          <li>Rich cultural and historical heritage</li>
          <li>Globally recognized degrees</li>
          <li>Opportunity to learn Spanish, boosting global career prospects</li>
          <li>Vibrant student life & access to European job markets</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="spain-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Affordable education & cost of living compared to UK/France/Germany</li>
          <li>Growing number of English-taught programs</li>
          <li>Part-time work up to 20 hrs/week during studies</li>
          <li>Exposure to global companies & internships</li>
          <li>12-month post-study work option</li>
        </ul>
      </section>

     {/* Top Universities */}
{/* Top Universities */}
<section className="spain-universities">
  <h2>Top Universities in Spain</h2>
  <div className="universities-grid">
    {[
      { name: "University of Barcelona", img: "/assets/spain/universities/u1.jpg" },
      { name: "Autonomous University of Madrid", img: "/assets/spain/universities/u2.jpg" },
      { name: "Complutense University of Madrid", img: "/assets/spain/universities/u3.jpg" },
      { name: "IE University", img: "/assets/spain/universities/u4.jpg" },
      { name: "University of Valencia", img: "/assets/spain/universities/u5.jpg" },
      { name: "University of Granada", img: "/assets/spain/universities/u6.jpg" },
      { name: "Pompeu Fabra University", img: "/assets/spain/universities/u7.jpg" },
      { name: "University of Seville", img: "/assets/spain/universities/u8.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


{/* Popular Courses */}
<section className="spain-courses">
  <h2>Popular Courses in Spain</h2>
  <div className="course-grid">
    {[
      { name: "Business Administration", img: "/assets/spain/courses/business-administration.jpg" },
// { name: "Management", img: "/assets/spain/courses/management.jpg" },
{ name: "Mechanical Engineering", img: "/assets/spain/courses/mechanical.jpg" },
{ name: "Civil Engineering", img: "/assets/spain/courses/civil.jpg" },
{ name: "Industrial Engineering", img: "/assets/spain/courses/industrial.jpg" },
{ name: "Computer Science", img: "/assets/spain/courses/computer-science.jpg" },
{ name: "Hospitality Management", img: "/assets/spain/courses/hospitality.jpg" },
{ name: "Tourism Management", img: "/assets/spain/courses/tourism.jpg" },
{ name: "Finance", img: "/assets/spain/courses/finance.jpg" },
{ name: "Accounting", img: "/assets/spain/courses/accounting.jpg" },
{ name: "International Relations", img: "/assets/spain/courses/international-relations.jpg" },
{ name: "Political Science", img: "/assets/spain/courses/political-science.jpg" },
{ name: "Arts", img: "/assets/spain/courses/arts.jpg" },
{ name: "Design", img: "/assets/spain/courses/design.jpg" },
{ name: "Data Science", img: "/assets/spain/courses/data-science.jpg" },
{ name: "Artificial Intelligence", img: "/assets/spain/courses/ai.jpg" },
{ name: "Medicine & Healthcare", img: "/assets/spain/courses/medicine.jpg" },
// { name: "Healthcare", img: "/assets/spain/courses/healthcare.jpg" },

    ].map((course, i) => (
              <Link
                to={`/courses/Spain/${course.name.toLowerCase().replace(/\s+/g, " ").trim()}`}
                key={i}
                className="course-card"
              >
                <img src={course.img} alt={course.name} />
                <p>{course.name}</p>
              </Link>
            ))}
  </div>
</section>


      {/* Cost & Scholarships */}
      <section className="spain-costs">
        <h2>Cost of Studying & Living</h2>
        <p>
          <strong>Undergraduate:</strong> €1,500 – €4,000/year (public), €5,000 – €15,000/year (private)<br/>
          <strong>Postgraduate:</strong> €2,000 – €20,000/year<br/>
          <strong>Living:</strong> €600 – €1,000/month (~₹50K – 80K)
        </p>
        <h3>Scholarships</h3>
        <ul>
          <li>Spanish Government Scholarships</li>
          <li>University-Specific Scholarships</li>
          <li>MAEC-AECID Scholarships</li>
          <li>International student aid programs</li>
        </ul>
      </section>

      {/* Career Prospects */}
      <section className="spain-career">
        <h2>Career Prospects in Spain</h2>
        <p>
          Spain offers opportunities in tourism, business, finance, IT, engineering, and healthcare.  
          International students can work part-time during studies and stay up to 12 months post-graduation 
          to explore job opportunities in Spain and across the EU.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="spain-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>Proof of English/Spanish proficiency (IELTS/TOEFL/DELE)</li>
          <li>Statement of Purpose (SOP) & Letters of Recommendation (LORs)</li>
          <li>CV/Resume & Passport copy</li>
          <li>Offer Letter from a Spanish university</li>
          <li>Proof of sufficient funds (~€7,000/year)</li>
          <li>Health insurance & accommodation proof</li>
        </ul>
        <h2>Spain Student Visa</h2>
        <p>
          <strong>Type:</strong> Long-term Student Visa (Type D) <br/>
          <strong>Duration:</strong> Valid for course duration <br/>
          <strong>Processing:</strong> 4–6 weeks <br/>
          <strong>Work Rights:</strong> 20 hrs/week during term
        </p>
      </section>

      {/* Student Life */}
     {/* <section className="spain-student-life">
  <h2>Student Life in Spain</h2>
  <p>
    Spanish campuses offer historic architecture, modern facilities, and diverse student activities.
    Students enjoy festivals, internships, cultural experiences, and travel opportunities across Europe,
    making their academic journey vibrant and memorable.
  </p>

 
  <div className="student-life-image">
    <img src="/assets/spain/spain-student-life.jpg" alt="Student Life in Spain" />
  </div>
</section> */}


      {/* Enroll CTA */}
      {/* <EnrollSection country="Spain" /> */}

      {/* FAQs */}
      <section className="spain-faqs">
        <h2>FAQs About Studying in Spain</h2>
        <div className="faq-item">
          <h4>Is knowledge of Spanish mandatory?</h4>
          <p>No, many programs are offered in English, but Spanish helps with jobs & internships.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, up to 20 hours per week part-time.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, through universities & the Spanish government (e.g., MAEC-AECID).</p>
        </div>
        <div className="faq-item">
          <h4>How expensive is studying in Spain?</h4>
          <p>Affordable compared to the UK/USA. Tuition starts at €1,500/year, living costs €600–€1,000/month.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in Spain after graduation?</h4>
          <p>Yes, international students can stay up to 12 months to seek employment.</p>
        </div>

        {/* Enroll CTA */}
      {/* <EnrollSection country="Spain" /> */}
      
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
    Planning to study in Spain?
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    Our consultancy helps Indian students with university admissions, scholarship
    applications, visa guidance, and career planning for a smooth journey.
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

      </section>

    </div>
  );
}

export default Spain;