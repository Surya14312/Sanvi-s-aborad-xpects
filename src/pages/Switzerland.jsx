// src/pages/Switzerland.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Switzerland() {
  return (
    <div className="switzerland-container">
      
      {/* Hero Section */}
      <section className="switzerland-hero">
        <div className="switzerland-hero-text">
          <h1>Study in Switzerland</h1>
          <p>
            Switzerland is globally known for its high-quality education, research-driven universities, 
            and strong ties with industries. With four national languages (German, French, Italian, Romansh) 
            and many English-taught programs, it offers a truly international learning environment.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/switzerland/switzerland-banner.jpg"
          alt="Study in Switzerland"
          className="switzerland-hero-img"
        />
      </section>

      {/* Quick Stats */}
     <section className="stats-section">
  <h2>Switzerland at a Glance</h2>
  <div className="stats-grid">
    {[
      "12 Public Universities + Applied Sciences",
      "ETH Zurich & EPFL Ranked Among World’s Best",
      "CHF 1,500 – 6,500/year Public Tuition",
      "CHF 10,000 – 30,000/year Private Tuition",
      "CHF 18,000 – 28,000 Living Costs",
      "25% International Student Population",
      "Languages: German, French, Italian, English",
      "Post-Study Work: 6-Month Job-Seeking Visa",
    ].map((stat, i) => (
      <div key={i} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Choose Switzerland */}
      <section className="switzerland-why-choose">
        <h2>Why Choose Switzerland?</h2>
        <ul>
          <li>Home to ETH Zurich and EPFL, world leaders in science & tech</li>
          <li>Hub for finance, pharmaceuticals, hospitality, and luxury brands</li>
          <li>High employability with global companies like Nestlé, Novartis, UBS, Rolex</li>
          <li>Safe, multicultural, high standard of living</li>
          <li>Central Schengen location with access to EU opportunities</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="switzerland-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Affordable public university tuition compared to UK/USA</li>
          <li>Strong demand for STEM, hospitality, finance, and management graduates</li>
          <li>Scholarships: Swiss Government Excellence, ETH Zurich Excellence</li>
          <li>World-class research & internships with global industries</li>
          <li>Multilingual education offers advantage in international job markets</li>
        </ul>
      </section>

    {/* Top Universities */}
<section className="switzerland-universities">
  <h2>Top Universities in Switzerland</h2>
  <div className="universities-grid">
    {[
      { name: "ETH Zurich", img: "/assets/switzerland/universities/eth.jpg" },
      { name: "EPFL Lausanne", img: "/assets/switzerland/universities/epfl.jpg" },
      { name: "University of Zurich", img: "/assets/switzerland/universities/uzh.jpg" },
      { name: "University of Geneva", img: "/assets/switzerland/universities/geneva.jpg" },
      { name: "University of Basel", img: "/assets/switzerland/universities/basel.jpg" },
      { name: "University of Lausanne", img: "/assets/switzerland/universities/lausanne.jpg" },
      { name: "University of Bern", img: "/assets/switzerland/universities/bern.jpg" },
      { name: "St. Gallen University", img: "/assets/switzerland/universities/stgallen.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


{/* Popular Courses */}
<section className="switzerland-courses">
  <h2>Popular Courses in Switzerland</h2>
  <div className="course-grid">
    {[
      { name: "Engineering & Technology", img: "/assets/switzerland/courses/c1.jpg" },
      { name: "Computer Science & Data Science", img: "/assets/switzerland/courses/c2.jpg" },
      { name: "Finance, Banking & Business", img: "/assets/switzerland/courses/c3.jpg" },
      { name: "Hospitality & Tourism Management", img: "/assets/switzerland/courses/c4.jpg" },
      { name: "Life Sciences & Biotechnology", img: "/assets/switzerland/courses/c5.jpg" },
      { name: "International Relations & Law", img: "/assets/switzerland/courses/c6.jpg" },
      { name: "Medicine & Healthcare", img: "/assets/switzerland/courses/c7.jpg" },
      { name: "Environmental Sciences & Sustainability", img: "/assets/switzerland/courses/c8.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Costs & Scholarships */}
      <section className="switzerland-costs">
        <h2>Cost of Studying & Living</h2>
        <p>
          <strong>UG:</strong> CHF 1,500 – 6,500/year (public), CHF 10,000 – 30,000/year (private)<br/>
          <strong>PG:</strong> CHF 1,500 – 8,000/year (public), CHF 20,000 – 40,000/year (private business schools)<br/>
          <strong>Living:</strong> CHF 18,000 – 28,000/year (~CHF 1,500–2,300/month, higher in Zurich/Geneva)
        </p>
        <h3>Scholarships</h3>
        <ul>
          <li>ETH Zurich Excellence Scholarships</li>
          <li>Swiss Government Excellence Scholarships</li>
          <li>University-specific merit scholarships</li>
        </ul>
      </section>

      {/* Career Prospects */}
      <section className="switzerland-career">
        <h2>Career Prospects</h2>
        <p>
          Switzerland offers excellent career paths in banking, pharmaceuticals, engineering, IT, 
          and hospitality. International students can apply for a 6-month job-seeking visa after graduation 
          and transition to a work permit once employed. Multilingual skills are highly valued.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="switzerland-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>Proof of English/German/French proficiency (IELTS/TOEFL/DELF/Goethe certificate)</li>
          <li>SOP, LORs, CV, Passport copy</li>
          <li>University acceptance letter</li>
          <li>Proof of funds (~CHF 21,000 for one year)</li>
          <li>Accommodation & health insurance proof</li>
        </ul>
        <h2>Student Visa</h2>
        <p>
          Type D National Visa, valid for course duration. Processing time: 8–12 weeks. 
          Students can work 15 hrs/week during term & full-time during holidays.
        </p>
      </section>

      {/* Student Life */}
      {/* <section className="switzerland-student-life">
  <h2>Student Life</h2>
  <p>
    Switzerland offers an enriching student lifestyle with stunning alpine landscapes,
    world-class universities, multicultural communities, efficient public transport,
    and opportunities to explore both academic excellence and outdoor adventures.
  </p>

 
  <div className="student-life-image">
    <img src="/assets/switzerland/switzerland-student-life.jpg" alt="Student Life in Switzerland" />
  </div>
</section> */}


     

      {/* FAQs */}
      <section className="switzerland-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>Are programs available in English?</h4>
          <p>Yes, especially postgraduate courses at ETH Zurich, EPFL, and other top universities.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students get scholarships?</h4>
          <p>Yes, including Swiss Government Excellence and university-specific scholarships.</p>
        </div>
        <div className="faq-item">
          <h4>How much can students earn part-time?</h4>
          <p>CHF 20–25/hour on average, depending on location and work type.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay in Switzerland after graduation?</h4>
          <p>Yes, students can apply for a 6-month job search visa and later secure a work permit.</p>
        </div>


         {/* Enroll */}
      {/* <EnrollSection country="Switzerland" /> */}
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
    Looking to study in Switzerland?
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    Our consultancy provides complete support for university applications, scholarships, and visa processes tailored for Indian students.
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

export default Switzerland;