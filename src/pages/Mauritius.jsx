import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Mauritius() {
  return (
    <div className="mauritius-container">
      {/* Hero Section */}
      <section className="mauritius-hero">
        <div className="mauritius-hero-content">
          <h1>Study in Mauritius</h1>
          <p>
            Mauritius is an emerging hub for higher education in Africa, offering
            internationally recognized degrees, affordable tuition, multicultural
            campuses, and a safe environment. With branch campuses of UK, French,
            and local universities, Mauritius provides quality education and global
            career opportunities.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/mauritius/mauritius-banner.jpg"
          alt="Study in Mauritius"
          className="hero-img"
        />
      </section>

      {/* Quick Stats */}
      <section className="stats-section">
  <h2>Mauritius at a Glance</h2>
  <div className="stats-grid">
    {[
      "25+ Higher Education Institutions",
      "USD 5K – USD 15K Tuition Fees",
      "10K+ International Students",
      "Post-Study Work & Internship Opportunities",
    ].map((stat, index) => (
      <div key={index} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Study in Mauritius */}
      <section className="mauritius-why">
        <h2>Why Choose Mauritius?</h2>
        <ul>
          <li>Affordable Education & Living Costs</li>
          <li>Globally Recognized Degrees</li>
          <li>Branch Campuses of UK & French Universities</li>
          <li>Diverse & Multicultural Society</li>
          <li>English and French-Taught Programs</li>
          <li>Safe & Peaceful Environment</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="mauritius-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Lower tuition fees compared to Europe, US, and Australia</li>
          <li>Part-time work opportunities allowed during studies</li>
          <li>English & French programs available</li>
          <li>Safe, student-friendly environment</li>
          <li>Strong Indian student community on campus</li>
          <li>Good ROI with globally recognized degrees</li>
        </ul>
      </section>

    {/* Top Universities */}
<section className="mauritius-universities">
  <h2>Top Universities in Mauritius</h2>
  <div className="universities-grid">
    {[
      { name: "University of Mauritius", img: "/assets/mauritius/universities/um.jpg" },
      { name: "University of Technology, Mauritius", img: "/assets/mauritius/universities/utm.jpg" },
      { name: "Charles Telfair Institute", img: "/assets/mauritius/universities/cti.jpg" },
      { name: "Mahatma Gandhi Institute", img: "/assets/mauritius/universities/mgi.jpg" },
      { name: "Curtin Mauritius", img: "/assets/mauritius/universities/curtin.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Popular Courses */}
      <section className="mauritius-courses">
        <h2>Popular Courses in Mauritius</h2>
        <div className="course-grid">
          {[
            { name: "Business & Accounting", img: "/assets/mauritius/courses/business.jpg" },
            { name: "Engineering & Technology", img: "/assets/mauritius/courses/engineering.jpg" },
            { name: "Computer Science & IT", img: "/assets/mauritius/courses/computer-science.jpg" },
            { name: "Hospitality & Tourism", img: "/assets/mauritius/courses/hospitality.jpg" },
            { name: "Medicine & Health Sciences", img: "/assets/mauritius/courses/medicine.jpg" },
            { name: "Environmental Science", img: "/assets//mauritius/courses/environment.jpg" },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Equipment & Infrastructure */}
      <section className="mauritius-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Universities in Mauritius have modern labs, smart classrooms, digital libraries,
          and research centers to support practical and academic learning.
        </p>
      </section>

      {/* Cost & Scholarships */}
      <section className="mauritius-cost">
        <div className="cost-content">
          <div className="cost-text">
            <h2>Cost of Studying in Mauritius</h2>
            <p>
              Tuition fees range from USD 5,000 - USD 15,000 per year. Living costs vary by city,
              averaging USD 6,000 - USD 10,000 per year.
            </p>
            <h3>Scholarships in Mauritius</h3>
            <ul>
              <li>Government Merit-Based Scholarships</li>
              <li>University-Specific Scholarships</li>
              <li>International Student Financial Aid Programs</li>
            </ul>
          </div>
          {/* <div className="cost-image">
            <img
              src="/assets/mauritius/mauritius-scholarship.jpg"
              alt="Scholarships in Mauritius"
            />
          </div> */}
        </div>
      </section>

      {/* Career Prospects */}
      <section className="mauritius-career">
        <h2>Career Prospects in Mauritius</h2>
        <p>
          Mauritius offers opportunities in Technology, Finance, Business, Healthcare, and Tourism.
          International students can work part-time during studies and apply for post-graduation employment.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="mauritius-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>English Proficiency Test (IELTS/TOEFL)</li>
          <li>Proof of Funds</li>
          <li>Offer Letter from a Mauritian University</li>
        </ul>

        <h2>Mauritius Student Visa</h2>
        <p>
          Apply for a student visa via the Mauritian Immigration Department with acceptance letter,
          proof of funds, medical report, and required documents.
        </p>
      </section>

      {/* <section className="mauritius-student-life">
  <h2>Student Life in Mauritius</h2>
  <p>
    Mauritius provides a multicultural, safe, and affordable student experience. 
    Students enjoy cultural events, internships, networking opportunities, 
    and vibrant campus life while exploring the island’s natural beauty.
  </p>

  
  <div className="student-life-image">
    <img src="/assets/mauritius/mauritius-student-life.jpg" alt="Student Life in Mauritius" />
  </div>
</section> */}

     

      {/* FAQs */}
      <section className="mauritius-faq">
        <h2>FAQs About Studying in Mauritius</h2>
        <div className="faq-item">
          <h4>Can I study in English in Mauritius?</h4>
          <p>Yes, most universities offer programs in English, particularly in business, IT, and engineering.</p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Mauritius?</h4>
          <p>Yes, part-time work is permitted for students during semester breaks.</p>
        </div>
        <div className="faq-item">
          <h4>Is Mauritius affordable for Indian students?</h4>
          <p>Yes, Mauritius offers lower tuition and living costs compared to US, UK, or Australia.</p>
        </div>
         <EnrollSection country="Mauritius" />
        <section className="malta-summary">
        <p>
          Planning to study in Mauritius? Our consultancy provides guidance on university admissions, scholarship applications, visa processing, and career planning for Indian students seeking a rewarding study abroad experience.
        </p>
      </section>
      </section>
    </div>
  );
}

export default Mauritius;