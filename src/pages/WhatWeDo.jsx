import React from "react";
import { Link } from "react-router-dom";

function WhatWeDo() {
  return (
    <div className="what-we-do-container">
      <h2 className="section-title">What We Do</h2>
      <p className="section-subtitle">
        At <strong>The Sanvi Abroad Experts</strong>, we provide complete
        overseas education, career, and settlement solutions. From your first
        counseling session to long-term career growth abroad, we guide you every
        step of the way with expert support, transparency, and care.
      </p>

      <div className="what-we-do-cards">
        <Link to="/service/career-counseling" className="card">
          <img src="/assets/icons/counseling.jpg" alt="Career Counseling" />
          <h3>Personalized Career Counseling</h3>
          <p>
            One-on-one expert guidance to help you select the right career path,
            destination, and course tailored to your skills, interests, and
            ambitions.
          </p>
        </Link>

        <Link to="/service/exam-prep" className="card">
          <img src="/assets/icons/exam-prep.jpg" alt="Exam Preparation" />
          <h3>International Exam Preparation</h3>
          <p>
            Coaching for IELTS, TOEFL, PTE, GRE, GMAT, and SAT with adaptive
            learning plans, mock tests, and real-time feedback.
          </p>
        </Link>

        <Link to="/service/admissions" className="card">
          <img src="/assets/icons/admissions.jpg" alt="University Admissions" />
          <h3>University Admissions Support</h3>
          <p>
            Complete assistance for applications, SOP drafting, recommendation
            letters, and portfolio enhancement to maximize acceptance rates.
          </p>
        </Link>

        <Link to="/service/course-selection" className="card">
          <img
            src="/assets/icons/course-selection.jpg"
            alt="Course Selection"
          />
          <h3>Course & University Selection</h3>
          <p>
            AI-driven recommendations for top universities and programs that fit
            your budget, ranking preferences, and future goals.
          </p>
        </Link>

        <Link to="/service/visa" className="card">
          <img src="/assets/icons/visa.jpg" alt="Visa Assistance" />
          <h3>Visa & Documentation Assistance</h3>
          <p>
            Complete visa application support for study, work, and dependent
            visas with document verification and interview training.
          </p>
        </Link>

        <Link to="/service/scholarship" className="card">
          <img src="/assets/icons/scholarship.jpg" alt="Scholarships" />
          <h3>Scholarships & Financial Aid</h3>
          <p>
            End-to-end support in applying for scholarships, grants, and
            education loans to make your global education affordable.
          </p>
        </Link>

        <Link to="/service/pre-departure" className="card">
          <img src="/assets/icons/pre-departure.jpg" alt="Pre-departure" />
          <h3>Pre-departure Guidance</h3>
          <p>
            Sessions covering travel arrangements, packing lists,
            culture-specific etiquette, and key contacts before you fly.
          </p>
        </Link>

        <Link to="/service/post-landing" className="card">
          <img src="/assets/icons/post-landing.jpg" alt="Post-landing" />
          <h3>Post-landing Services</h3>
          <p>
            On-ground help with airport pickup, housing, SIM cards, bank account
            setup, and orientation in your new city.
          </p>
        </Link>

        <Link to="/service/work-permit" className="card">
          <img src="/assets/icons/work-permit.jpg" alt="Work Permits" />
          <h3>Work Permits & PR Guidance</h3>
          <p>
            Assistance with post-study work visas, part-time jobs, and permanent
            residency applications.
          </p>
        </Link>

        <Link to="/service/language-training" className="card">
          <img
            src="/assets/icons/language-training.jpg"
            alt="Language Training"
          />
          <h3>Foreign Language Training</h3>
          <p>
            Learn French, German, Spanish, or other global languages to improve
            academic success and cultural integration.
          </p>
        </Link>

        <Link to="/service/internship" className="card">
          <img src="/assets/icons/internship.jpg" alt="Internship Placement" />
          <h3>Internship & Job Placement</h3>
          <p>
            Find internships and relevant part-time opportunities to gain
            industry exposure while studying.
          </p>
        </Link>

        <Link to="/service/immigration" className="card">
          <img
            src="/assets/icons/immigration.jpg"
            alt="Immigration Consulting"
          />
          <h3>Immigration Consulting</h3>
          <p>
            Expert advice on skilled migration, family sponsorship, and
            settlement programs in various countries.
          </p>
        </Link>

        <Link to="/service/cultural" className="card">
          <img src="/assets/icons/cultural.jpg" alt="Cultural Integration" />
          <h3>Cultural Integration Programs</h3>
          <p>
            Events and workshops to help you adapt to local customs, workplace
            culture, and lifestyle norms abroad.
          </p>
        </Link>

        <Link to="/service/alumni" className="card">
          <img src="/assets/icons/alumni.jpg" alt="Alumni Network" />
          <h3>Global Alumni Network</h3>
          <p>
            Connect with successful alumni for mentorship, career opportunities,
            and professional networking.
          </p>
        </Link>

        <Link to="/service/relocation" className="card">
          <img
            src="/assets/icons/relocation.jpg"
            alt="Family Relocation Support"
          />
          <h3>Family Relocation Support</h3>
          <p>
            Guidance for relocating your family, including schooling, housing,
            and community connections.
          </p>
        </Link>

        <Link to="/service/skill-development" className="card">
          <img
            src="/assets/icons/skill-development.jpg"
            alt="Skill Development"
          />
          <h3>Skill Development & Training</h3>
          <p>
            Short-term professional courses to upgrade your skills and make you
            job-ready in the global market.
          </p>
        </Link>
      </div>
    </div>
  );
}

export default WhatWeDo;
