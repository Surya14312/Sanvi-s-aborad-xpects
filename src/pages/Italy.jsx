import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Italy() {
  return (
    <div className="italy-container">
      {/* Hero Section */}
      <section className="italy-hero">
        <div className="italy-hero-content">
          <h1>Study in Italy</h1>
          <p>
            Italy is one of Europe’s most sought-after destinations for higher
            education. Known for prestigious universities, rich cultural heritage,
            affordable tuition, and vibrant student life, Italy provides Indian
            students with globally recognized degrees and European career exposure.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <img
          src="/assets/italy/italy-banner.jpg"
          alt="Study in Italy"
          className="hero-img"
        />
      </section>

      {/* Quick Stats */}
     <section className="stats-section">
  <h2>Italy at a Glance</h2>
  <div className="stats-grid">
    {[
      "90+ Universities & Institutions",
      "€900 – €4,000 Tuition Fees per Year (Public Universities)",
      "65K+ International Students",
      "Post-Study Work & Cultural Exchange Opportunities",
    ].map((stat, index) => (
      <div key={index} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Study in Italy */}
      <section className="italy-why">
        <h2>Why Choose Italy?</h2>
        <ul>
          <li>Globally Respected Institutions & Degrees</li>
          <li>Affordable Tuition and Living Costs</li>
          <li>Programs Available in English</li>
          <li>Rich Cultural and Historical Heritage</li>
          <li>Vibrant Student Life Across Cities</li>
          <li>Scholarships for International Students</li>
        </ul>
      </section>
{/* Top Universities in Italy */}
<section className="italy-universities">
  <h2>Top Universities in Italy</h2>
  <div className="universities-grid">
    {[
      { name: "University of Bologna", img: "/assets/italy/universities/u1.jpg" },
      { name: "Politecnico di Milano", img: "/assets/italy/universities/u2.jpg" },
      { name: "Sapienza University of Rome", img: "/assets/italy/universities/u3.jpg" },
      { name: "University of Padua", img: "/assets/italy/universities/u4.jpg" },
      { name: "University of Milan", img: "/assets/italy/universities/u5.jpg" },
      { name: "Politecnico di Torino", img: "/assets/italy/universities/u6.jpg" },
      { name: "University of Florence", img: "/assets/italy/universities/u7.jpg" }
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img
          src={uni.img}
          alt={uni.name}
          onError={(e) => { e.target.onerror = null; e.target.src = "/assets/destinations/default.jpg"; }}
        />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

{/* Popular Courses */}
<section className="italy-courses">
  <h2>Popular Courses in Italy</h2>
  <div className="course-grid">
    {[
      { name: "Engineering (Mechanical, Civil, Computer, Automotive)", img: "/assets/italy/courses/course-1.jpg" },
      { name: "Architecture & Design", img: "/assets/italy/courses/course-2.jpg" },
      { name: "Fashion & Arts", img: "/assets/italy/courses/course-3.jpg" },
      { name: "Business & Management (MBA, International Business)", img: "/assets/italy/courses/course-4.jpg" },
      { name: "Medicine & Health Sciences", img: "/assets/italy/courses/course-5.jpg" },
      { name: "Humanities and Social Sciences", img: "/assets/italy/courses/course-6.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Equipment & Infrastructure */}
      <section className="italy-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Italian universities offer advanced facilities, digital libraries,
          art and design studios, medical labs, and research centers equipped with
          modern technology to support innovation and learning.
        </p>
      </section>

      {/* Cost of Study & Scholarships */}
      <section className="italy-cost">
        <div className="cost-grid">
          <div>
            <h2>Cost of Studying in Italy</h2>
            <p>
              Tuition fees range from €900 - €4,000 per year for public
              universities and €6,000 - €20,000 for private institutions.
              Living costs vary by city, averaging €10,000 - €15,000 per year.
            </p>
            <h3>Scholarships in Italy</h3>
            <ul>
              <li>Italian Government Scholarships</li>
              <li>University-Specific Scholarships</li>
              <li>International Student Financial Aid Programs</li>
              <li>Invest Your Talent Scholarships</li>
            </ul>
          </div>
        
        </div>
      </section>

      {/* Career Prospects */}
      <section className="italy-career">
        <h2>Career Prospects in Italy</h2>
        <p>
          Italy offers opportunities in Fashion, Design, Engineering, Tourism,
          and Healthcare. International students can work part-time during
          studies and may apply for post-graduation work permits to gain
          professional experience.
        </p>
      </section>

      {/* Documents & Visa Process */}
      <section className="italy-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>Italian or English Proficiency Test (CILS/IELTS/TOEFL)</li>
          <li>Proof of Funds</li>
          <li>Offer Letter from an Italian University</li>
        </ul>
        <h2>Italy Student Visa</h2>
        <p>
          Apply for a student visa via the Italian consulate using the
          university acceptance letter, proof of funds, health insurance, and
          required documents.
        </p>
      </section>

      {/* <section className="italy-student-life">
  <h2>Student Life in Italy</h2>
  <p>
    Italy offers a rich cultural and historical student experience with picturesque campuses, 
    vibrant cities, and diverse cultural activities. Students can enjoy festivals, internships, 
    culinary experiences, and networking opportunities while exploring Italy’s heritage and lifestyle.
  </p>


  <div className="student-life-image">
    <img src="/assets/italy/italy-student-life.jpg" alt="Student Life in Italy" />
  </div>
</section> */}

     

      {/* FAQs */}
      <section className="italy-faq">
        <h2>FAQs About Studying in Italy</h2>
        <div className="faq-item">
          <h4>Are programs available in English?</h4>
          <p>
            Yes, many bachelor’s and master’s programs in Italy are offered
            entirely in English across various fields.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can international students work in Italy?</h4>
          <p>
            Yes, students can work part-time up to 20 hours/week during the
            semester and full-time during vacations.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Italy affordable for international students?</h4>
          <p>
            Yes, Italy is considered one of the most affordable study
            destinations in Europe with low tuition and reasonable living costs.
          </p>
        </div>


         <EnrollSection country="Italy" />
             <section className="malta-summary">
        <p>“Ready to begin your journey in Italy? Contact our expert counselors today to find the right university, secure scholarships, and ensure a smooth visa process.”</p>
      </section>
      </section>
    </div>
  );
}

export default Italy;
