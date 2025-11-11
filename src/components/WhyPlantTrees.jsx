import React from "react";
import "./WhyPlantTrees.css";

import regenerate from "../assets/regenerate.jpg";
import biodiversity from "../assets/biodiversity.jpg";
import foodSecurity from "../assets/food-security.jpg";
import genderEquality from "../assets/gender-equality.jpg";

export default function WhyPlantTrees() {
  const causes = [
    {
      title: "Regenerate the planet",
      desc: "Help restore ecosystems and combat climate change by planting trees",
      img: regenerate,
    },
    {
      title: "Protect biodiversity",
      desc: "Create habitats for wildlife and preserve natural ecosystems",
      img: biodiversity,
    },
    {
      title: "Ensure income and food security",
      desc: "Support local communities with sustainable livelihoods",
      img: foodSecurity,
    },
    {
      title: "Promote gender equality",
      desc: "Empower women through environmental initiatives",
      img: genderEquality,
    },
  ];

  return (
    <section className="why-plant-section">
      <h2>Why should you plant trees with us?</h2>
      <p>Choose the cause you care about most</p>

      <div className="why-plant-grid">
        {causes.map((cause, index) => (
          <div className="why-plant-card" key={index}>
            <img src={cause.img} alt={cause.title} className="card-img" />
            <div className="card-overlay">
              <h3>{cause.title}</h3>
              <p>{cause.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
