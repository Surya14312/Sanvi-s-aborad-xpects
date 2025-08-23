import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Mauritius() {
  return (
    <div className="mauritius-container">
      {/* ✅ Hero Section */}
      <section className="mauritius-hero">
        <div className="mauritius-hero-content">
          <h1>Study in Mauritius</h1>
          <p>
            Mauritius is a rising star in international education, offering
            quality British-based degrees, affordable tuition, English-medium
            programs, and a peaceful multicultural island lifestyle. With
            partnerships from UK and French institutions, Mauritius delivers
            globally respected qualifications in a tropical setting.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/mauritius-universities/mauritius-banner.jpg"
          alt="Study in Mauritius"
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
      background: "linear-gradient(135deg, #dc2626, #1e3a8a, #facc15, #16a34a)", // 🇲🇺 Mauritius red-blue-yellow-green gradient
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
    Mauritius Education at a Glance
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
      "10+ Public & Private Universities",
      "MUR 80K – MUR 250K Tuition Fees",
      "5K+ International Students",
      "Post-Study Work & Regional Opportunities",
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


      {/* ✅ Why Study in Mauritius */}
      <section className="mauritius-why">
        <h2>Why Choose Mauritius?</h2>
        <ul>
          <li>British-Style Education System</li>
          <li>Affordable Tuition & Cost of Living</li>
          <li>English as Primary Language of Instruction</li>
          <li>Safe, Peaceful & Multicultural Environment</li>
          <li>Degrees from UK, French & Indian Institutions</li>
          <li>Scenic Island Life with Global Connectivity</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="mauritius-universities">
        <h2>Top Universities in Mauritius</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Mauritius",
                img: "/assets/mauritius-universities/uom.jpg",
              },
              {
                name: "Middlesex University Mauritius",
                img: "/assets/mauritius-universities/middlesex.jpg",
              },
              {
                name: "Aberystwyth University Mauritius",
                img: "/assets/mauritius-universities/aberystwyth.jpg",
              },
              {
                name: "Université des Mascareignes",
                img: "/assets/mauritius-universities/mascareignes.jpg",
              },
              {
                name: "Open University of Mauritius",
                img: "/assets/mauritius-universities/open.jpg",
              },
              {
                name: "Rushmore Business School",
                img: "/assets/mauritius-universities/rushmore.jpg",
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
      <section className="mauritius-courses">
        <h2>Popular Courses in Mauritius</h2>
        <div className="course-grid">
          {[
            {
              name: "Business Administration",
              img: "/assets/mauritius-universities/business.jpg",
            },
            {
              name: "Information Technology",
              img: "/assets/mauritius-universities/it.jpg",
            },
            {
              name: "Hospitality & Tourism",
              img: "/assets/mauritius-universities/hospitality.jpg",
            },
            {
              name: "Engineering",
              img: "/assets/mauritius-universities/engineering.jpg",
            },
            {
              name: "Accounting & Finance",
              img: "/assets/mauritius-universities/finance.jpg",
            },
            {
              name: "Health Sciences",
              img: "/assets/mauritius-universities/health.jpg",
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
      <section className="mauritius-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Mauritius universities feature modern labs, smart classrooms, industry
          incubators, and innovative learning environments that align with
          global academic standards.
        </p>
      </section>

     {/* Cost of Study & Scholarships */}
<section className="mauritius-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in Mauritius</h2>
      <p>
        Tuition fees range from MUR 100,000 - MUR 300,000 per year depending on the program and university. Living costs vary by lifestyle, averaging MUR 80,000 - MUR 150,000 per year.
      </p>
      <h3>Scholarships in Mauritius</h3>
      <ul>
        <li>Mauritius Government Scholarships</li>
        <li>University-Specific Scholarships</li>
        <li>International Student Financial Aid Programs</li>
        <li>Merit-Based and Need-Based Scholarships</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/mauritius-universities/mauritius-scholarship.jpg"
        alt="Scholarships in Mauritius"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="mauritius-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in Mauritius</h2>
  <p>
    Mauritius offers opportunities in Tourism, Finance, IT, Education, and Manufacturing sectors. International students can explore part-time work options during studies and may pursue post-graduation employment through work permits.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="mauritius-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
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
    Apply for a student visa via the Mauritius Passport and Immigration Office using the university acceptance letter, proof of funds, medical report, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="mauritius-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/mauritius-universities/student-life.jpg"
        alt="Student Life in Mauritius"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in Mauritius</h2>
      <p>
        Mauritius offers a multicultural and vibrant student experience with modern campuses, coastal lifestyle, and diverse cultural events. Students can enjoy internships, extracurricular activities, and networking opportunities.
      </p>
    </div>

  </div>
</section>

      <EnrollSection country="Mauritius" />

      {/* ✅ FAQs */}
      <section className="mauritius-faq">
        <h2>FAQs About Studying in Mauritius</h2>
        <div className="faq-item">
          <h4>Can I study in English in Mauritius?</h4>
          <p>
            Yes, English is widely used as the medium of instruction across most
            universities in Mauritius.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can international students work part-time in Mauritius?</h4>
          <p>
            Yes, students can work part-time with approval from the Passport and
            Immigration Office.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Mauritius a safe place to study?</h4>
          <p>
            Yes, Mauritius is considered one of the safest and most peaceful
            countries in Africa with a low crime rate and a welcoming society.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Mauritius;
