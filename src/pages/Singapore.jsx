import React from "react";
import { Link } from "react-router-dom";

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

      {/* ✅ Quick Stats */}
      <section className="singapore-highlights">
        <h2>Singapore Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">6 Public Universities</div>
          <div className="highlight-card">SGD 10K - SGD 30K Tuition Fees</div>
          <div className="highlight-card">80K+ International Students</div>
          <div className="highlight-card">Work While Studying</div>
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
          Singaporean universities boast modern infrastructure, smart classrooms,
          research centers, and industry partnerships for hands-on learning.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="singapore-cost">
        <h2>Cost of Studying in Singapore</h2>
        <p>
          Tuition fees in Singapore range between SGD 10,000 – SGD 30,000 per
          year. Living expenses range from SGD 8,000 – SGD 12,000 annually.
        </p>
        <h3>Scholarships in Singapore</h3>
        <ul>
          <li>SINGA Scholarship</li>
          <li>MOE Tuition Grant Scheme</li>
          <li>NUS & NTU Merit Scholarships</li>
          <li>University-specific Financial Aid</li>
        </ul>
        <img
          src="/assets/singapore-universities/singapore-scholarship.jpg"
          alt="Scholarships in Singapore"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="singapore-career">
        <h2>Career Prospects in Singapore</h2>
        <p>
          Singapore is a financial and tech hub with jobs in banking, IT,
          logistics, life sciences, and hospitality. Graduates benefit from strong
          placement support and international exposure.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="singapore-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>English Language Proficiency Proof</li>
          <li>Passport-sized Photographs</li>
          <li>Letter of Offer from University</li>
        </ul>

        <h2>Singapore Student Pass</h2>
        <p>
          Apply for a Student Pass via ICA. The process includes submitting
          documents through SOLAR, obtaining a letter of acceptance, and
          attending an interview if required.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="singapore-life">
        <h2>Student Life in Singapore</h2>
        <p>
          Student life in Singapore is vibrant, with excellent public transport,
          food, safety, and community activities. Students enjoy both academic
          rigor and cultural experiences.
        </p>
        <img
          src="/assets/singapore-universities/student-life.jpg"
          alt="Student Life in Singapore"
        />
      </section>

      {/* ✅ FAQs */}
      <section className="singapore-faq">
        <h2>FAQs About Studying in Singapore</h2>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>
            Yes, students can work up to 16 hours per week during term and full-time
            during vacations, depending on the institution.
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
            Yes, all major institutions in Singapore use English as the language of
            instruction.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Singapore;
