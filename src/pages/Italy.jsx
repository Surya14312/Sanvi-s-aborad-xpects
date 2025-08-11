import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Italy() {
  return (
    <div className="italy-container">
      {/* ✅ Hero Section */}
      <section className="italy-hero">
        <div className="italy-hero-content">
          <h1>Study in Italy</h1>
          <p>
            Italy is home to some of the oldest and most prestigious
            universities in the world. Known for its rich history, world-class
            education, affordable tuition fees, and beautiful landscapes, Italy
            offers a perfect blend of culture and academics for international
            students.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/italy-universities/italy-banner.jpg"
          alt="Study in Italy"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section className="italy-highlights">
        <h2>Italy Education at a Glance</h2>
        <div className="highlight-cards">
          <div className="highlight-card">
            90+ Public & Private Universities
          </div>
          <div className="highlight-card">€1K–€4K Tuition Fees</div>
          <div className="highlight-card">35K+ International Students</div>
          <div className="highlight-card">1-Year Stay-Back Option</div>
        </div>
      </section>

      {/* ✅ Why Study in Italy */}
      <section className="italy-why">
        <h2>Why Choose Italy?</h2>
        <ul>
          <li>Globally Respected Institutions & Degrees</li>
          <li>Affordable Tuition and Living Costs</li>
          <li>Programs Available in English</li>
          <li>Rich Cultural and Historical Heritage</li>
          <li>Vibrant Student Life Across Cities</li>
          <li>Scholarships for International Students</li>
        </ul>
      </section>

      {/* ✅ Top Universities */}
      <section className="italy-universities">
        <h2>Top Universities in Italy</h2>
        <div className="marquee">
          <div className="marquee-track">
            {[
              {
                name: "University of Bologna",
                img: "/assets/italy-universities/bologna.jpg",
              },
              {
                name: "Sapienza University of Rome",
                img: "/assets/italy-universities/sapienza.jpg",
              },
              {
                name: "Politecnico di Milano",
                img: "/assets/italy-universities/politecnico.jpg",
              },
              {
                name: "University of Padua",
                img: "/assets/italy-universities/padua.jpg",
              },
              {
                name: "University of Milan",
                img: "/assets/italy-universities/milan.jpg",
              },
              {
                name: "University of Pisa",
                img: "/assets/italy-universities/pisa.jpg",
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
      <section className="italy-courses">
        <h2>Popular Courses in Italy</h2>
        <div className="course-grid">
          {[
            {
              name: "Architecture & Design",
              img: "/assets/italy-universities/architecture.jpg",
            },
            {
              name: "Engineering & Technology",
              img: "/assets/italy-universities/engineering.jpg",
            },
            {
              name: "Business & Economics",
              img: "/assets/italy-universities/business.jpg",
            },
            {
              name: "Art, Fashion & Culture",
              img: "/assets/italy-universities/fashion.jpg",
            },
            {
              name: "Medicine & Life Sciences",
              img: "/assets/italy-universities/medicine.jpg",
            },
            {
              name: "Humanities & Social Sciences",
              img: "/assets/italy-universities/humanities.jpg",
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
      <section className="italy-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          Italian universities offer advanced facilities, digital libraries, art
          and design studios, medical labs, and research centers equipped with
          modern technology to support innovation and learning.
        </p>
      </section>

      {/* ✅ Cost & Scholarships */}
      <section className="italy-cost">
        <h2>Cost of Studying in Italy</h2>
        <p>
          Tuition fees in public universities range from €1,000 to €4,000 per
          year. Living expenses are moderate, averaging €7,000–€12,000 annually
          including rent, food, transport, and leisure.
        </p>
        <h3>Scholarships in Italy</h3>
        <ul>
          <li>Invest Your Talent in Italy</li>
          <li>Italian Government Scholarships</li>
          <li>University Tuition Fee Waivers</li>
          <li>Regional & Merit-Based Grants</li>
        </ul>
        <img
          src="/assets/italy-universities/italy-scholarship.jpg"
          alt="Scholarships in Italy"
          className="scholarship-img"
        />
      </section>

      {/* ✅ Career Prospects */}
      <section className="italy-career">
        <h2>Career Prospects in Italy</h2>
        <p>
          Italy’s industries in fashion, automotive, tourism, and engineering
          offer great job potential. Graduates can apply for a 1-year stay-back
          visa to find employment or start internships in top sectors.
        </p>
      </section>

      {/* ✅ Documents & Visa Process */}
      <section className="italy-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Degree Certificate</li>
          <li>Proof of English or Italian Language Proficiency</li>
          <li>Motivation Letter & Curriculum Vitae</li>
          <li>Financial Proof / Bank Statement</li>
          <li>Admission Letter from Italian University</li>
        </ul>

        <h2>Italy Student Visa</h2>
        <p>
          International students must apply for a D-type student visa at their
          nearest Italian consulate. This includes submitting all admission and
          financial documents and attending a visa interview.
        </p>
      </section>

      {/* ✅ Student Life */}
      <section className="italy-life">
        <h2>Student Life in Italy</h2>
        <p>
          Student life in Italy is vibrant and culturally enriching — from
          enjoying Renaissance art and Roman history to indulging in Italian
          cuisine and student discounts in museums, travel, and more.
        </p>
        <img
          src="/assets/italy-universities/student-life.jpg"
          alt="Student Life in Italy"
        />
      </section>

      <EnrollSection country="Italy" />

      {/* ✅ FAQs */}
      <section className="italy-faq">
        <h2>FAQs About Studying in Italy</h2>
        <div className="faq-item">
          <h4>Are programs available in English?</h4>
          <p>
            Yes, many bachelor’s and master’s programs in Italy are offered
            entirely in English across various fields.
          </p>
        </div>
        <div className="faq-item">
          <h4>Can international students work in Italy?</h4>
          <p>
            Yes, students can work part-time up to 20 hours/week during the
            semester and full-time during vacations.
          </p>
        </div>
        <div className="faq-item">
          <h4>Is Italy affordable for international students?</h4>
          <p>
            Yes, Italy is considered one of the most affordable study
            destinations in Europe with low tuition and reasonable living costs.
          </p>
        </div>
      </section>
    </div>
  );
}

export default Italy;
