import React from "react";

const PostArrivalSupport = () => {
  return (
    <div className="postarrival-container">
      {/* Hero Section */}
      <section className="postarrival-hero">
        <div className="postarrival-text">
          <h1>Post-Arrival Support</h1>
          <p>
            Arriving in a new country can be overwhelming, especially for
            first-time international students. Our post-arrival support ensures
            students settle smoothly, adjust to the new environment, and quickly
            become comfortable with their academic and daily life.
          </p>
        </div>
        <div className="postarrival-image">
          <img src="/assets/postarrival.jpg" alt="Post-Arrival Support" />
        </div>
      </section>

      {/* Why Post-Arrival Support */}
      <section className="postarrival-importance">
        <h2>Why Post-Arrival Support Is Important</h2>
        <ul>
          <li>Helps students navigate a new city, culture, and university system.</li>
          <li>Reduces stress related to accommodation, banking, and transportation.</li>
          <li>Provides guidance on emergency contacts, local healthcare, and legal requirements.</li>
          <li>Ensures students can focus on academics and social integration.</li>
        </ul>
      </section>

      {/* How We Help */}
      <section className="postarrival-how">
        <h2>How We Help</h2>
        <ul>
          <li>Airport Pickup Assistance – Safe arrival at accommodation or university housing.</li>
          <li>Accommodation Guidance – Help with university dorms, hostels, or private rentals.</li>
          <li>Local Orientation – Introductions to transport systems, banks, SIM cards, grocery stores, and essential services.</li>
          <li>University Registration – Guidance on completing enrollment, ID cards, and course registration.</li>
          <li>Healthcare & Insurance – Assistance with medical registration, insurance claims, and local hospitals.</li>
          <li>Emergency Support – Access to 24/7 guidance in case of urgent situations.</li>
          <li>Cultural & Social Integration – Tips for adapting to local culture, norms, and student communities.</li>
        </ul>
      </section>

      {/* Benefits */}
      <section className="postarrival-benefits">
        <h2>Benefits for Students</h2>
        <ul>
          <li>Quick and smooth settlement in the new country.</li>
          <li>Reduced anxiety and culture shock.</li>
          <li>Support in managing administrative and academic requirements.</li>
          <li>Faster adaptation to new academic and social environments.</li>
          <li>Peace of mind for parents knowing their child has ongoing support.</li>
        </ul>
      </section>

      {/* FAQs */}
      <section className="postarrival-faqs">
        <h2>FAQs</h2>
        <p><strong>Q1:</strong> How long does post-arrival support last?<br/>
           Typically 1–3 months, or until the student feels comfortable navigating the new environment.</p>
        <p><strong>Q2:</strong> Does post-arrival support include help with academic issues?<br/>
           Yes, we provide guidance on course registration, professors, and academic support resources.</p>
        <p><strong>Q3:</strong> Is emergency support available 24/7?<br/>
           Yes, we provide round-the-clock guidance for urgent issues like medical emergencies or visa queries.</p>


      </section>
    </div>
  );
};

export default PostArrivalSupport;
