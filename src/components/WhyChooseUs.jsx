import React from "react";
import "./WhyChooseUs.css";
import { FaGlobe, FaCamera, FaHandsHelping, FaGift, FaRecycle, FaLeaf } from "react-icons/fa";

export default function WhyChooseUs() {
  const features = [
    {
      icon: <FaGlobe className="icon globe" />,
      title: "Global Reach",
      desc: "We connect reforestation projects across the globe to make a collective impact.",
    },
    {
      icon: <FaCamera className="icon camera" />,
      title: "Track Progress",
      desc: "Get updates and visuals showing how your contribution grows into thriving forests.",
    },
    {
      icon: <FaHandsHelping className="icon hands" />,
      title: "Empower Communities",
      desc: "Your support helps local farmers create sustainable livelihoods and greener lands.",
    },
    {
      icon: <FaGift className="icon gift" />,
      title: "Share the Gift",
      desc: "Surprise someone with a tree in their name — an eco-friendly and meaningful gesture.",
    },
    {
      icon: <FaRecycle className="icon recycle" />,
      title: "Reduce Footprint",
      desc: "Offset your carbon footprint by investing in verified reforestation initiatives.",
    },
    {
      icon: <FaLeaf className="icon leaf" />,
      title: "Protect Nature",
      desc: "Support biodiversity by helping restore critical habitats for wildlife.",
    },
  ];

  const steps = [
    {
      number: "1",
      title: "Pick Your Tree",
      desc: "Choose from various native species based on your region and goals.",
    },
    {
      number: "2",
      title: "Plant & Monitor",
      desc: "We ensure your tree is planted by local farmers and regularly tracked.",
    },
    {
      number: "3",
      title: "Watch It Grow",
      desc: "Receive periodic updates and photos of your growing trees.",
    },
    {
      number: "4",
      title: "See the Change",
      desc: "Celebrate your contribution to cleaner air and a healthier planet.",
    },
  ];

  return (
    <section className="why-choose">
      <div className="why-header">
        <h2>Why Choose GreenSteps?</h2>
      </div>

      <div className="why-grid">
        {features.map((item, index) => (
          <div className="why-card" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>

      <div className="how-section">
        <h2>How It Works</h2>
        <div className="how-steps">
          {steps.map((step, index) => (
            <div className="step-card" key={index}>
              <div className="step-number">{step.number}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
