import React from "react";
import { Link } from "react-router-dom";
import EnrollSection from "../components/EnrollSection";

function Germany() {
  return (
    <div className="germany-container">
      {/* ✅ Hero Section */}
      <section className="germany-hero">
        <div className="germany-hero-content">
          <h1>Study in Germany</h1>
          <p>
            Germany blends world-class education, strong industry linkages, and low
            (often zero) tuition at public universities. It’s a powerhouse for
            Engineering, Computer Science, Data/AI, Automotive, Renewable Energy,
            Business/Analytics, and Applied Sciences, with extensive English-taught
            programs—especially at the master’s level—and excellent post-study work
            options inside the EU.
          </p>
          <Link to="/contact" className="apply-btn">
            Apply Now
          </Link>
        </div>
        <img
          src="/assets/germany/germany-banner.jpg"
          alt="Study in Germany"
          className="hero-img"
        />
      </section>

      {/* ✅ Quick Stats */}
      <section
      
      >
        <h2
         
        >
          Germany at a Glance
        </h2>

        <div
          
        >
          {[
            "400+ Higher Education Institutions",
            "Public Tuition: €0–€400/semester",
            "350k–500k International Students",
            "18-Month Post-Study Job Permit",
          ].map((text, index) => (
            <div
              key={index}
             
             
            >
              {text}
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Why Study in Germany */}
      <section className="germany-why">
        <h2>Why Choose Germany?</h2>
        <ul>
          <li>Excellent Value: Low/No Tuition & High Academic Standards</li>
          <li>Applied Learning via Universities of Applied Sciences (FH/HAW)</li>
          <li>Industry Access: Automotive, Pharma, Green Tech, Fintech</li>
          <li>English-Taught Programs Available Especially in STEM & Business</li>
          <li>Schengen Mobility & Central EU Location</li>
          <li>Leading Research Institutes & Innovation Hubs</li>
        </ul>
      </section>

      {/* ✅ Benefits for Indian Students */}
      <section className="germany-benefits">
        <h2>Benefits for Indian Students</h2>
        <ul>
          <li>Cost advantage vs US/UK/Canada; part-time work allowed</li>
          <li>High ROI Careers in Engineering, IT, Data/AI, Supply Chain</li>
          <li>English-Taught Programs widely available</li>
          <li>Strong Indian Community across major cities</li>
          <li>Recognized degrees & smooth EU pathways</li>
        </ul>
      </section>
{/* ✅ Top Universities */}
<section className="germany-universities">
  <h2>Top Universities in Germany</h2>
  <div className="universities-grid">
    {[
      { name: "TU Munich (TUM)", img: "/assets/germany/universities/tum.jpg" },
      { name: "LMU Munich", img: "/assets/germany/universities/lmu.jpg" },
      { name: "RWTH Aachen University", img: "/assets/germany/universities/rwth.jpg" },
      { name: "Heidelberg University", img: "/assets/germany/universities/heidelberg.jpg" },
      { name: "KIT – Karlsruhe Institute of Technology", img: "/assets/germany/universities/kit.jpg" },
      { name: "TU Berlin", img: "/assets/germany/universities/tuberlin.jpg" },
      { name: "University of Stuttgart", img: "/assets/germany/universities/stuttgart.jpg" },
    ].map((uni, i) => (
      <div className="uni-card" key={i}>
        <img src={uni.img} alt={uni.name} />
        <p>{uni.name}</p>
      </div>
    ))}
  </div>
</section>


      {/* ✅ Popular Courses */}
      <section className="germany-courses">
        <h2>Popular Courses in Germany</h2>
        <div className="course-grid">
          {[
            { name: "Engineering: Mechanical, Automotive, Electrical, Civil, Aerospace", img: "/assets/germany/courses/engineering.jpg" },
            { name: "Computer & Data: CS, AI/ML, Data Science, Cybersecurity", img: "/assets/germany/courses/computer.jpg" },
            { name: "Business & Analytics: MBA, Management, Supply Chain", img: "/assets/germany/courses/business.jpg" },
            { name: "Energy & Sustainability: Renewable Energy, Environmental Engineering", img: "/assets/germany/courses/renewable.jpg" },
            { name: "Design & Architecture", img: "/assets/germany/courses/design.jpg" },
            { name: "Biotech/Pharma, Mathematics/Statistics", img: "/assets/germany/courses/biotech.jpg" },
          ].map((course, i) => (
            <div className="course-card" key={i}>
              <img src={course.img} alt={course.name} />
              <p>{course.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Equipment & Infrastructure */}
      <section className="germany-equipment">
        <h2>Our Equipment & Infrastructure</h2>
        <p>
          German universities offer cutting-edge laboratories, technical workshops,
          research centers, and collaborations with major global industries like BMW,
          Bosch, and Siemens.
        </p>
      </section>

      {/* ✅ Cost of Study & Scholarships */}
      <section className="germany-cost" style={{ maxWidth: "1100px", margin: "60px auto", padding: "0 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px" }}>
          <div style={{ flex: "1 1 500px" }}>
            <h2>Cost of Studying in Germany</h2>
            <p>
              Public Universities: €0 tuition + €250–€400/semester.
              <br />
              Private Universities: €8,000–€20,000/year depending on program.
              <br />
              Living costs: €900–€1,200/month (rent, food, transport, insurance).
            </p>
            <h3>Scholarships in Germany</h3>
            <ul>
              <li>DAAD Scholarships</li>
              <li>Deutschlandstipendium</li>
              <li>University-Specific Scholarships</li>
              <li>Erasmus+ & Industry-funded Awards</li>
            </ul>
          </div>
          <div >
            {/* <img
              src="/assets/germany/germany-scholarship.jpg"
              alt="Scholarships in Germany"
              
            /> */}
          </div>
        </div>
      </section>

      {/* ✅ Career Prospects */}
      <section >
        <h2>Career Prospects in Germany</h2>
        <p>
          Germany offers strong opportunities in Engineering, IT, Automotive, Research, and Healthcare.
          Students can work part-time and apply for an 18-month residence permit after graduation,
          with conversion to EU Blue Card possible upon qualifying employment.
        </p>
      </section>

      {/* ✅ Documents & Visa */}
      <section className="germany-documents" >
        <h2>Documents Required for Indian Students</h2>
        <ul>
          <li>Valid Passport</li>
          <li>Academic Transcripts & Certificates</li>
          <li>English/German Proficiency Test (IELTS/TOEFL/TestDaF/DSH)</li>
          <li>SOP, CV, LORs, Portfolio (if applicable)</li>
          <li>Proof of Funds / Scholarship</li>
          <li>APS Certificate (for India, if applicable)</li>
        </ul>

        <h2>Germany Student Visa</h2>
        <p>
          Apply for a National Student Visa (D) with the university admission letter,
          proof of funds (blocked account), health insurance, accommodation proof,
          and completed visa forms. Students can work up to 120 full or 240 half days/year.
        </p>
      </section>

      <section className="germany-student-life">
  <h2>Student Life in Germany</h2>
  <p>
    Germany offers a multicultural and student-friendly environment with vibrant cities, 
    historic campuses, festivals, internships, and extensive networking opportunities. 
    Students also enjoy modern facilities, cultural experiences, and travel opportunities across Europe.
  </p>

  <section className="germany-student-life">
  {/* <h2>Student Life in Germany</h2>
  <p>
    Germany offers a multicultural and student-friendly environment with vibrant cities, 
    historic campuses, festivals, internships, and extensive networking opportunities. 
    Students also enjoy modern facilities, cultural experiences, and travel opportunities across Europe.
  </p> */}

  {/* ✅ Single Image */}
  <div className="student-life-image">
    <img 
      src="/assets/germany/germany-student-life.jpg" 
      alt="Student Life in Germany" 
    
    />
  </div>
</section>
</section>

      <EnrollSection country="Germany" />

      {/* ✅ FAQs */}
      <section className="germany-faq">
        <h2>FAQs About Studying in Germany</h2>
        <div className="faq-item">
          <h4>Is education free in Germany?</h4>
          <p>Most public universities charge no tuition fees; a semester contribution applies.</p>
        </div>
        <div className="faq-item">
          <h4>Can I work while studying in Germany?</h4>
          <p>Yes, up to 120 full or 240 half days per year.</p>
        </div>
        <div className="faq-item">
          <h4>Do I need to speak German?</h4>
          <p>Many programs are in English, but German helps for internships, jobs, and daily life.</p>
        </div>
        <div className="faq-item">
          <h4>What is a blocked account?</h4>
          <p>A bank account showing you have sufficient funds to support yourself for one year.</p>
        </div>
        <div className="faq-item">
          <h4>How long can I stay after graduation?</h4>
          <p>Up to 18 months on a job-search permit; then you may convert to EU Blue Card.</p>
        </div>
        <p>“Plan a tuition-free (or low-tuition) German degree with strong career outcomes. Get a personalized shortlist, funding plan, and visa file—start with a free counseling session today.”</p>
      </section>
    </div>
  );
}

export default Germany;
