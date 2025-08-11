import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Spain() {
  return (
    <div className="spain-container">
      {/* ✅ Hero Section */}
      <section className="spain-hero">
        <div className="spain-hero-content">
          <h1>Study in Spain</h1>
          <p>
            Spain is a top destination for international students, offering
            high-quality education, affordable tuition, vibrant culture, and a
            sunny Mediterranean lifestyle. With world-renowned universities and
            English-taught programs, Spain provides both academic excellence and
            unforgettable experiences.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/spain-universities/spain-banner.jpg"
          alt="Study in Spain"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section className="spain-highlights">
        <h2>Spain Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">80+ Universities</div>
          <div className="highlight-card">€1K–€5K Tuition Fees</div>
          <div className="highlight-card">100K+ International Students</div>
          <div className="highlight-card">1-Year Stay-Back Visa</div>
        </div>
      </section>

      {/* ✅ Why Study in Spain */}
      <section className="spain-why">
        <h2>Why Choose Spain?</h2>
        <ul>
          <li>Affordable Tuition and Living Costs</li>
          <li>Wide Range of English-Taught Programs</li>
          <li>Rich Cultural and Historical Heritage</li>
          <li>Globally Recognized Degrees</li>
          <li>Vibrant Student Life</li>
          <li>Gateway to European Job Markets</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="spain-universities">
        <h2>Top Universities in Spain</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Barcelona",
                img: "/assets/spain-universities/barcelona.jpg",
              },
              {
                name: "Autonomous University of Madrid",
                img: "/assets/spain-universities/madrid.jpg",
              },
              {
                name: "Pompeu Fabra University",
                img: "/assets/spain-universities/pompeu.jpg",
              },
              {
                name: "University of Navarra",
                img: "/assets/spain-universities/navarra.jpg",
              },
              {
                name: "IE Business School",
                img: "/assets/spain-universities/ie.jpg",
              },
              {
                name: "ESADE Business School",
                img: "/assets/spain-universities/esade.jpg",
              },
            ].map((uni, i) => (
              <div className="uni-card" key={i}>
                <img src={uni.img} alt={uni.name} />
                <p>{uni.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Popular Courses */}
      <section className="spain-courses">
        <h2>Popular Courses in Spain</h2>
        <div className="course-grid">
          {[
            {
              name: "Business & Management",
              img: "/assets/spain-universities/business.jpg",
            },
            {
              name: "International Relations",
              img: "/assets/spain-universities/relations.jpg",
            },
            {
              name: "Tourism & Hospitality",
              img: "/assets/spain-universities/tourism.jpg",
            },
            {
              name: "Engineering & Technology",
              img: "/assets/spain-universities/engineering.jpg",
            },
            {
              name: "Arts & Humanities",
              img: "/assets/spain-universities/arts.jpg",
            },
            {
              name: "Law & Social Sciences",
              img: "/assets/spain-universities/law.jpg",
            },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Equipment & Infrastructure */}
      <section className="spain-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Spanish universities offer modern classrooms, research facilities,
          digital libraries, and vibrant student campuses with excellent
          academic and social support services.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="spain-cost">
        <h2>Cost of Studying in Spain</h2>
        <p>
          Public university tuition ranges from €1,000 to €5,000 per year.
          Living expenses range from €7,000 to €10,000 per year, depending on
          location and lifestyle.
        </p>
        <h3>Scholarships in Spain</h3>
        <ul>
          <li>Spanish Government Scholarships</li>
          <li>Erasmus+ Program</li>
          <li>University-Specific Scholarships</li>
          <li>MAEC-AECID Scholarships</li>
        </ul>
        <img
          src="/assets/spain-universities/spain-scholarship.jpg"
          alt="Scholarships in Spain"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="spain-career">
        <h2>Career Prospects in Spain</h2>
        <p>
          Spain offers strong job opportunities in tourism, education, tech, and
          business. International students can stay back for a year to seek
          employment in Spanish or multinational companies.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="spain-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>Proof of Language Proficiency (English/Spanish)</li>
          <li>CV and Statement of Purpose</li>
          <li>Proof of Funds</li>
          <li>University Admission Letter</li>
        </ul>

        <h2>Spain Student Visa</h2>
        <p>
          Apply for a Type D visa through the Spanish consulate. The process
          includes proof of admission, financial means, medical insurance, and
          accommodation documents.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="spain-life">
        <h2>Student Life in Spain</h2>
        <p>
          Spain offers a lively student atmosphere with rich culture, diverse
          cuisine, music festivals, football matches, and access to the rest of
          Europe through the Schengen visa.
        </p>
        <img
          src="/assets/spain-universities/student-life.jpg"
          alt="Student Life in Spain"
        />
      </section>
      <EnrollSection country="Spain" />

      {/* ✅ FAQs */}
      <section className="spain-faq">
        <h2>FAQs About Studying in Spain</h2>
        <div className="faq-item">
          <h4>Can I study in English in Spain?</h4>
          <p>
            Yes, many universities in Spain offer Bachelor's and Master's
            programs in English, especially in business and engineering fields.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Spain?</h4>
          <p>
            Yes, international students can work part-time up to 20 hours per
            week while studying.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Spain affordable for students?</h4>
          <p>
            Yes, compared to other European countries, Spain offers low tuition
            fees and affordable living costs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Spain;
