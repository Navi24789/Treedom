import React, { useState, useEffect } from "react";
import "./RegisterModal.css";
import { X, ArrowLeft, User, Building2, LogIn } from "lucide-react";

export default function RegisterModal({ isOpen, onClose }) {
  const [step, setStep] = useState("choose"); // choose | create

  // 🟢 Reset step to "choose" whenever modal opens
  useEffect(() => {
    if (isOpen) setStep("choose");
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="register-overlay" onClick={onClose}>
      <div className="register-box" onClick={(e) => e.stopPropagation()}>
        {step === "choose" ? (
          <>
            {/* Close Button */}
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>

            {/* Header */}
            <div className="register-header">
              <span className="emoji">🐶</span>
              <h2>I don’t have an account.</h2>
              <p>🌱🌍 Join us: Together, we make Earth greener!</p>
            </div>

            {/* Buttons */}
            <div className="register-options">
              <button className="btn user" onClick={() => setStep("create")}>
                <User size={18} /> Register as a user
              </button>
              <button className="btn business" onClick={() => setStep("create")}>
                <Building2 size={18} /> Register as a business
              </button>
              <button className="btn signin" onClick={() => setStep("create")}>
                <LogIn size={18} /> Sign In
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Close & Back Buttons */}
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
            <button className="back-btn" onClick={() => setStep("choose")}>
              <ArrowLeft size={18} />
            </button>

            {/* Header */}
            <div className="register-header">
              <h2>Create your profile</h2>
              <p>
                By creating a profile on AdopTree you will have easy access to
                your trees, monitor your impact and share it.
              </p>
            </div>

            {/* Social Buttons */}
            <div className="social-buttons">
              <button className="social-btn google">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                  alt="Google"
                />
                Continue with Google
              </button>
              <button className="social-btn facebook">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                  alt="Facebook"
                />
                Continue with Facebook
              </button>
              <button className="social-btn apple">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
                  alt="Apple"
                />
                Continue with Apple
              </button>
              <button className="social-btn email">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                  alt="Email"
                />
                Continue with email
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
