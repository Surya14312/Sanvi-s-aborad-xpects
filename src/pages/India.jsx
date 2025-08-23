import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function India() {
  return (
    <div className="india-container">
      {/* ✅ Hero Section */}
      <section className="india-hero">
        <div className="india-hero-content">
          <h1>Study in India</h1>
          <p>
            India offers world-class education with globally recognized degrees,
            affordable tuition, a strong English-speaking academic environment,
            and diverse cultural experiences. Home to top-ranking institutions
            like IITs and IIMs, India is a hub for engineering, technology,
            management, and more.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/india-universities/india-banner.jpg"
          alt="Study in India"
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
      background:
        "linear-gradient(135deg, #f97316, #ffffff, #16a34a, #1e3a8a)", // 🇮🇳 India saffron-white-green-navy gradient
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
    India Education at a Glance
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
      "1,000+ Universities & 40K+ Colleges",
      "₹50K – ₹5L Tuition Fees per Year",
      "1M+ International Students",
      "Diverse Post-Study Work & Research Opportunities",
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

      {/* ✅ Why Study in India */}
      <section className="india-why">
        <h2>Why Choose India?</h2>
        <ul>
          <li>Globally Recognized Institutions (IITs, IIMs, NITs)</li>
          <li>Affordable Tuition & Living Costs</li>
          <li>English-Medium Programs</li>
          <li>Diverse Cultural & Academic Environment</li>
          <li>Strong STEM & Business Education</li>
          <li>Government & University Scholarships Available</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="india-universities">
        <h2>Top Universities in India</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "Indian Institute of Technology (IIT Bombay)",
                img: "/assets/india-universities/iitb.jpg",
              },
              {
                name: "Indian Institute of Science (IISc)",
                img: "/assets/india-universities/iisc.jpg",
              },
              {
                name: "University of Delhi",
                img: "/assets/india-universities/du.jpg",
              },
              {
                name: "Jawaharlal Nehru University",
                img: "/assets/india-universities/jnu.jpg",
              },
              {
                name: "Amity University",
                img: "/assets/india-universities/amity.jpg",
              },
              {
                name: "VIT University",
                img: "/assets/india-universities/vit.jpg",
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
      <section className="india-courses">
        <h2>Popular Courses in India</h2>
        <div className="course-grid">
          {[
            {
              name: "Engineering & Technology",
              img: "/assets/india-universities/engineering.jpg",
            },
            {
              name: "Computer Science & IT",
              img: "/assets/india-universities/it.jpg",
            },
            {
              name: "Business & Management",
              img: "/assets/india-universities/business.jpg",
            },
            {
              name: "Medicine & Health Sciences",
              img: "/assets/india-universities/medicine.jpg",
            },
            {
              name: "Arts & Humanities",
              img: "/assets/india-universities/arts.jpg",
            },
            {
              name: "Law & Social Sciences",
              img: "/assets/india-universities/law.jpg",
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
      <section className="india-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Indian universities offer advanced labs, innovation hubs, modern
          libraries, smart classrooms, and campus facilities that support
          holistic academic and research growth.
        </p>
      </section>

     {/* Cost of Study & Scholarships */}
<section className="india-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in India</h2>
      <p>
        Tuition fees range from INR 50,000 - INR 5,00,000 per year depending on the program and university. Living costs vary by city, averaging INR 1,50,000 - INR 3,00,000 per year.
      </p>
      <h3>Scholarships in India</h3>
      <ul>
        <li>Government of India Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>International Student Financial Aid Programs</li>
        <li>Merit-Based and Need-Based Scholarships</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/india-universities/india-scholarship.jpg"
        alt="Scholarships in India"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="india-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in India</h2>
  <p>
    India offers job opportunities in IT, Finance, Engineering, Healthcare, and Education sectors. International students can explore internships, part-time work, and post-graduation employment options through relevant work permits.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="india-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>English Proficiency Test (IELTS/TOEFL) if required</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from an Indian University</li>
  </ul>

  <h2>India Student Visa</h2>
  <p>
    Apply for a student visa via the Indian consulate or visa application portal using the university acceptance letter, proof of funds, medical certificate, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="india-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/india-universities/student-life.jpg"
        alt="Student Life in India"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in India</h2>
      <p>
        India offers a diverse and culturally rich student environment with historic campuses, vibrant cities, and extensive cultural experiences. Students can enjoy festivals, internships, networking opportunities, and extracurricular activities.
      </p>
    </div>

  </div>
</section>

      <EnrollSection country="India" />

      {/* ✅ FAQs */}
      <section className="india-faq">
        <h2>FAQs About Studying in India</h2>
        <div className="faq-item">
          <h4>Is English used as the medium of instruction in India?</h4>
          <p>
            Yes, most programs in Indian universities are offered in English,
            especially in technical and professional fields.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in India?</h4>
          <p>
            Part-time work is limited; students can explore internships through
            their universities or apply for campus roles.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is India affordable for international students?</h4>
          <p>
            Yes, India is one of the most budget-friendly countries for
            education with low tuition and living costs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default India;
