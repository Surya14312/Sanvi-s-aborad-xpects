import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";
function Singapore() {
  return (
    <div className="singapore-container">
      {/* ✅ Hero Section */}
      <section className="singapore-hero">
        <div className="singapore-hero-content">
          <h1>Study in Singapore</h1>
          <p>
            Singapore is an emerging global education hub offering high-quality
            education, world-class universities, and a multicultural, safe
            environment. Its strategic location, English-based education system,
            and industry-aligned programs make it a top choice for international
            students.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/singapore-universities/singapore-banner.jpg"
          alt="Study in Singapore"
          className="hero-img"
        />
      </section>

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
      background: "linear-gradient(135deg, #ef4444, #991b1b)", // 🇸🇬 Singapore red gradient
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1.2px",
      transition: "transform 0.3s ease",
      cursor: "default",
    }}
    onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px) scale(1.02)")}
    onMouseLeave={(e) => (e.target.style.transform = "translateY(0) scale(1)")}
  >
    Singapore Education at a Glance
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
      "30+ Universities & Institutes of Higher Learning",
      "SGD 12K – SGD 20K Tuition Fees",
      "80K+ International Students",
      "Stay-Back Options via Work Pass Schemes",
    ].map((text, index) => (
      <div
        key={index}
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(16px) saturate(180%)",
          WebkitBackdropFilter: "blur(16px) saturate(180%)",
          borderRadius: "16px",
          boxShadow: "0 8px 25px rgba(0,0,0,0.15)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
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


      {/* ✅ Why Study in Singapore */}
      <section className="singapore-why">
        <h2>Why Choose Singapore?</h2>
        <ul>
          <li>Top-Notch Education & Technology</li>
          <li>English-Medium Instruction</li>
          <li>Strong Employment Opportunities</li>
          <li>Safe & Clean Urban Environment</li>
          <li>Multicultural Lifestyle</li>
          <li>Affordable Tuition Compared to the West</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="singapore-universities">
        <h2>Top Universities in Singapore</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "National University of Singapore (NUS)",
                img: "/assets/singapore-universities/nus.jpg",
              },
              {
                name: "Nanyang Technological University (NTU)",
                img: "/assets/singapore-universities/ntu.jpg",
              },
              {
                name: "Singapore Management University (SMU)",
                img: "/assets/singapore-universities/smu.jpg",
              },
              {
                name: "INSEAD Asia Campus",
                img: "/assets/singapore-universities/insead.jpg",
              },
              {
                name: "SIM Global Education",
                img: "/assets/singapore-universities/sim.jpg",
              },
              {
                name: "James Cook University (Singapore)",
                img: "/assets/singapore-universities/jcu.jpg",
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
      <section className="singapore-courses">
        <h2>Popular Courses in Singapore</h2>
        <div className="course-grid">
          {[
            {
              name: "Computer Science",
              img: "/assets/singapore-universities/computer-science.jpg",
            },
            {
              name: "Business Management",
              img: "/assets/singapore-universities/business.jpg",
            },
            {
              name: "Engineering",
              img: "/assets/singapore-universities/engineering.jpg",
            },
            {
              name: "Tourism & Hospitality",
              img: "/assets/singapore-universities/hospitality.jpg",
            },
            {
              name: "Data Analytics",
              img: "/assets/singapore-universities/data.jpg",
            },
            {
              name: "Finance & Banking",
              img: "/assets/singapore-universities/finance.jpg",
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
      <section className="singapore-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Singaporean universities boast modern infrastructure, smart
          classrooms, research centers, and industry partnerships for hands-on
          learning.
        </p>
      </section>

   {/* Cost of Study & Scholarships */}
<section className="singapore-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in Singapore</h2>
      <p>
        Tuition fees range from SGD 18,000 - SGD 45,000 annually depending on
        the program and university. Living costs vary by location, averaging
        SGD 12,000 - SGD 20,000 per year.
      </p>
      <h3>Scholarships in Singapore</h3>
      <ul>
        <li>ASEAN Scholarships</li>
        <li>Singapore Government Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>International Student Financial Aid Programs</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/singapore-universities/singapore-scholarship.jpg"
        alt="Scholarships in Singapore"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="singapore-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in Singapore</h2>
  <p>
    Singapore offers strong job opportunities for graduates, particularly in Finance, Technology, Engineering, Healthcare, and Research. International students can work part-time during studies and benefit from the Employment Pass or S Pass for post-graduation work.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="singapore-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>English Proficiency Test (IELTS/TOEFL)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a Singapore University</li>
  </ul>

  <h2>Singapore Student Visa</h2>
  <p>
    Apply for a Student Pass via the Immigration & Checkpoints Authority (ICA) using the university acceptance letter, proof of funds, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="singapore-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/singapore-universities/student-life.jpg"
        alt="Student Life in Singapore"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in Singapore</h2>
      <p>
        Singapore offers a vibrant, multicultural student environment with modern campuses, extensive networking opportunities, and exciting cultural experiences. Students can enjoy city life, internships, and numerous academic and extracurricular activities.
      </p>
    </div>

  </div>
</section>


      <EnrollSection country="Singapore" />

      {/* ✅ FAQs */}
      <section className="singapore-faq">
        <h2>FAQs About Studying in Singapore</h2>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>
            Yes, students can work up to 16 hours per week during term and
            full-time during vacations, depending on the institution.
          </p>
        </div>
        <div className="faq-item">
          <h4>What is the tuition fee range?</h4>
          <p>
            Tuition typically ranges from SGD 10,000 to SGD 30,000 per year.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is English the medium of instruction?</h4>
          <p>
            Yes, all major institutions in Singapore use English as the language
            of instruction.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Singapore;
