import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";


function Ireland() {
  return (
    <div className="ireland-container">
      
      {/* Hero Section */}
      <section className="ireland-hero">
        <div className="hero-text">
          <h1>Study in Ireland</h1>
          <p>
            Ireland is a popular study destination known for its high-quality education, 
            friendly environment, and strong ties to the global tech and pharmaceutical industries. 
            The country offers internationally recognized degrees, vibrant student life, and 
            excellent post-study work opportunities.
          </p>
          <Link to="/contact" className="apply-btn">Apply Now</Link>
        </div>
        <div className="hero-img">
          <img
            src="/assets/ireland/ireland-banner.jpg"
            alt="Study in Ireland"
          />
        </div>
      </section>

      {/* Quick Stats */}
      <section className="ireland-glance">
        <h2>Ireland at a Glance</h2>
        <div className="glance-grid">
          {[
            "20+ Universities and Institutes of Technology",
            "Top: Trinity College Dublin, UCD, UCC, DCU, NUIG",
            "Tuition: €9,000 – €22,000/year (~₹8–18 lakh)",
            "Living: €10,000 – €15,000/year (~₹9–12 lakh)",
            "35,000+ International Students from 160+ countries",
            "Language: English (Primary medium)",
            "Post-Study Stay Back: 1–2 years",
          ].map((stat, i) => (
            <div key={i} className="glance-card">{stat}</div>
          ))}
        </div>
      </section>

      {/* Why Study in Ireland */}
      <section className="ireland-why">
        <h2>Why Choose Ireland?</h2>
        <ul>
          <li>Globally recognized qualifications with high employability</li>
          <li>English-speaking environment, ideal for Indian students</li>
          <li>Vibrant student community and multicultural society</li>
          <li>Hub for technology, pharmaceuticals, finance, and research</li>
          <li>Shorter courses: Bachelor’s (3–4 years), Master’s (1 year)</li>
          <li>Strong scholarships and support programs</li>
        </ul>
      </section>

      {/* Benefits for Indian Students */}
      <section className="ireland-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>English-medium programs eliminate language barriers</li>
          <li>Scholarships: Government of Ireland, UCD Global Excellence</li>
          <li>Part-time work: 20 hrs/week (term), 40 hrs/week (holidays)</li>
          <li>Exposure to global giants: Google, Facebook, Microsoft, Pfizer</li>
          <li>Post-study work options via Stay Back/Graduate Work Visa</li>
        </ul>
      </section>
{/* Top Universities */}
<section className="ireland-universities">
  <h2>Top Universities in Ireland</h2>
  <div className="universities-grid">
    {[
      "Trinity College Dublin",
      "University College Dublin (UCD)",
      "University College Cork (UCC)",
      "Dublin City University (DCU)",
      "National University of Ireland Galway (NUIG)",
      "Maynooth University",
      "Technological University Dublin",
      "Royal College of Surgeons in Ireland",
    ].map((name, i) => (
      <div className="uni-card" key={i}>
        <img src={`/assets/ireland/universities/u${i + 1}.jpg`} alt={name} />
        <p>{name}</p>
      </div>
    ))}
  </div>
</section>


   {/* Popular Courses */}
<section className="ireland-courses">
  <h2>Popular Courses in Ireland</h2>
  <div className="course-grid">
    {[
      { name: "Business Administration & Management", img: "/assets/ireland/courses/c1.jpg" },
      { name: "Computer Science & Data Science", img: "/assets/ireland/courses/c2.jpg" },
      { name: "Engineering (Mechanical, Electrical, Civil)", img: "/assets/ireland/courses/c3.jpg" },
      { name: "Life Sciences, Biotechnology & Pharmaceuticals", img: "/assets/ireland/courses/c4.jpg" },
      { name: "Finance & Accounting", img: "/assets/ireland/courses/c5.jpg" },
      { name: "Hospitality & Tourism Management", img: "/assets/ireland/courses/c6.jpg" },
      { name: "Artificial Intelligence & Robotics", img: "/assets/ireland/courses/c7.jpg" },
      { name: "Medicine & Healthcare", img: "/assets/ireland/courses/c8.jpg" },
    ].map((course, i) => (
      <div className="course-card" key={i}>
        <img src={course.img} alt={course.name} />
        <p>{course.name}</p>
      </div>
    ))}
  </div>
</section>

      {/* Cost & Scholarships */}
      <section className="ireland-cost">
        <h2>Cost of Studying & Living</h2>
        <p>
          <strong>Undergraduate:</strong> €9,000 – €15,000/year (~₹8–12 lakh)<br/>
          <strong>Postgraduate:</strong> €12,000 – €22,000/year (~₹11–18 lakh)<br/>
          <strong>Living:</strong> €800 – €1,200/month (~₹70K – 1 lakh)
        </p>
        <h3>Scholarships</h3>
        <ul>
          <li>Government of Ireland Scholarship</li>
          <li>UCD Global Excellence Scholarship</li>
          <li>University-specific scholarships</li>
          <li>International aid & financial programs</li>
        </ul>
      </section>

      {/* Career Prospects */}
      <section className="ireland-career">
        <h2>Career Prospects in Ireland</h2>
        <p>
          Ireland is home to global leaders in tech, pharmaceuticals, finance, and healthcare.  
          The Third Level Graduate Work Visa allows postgraduates to stay up to 2 years.  
          Opportunities are growing in IT, finance, healthcare, and research.
        </p>
      </section>

      {/* Documents & Visa */}
      <section className="ireland-documents">
        <h2>Documents Required</h2>
        <ul>
          <li>Academic transcripts (10th, 12th, bachelor’s if applicable)</li>
          <li>English test scores (IELTS/TOEFL/PTE)</li>
          <li>SOP, LORs, CV/Resume, Passport copy</li>
          <li>Acceptance letter & proof of tuition fee payment</li>
          <li>Proof of funds (~€7,000–€10,000/year)</li>
          <li>Health insurance</li>
          <li>Completed visa application form</li>
        </ul>
        <h2>Ireland Student Visa</h2>
        <p>
          Long-term study visa valid for course duration + 1 month. Processing: 4–6 weeks.  
          Work rights: 20 hrs/week during term & 40 hrs/week during vacations.
        </p>
      </section>

      <section className="ireland-student-life">
  <h2>Student Life in Ireland</h2>
  <p>
    Ireland offers historic campuses, vibrant student communities, and a rich cultural scene. 
    Students enjoy festivals, internships, networking events, and opportunities to explore Europe, 
    all while experiencing Irish traditions and lifestyle.
  </p>

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img src="/assets/ireland/ireland-student-life.jpg" alt="Student Life in Ireland" />
  </div>
</section>


     
      {/* FAQs */}
      <section className="ireland-faq">
        <h2>FAQs About Studying in Ireland</h2>
        <div className="faq-item">
          <h4>Is English proficiency mandatory?</h4>
          <p>Yes, IELTS/TOEFL/PTE are usually required unless prior education was in English.</p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying?</h4>
          <p>Yes, up to 20 hrs/week during term & full-time during holidays.</p>
        </div>
        <div className="faq-item">
          <h4>Are scholarships available?</h4>
          <p>Yes, through government & university programs.</p>
        </div>
        <div className="faq-item">
          <h4>How much is living in Ireland?</h4>
          <p>~€800–€1,200/month depending on lifestyle & location.</p>
        </div>
        <div className="faq-item">
          <h4>Can I stay after graduation?</h4>
          <p>Yes, graduates can stay 1–2 years under Stay Back/Graduate Work Visa.</p>
        </div>

         {/* Enroll CTA */}
      <EnrollSection country="Ireland" />

        <p>“Looking to study in Ireland? Our consultancy assists Indian students with university admissions, scholarships, visa processing, and career guidance to make your journey seamless."</p>
      </section>
    </div>
  );
}

export default Ireland;
