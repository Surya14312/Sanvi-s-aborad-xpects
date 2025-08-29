// src/pages/Singapore.jsx
import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";



function Singapore() {
  return (
    <div className="singapore-container">

      {/* Hero Section */}
      <section className="singapore-hero">
        <div className="singapore-hero-text">
          <h1>Study in Singapore</h1>
          <p>
            Singapore has become one of Asia’s most sought-after study destinations, 
            known for its high-quality education, world-class infrastructure, and 
            proximity to India. With globally ranked universities, a safe multicultural 
            society, and strong career opportunities in finance, IT, logistics, and 
            hospitality, it’s a top choice for international students.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/singapore/singapore-banner.jpg"
          alt="Study in Singapore"
          className="singapore-hero-img"
        />
      </section>

      {/* Singapore at a Glance */}
      <section className="singapore-glance">
        <h2>Singapore at a Glance</h2>
        <div className="singapore-stats-grid">
          {[
            "30+ Universities & Institutions",
            "Top: NUS, NTU, SMU, James Cook, Kaplan",
            "Tuition: SGD 8K – 50K/year",
            "Living: SGD 10K – 18K/year",
            "80,000+ International Students",
            "English as Medium of Instruction",
            "Post-Study Work via Employment Passes",
          ].map((stat, i) => (
            <div key={i} className="singapore-stat-card">{stat}</div>
          ))}
        </div>
      </section>

      {/* Why Choose Singapore */}
      <section className="singapore-why-choose">
        <h2>Why Choose Singapore?</h2>
        <ul>
          <li>Globally ranked education system with strong Asian & international presence</li>
          <li>Wide range of diploma, undergraduate & postgraduate programs</li>
          <li>Gateway to Asia with thriving job market in finance, logistics, IT, hospitality</li>
          <li>Multicultural society with large Indian community</li>
          <li>Safe, clean, and modern environment with excellent transport</li>
          <li>Strategic location, only 4–5 hours away from India</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="singapore-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Availability of diploma programs for quick career entry</li>
          <li>Opportunities to study at top global universities & branch campuses</li>
          <li>Affordable compared to Western destinations, with shorter course durations</li>
          <li>Strong demand for skills in IT, hospitality, and supply chain management</li>
          <li>Pathways to jobs in Singapore and beyond after graduation</li>
        </ul>
      </section>

     {/* Top Institutions */}
<section className="singapore-universities">
  <h2>Top Institutions in Singapore</h2>
  <div className="universities-grid">
    {[
      { name: "National University of Singapore (NUS)", img: "/assets/singapore/universities/u1.jpg" },
      { name: "Nanyang Technological University (NTU)", img: "/assets/singapore/universities/u2.jpg" },
      { name: "Singapore Management University (SMU)", img: "/assets/singapore/universities/u3.jpg" },
      { name: "James Cook University Singapore", img: "/assets/singapore/universities/u4.jpg" },
      { name: "Kaplan Higher Education Academy", img: "/assets/singapore/universities/u5.jpg" },
      { name: "PSB Academy", img: "/assets/singapore/universities/u6.jpg" },
      { name: "Singapore Institute of Management (SIM)", img: "/assets/singapore/universities/u7.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

{/* Popular Courses */}
<section className="singapore-courses">
  <h2>Popular Courses in Singapore</h2>
  <div className="course-grid">
    {[
      { name: "Diplomas: Hospitality & Management", img: "/assets/singapore/courses/c1.jpg" },
      { name: "Diplomas: Logistics & Supply Chain", img: "/assets/singapore/courses/c2.jpg" },
      { name: "Advanced Diplomas: Hospitality Management", img: "/assets/singapore/courses/c3.jpg" },
      { name: "UG/PG: Business & Management", img: "/assets/singapore/courses/c4.jpg" },
      { name: "UG/PG: Computer Science & IT", img: "/assets/singapore/courses/c5.jpg" },
      { name: "UG/PG: Engineering & Technology", img: "/assets/singapore/courses/c6.jpg" },
      { name: "UG/PG: Finance & Banking", img: "/assets/singapore/courses/c7.jpg" },
      { name: "UG/PG: Tourism & Event Management", img: "/assets/singapore/courses/c8.jpg" },
      { name: "UG/PG: Media & Communication", img: "/assets/singapore/courses/c9.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Study */}
      <section className="singapore-costs">
        <h2>Cost of Studying & Living</h2>
        <p>
          <strong>Diplomas:</strong> SGD 8K – 15K/year (~₹5–9 lakh)<br/>
          <strong>UG:</strong> SGD 20K – 35K/year (~₹12–21 lakh)<br/>
          <strong>PG:</strong> SGD 25K – 50K/year (~₹15–30 lakh)<br/>
          <strong>Living:</strong> SGD 800 – 1,500/month (~₹50K – ₹90K)
        </p>
        <h3>Scholarships</h3>
        <ul>
          <li>ASEAN Scholarships</li>
          <li>Singapore Government Scholarships</li>
          <li>University-specific scholarships</li>
          <li>International student financial aid</li>
        </ul>
      </section>

      {/* Career Prospects */}
      <section className="singapore-career">
        <h2>Career Prospects in Singapore</h2>
        <p>
          Major industries: Finance, Banking, IT, Logistics, Biotechnology, and Hospitality.  
          Diploma holders can secure entry-level jobs, while graduates enjoy pathways 
          to Employment Passes and even Permanent Residency for skilled professionals.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="singapore-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English test scores (IELTS/TOEFL or MOI)</li>
          <li>SOP, LORs, CV, Passport copy</li>
          <li>Admission letter</li>
          <li>Proof of funds (bank statements, sponsor affidavit)</li>
          <li>Tuition payment receipt</li>
        </ul>
        <h2>Singapore Student Visa (Student Pass)</h2>
        <p>
          Type: Student Pass (ICA)<br/>
          Duration: Valid for course length<br/>
          Processing: 2–4 weeks (apply 1–2 months in advance)<br/>
          Work: 16 hrs/week during term, full-time during vacations
        </p>
      </section>

      {/* Student Life */}
    <section className="singapore-student-life">
  <h2>Student Life in Singapore</h2>
  <p>
    Singapore offers a vibrant, multicultural lifestyle with modern campuses,
    networking opportunities, internships, and cultural activities.
    Students enjoy one of Asia’s safest and most connected cities.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img src="/assets/singapore/singapore-student-life.jpg" alt="Student Life in Singapore" />
  </div>
</section>


      {/* Enroll */}
      <EnrollSection country="Singapore" />

      {/* FAQs */}
      <section className="singapore-faqs">
        <h2>FAQs About Studying in Singapore</h2>
        <div className="faq-item">
          <h4>Are diploma courses valid internationally?</h4>
          <p>Yes, especially from recognized polytechnics and private institutions.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work while studying?</h4>
          <p>Yes, up to 16 hours per week during term and full-time during vacations.</p>
        </div>
        <div className="faq-item">
          <h4>Is Singapore affordable compared to the West?</h4>
          <p>Yes, shorter courses and lower costs make it more affordable than UK/USA.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay after graduation?</h4>
          <p>Yes, via Employment Passes with options for Permanent Residency.</p>
        </div>
        <div className="faq-item">
          <h4>Do institutions offer scholarships?</h4>
          <p>Yes, many universities offer merit-based scholarships and tuition waivers.</p>
        </div>
        <p>“Planning to study in Singapore? Whether it’s a diploma in Hospitality or Logistics or a full-fledged degree, our consultancy guides you through admissions, visa processes, and career pathways.”</p>
      </section>

    </div>
  );
}

export default Singapore;