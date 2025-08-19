import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Switzerland() {
  return (
    <div className="switzerland-container">
      {/* ✅ Hero Section */}
      <section className="switzerland-hero">
        <div className="switzerland-hero-content">
          <h1>Study in Switzerland</h1>
          <p>
            Switzerland is a global education hub known for excellence in
            hospitality, business, science, and research. With its high quality
            of life, multicultural environment, and world-class universities,
            Switzerland offers a unique and enriching study experience.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/switzerland-universities/switzerland-banner.jpg"
          alt="Study in Switzerland"
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
      background: "linear-gradient(135deg, #dc2626, #ffffff)", // 🇨🇭 Switzerland red-white gradient
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
    Switzerland Education at a Glance
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
      "40+ Universities & Institutions",
      "CHF 15K – CHF 40K Tuition Fees",
      "50K+ International Students",
      "Post-Study Work Opportunities",
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


      {/* ✅ Why Study in Switzerland */}
      <section className="switzerland-why">
        <h2>Why Choose Switzerland?</h2>
        <ul>
          <li>Top Hospitality & Business Schools</li>
          <li>High Quality of Life & Safety</li>
          <li>Multilingual & Multicultural Environment</li>
          <li>Strong Industry Partnerships</li>
          <li>Excellent Research & Innovation Facilities</li>
          <li>English-Taught Courses Available</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="switzerland-universities">
        <h2>Top Universities in Switzerland</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "ETH Zurich",
                img: "/assets/switzerland-universities/eth.jpg",
              },
              {
                name: "École Polytechnique Fédérale de Lausanne (EPFL)",
                img: "/assets/switzerland-universities/epfl.jpg",
              },
              {
                name: "University of Zurich",
                img: "/assets/switzerland-universities/uzh.jpg",
              },
              {
                name: "University of Geneva",
                img: "/assets/switzerland-universities/geneva.jpg",
              },
              {
                name: "University of Lausanne",
                img: "/assets/switzerland-universities/lausanne.jpg",
              },
              {
                name: "Glion Institute of Higher Education",
                img: "/assets/switzerland-universities/glion.jpg",
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
      <section className="switzerland-courses">
        <h2>Popular Courses in Switzerland</h2>
        <div className="course-grid">
          {[
            {
              name: "Hospitality & Tourism Management",
              img: "/assets/switzerland-universities/hospitality.jpg",
            },
            {
              name: "Business & Finance",
              img: "/assets/switzerland-universities/business.jpg",
            },
            {
              name: "International Relations",
              img: "/assets/switzerland-universities/relations.jpg",
            },
            {
              name: "Life Sciences & Medicine",
              img: "/assets/switzerland-universities/medicine.jpg",
            },
            {
              name: "Engineering & Technology",
              img: "/assets/switzerland-universities/engineering.jpg",
            },
            {
              name: "Environmental Studies",
              img: "/assets/switzerland-universities/environment.jpg",
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
      <section className="switzerland-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Swiss institutions offer cutting-edge facilities including modern
          labs, innovation centers, research institutes, and close ties with
          multinational corporations.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="switzerland-cost">
        <h2>Cost of Studying in Switzerland</h2>
        <p>
          Public university tuition ranges from CHF 1,000 to CHF 16,000 per
          year. Living expenses range from CHF 15,000 to CHF 20,000 annually.
        </p>
        <h3>Scholarships in Switzerland</h3>
        <ul>
          <li>Swiss Government Excellence Scholarships</li>
          <li>University-Specific Scholarships</li>
          <li>Graduate Institute Scholarships</li>
          <li>Need-Based & Merit-Based Financial Aid</li>
        </ul>
        <img
          src="/assets/switzerland-universities/switzerland-scholarship.jpg"
          alt="Scholarships in Switzerland"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="switzerland-career">
        <h2>Career Prospects in Switzerland</h2>
        <p>
          Switzerland is home to many global companies in banking,
          pharmaceuticals, hospitality, and research. International students can
          stay 6–12 months after graduation to seek employment.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="switzerland-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Certificates & Transcripts</li>
          <li>Proof of Language Proficiency (IELTS/TOEFL/DELF)</li>
          <li>CV and Statement of Purpose</li>
          <li>Proof of Funds</li>
          <li>University Admission Letter</li>
        </ul>

        <h2>Switzerland Student Visa</h2>
        <p>
          Apply for a long-term student visa (Type D). The process includes
          submitting documents to the Swiss embassy, proof of finances,
          accommodation details, and health insurance coverage.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="switzerland-life">
        <h2>Student Life in Switzerland</h2>
        <p>
          Students in Switzerland enjoy a high standard of living, scenic
          landscapes, outdoor adventures, multilingual society, and easy travel
          throughout Europe.
        </p>
        <img
          src="/assets/switzerland-universities/student-life.jpg"
          alt="Student Life in Switzerland"
        />
      </section>
      <EnrollSection country="Switzerland" />

      {/* ✅ FAQs */}
      <section className="switzerland-faq">
        <h2>FAQs About Studying in Switzerland</h2>
        <div className="faq-item">
          <h4>Can I study in English in Switzerland?</h4>
          <p>
            Yes, many programs—especially at Master's level—are taught in
            English, although some universities require basic French or German.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Switzerland expensive for students?</h4>
          <p>
            Living costs are high but manageable with budgeting. Scholarships
            and part-time work can help reduce expenses.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Switzerland?</h4>
          <p>
            Yes, international students can work up to 15 hours per week during
            the semester and full-time during holidays.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Switzerland;
