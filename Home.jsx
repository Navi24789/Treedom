import React from "react";
import "./Home.css";
import forestImg from "../assets/forest-bg.jpg";


export default function Home() {
  return (
    <div className="home">
      <section
        className="hero"
        style={{ backgroundImage: `url(${forestImg})` }}
      >
        <div className="overlay">
          {/* ✅ Only One Navbar */}
          <nav className="navbar">
            <div className="logo">🌳 Treedom</div>
            <ul className="nav-links">
              <li>Plant and gift</li>
              <li>For companies</li>
              <li>About us</li>
            </ul>
            <button className="gift-btn">🎁 Did you receive a gift?</button>
          </nav>

          <div className="hero-content">
            <h1>Changing the world, one tree at a time</h1>
            <p>
              We support communities and regenerate the planet. Will you join
              us?
            </p>

            <div className="hero-buttons">
              <button className="btn-outline">For companies</button>
              <button className="btn-filled">For individuals</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
