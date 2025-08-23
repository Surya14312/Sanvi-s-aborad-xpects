import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Canada() {
  return (
    <div className="canada-container">
      {/* ✅ Hero Section */}
      <section className="canada-hero">
        <div className="canada-hero-content">
          <h1>Study in Canada</h1>
          <p>
            Canada is a top choice for international students, offering
            high-quality education, safe cities, and excellent post-graduation
            opportunities. Its affordable tuition, multicultural environment,
            and world-class institutions make it ideal for global learners.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/canada-universities/canada-banner.jpg"
          alt="Study in Canada"
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
      background: "linear-gradient(135deg, #dc2626, #7f1d1d)", // 🇨🇦 red gradient for Canada
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      letterSpacing: "1.2px",
      transition: "transform 0.3s ease",
      cursor: "default",
    }}
    onMouseEnter={(e) => (e.target.style.transform = "translateY(-3px) scale(1.02)")}
    onMouseLeave={(e) => (e.target.style.transform = "translateY(0) scale(1)")}
  >
    Canada Education at a Glance
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
      "100+ Public Universities",
      "CAD 15K – CAD 35K Tuition Fees",
      "800K+ International Students",
      "Post-Graduate Work Permit (up to 3 Years)",
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


      {/* ✅ Why Study in Canada */}
      <section className="canada-why">
        <h2>Why Choose Canada?</h2>
        <ul>
          <li>Affordable Tuition & Living Costs</li>
          <li>Globally Recognized Degrees</li>
          <li>Safe, Peaceful & Inclusive Environment</li>
          <li>Post-Graduate Work Permit up to 3 Years</li>
          <li>Pathway to Permanent Residency</li>
          <li>Top-Ranked Research Institutions</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="canada-universities">
        <h2>Top Universities in Canada</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[...Array(6)].map((_, i) => {
              const universities = [
                {
                  name: "University of Toronto",
                  img: "/assets/canada-universities/toronto.jpg",
                },
                {
                  name: "University of British Columbia",
                  img: "/assets/canada-universities/ubc.jpg",
                },
                {
                  name: "McGill University",
                  img: "/assets/canada-universities/mcgill.jpg",
                },
                {
                  name: "University of Alberta",
                  img: "/assets/canada-universities/alberta.jpg",
                },
                {
                  name: "University of Waterloo",
                  img: "/assets/canada-universities/waterloo.jpg",
                },
                {
                  name: "Western University",
                  img: "/assets/canada-universities/western.jpg",
                },
              ];
              const uni = universities[i];
              return (
                <div className="uni-card" key={i}>
                  <img src={uni.img} alt={uni.name} />
                  <p>{uni.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ✅ Popular Courses */}
      <section className="canada-courses">
        <h2>Popular Courses in Canada</h2>
        <div className="course-grid">
          {[...Array(6)].map((_, i) => {
            const courses = [
              {
                name: "Computer Science",
                img: "/assets/canada-universities/computer-science.jpg",
              },
              {
                name: "Business & Finance",
                img: "/assets/canada-universities/business.jpg",
              },
              {
                name: "Engineering",
                img: "/assets/canada-universities/engineering.jpg",
              },
              {
                name: "Healthcare & Nursing",
                img: "/assets/canada-universities/health.jpg",
              },
              {
                name: "Environmental Science",
                img: "/assets/canada-universities/environment.jpg",
              },
              {
                name: "Hospitality & Tourism",
                img: "/assets/canada-universities/hospitality.jpg",
              },
            ];
            const course = courses[i];
            return (
              <div className="course-card" key={i}>
                <img src={course.img} alt={course.name} />
                <p>{course.name}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ✅ Equipment & Infrastructure */}
      <section className="canada-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Canadian institutions are equipped with cutting-edge labs, libraries,
          and digital learning tools to ensure a productive academic
          environment.
        </p>
      </section>

{/* Cost of Study & Scholarships */}
<section className="canada-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>
    
    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in Canada</h2>
      <p>
        Tuition fees range between CAD 15,000 - CAD 35,000 annually depending
        on the program and university. Living costs vary by city, averaging
        CAD 12,000 - CAD 18,000 per year.
      </p>
      <h3>Scholarships in Canada</h3>
      <ul>
        <li>Vanier Canada Graduate Scholarships</li>
        <li>Canadian Commonwealth Scholarships</li>
        <li>University-Specific Grants</li>
        <li>International Student Financial Aid Programs</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/canada-universities/canada-scholarship.jpg"
        alt="Scholarships in Canada"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="canada-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in Canada</h2>
  <p>
    Canada offers strong job opportunities for graduates, especially in IT, Engineering, Healthcare, Finance, and Research. The Post-Graduation Work Permit (PGWP) allows international students to gain work experience after studies.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="canada-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>English/French Proficiency Test (IELTS/TOEFL/TEF)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a Canadian University</li>
  </ul>

  <h2>Canada Student Visa</h2>
  <p>
    Apply for a Study Permit. The process requires a university acceptance letter, proof of funds, medical exam (if required), and biometrics.
  </p>
</section>

{/* Student Life */}
<section className="canada-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/canada-universities/student-life.jpg"
        alt="Student Life in Canada"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in Canada</h2>
      <p>
        Canada offers a multicultural and welcoming environment with vibrant campuses, outdoor activities, and excellent student support. Students can enjoy cultural events, internships, and various networking opportunities.
      </p>
    </div>

  </div>
</section>


      <EnrollSection country="Canada" />

      {/* ✅ FAQ Section */}
      <section className="canada-faq">
        <h2>FAQs About Studying in Canada</h2>
        <div className="faq-item">
          <h4>What is the average tuition fee in Canada?</h4>
          <p>
            Tuition fees range from CAD 15,000 to CAD 35,000 per year, depending
            on program and institution.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work during studies?</h4>
          <p>
            Yes, international students can work up to 20 hours per week during
            academic sessions and full-time during scheduled breaks.
          </p>
        </div>
        <div className="faq-item">
          <h4>What is PGWP?</h4>
          <p>
            The Post-Graduate Work Permit allows eligible graduates to work in
            Canada for up to 3 years after graduation.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Canada;
