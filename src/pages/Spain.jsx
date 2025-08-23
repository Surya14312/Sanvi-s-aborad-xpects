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
      <section
  style={{
    padding: "80px 20px",
    textAlign: "center",
    maxWidth: "1200px",
    margin: "0 auto",
    position: "relative",
    fontFamily: "'Poppins', sans-serif",
  }}
>
  <h2
    style={{
      fontSize: "clamp(2rem, 4vw, 3rem)",
      fontWeight: "800",
      marginBottom: "40px",
      background: "linear-gradient(135deg, #dc2626, #facc15)", // 🇪🇸 Spain red-yellow gradient
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1.2px",
      transition: "transform 0.3s ease",
      cursor: "default",
    }}
    onMouseEnter={(e) =>
      (e.target.style.transform = "translateY(-3px) scale(1.02)")
    }
    onMouseLeave={(e) =>
      (e.target.style.transform = "translateY(0) scale(1)")
    }
  >
    Spain Education at a Glance
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
      gap: "2rem",
      justifyItems: "center",
      transition: "all 0.4s ease",
    }}
  >
    {[
      "80+ Universities & Institutions",
      "€750 – €3,500 Tuition Fees (Public Universities)",
      "200K+ International Students",
      "Post-Study Work & Internship Opportunities",
    ].map((text, index) => (
      <div
        key={index}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          transition:
            "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
          padding: "28px 20px",
          fontSize: "1.05rem",
          fontWeight: "600",
          color: "#1f2937",
          textAlign: "center",
          cursor: "default",
          position: "relative",
          overflow: "hidden",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-6px) scale(1.05)";
          e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.2)";
          e.currentTarget.style.background = "rgba(255,255,255,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.15)";
          e.currentTarget.style.background = "rgba(255,255,255,0.1)";
        }}
      >
        {text}
      </div>
    ))}
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
{/* Cost of Study & Scholarships */}
<section className="spain-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in Spain</h2>
      <p>
        Tuition fees range from €1,000 - €10,000 per year depending on the program and university. Living costs vary by city, averaging €9,000 - €14,000 per year.
      </p>
      <h3>Scholarships in Spain</h3>
      <ul>
        <li>Spanish Government Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>International Student Financial Aid Programs</li>
        <li>MAEC-AECID Scholarships</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/spain-universities/spain-scholarship.jpg"
        alt="Scholarships in Spain"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="spain-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in Spain</h2>
  <p>
    Spain offers job opportunities in Tourism, Engineering, Technology, Business, and Healthcare. International students can work part-time during studies and may apply for work visas after graduation.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="spain-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>Spanish or English Proficiency Test (DELE/IELTS/TOEFL)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a Spanish University</li>
  </ul>

  <h2>Spain Student Visa</h2>
  <p>
    Apply for a student visa via the Spanish consulate using the university acceptance letter, proof of funds, health insurance, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="spain-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/spain-universities/student-life.jpg"
        alt="Student Life in Spain"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in Spain</h2>
      <p>
        Spain offers a lively and culturally rich student environment with historic campuses, vibrant cities, and diverse cultural experiences. Students can enjoy festivals, internships, language learning, and networking opportunities.
      </p>
    </div>

  </div>
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
