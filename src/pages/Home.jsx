import React, { useEffect, useState } from "react";
import "./Home.css";
import forestImg from "../assets/forest-bg.jpg";
import bearImg from "../assets/bird.jpg";
import plantImg from "../assets/plant.jpg";
import mangoImg from "../assets/mango.jpg";
import WhyPlantTrees from "../components/WhyPlantTrees";
import ImpactSection from "../components/ImpactSection";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  const images = [bearImg, forestImg, plantImg, mangoImg];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="home">
      {/* ✅ Hero Section */}
      <section className="hero">
        {images.map((img, i) => (
          <div
            key={i}
            className={`bg-slide ${i === index ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* ✅ Hero Content */}
        <div className="overlay">
          <div className="hero-content">
            <h1>Let's Green The Earth</h1>
            <p>
              Plant trees around the world and track their growth.
              Together we can make a difference.
            </p>

            <div className="hero-buttons">
              <a href="#companies" className="btn-outline">
                For Companies
              </a>
              <a href="#individuals" className="btn-outline">
                For Individuals
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Below sections */}
      <WhyPlantTrees />
      <ImpactSection />
      <WhyChooseUs />
    </div>
  );
}
