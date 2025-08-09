import React from "react";
import { Link } from "react-router-dom";

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
      <section className="canada-highlights">
        <h2>Canada Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">100+ Public Universities</div>
          <div className="highlight-card">CAD 15K - CAD 35K Tuition Fees</div>
          <div className="highlight-card">800K+ International Students</div>
          <div className="highlight-card">Post-Graduate Work Permit (PGWP)</div>
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

      {/* ✅ Cost of Study & Scholarships */}
      <section className="canada-cost">
        <h2>Cost of Studying in Canada</h2>
        <p>
          Tuition fees in Canada range from CAD 15,000 - CAD 35,000 per year.
          Living expenses vary by province, averaging CAD 10,000 - CAD 15,000
          annually.
        </p>
        <h3>Scholarships in Canada</h3>
        <ul>
          <li>Vanier Canada Graduate Scholarships</li>
          <li>Lester B. Pearson Scholarships</li>
          <li>Canadian Commonwealth Scholarship</li>
          <li>University-Specific Financial Aid</li>
        </ul>
        <img
          src="/assets/canada-universities/canada-scholarship.jpg"
          alt="Scholarships in Canada"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="canada-career">
        <h2>Career Prospects in Canada</h2>
        <p>
          Canada has a strong job market in IT, healthcare, engineering,
          business, and skilled trades. International graduates are eligible for
          PGWP, leading to potential permanent residency pathways.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="canada-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Records & Transcripts</li>
          <li>English/French Proficiency Test (IELTS/TOEFL)</li>
          <li>Proof of Funds</li>
          <li>Letter of Acceptance from DLI</li>
        </ul>

        <h2>Canada Study Permit</h2>
        <p>
          Apply for a Canadian Study Permit via IRCC. You'll need a letter of
          acceptance, financial proof, biometrics, and sometimes a medical exam.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="canada-life">
        <h2>Student Life in Canada</h2>
        <p>
          Canada provides a friendly and inclusive campus experience with clubs,
          co-ops, research groups, and beautiful natural surroundings for
          students to enjoy.
        </p>
        <img
          src="/assets/canada-universities/student-life.jpg"
          alt="Student Life in Canada"
        />
      </section>

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
