import React from "react";


export default function ChooseCountry() {
  return (
    <div className="choose-country">
      <h1 className="heading-primary">
        How to Choose the Right Country for Your Higher Education
      </h1>

      <section className="section">
        <h2 className="heading-secondary">Introduction</h2>
        <p>
          Choosing the right country for higher education is one of the most important decisions a student can make. 
          It affects your academic growth, career opportunities, and personal development. With numerous options like Europe, 
          North America, Asia, and the Middle East, it’s essential to consider multiple factors to make an informed choice.
        </p>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Key Factors to Consider</h2>
        <ul className="list">
          <li>
            <strong>Academic Programs and Course Availability:</strong> Look for countries that offer programs aligned with your career goals. 
            Example: Engineering in Germany, Business in UK/France, Data Science in Netherlands/Ireland. Check curriculum, research opportunities, and global recognition.
          </li>
          <li>
            <strong>Tuition Fees and Scholarships:</strong> Europe offers affordable or tuition-free programs in countries like Germany, Poland, and France. 
            North America offers high-quality education but higher tuition, with scholarship options. Consider scholarships, grants, and financial aid opportunities.
          </li>
          <li>
            <strong>Language and Cultural Environment:</strong> If you’re fluent in English, countries with English-taught programs are easier to adapt to. 
            For non-English countries (Germany, France, Spain), check English-taught options. Consider cultural fit and adaptability for a comfortable student life.
          </li>
          <li>
            <strong>Post-Study Work Opportunities:</strong> Countries like Germany, Netherlands, Canada, and Ireland offer post-study work visas for 1–3 years. 
            Work experience abroad can enhance your career prospects and international exposure.
          </li>
          <li>
            <strong>Cost of Living:</strong> Major cities in Europe and North America are expensive, while smaller cities or countries like Poland, Portugal, or Vietnam are more affordable. Include rent, food, transportation, and healthcare in your budget.
          </li>
          <li>
            <strong>Safety and Lifestyle:</strong> Research safety, healthcare, and local regulations for international students. 
            Student-friendly cities often have efficient public transport, social activities, and support networks.
          </li>
        </ul>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Country-Wise Highlights</h2>
        <table className="country-table">
          <thead>
            <tr>
              <th>Country</th>
              <th>Popular Courses</th>
              <th>Key Advantages</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-label="Country">Germany</td>
              <td data-label="Popular Courses">Engineering, Data Science</td>
              <td data-label="Key Advantages">Affordable, high-quality, post-study work</td>
            </tr>
            <tr>
              <td data-label="Country">UK</td>
              <td data-label="Popular Courses">Business, Management, Arts</td>
              <td data-label="Key Advantages">Global recognition, diverse culture</td>
            </tr>
            <tr>
              <td data-label="Country">Netherlands</td>
              <td data-label="Popular Courses">Data Science, Engineering</td>
              <td data-label="Key Advantages">English programs, innovative education</td>
            </tr>
            <tr>
              <td data-label="Country">France</td>
              <td data-label="Popular Courses">Business, Hospitality, Arts</td>
              <td data-label="Key Advantages">Affordable, scholarships, rich culture</td>
            </tr>
            <tr>
              <td data-label="Country">Canada</td>
              <td data-label="Popular Courses">Engineering, Business, IT</td>
              <td data-label="Key Advantages">Safe, post-study work, quality education</td>
            </tr>
            <tr>
              <td data-label="Country">Singapore</td>
              <td data-label="Popular Courses">Business, Data Science, IT</td>
              <td data-label="Key Advantages">Global hub, English-taught, strong job market</td>
            </tr>
            <tr>
              <td data-label="Country">Philippines</td>
              <td data-label="Popular Courses">MBBS</td>
              <td data-label="Key Advantages">English-taught, NMC-approved, affordable</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Step-by-Step Approach to Choosing the Right Country</h2>
        <ol className="steps">
          <li>Identify Your Goals – Shortlist based on your career aspirations and desired field.</li>
          <li>Research Tuition & Living Costs – Compare programs and total expenses.</li>
          <li>Check Language Requirements – Look for English-taught programs if needed.</li>
          <li>Explore Scholarships & Funding – Reduce financial burden with grants.</li>
          <li>Evaluate Post-Study Work Opportunities – Choose countries with job-friendly policies.</li>
          <li>Consider Lifestyle & Culture – Ensure you can adapt comfortably.</li>
          <li>Consult Experts – Seek guidance from study abroad consultants for personalized advice.</li>
        </ol>
      </section>

      <section className="section">
        <h2 className="heading-secondary">FAQs</h2>
        <ul className="list">
          <li><strong>Q:</strong> Which country is best for my course? <br /><strong>A:</strong> It depends on your career goals, budget, language preference, and post-study opportunities.</li>
          <li><strong>Q:</strong> Can I study in a country where English is not the main language? <br /><strong>A:</strong> Yes, many universities offer English-taught programs in Germany, France, Netherlands, and Spain.</li>
          <li><strong>Q:</strong> Should I choose a country based on rankings? <br /><strong>A:</strong> Rankings are important, but personal fit, course relevance, scholarships, and career prospects matter more.</li>
          <li><strong>Q:</strong> How can a consultancy help me choose the right country? <br /><strong>A:</strong> Consultants provide personalized guidance, compare options, and help with admissions and scholarships.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="heading-secondary">Consultancy Support</h2>
        <ul className="list">
          <li>Analyze personal goals and career aspirations to select the right country</li>
          <li>Compare tuition, living costs, and scholarships for different destinations</li>
          <li>Assist with university selection, applications, and visa processes</li>
          <li>Provide pre-departure guidance for smooth adaptation</li>
        </ul>
        <p className="cta-text">
          “Confused about which country to choose for your higher education? Our experts provide personalized guidance to help you pick the perfect study destination. Book your free consultation today!”
        </p>
      </section>
    </div>
  );
}



