import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import TrendingCourses from "../components/TrendingCourses";
import TrendingBlogs from "../components/TrendingBlogs";

function Home() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    destination: "",
    year: "",
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const destinations = [
    {
      name: "United Kingdom",
      image: "/assets/uk.jpg",
      description: "Top universities and diverse culture await you.",
    },
    {
      name: "Canada",
      image: "/assets/canada.jpg",
      description: "Study in Canada and experience world-class education.",
    },
    {
      name: "Singapore",
      image: "/assets/singapore.jpg",
      description: "Experience high-quality education in Asia’s hub.",
    },
    {
      name: "Ireland",
      image: "/assets/ireland.jpg",
      description: "Study in Ireland with its rich culture and innovation.",
    },
    {
      name: "France",
      image: "/assets/france.jpg",
      description:
        "France offers great education in arts, fashion, and business.",
    },
    {
      name: "Germany",
      image: "/assets/germany.jpg",
      description: "Low-cost tuition and top research facilities.",
    },
    {
      name: "Switzerland",
      image: "/assets/switzerland.jpg",
      description: "Famous for hospitality and business education.",
    },
    {
      name: "Dubai",
      image: "/assets/dubai.jpg",
      description: "Study in a fast-growing global city.",
    },
    {
      name: "Spain",
      image: "/assets/spain.jpg",
      description: "Great climate, culture, and academic opportunities.",
    },
    {
      name: "Malaysia",
      image: "/assets/malaysia.jpg",
      description: "Affordable, quality education in Asia.",
    },
    {
      name: "Mauritius",
      image: "/assets/mauritius.jpg",
      description: "Tropical paradise with excellent study options.",
    },
    {
      name: "India",
      image: "/assets/india.jpg",
      description: "Diverse culture and top-ranked institutions.",
    },
    {
      name: "Netherlands",
      image: "/assets/netherlands.jpg",
      description: "Hub for tech, design, and business.",
    },
    {
      name: "Italy",
      image: "/assets/italy.jpg",
      description: "Experience art, culture, and top universities.",
    },
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;

    const { firstName, lastName, email, mobile, destination, year } = formData;
    if (!firstName || !lastName || !email || !mobile || !destination || !year) {
      setSubmitMessage("⚠️ Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const emailData = {
        to: "thesanvisacademy@gmail.com",
        subject: "New Study Abroad Enquiry",
        body: `
        📋 New Enquiry Form Submission

        👤 Name: ${firstName} ${lastName}
        📧 Email: ${email}
        📞 Mobile: ${mobile}
        🌍 Destination: ${destination}
        📅 Preferred Year: ${year}
        ✅ Consent: ${formData.consent ? "Yes" : "No"}
        `,
      };

      // Simulated sending delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Data sent to email:", emailData);

      setSubmitMessage("✅ Submitted successfully! We’ll contact you soon.");
      setTimeout(() => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          mobile: "",
          destination: "",
          year: "",
          consent: false,
        });
        setSubmitMessage("");
      }, 3000);
    } catch (err) {
      console.error("Error sending form:", err);
      setSubmitMessage("❌ Submission failed. Try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleApplyClick = (country) => {
    navigate(`/apply?destination=${encodeURIComponent(country)}`);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="intro-section">
        <div className="intro-content">
          <h1>
            Achieve Your Global Education Dreams with
            <span className="highlight-name"> The Sanvi's Abroad Xperts</span>
          </h1>

          <p>
            Explore world-class universities and gain international exposure to
            boost your career. Our expert counselors guide you at every step —
            from choosing the right destination to securing your admission.
          </p>
          <p className="highlight-text">
            Start your journey today! Fill out the form below and let us assist
            you in making your study abroad dream a reality.
          </p>
        </div>
        <div className="intro-image">
          <img src="/assets/study-abroad.jpg" alt="Study Abroad" />
        </div>
      </section>

      {/* Enquiry Form */}
      <section className="form-section">
        <h2>Book a Free Consultation</h2>
        <p className="form-subtitle">
          Complete the form and our team will reach out to guide you through the
          entire process — absolutely free!
        </p>

        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <select
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Study Destination</option>
              {destinations.map((dest) => (
                <option key={dest.name} value={dest.name}>
                  {dest.name}
                </option>
              ))}
            </select>

            <select
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="">Preferred Year</option>
              <option value="2027">2027</option>
              <option value="2026">2026</option>
              <option value="2025">2025</option>
              <option value="2024">2024</option>
              <option value="2023">2023</option>
            </select>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Get Free Consultation"}
          </button>

          {submitMessage && <p className="form-message">{submitMessage}</p>}
        </form>
      </section>

      {/* Trending Courses */}
      <TrendingCourses />

      {/* Destinations Section */}
      <section className="destinations-section">
        <h2 className="marquee-text">Top Study Destinations</h2>
        <div className="marquee-container">
          <div className="marquee-track">
            {destinations.concat(destinations).map((dest, index) => (
              <div
                className="destination-card"
                key={index}
                onClick={() => handleApplyClick(dest.name)}
                style={{ cursor: "pointer" }}
              >
                <img src={dest.image} alt={dest.name} />
                <div className="dest-info">
                  <h3>{dest.name}</h3>
                  <p>{dest.description}</p>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleApplyClick(dest.name);
                    }}
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Blogs */}
      <TrendingBlogs />
    </div>
  );
}

export default Home;
