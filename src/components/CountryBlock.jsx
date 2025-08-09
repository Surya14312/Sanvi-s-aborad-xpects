import React from "react";
import { useNavigate } from "react-router-dom";

const CountryBlock = ({ name, image, features }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate("/apply", { state: { country: name } }); // Optional: Pass country name to prefill form
  };

  return (
    <div className="country-block">
      <img src={image} alt={name} className="country-image" />
      <h2>{name}</h2>
      <ul>
        {features.map((feature, i) => (
          <li key={i}>{feature}</li>
        ))}
      </ul>
      <button className="apply-button" onClick={handleApply}>
        📝 Apply Now
      </button>
    </div>
  );
};

export default CountryBlock;
