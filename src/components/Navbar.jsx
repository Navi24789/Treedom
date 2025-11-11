import React, { useState } from "react";
import { User, Search, ShoppingCart } from "lucide-react";
import RegisterModal from "../pages/RegisterModal";
import "./Navbar.css";

export default function Navbar() {
  const [showRegister, setShowRegister] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* LEFT: Logo */}
        <a href="/" className="logo">
          AdopTrees
        </a>

        {/* CENTER: Nav Links (Desktop only) */}
        <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
          <li><a href="/">Plant and gift</a></li>
          <li><a href="/about">For companies</a></li>
          <li><a href="/projects">About Us</a></li>
          
          <button className="gift-btn">🎁 Did you receive a gift?</button>
        </ul>

        {/* RIGHT: Icons */}
        <div className="nav-right">
          <User className="icon" onClick={() => setShowRegister(true)} />
          <Search className="icon" />
          <ShoppingCart className="icon" />
        </div>

        {/* HAMBURGER MENU (Mobile Only) */}
        <div
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* Register Modal */}
      <RegisterModal
        isOpen={showRegister}
        onClose={() => setShowRegister(false)}
      />
    </>
  );
}
