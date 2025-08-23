import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";
function Netherlands() {
  return (
    <div className="netherlands-container">
      {/* ✅ Hero Section */}
      <section className="netherlands-hero">
        <div className="netherlands-hero-content">
          <h1>Study in Netherlands</h1>
          <p>
            The Netherlands is renowned for its innovative teaching methods,
            high-quality universities, and strong international reputation. With
            over 2,000 programs taught in English, affordable tuition, and a
            welcoming, multicultural society, it’s a top destination for global
            students.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/netherlands-universities/netherlands-banner.jpg"
          alt="Study in Netherlands"
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
        "linear-gradient(135deg, #dc2626, #ffffff, #1e3a8a)", // 🇳🇱 Netherlands red-white-blue gradient
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
    Netherlands Education at a Glance
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
      "35+ Research Universities & 75+ Universities of Applied Sciences",
      "€6,000 – €20,000 Tuition Fees per Year",
      "115K+ International Students",
      "Strong Post-Study Work & Career Opportunities",
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


      {/* ✅ Why Study in Netherlands */}
      <section className="netherlands-why">
        <h2>Why Choose Netherlands?</h2>
        <ul>
          <li>Top-Ranked Universities & Research Institutes</li>
          <li>2,000+ English-Taught Programs</li>
          <li>Affordable Tuition Compared to Other EU Countries</li>
          <li>Safe, Welcoming, and Multicultural Environment</li>
          <li>Excellent Public Transport and Infrastructure</li>
          <li>Strong Focus on Innovation and Sustainability</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="netherlands-universities">
        <h2>Top Universities in Netherlands</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "Delft University of Technology (TU Delft)",
                img: "/assets/netherlands-universities/tudelft.jpg",
              },
              {
                name: "University of Amsterdam",
                img: "/assets/netherlands-universities/uva.jpg",
              },
              {
                name: "Eindhoven University of Technology",
                img: "/assets/netherlands-universities/eindhoven.jpg",
              },
              {
                name: "Wageningen University & Research",
                img: "/assets/netherlands-universities/wur.jpg",
              },
              {
                name: "Leiden University",
                img: "/assets/netherlands-universities/leiden.jpg",
              },
              {
                name: "Utrecht University",
                img: "/assets/netherlands-universities/utrecht.jpg",
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
      <section className="netherlands-courses">
        <h2>Popular Courses in Netherlands</h2>
        <div className="course-grid">
          {[
            {
              name: "Engineering & Technology",
              img: "/assets/netherlands-universities/engineering.jpg",
            },
            {
              name: "Business & Management",
              img: "/assets/netherlands-universities/business.jpg",
            },
            {
              name: "Computer Science & AI",
              img: "/assets/netherlands-universities/computer-science.jpg",
            },
            {
              name: "Agricultural & Environmental Sciences",
              img: "/assets/netherlands-universities/environment.jpg",
            },
            {
              name: "Life Sciences & Health",
              img: "/assets/netherlands-universities/health.jpg",
            },
            {
              name: "Social Sciences & Humanities",
              img: "/assets/netherlands-universities/humanities.jpg",
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
      <section className="netherlands-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Dutch universities offer modern labs, innovation centers, digital
          libraries, and advanced research facilities that foster creativity,
          experimentation, and global innovation.
        </p>
      </section>

   {/* Cost of Study & Scholarships */}
<section className="netherlands-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in the Netherlands</h2>
      <p>
        Tuition fees range from €8,000 - €20,000 per year depending on the program and university. Living costs vary by city, averaging €10,000 - €15,000 per year.
      </p>
      <h3>Scholarships in the Netherlands</h3>
      <ul>
        <li>Holland Scholarship</li>
        <li>Orange Tulip Scholarship</li>
        <li>University-Specific Scholarships</li>
        <li>International Student Financial Aid Programs</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/netherlands-universities/netherlands-scholarship.jpg"
        alt="Scholarships in the Netherlands"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="netherlands-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in the Netherlands</h2>
  <p>
    The Netherlands offers opportunities in Technology, Finance, Engineering, Logistics, and Healthcare. International students can work part-time during studies and may apply for a “search year” residence permit after graduation to find employment.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="netherlands-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>English Proficiency Test (IELTS/TOEFL)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a Dutch University</li>
  </ul>

  <h2>Netherlands Student Visa</h2>
  <p>
    Apply for a residence permit for study via the Dutch Immigration and Naturalisation Service (IND) using the university acceptance letter, proof of funds, health insurance, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="netherlands-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/netherlands-universities/student-life.jpg"
        alt="Student Life in the Netherlands"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in the Netherlands</h2>
      <p>
        The Netherlands offers a multicultural and student-friendly environment with modern campuses, historic cities, and vibrant cultural activities. Students can enjoy festivals, internships, networking opportunities, and part-time jobs.
      </p>
    </div>

  </div>
</section>

      <EnrollSection country="Netherlands" />

      {/* ✅ FAQs */}
      <section className="netherlands-faq">
        <h2>FAQs About Studying in Netherlands</h2>
        <div className="faq-item">
          <h4>Are programs taught in English?</h4>
          <p>
            Yes, over 2,000 programs are offered in English across bachelor's,
            master's, and doctoral levels.
          </p>
        </div>

        <div className="faq-item">
          <h4>Can international students work part-time?</h4>
          <p>
            Yes, students from outside the EU/EEA can work up to 16 hours/week
            or full-time during holidays with a work permit.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is the Netherlands safe for international students?</h4>
          <p>
            Yes, the Netherlands is known for its safety, quality of life, and
            strong student support services.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Netherlands;
