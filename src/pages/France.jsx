import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function France() {
  return (
    <div className="france-container">
      {/* ✅ Hero Section */}
      <section className="france-hero">
        <div className="france-hero-content">
          <h1>Study in France</h1>
          <p>
            France is a world-renowned destination for international students,
            offering prestigious universities, affordable education, and rich
            cultural experiences. With globally recognized degrees and strong
            government support for education, France is ideal for academic and
            personal growth.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/france-universities/france-banner.jpg"
          alt="Study in France"
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
      background: "linear-gradient(135deg, #1e40af, #dc2626)", // 🇫🇷 France blue-red gradient
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
    France Education at a Glance
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
      "70+ Public Universities & Grandes Écoles",
      "€3K – €15K Tuition Fees",
      "400K+ International Students",
      "Post-Study Work Visa up to 2 Years",
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

      {/* ✅ Why Study in France */}
      <section className="france-why">
        <h2>Why Choose France?</h2>
        <ul>
          <li>Low Tuition Fees at Public Universities</li>
          <li>Home to Top Business & Engineering Schools</li>
          <li>French Government Scholarships Available</li>
          <li>English-Taught Programs Available</li>
          <li>Rich Culture, Cuisine & Architecture</li>
          <li>Strong International Student Support</li>
        </ul>
      </section>
      {/* ✅ Top Universities */}
      <section className="france-universities">
        <h2>Top Universities in France</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "Sorbonne University",
                img: "/assets/france-universities/sorbonne.jpg",
              },
              {
                name: "École Polytechnique",
                img: "/assets/france-universities/polytechnique.jpg",
              },
              {
                name: "University of Paris-Saclay",
                img: "/assets/france-universities/paris-saclay.jpg",
              },
              {
                name: "Sciences Po",
                img: "/assets/france-universities/sciences-po.jpg",
              },
              {
                name: "Grenoble Alpes University",
                img: "/assets/france-universities/grenoble.jpg",
              },
              {
                name: "INSEAD Business School",
                img: "/assets/france-universities/insead.jpg",
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
      <section className="france-courses">
        <h2>Popular Courses in France</h2>
        <div className="course-grid">
          {[
            {
              name: "Luxury & Fashion Management",
              img: "/assets/france-universities/fashion.jpg",
            },
            {
              name: "Business & Economics",
              img: "/assets/france-universities/business.jpg",
            },
            {
              name: "Engineering",
              img: "/assets/france-universities/engineering.jpg",
            },
            {
              name: "Artificial Intelligence",
              img: "/assets/france-universities/ai.jpg",
            },
            {
              name: "International Relations",
              img: "/assets/france-universities/relations.jpg",
            },
            {
              name: "Culinary Arts",
              img: "/assets/france-universities/culinary.jpg",
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
      <section className="france-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          French institutions feature advanced research labs, creative studios,
          business incubators, and industry collaborations to foster innovation
          and hands-on learning.
        </p>
      </section>
  {/* Cost of Study & Scholarships */}
<section className="france-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in France</h2>
      <p>
        Tuition fees range from €3,000 - €20,000 annually depending on the program and university. Living costs vary by city, averaging €10,000 - €15,000 per year in Paris and less in smaller cities.
      </p>
      <h3>Scholarships in France</h3>
      <ul>
        <li>Eiffel Excellence Scholarships</li>
        <li>French Government Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>International Student Financial Aid Programs</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/france-universities/france-scholarship.jpg"
        alt="Scholarships in France"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="france-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in France</h2>
  <p>
    France offers strong job opportunities in Engineering, Technology, Finance, Luxury & Fashion, and Healthcare. International students can work part-time during studies and may apply for the “Autorisation Provisoire de Travail” after graduation to gain work experience.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="france-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>French or English Proficiency Test (DELF/DALF/IELTS/TOEFL)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a French University</li>
  </ul>

  <h2>France Student Visa</h2>
  <p>
    Apply for a long-stay student visa (VLS-TS) via the French consulate or Campus France portal using the university acceptance letter, proof of funds, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="france-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/france-universities/student-life.jpg"
        alt="Student Life in France"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in France</h2>
      <p>
        France offers a dynamic and culturally rich student environment with historic campuses, vibrant cities, and diverse cultural experiences. Students can enjoy local festivals, internships, language learning, and extensive networking opportunities.
      </p>
    </div>

  </div>
</section>

       <EnrollSection country="France" />
      {/* ✅ FAQs */}
      <section className="france-faq">
        <h2>FAQs About Studying in France</h2>
        <div className="faq-item">
          <h4>Can I study in English in France?</h4>
          <p>
            Yes, many universities offer English-taught programs, especially at
            the Master's level.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is IELTS required to study in France?</h4>
          <p>
            For English programs, IELTS or equivalent is required. For French
            programs, a French language certificate is needed.
          </p>
        </div>
        <div className="faq-item">
          <h4>Do I get a stay-back visa after graduation?</h4>
          <p>
            Yes, France offers a 2-year stay-back visa for international
            graduates to find employment.
          </p>
        </div>
      </section>
    </div>
  );
}

export default France;
