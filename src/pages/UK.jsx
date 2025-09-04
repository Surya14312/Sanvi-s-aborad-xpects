// src/pages/UK.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function UK() {
  return (
    <div className="uk-container">
      
      {/* Hero Section */}
      <section className="uk-hero">
        <div className="uk-hero-text">
          <h1>Study in the UK</h1>
          <p>
            The UK is one of the world’s most popular study destinations, known for academic
            excellence, centuries-old universities, and global recognition of its degrees.
            Students benefit from shorter courses, diverse cultures, and strong career
            opportunities through post-study work visas.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img src="/assets/uk/uk-banner.jpg" alt="Study in UK" className="uk-hero-img" />
      </section>

     {/* Quick Stats */}
<section className="stats-section">
  <h2>The UK at a Glance</h2>
  <div className="stats-grid">
    {[
      "160+ Recognized Universities",
      "Top-ranked: Oxford, Cambridge, Imperial, LSE, Edinburgh",
      "£10K – £38K Tuition Fees",
      "£9K – £15K Living Costs",
      "680K+ International Students",
      "English Taught Programs",
      "2-Year Graduate Route Visa",
    ].map((stat, i) => (
      <div key={i} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Choose */}
      <section className="uk-why-choose">
        <h2>Why Choose the UK?</h2>
        <ul>
          <li>Globally recognized degrees from prestigious universities</li>
          <li>Shorter courses: 3 years UG, 1 year PG</li>
          <li>Access to world-class research and faculty</li>
          <li>Strong Indian student community & multicultural exposure</li>
          <li>20 hrs/week part-time work during term</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="uk-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Wide range of English-taught programs</li>
          <li>Graduate Route Visa ensures post-study job opportunities</li>
          <li>Direct flights & large Indian diaspora for cultural comfort</li>
          <li>Exclusive scholarships (Chevening, GREAT, Commonwealth)</li>
        </ul>
      </section>

      {/* Top Universities */}
<section className="uk-universities">
  <h2>Top Universities in UK</h2>
  <div className="universities-grid">
    {[
      { name: "Oxford", img: "/assets/uk/universities/oxford.jpg" },
      { name: "Cambridge", img: "/assets/uk/universities/cambridge.jpg" },
      { name: "Imperial College London", img: "/assets/uk/universities/imperial.jpg" },
      { name: "LSE", img: "/assets/uk/universities/lse.jpg" },
      { name: "University of Manchester", img: "/assets/uk/universities/manchester.jpg" },
      { name: "Edinburgh", img: "/assets/uk/universities/edinburgh.jpg" },
      { name: "King’s College London", img: "/assets/uk/universities/kcl.jpg" },
      { name: "Warwick", img: "/assets/uk/universities/warwick.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


{/* Courses */}
<section className="uk-courses">
  <h2>Popular Courses in UK</h2>
  <div className="course-grid">
    {[
       { name: "Business & Management", img: "/assets/uk/courses/business.jpg" },
{ name: "Law", img: "/assets/uk/courses/law.jpg" },
{ name: "Medicine & Healthcare", img: "/assets/uk/courses/medicine.jpg" },
{ name: "Computer Science", img: "/assets/uk/courses/computer.jpg" },
{ name: "Data Science", img: "/assets/uk/courses/data-science.jpg" },
{ name: "Mechanical Engineering", img: "/assets/uk/courses/mechanical.jpg" },
{ name: "Electrical Engineering", img: "/assets/uk/courses/electrical.jpg" },
{ name: "Civil Engineering", img: "/assets/uk/courses/civil.jpg" },
{ name: "Aerospace Engineering", img: "/assets/uk/courses/aerospace.jpg" },
{ name: "Finance", img: "/assets/uk/courses/finance.jpg" },
{ name: "Accounting", img: "/assets/uk/courses/accounting.jpg" },

{ name: "Artificial Intelligence", img: "/assets/uk/courses/ai.jpg" },
{ name: "Robotics", img: "/assets/uk/courses/robotics.jpg" },
{ name: "International Relations", img: "/assets/uk/courses/international.jpg" },
{ name: "Hospitality", img: "/assets/uk/courses/hospitality.jpg" },
{ name: "Tourism Management", img: "/assets/uk/courses/tourism.jpg" },

    ].map((course, i) => (
      <Link
        to={`/courses/UK/${course.name.toLowerCase().replace(/\s+/g, " ").trim()}`}
        key={i}
        className="course-card"
      >
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </Link>
    ))}
  </div>
</section>


      {/* Costs */}
      <section className="uk-costs">
        <h2>Cost of Studying & Living</h2>
        <p>UG: £10,000 – £25,000/year | PG: £12,000 – £38,000/year</p>
        <p>Living: £800–£1,200/month (outside London), £1,200–£1,800/month (London)</p>
      </section>

      {/* Career Prospects */}
      <section className="uk-career">
        <h2>Career Prospects</h2>
        <p>
          Graduate Route Visa allows 2 years stay (3 for PhD). High demand in IT, Finance,
          Engineering, Healthcare, Data Science, and Education. Many global firms headquartered
          in the UK offer excellent networking opportunities.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="uk-documents">
        <h2>Documents & Visa Process</h2>
        <h4>University Application</h4>
        <ul>
          <li>Academic transcripts, SOP, LORs, CV</li>
          <li>English test results (IELTS/TOEFL/PTE)</li>
          <li>Passport copy</li>
        </ul>
        <h4>Visa Application (Student Route)</h4>
        <ul>
          <li>CAS from university</li>
          <li>Proof of funds & TB test</li>
          <li>Health surcharge payment</li>
        </ul>
      </section>

      {/* Student Life */}
     {/* <section className="uk-student-life">
  <h2>Student Life</h2>
  <p>
    The UK offers a vibrant student lifestyle with multicultural exposure, student discounts,
    historic landmarks, and modern facilities.
  </p>

  
  <div className="student-life-image">
    <img src="/assets/uk/uk-student-life.jpg" alt="Student Life in UK" />
  </div>
</section> */}
      {/* Application Timeline *
        
      </section>

    

      {/* FAQs */}
      <section className="uk-faqs">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>Is IELTS mandatory?</h4>
          <p>Not always—some universities waive it if you studied in English medium.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay after studies?</h4>
          <p>Yes, Graduate Route allows 2 years (3 for PhD) stay for work/job search.</p>
        </div>
        <div className="faq-item">
          <h4>Are there scholarships for Indian students?</h4>
          <p>Yes—Chevening, Commonwealth, GREAT, and university awards.</p>
        </div>
        <div className="faq-item">
          <h4>How much can I earn part-time?</h4>
          <p>On average £8–£12/hour depending on location and job type.</p>
        </div>


          {/* Enroll Section */}
      {/* <EnrollSection country="UK" /> */}

<section className="poland-summary">
  <h2>Planning to study in the UK?</h2>
  <p>
    Our consultancy helps you select the right university, prepare your application,
    secure scholarships, and guide you through the visa process.
  </p>
  <button
    onClick={() => (window.location.href = "/contact")}
    style={{
      marginTop: "20px",
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

export default UK;