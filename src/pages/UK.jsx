import React from "react";
import { Link } from "react-router-dom";

function UK() {
  return (
    <div className="uk-container">
      {/* Hero Section */}
      <section className="uk-hero">
        <div className="uk-hero-content">
          <h1>Study in the UK</h1>
          <p>
            The United Kingdom is one of the most popular destinations for
            international students, offering world-class education, cultural
            diversity, and excellent career opportunities. With globally
            recognized universities and vibrant cities, the UK promises a bright
            future for students.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/uk-universities/uk-banner.jpg"
          alt="Study in UK"
          className="hero-img"
        />
      </section>

      {/* Quick Stats */}
      <section className="uk-highlights">
        <h2>UK Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">150+ Universities</div>
          <div className="highlight-card">€11K - €35K Tuition Fees</div>
          <div className="highlight-card">600K+ International Students</div>
          <div className="highlight-card">
            2-Year Graduate Immigration Route
          </div>
        </div>
      </section>

      {/* Why Study in UK */}
      <section className="uk-why">
        <h2>Why Choose the UK?</h2>
        <ul>
          <li>Prestigious Universities & Globally Recognized Degrees</li>
          <li>15 of the World's Top 100 Universities</li>
          <li>Sandwich Programs (Study + Work Experience)</li>
          <li>Gateway to Europe for Travel & Opportunities</li>
          <li>Work up to 20 hours per week during term</li>
          <li>Shorter Degree Programs (3 Years UG, 1 Year PG)</li>
        </ul>
      </section>

      {/* Top Universities with Marquee */}
      <section className="uk-universities">
        <h2>Top Universities in the UK</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Oxford",
                img: "/assets/uk-universities/oxford.jpg",
              },
              {
                name: "University of Cambridge",
                img: "/assets/uk-universities/cambridge.jpg",
              },
              {
                name: "Imperial College London",
                img: "/assets/uk-universities/imperial.jpg",
              },
              {
                name: "University College London",
                img: "/assets/uk-universities/ucl.jpg",
              },
              {
                name: "University of Edinburgh",
                img: "/assets/uk-universities/edinburgh.jpg",
              },
              {
                name: "King’s College London",
                img: "/assets/uk-universities/kcl.jpg",
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

      {/* Popular Courses */}
      <section className="uk-courses">
        <h2>Popular Courses in the UK</h2>
        <div className="course-grid">
          {[
            {
              name: "Business & Management",
              img: "/assets/uk-universities/business.jpg",
            },
            {
              name: "Engineering",
              img: "/assets/uk-universities/engineering.jpg",
            },
            {
              name: "Medicine",
              img: "/assets/uk-universities/medicine.jpg",
            },
            {
              name: "Law",
              img: "/assets/uk-universities/law.jpg",
            },
            {
              name: "Computer Science",
              img: "/assets/uk-universities/computer-science.jpg",
            },
            {
              name: "Arts & Design",
              img: "/assets/uk-universities/arts-design.jpg",
            },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cost of Study & Scholarships */}
      <section className="uk-cost">
        <h2>Cost of Studying in the UK</h2>
        <p>
          Tuition fees range between €11,000 - €35,000 annually. Living costs
          vary by city, averaging €10,000 - €12,000 per year in London and less
          in other cities.
        </p>
        <h3>Scholarships in the UK</h3>
        <ul>
          <li>Chevening Scholarships</li>
          <li>Commonwealth Scholarships</li>
          <li>GREAT Scholarships</li>
          <li>University-Specific Grants</li>
        </ul>
        <img
          src="/assets/uk-universities/uk-scholarship.jpg"
          alt="Scholarships in the UK"
          className="scholarship-img"
        />
      </section>

      {/* Career Prospects */}
      <section className="uk-career">
        <h2>Career Prospects in the UK</h2>
        <p>
          The UK offers excellent job opportunities for graduates, particularly
          in fields like Finance, Technology, Healthcare, and Engineering. The
          2-Year Graduate Immigration Route allows students to gain work
          experience after studies.
        </p>
      </section>

      {/* Documents & Visa Process */}
      <section className="uk-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>English Proficiency Test (IELTS/TOEFL)</li>
          <li>Proof of Funds</li>
          <li>Offer Letter from a UK University</li>
        </ul>

        <h2>UK Student Visa</h2>
        <p>
          Apply for the Tier 4 (General) Student Visa. The process requires a
          Confirmation of Acceptance for Studies (CAS), financial documents, and
          health surcharge payment.
        </p>
      </section>

      {/* Student Life */}
      <section className="uk-life">
        <h2>Student Life in the UK</h2>
        <p>
          The UK offers a multicultural environment with vibrant cities,
          historic landmarks, and excellent student facilities. Students enjoy
          discounts on travel, cultural events, and more.
        </p>
        <img
          src="/assets/uk-universities/student-life.jpg"
          alt="Student Life in UK"
        />
      </section>

      {/* FAQ Section */}
      <section className="uk-faq">
        <h2>FAQs About Studying in the UK</h2>
        <div className="faq-item">
          <h4>What is the average tuition fee in the UK?</h4>
          <p>
            It ranges from €11,000 to €35,000 per year depending on the course
            and university.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>
            Yes, international students can work up to 20 hours per week during
            term time.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is IELTS mandatory?</h4>
          <p>
            Most universities require IELTS or an equivalent English proficiency
            test score.
          </p>
        </div>
      </section>
    </div>
  );
}

export default UK;
