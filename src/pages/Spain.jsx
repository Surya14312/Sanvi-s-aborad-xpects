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
      <section className="spain-glance">
        <h2>Spain at a Glance</h2>
        <div className="spain-stats-grid">
          {[
            "76 Public + 36 Private Universities",
            "Top: University of Barcelona, UAM, Complutense Madrid, IE, Valencia",
            "Tuition: €1,500–€4,000 (public), €5,000–€20,000 (private)",
            "Living: €8,000–€12,000/year (~₹7–10 lakh)",
            "125,000+ International Students",
            "Languages: Spanish & English",
            "Post-Study Stay Back: 12 months",
          ].map((stat, i) => (
            <div key={i} className="spain-stat-card">{stat}</div>
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
      { name: "Business Administration & Management", img: "/assets/spain/courses/course1.jpg" },
      { name: "Engineering (Mechanical, Civil, Industrial, CS)", img: "/assets/spain/courses/course2.jpg" },
      { name: "Hospitality & Tourism Management", img: "/assets/spain/courses/course3.jpg" },
      { name: "Finance & Accounting", img: "/assets/spain/courses/course4.jpg" },
      { name: "International Relations & Political Science", img: "/assets/spain/courses/course5.jpg" },
      { name: "Arts & Design", img: "/assets/spain/courses/course6.jpg" },
      { name: "Data Science & AI", img: "/assets/spain/courses/course7.jpg" },
      { name: "Medicine & Healthcare", img: "/assets/spain/courses/course8.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
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
     <section className="spain-student-life">
  <h2>Student Life in Spain</h2>
  <p>
    Spanish campuses offer historic architecture, modern facilities, and diverse student activities.
    Students enjoy festivals, internships, cultural experiences, and travel opportunities across Europe,
    making their academic journey vibrant and memorable.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img src="/assets/spain/spain-student-life.jpg" alt="Student Life in Spain" />
  </div>
</section>


      {/* Enroll CTA */}
      <EnrollSection country="Spain" />

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
        <p>“Planning to study in Spain? Our consultancy helps Indian students with university admissions, scholarship applications, visa guidance, and career planning for a smooth journey.”</p>
      </section>

    </div>
  );
}

export default Spain;