import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";
function Malaysia() {
  return (
    <div className="malaysia-container">
      {/* ✅ Hero Section */}
      <section className="malaysia-hero">
        <div className="malaysia-hero-content">
          <h1>Study in Malaysia</h1>
          <p>
            Malaysia is a fast-growing higher education hub offering globally
            recognized degrees, affordable tuition, diverse culture, and a safe
            living environment. With branch campuses of top UK, Australian, and
            local universities, Malaysia provides quality education and
            excellent career prospects.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/malaysia-universities/malaysia-banner.jpg"
          alt="Study in Malaysia"
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
      background: "linear-gradient(135deg, #1e3a8a, #facc15)", // 🇲🇾 Malaysia blue-yellow gradient
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
    Malaysia Education at a Glance
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
      "150+ Higher Education Institutions",
      "RM 10K – RM 40K Tuition Fees",
      "130K+ International Students",
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


      {/* ✅ Why Study in Malaysia */}
      <section className="malaysia-why">
        <h2>Why Choose Malaysia?</h2>
        <ul>
          <li>Affordable Education & Cost of Living</li>
          <li>Globally Recognized Degrees</li>
          <li>Branch Campuses of Foreign Universities</li>
          <li>Diverse & Multicultural Society</li>
          <li>English-Taught Programs</li>
          <li>Safe Environment & Modern Cities</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="malaysia-universities">
        <h2>Top Universities in Malaysia</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Malaya (UM)",
                img: "/assets/malaysia-universities/um.jpg",
              },
              {
                name: "Taylor's University",
                img: "/assets/malaysia-universities/taylors.jpg",
              },
              {
                name: "Monash University Malaysia",
                img: "/assets/malaysia-universities/monash.jpg",
              },
              {
                name: "Sunway University",
                img: "/assets/malaysia-universities/sunway.jpg",
              },
              {
                name: "Asia Pacific University (APU)",
                img: "/assets/malaysia-universities/apu.jpg",
              },
              {
                name: "INTI International University",
                img: "/assets/malaysia-universities/inti.jpg",
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
      <section className="malaysia-courses">
        <h2>Popular Courses in Malaysia</h2>
        <div className="course-grid">
          {[
            {
              name: "Business & Accounting",
              img: "/assets/malaysia-universities/business.jpg",
            },
            {
              name: "Engineering & Technology",
              img: "/assets/malaysia-universities/engineering.jpg",
            },
            {
              name: "Computer Science & IT",
              img: "/assets/malaysia-universities/computer-science.jpg",
            },
            {
              name: "Hospitality & Tourism",
              img: "/assets/malaysia-universities/hospitality.jpg",
            },
            {
              name: "Medicine & Health Sciences",
              img: "/assets/malaysia-universities/medicine.jpg",
            },
            {
              name: "Mass Communication",
              img: "/assets/malaysia-universities/communication.jpg",
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
      <section className="malaysia-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Malaysian universities are equipped with modern facilities, advanced
          research labs, digital libraries, smart classrooms, and
          industry-linked centers of excellence to support academic and
          practical learning.
        </p>
      </section>
{/* Cost of Study & Scholarships */}
<section className="malaysia-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Cost of Studying in Malaysia</h2>
      <p>
        Tuition fees range from MYR 20,000 - MYR 60,000 per year depending on the program and university. Living costs vary by city, averaging MYR 15,000 - MYR 25,000 per year.
      </p>
      <h3>Scholarships in Malaysia</h3>
      <ul>
        <li>Malaysia International Scholarships (MIS)</li>
        <li>University-Specific Scholarships</li>
        <li>Government Merit-Based Scholarships</li>
        <li>International Student Financial Aid Programs</li>
      </ul>
    </div>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/malaysia-universities/malaysia-scholarship.jpg"
        alt="Scholarships in Malaysia"
        className="scholarship-img"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>
  </div>
</section>

{/* Career Prospects */}
<section className="malaysia-career" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Career Prospects in Malaysia</h2>
  <p>
    Malaysia offers job opportunities in Technology, Finance, Education, Engineering, and Healthcare. International students can work part-time during studies and may apply for post-graduation employment opportunities through relevant work visas.
  </p>
</section>

{/* Documents & Visa Process */}
<section className="malaysia-documents" style={{ maxWidth: "900px", margin: "60px auto", padding: "0 20px" }}>
  <h2>Documents Required</h2>
  <ul>
    <li>Valid Passport</li>
    <li>Academic Transcripts & Certificates</li>
    <li>English Proficiency Test (IELTS/TOEFL)</li>
    <li>Proof of Funds</li>
    <li>Offer Letter from a Malaysian University</li>
  </ul>

  <h2>Malaysia Student Visa</h2>
  <p>
    Apply for a student pass via the Malaysian Immigration Department using the university acceptance letter, proof of funds, medical report, and required documents.
  </p>
</section>

{/* Student Life */}
<section className="malaysia-life" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
  <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "40px" }}>

    {/* Image Column */}
    <div style={{ flex: "1 1 400px" }}>
      <img
        src="/assets/malaysia-universities/student-life.jpg"
        alt="Student Life in Malaysia"
        style={{ width: "100%", borderRadius: "16px", boxShadow: "0 10px 25px rgba(0,0,0,0.15)", transition: "transform 0.3s ease" }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.03)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      />
    </div>

    {/* Text Column */}
    <div style={{ flex: "1 1 500px" }}>
      <h2>Student Life in Malaysia</h2>
      <p>
        Malaysia offers a multicultural and affordable student experience with modern campuses, diverse communities, and vibrant city life. Students can enjoy cultural events, internships, networking opportunities, and extracurricular activities.
      </p>
    </div>

  </div>
</section>

      <EnrollSection country="Malaysia" />

      {/* ✅ FAQs */}
      <section className="malaysia-faq">
        <h2>FAQs About Studying in Malaysia</h2>
        <div className="faq-item">
          <h4>Can I study in English in Malaysia?</h4>
          <p>
            Yes, most universities offer programs in English, especially in
            business, IT, and engineering fields.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Malaysia?</h4>
          <p>
            Yes, students can work part-time up to 20 hours per week during
            semester breaks and holidays.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Malaysia affordable for international students?</h4>
          <p>
            Yes, Malaysia is one of the most budget-friendly study destinations
            with low tuition and living costs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Malaysia;
