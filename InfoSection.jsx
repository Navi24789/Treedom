import React from "react";
import "./InfoSection.css";

export default function InfoSection() {
  const infoData = [
    {
      img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      title: "You get a tree with a story",
      desc: "Each tree is geo-located, photographed, and has its own online page."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      title: "You support farmers",
      desc: "We help smallholder farmers worldwide grow trees and improve their income."
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/616/616408.png",
      title: "You help the planet",
      desc: "Your tree absorbs CO₂, protects biodiversity, and regenerates the soil."
    },
  ];

  return (
    <section className="info-section">
      <h2>Why plant with us?</h2>
      <div className="info-cards">
        {infoData.map((item, index) => (
          <div className="card" key={index}>
            <img src={item.img} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
