import React from "react";
import "./ImpactSection.css";
import { FaTree, FaGlobe, FaRecycle, FaUsers } from "react-icons/fa";

export default function ImpactSection() {
  const stats = [
    {
      icon: <FaTree className="icon tree" />,
      value: "3.5M",
      label: "Trees Planted",
    },
    {
      icon: <FaGlobe className="icon globe" />,
      value: "180",
      label: "Countries",
    },
    {
      icon: <FaRecycle className="icon recycle" />,
      value: "2.5M+",
      label: "CO₂ Offset (kg)",
    },
    {
      icon: <FaUsers className="icon users" />,
      value: "150K",
      label: "Active Users",
    },
  ];

  return (
    <section className="impact-section">
      <div className="impact-header">
        <h2>Our Growing Impact</h2>
        <p>Together, we’re making a difference for our planet</p>
      </div>

      <div className="impact-grid">
        {stats.map((item, index) => (
          <div className="impact-card" key={index}>
            <div className="icon-wrapper">{item.icon}</div>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
