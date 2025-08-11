import React from "react";
import { Link } from "react-router-dom";

const CourseSelection = () => {
  return (
    <div className="career-container">
      {/* ===============================
          Hero Section
      =============================== */}
      <section className="career-hero">
        <div className="career-hero-text">
          <h1>Find the Right Course for Your Future</h1>
          <p>
            Choosing a study program abroad is one of the most important
            decisions in your academic journey. Our expert counselors help you
            find the perfect fit — a course that matches your skills, ambitions,
            and future career plans — while guiding you every step of the way.
          </p>
          <Link to="/apply" className="apply-button">
            Start Application
          </Link>
        </div>
        <img
          src="/assets/course-selection-banner.jpg"
          alt="Course Selection Abroad"
          className="career-banner-img"
        />
      </section>

      {/* ===============================
          Intro Section
      =============================== */}
      <section className="career-info">
        <h2>What is Course Selection Guidance?</h2>
        <p>
          Our <strong>Course Selection Guidance</strong> service is designed to
          help you identify the right academic pathway based on your interests,
          educational background, financial considerations, and career
          objectives. We take into account your personal strengths, aspirations,
          and the global job market to recommend the best-fit program and
          destination.
        </p>
      </section>

      {/* ===============================
          Why Course Selection Matters
      =============================== */}
      <section className="career-info">
        <h2>Why is Choosing the Right Course So Important?</h2>
        <ul>
          <li>🎓 Aligns your studies with your long-term career goals</li>
          <li>
            🌍 Ensures you pick the ideal country for your personal and
            professional growth
          </li>
          <li>
            📘 Prevents costly mistakes from wrong course or institution choices
          </li>
          <li>🧭 Gives you clarity and confidence in your academic path</li>
          <li>
            📈 Improves employability and career prospects after graduation
          </li>
        </ul>
      </section>

      {/* ===============================
          Benefits of Our Service
      =============================== */}
      <section className="career-info">
        <h2>Benefits of Professional Course Selection</h2>
        <p>
          Our experienced counselors take the guesswork out of choosing your
          study program. We provide accurate, updated information and
          personalized recommendations to give you the best start to your
          academic journey abroad.
        </p>
        <ul>
          <li>
            ✅ Access to thousands of updated course catalogs from top
            universities worldwide
          </li>
          <li>
            ✅ Insights into the latest scholarship and financial aid
            opportunities
          </li>
          <li>✅ Support in understanding specific admission requirements</li>
          <li>
            ✅ Guidance to align your studies with high-demand job markets
          </li>
          <li>
            ✅ Step-by-step assistance with the entire application process
          </li>
        </ul>
      </section>

      {/* ===============================
          Our Step-by-Step Process
      =============================== */}
      <section className="career-steps">
        <h2>Our Course Selection Process</h2>
        <div className="steps-grid">
          <div className="step-card">
            <h3>Step 1: Personal Assessment</h3>
            <p>
              We conduct an in-depth review of your academic history, skills,
              interests, and career aspirations.
            </p>
          </div>
          <div className="step-card">
            <h3>Step 2: Market & Industry Research</h3>
            <p>
              Our experts share insights on emerging fields, in-demand skills,
              and job market trends worldwide.
            </p>
          </div>
          <div className="step-card">
            <h3>Step 3: Destination Matching</h3>
            <p>
              We recommend countries and universities that best suit your
              personal preferences and career plans.
            </p>
          </div>
          <div className="step-card">
            <h3>Step 4: Course Shortlisting</h3>
            <p>
              You receive a curated shortlist of programs tailored to your
              profile and aspirations.
            </p>
          </div>
          <div className="step-card">
            <h3>Step 5: Application Support</h3>
            <p>
              From preparing documents to submitting your application, we guide
              you at every stage.
            </p>
          </div>
          <div className="step-card">
            <h3>Step 6: Pre-Departure Guidance</h3>
            <p>
              We help with visa procedures, travel planning, and settling into
              your new country.
            </p>
          </div>
        </div>
      </section>

      {/* ===============================
          Student Testimonials
      =============================== */}
      <section className="career-testimonials">
        <h2>What Our Students Say</h2>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <p>
              “Their course guidance was spot-on! I found a program in Canada
              that perfectly matched my career vision.”
            </p>
            <span>- Priya S.</span>
          </div>
          <div className="testimonial-card">
            <p>
              “I was overwhelmed by choices before I met them. Now I’m studying
              my dream course in Australia.”
            </p>
            <span>- Ahmed K.</span>
          </div>
          <div className="testimonial-card">
            <p>
              “They took the time to understand my goals and made sure I applied
              to the right programs.”
            </p>
            <span>- Sarah L.</span>
          </div>
        </div>
      </section>

      {/* ===============================
          Popular Courses & Destinations
      =============================== */}
      <section className="career-info">
        <h2>Popular Courses & Study Destinations</h2>
        <div className="popular-list">
          <div>
            <h3>Top Courses We Recommend</h3>
            <ul>
              <li>Master of Business Administration (MBA)</li>
              <li>Computer Science & IT</li>
              <li>Engineering Specializations</li>
              <li>Healthcare & Nursing</li>
              <li>Hospitality & Tourism Management</li>
            </ul>
          </div>
          <div>
            <h3>Leading Study Destinations</h3>
            <ul>
              <li>🇨🇦 Canada</li>
              <li>🇦🇺 Australia</li>
              <li>🇬🇧 United Kingdom</li>
              <li>🇩🇪 Germany</li>
              <li>🇯🇵 Japan</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===============================
          Tips for Students
      =============================== */}
      <section className="career-info">
        <h2>Tips for Choosing the Right Course</h2>
        <ul>
          <li>💡 Define your career objectives before choosing a program</li>
          <li>💡 Research industry growth in your preferred destination</li>
          <li>💡 Compare tuition fees and cost of living between countries</li>
          <li>💡 Check for available scholarships or financial aid</li>
          <li>💡 Speak to alumni for real-life insights about the course</li>
        </ul>
      </section>

      {/* ===============================
          FAQs
      =============================== */}
      <section className="career-faq">
        <h2>Frequently Asked Questions</h2>
        <div className="faq-item">
          <h4>Q: How do I know which course suits me?</h4>
          <p>
            A: We offer career assessments and personal counseling to help you
            identify your best options.
          </p>
        </div>
        <div className="faq-item">
          <h4>Q: Can I change my course after starting?</h4>
          <p>
            A: This depends on the university policy, but we provide advice if
            you need to switch.
          </p>
        </div>
        <div className="faq-item">
          <h4>Q: Do you help with scholarships?</h4>
          <p>
            A: Yes, we help find and apply for scholarships suited to your
            profile.
          </p>
        </div>
      </section>

      {/* ===============================
          Call-to-Action
      =============================== */}
      <section className="contact-section">
        <p>
          Have questions about our course selection services or need guidance on
          the next step in your academic journey?{" "}
          <Link to="/contact" className="contact-link">
            Contact us
          </Link>
        </p>
        <p>
          Ready to discover your dream study destination?{" "}
          <Link to="/destinations" className="destination-link">
            🌍 Explore Destinations
          </Link>
        </p>
      </section>
    </div>
  );
};

export default CourseSelection;
