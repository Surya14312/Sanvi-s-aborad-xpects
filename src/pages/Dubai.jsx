import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Dubai() {
  return (
    <div className="dubai-container">
      {/* Hero Section */}
      <section className="dubai-hero">
        <div className="dubai-hero-content">
          <h1>Study in Dubai</h1>
          <p>
            Dubai has emerged as a global hub for higher education, attracting thousands of 
            international students each year. The city hosts international branch campuses 
            of leading universities from the UK, USA, Australia, and India, alongside UAE’s 
            own reputed institutions. With world-class infrastructure, tax-free salaries, 
            and proximity to India, Dubai offers high-quality education and excellent career prospects.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <div className="dubai-hero-img">
          <img src="/assets/dubai/dubai-banner.jpg" alt="Study in Dubai" />
        </div>
      </section>

      {/* Dubai at a Glance */}
      <section className="stats-section">
  <h2>Dubai at a Glance</h2>
  <div className="stats-grid">
    {[
      "60+ Universities & Branch Campuses",
      "Top: Birmingham, Heriot-Watt, AUD, Middlesex, Manipal",
      "Tuition: AED 40K – 90K/year",
      "Living: AED 40K – 55K/year",
      "60,000+ International Students",
      "English as Medium of Instruction",
      "Post-Study Work & Long-Term Residency Options",
    ].map((stat, i) => (
      <div key={i} className="stat-card">{stat}</div>
    ))}
  </div>
</section>


      {/* Why Choose Dubai */}
      <section className="dubai-why">
        <h2>Why Choose Dubai?</h2>
        <ul>
          <li>Hub for international universities with globally recognized degrees</li>
          <li>Proximity to India with a large Indian student community</li>
          <li>No language barrier – English widely used</li>
          <li>Thriving job market in business, IT, logistics, healthcare, and hospitality</li>
          <li>Safe, multicultural city with modern infrastructure</li>
          <li>Pathways for long-term residency through work</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="dubai-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Earn international degrees closer to home</li>
          <li>Direct flights and cultural familiarity</li>
          <li>Strong demand for IT, engineering, business, and healthcare professionals</li>
          <li>Internships with global companies based in Dubai</li>
          <li>Affordable compared to US/UK with tax-free future earnings</li>
        </ul>
      </section>

     {/* ✅ Top Universities */}
<section className="dubai-universities">
  <h2>Top Universities in Dubai</h2>
  <div className="universities-grid">
    {[
      {
        name: "University of Dubai",
        img: "/assets/dubai/universities/u1.jpg",
      },
      {
        name: "American University in Dubai",
        img: "/assets/dubai/universities/u2.jpg",
      },
      {
        name: "Middlesex University Dubai",
        img: "/assets/dubai/universities/u3.jpg",
      },
      {
        name: "Heriot-Watt University Dubai",
        img: "/assets/dubai/universities/u4.jpg",
      },
      {
        name: "University of Birmingham Dubai",
        img: "/assets/dubai/universities/u5.jpg",
      },
      {
        name: "Canadian University Dubai",
        img: "/assets/dubai/universities/u6.jpg",
      },
      {
        name: "Amity University Dubai",
        img: "/assets/dubai/universities/u7.jpg",
      },
      {
        name: "Manipal Academy of Higher Education Dubai",
        img: "/assets/dubai/universities/u8.jpg",
      },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Popular Courses */}
<section className="dubai-courses">
  <h2>Popular Courses in Dubai</h2>
  <div className="course-grid">
    {[
      { name: "Business & Management", img: "/assets/dubai/courses/c1.jpg" },
      { name: "Computer Science & IT", img: "/assets/dubai/courses/c2.jpg" },
      { name: "Engineering (Civil, Mechanical, Electrical)", img: "/assets/dubai/courses/c3.jpg" },
      { name: "Architecture & Design", img: "/assets/dubai/courses/c4.jpg" },
      { name: "International Business & Finance", img: "/assets/dubai/courses/c5.jpg" },
      { name: "Media & Communication", img: "/assets/dubai/courses/c6.jpg" },
      { name: "Hospitality & Tourism", img: "/assets/dubai/courses/c7.jpg" },
      { name: "Health Sciences & Nursing", img: "/assets/dubai/courses/c8.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* Cost of Studying & Living */}
      <section className="dubai-cost">
        <h2>Cost of Studying & Living</h2>
        <p>
          <strong>UG:</strong> AED 40K – 70K/year (~₹9–15 lakh)<br/>
          <strong>PG:</strong> AED 50K – 90K/year (~₹11–20 lakh)<br/>
          <strong>Living:</strong> AED 3,500 – 4,500/month (~₹80K–1L) including accommodation & transport
        </p>
        <h3>Scholarships</h3>
        <ul>
          <li>Dubai Government Scholarships</li>
          <li>University-specific merit scholarships</li>
          <li>International student financial aid programs</li>
        </ul>
      </section>

      {/* Career Prospects */}
      <section className="dubai-career">
        <h2>Career Prospects</h2>
        <p>
          Dubai offers career opportunities in finance, IT, aviation, real estate, construction, healthcare, 
          and hospitality. Graduates benefit from tax-free salaries and can apply for job-seeker visas 
          or secure long-term employment through residency permits.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="dubai-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>Proof of English proficiency (IELTS/TOEFL or MOI)</li>
          <li>SOP, LORs, CV, Passport copy</li>
          <li>University offer letter</li>
          <li>Proof of tuition payment, accommodation, and funds</li>
          <li>Medical fitness test (in UAE after arrival)</li>
        </ul>
        <h2>Dubai Student Visa</h2>
        <p>
          Type: UAE Student Residence Visa (sponsored by university)<br/>
          Duration: 1 year, renewable until course completion<br/>
          Processing: 2–4 weeks<br/>
          Work: Part-time allowed in authorized work zones (20 hrs/week)
        </p>
      </section>

      {/* Student Life */}
     {/* <section className="dubai-student-life">
  <h2>Student Life in Dubai</h2>
  <p>
    Dubai offers a vibrant lifestyle with modern campuses, multicultural communities, 
    and excellent recreational options. Students enjoy cultural festivals, networking events, 
    and access to internships while experiencing one of the world’s safest and most dynamic cities.
  </p>

 
  <div className="student-life-image">
    <img 
      src="/assets/dubai/dubai-student-life.jpg" 
      alt="Student Life in Dubai" 
      
    />
  </div>
</section> */}

      {/* Enroll Section */}
      <EnrollSection country="Dubai" />

      {/* FAQs */}
      <section className="dubai-faq">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h4>Is a Dubai degree recognized internationally?</h4>
          <p>Yes, especially degrees from UK/US/Australian branch campuses.</p>
        </div>
        <div className="faq-item">
          <h4>Can Indian students work part-time in Dubai?</h4>
          <p>Yes, up to 20 hrs/week during semesters in authorized zones.</p>
        </div>
        <div className="faq-item">
          <h4>What’s the average cost of living?</h4>
          <p>AED 3,500–4,500/month depending on lifestyle.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay after graduation?</h4>
          <p>Yes, via job-seeker visa or employer-sponsored residence permit.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, offered by universities like Middlesex, Heriot-Watt, Amity, etc.</p>
        </div>
         {/* Enroll Section */}
      {/* <EnrollSection country="Dubai" /> */}
      <section
  style={{
    maxWidth: "900px",
    margin: "40px auto",
    padding: "25px 30px",
    background: "#ffffff",
    borderRadius: "16px",
    boxShadow: "0 6px 18px rgba(0, 0, 0, 0.12)",
    textAlign: "center",
    fontFamily: '"Segoe UI", Tahoma, sans-serif',
    color: "#333",
    lineHeight: 1.6,
  }}
>
  <h2
    style={{
      fontSize: "1.8rem",
      marginBottom: "15px",
      color: "#003566",
      fontWeight: "700",
    }}
  >
    Looking to study in Dubai?
  </h2>
  <p
    style={{
      fontSize: "1rem",
      margin: "0 0 20px 0",
    }}
  >
    Our consultancy helps Indian students with university admissions, visa applications, and career guidance to make your journey smooth.
  </p>
  <button
    onClick={() => (window.location.href = "/contact")}
    style={{
      padding: "12px 24px",
      fontSize: "1rem",
      fontWeight: "600",
      color: "#fff",
      background: "#003566",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      transition: "background 0.3s ease",
    }}
    onMouseOver={(e) => (e.currentTarget.style.background = "#002244")}
    onMouseOut={(e) => (e.currentTarget.style.background = "#003566")}
  >
    Apply Now
  </button>
</section>

      </section>
    </div>
  );
}

export default Dubai;
