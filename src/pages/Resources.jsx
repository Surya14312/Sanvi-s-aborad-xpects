// pages/Resources.jsx
import React from "react";

function Resources() {
  return (
    <div className="resources-container">
      <h2>Student Resources</h2>
      <p>
        Welcome to our resources hub! Here you’ll find study materials, guides,
        and useful tools to help you prepare for your journey abroad — from exam
        prep to visa checklists, scholarship tips, and skill-building resources.
      </p>

      <ul className="resources-list">
        {/* Exam Prep Guides */}
        <li>
          <a
            href="https://www.britishcouncil.org/sites/default/files/ielts_preparation_guide.pdf"
            target="_blank"
            rel="noreferrer"
          >
            📄 IELTS Preparation Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.ets.org/pdfs/toefl/toefl_test_prep_planner.pdf"
            target="_blank"
            rel="noreferrer"
          >
            📄 TOEFL Preparation Planner
          </a>
        </li>
        <li>
          <a
            href="https://pearsonpte.com/wp-content/uploads/2020/06/pte-academic-test-takers-handbook.pdf"
            target="_blank"
            rel="noreferrer"
          >
            📄 PTE Academic Test Taker's Handbook
          </a>
        </li>
        <li>
          <a
            href="https://www.ets.org/pdfs/gre/gre_guide.pdf"
            target="_blank"
            rel="noreferrer"
          >
            📄 GRE Information & Test Prep Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.mba.com/exams/gmat/about-the-gmat-exam"
            target="_blank"
            rel="noreferrer"
          >
            📄 GMAT Official Exam Guide
          </a>
        </li>

        {/* Study Abroad & Visa */}
        <li>
          <a
            href="https://www.studylink.com/wp-content/uploads/Study-Abroad-Checklist.pdf"
            target="_blank"
            rel="noreferrer"
          >
            ✅ Study Abroad Checklist
          </a>
        </li>
        <li>
          <a
            href="https://travel.state.gov/content/dam/visas/pdfs/DS-160_English.pdf"
            target="_blank"
            rel="noreferrer"
          >
            🛂 US Student Visa (F1) Application Guide
          </a>
        </li>
        <li>
          <a
            href="https://www.gov.uk/student-visa"
            target="_blank"
            rel="noreferrer"
          >
            🛂 UK Student Visa Application Steps
          </a>
        </li>

        {/* Scholarships */}
        <li>
          <a
            href="https://opportunitiescorners.info/wp-content/uploads/2024/01/Scholarships-List-Guide.pdf"
            target="_blank"
            rel="noreferrer"
          >
            🎓 Scholarship Opportunities & Application Tips
          </a>
        </li>
        <li>
          <a
            href="https://scholarships.gov.in/"
            target="_blank"
            rel="noreferrer"
          >
            🎓 National Scholarship Portal (India)
          </a>
        </li>

        {/* Skill Building */}
        <li>
          <a
            href="https://www.coursera.org/learn/academic-english"
            target="_blank"
            rel="noreferrer"
          >
            📚 Academic English Skills Course (Free)
          </a>
        </li>
        <li>
          <a
            href="https://www.canva.com/resumes/templates/"
            target="_blank"
            rel="noreferrer"
          >
            ✍️ Free Resume & Cover Letter Templates
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/learning/"
            target="_blank"
            rel="noreferrer"
          >
            💼 Professional Skills Development (LinkedIn Learning)
          </a>
        </li>
      </ul>

      <p className="resources-note">
        Need help accessing any resource? Email us at{" "}
        <a href="mailto:thesanvisabroadxpert@gmail.com">
          thesanvisabroadxpert@gmail.com
        </a>{" "}
        and we’ll be happy to assist you.
      </p>
    </div>
  );
}

export default Resources;
