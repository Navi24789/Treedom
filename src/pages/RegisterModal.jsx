import React, { useState, useEffect } from "react";
import "./RegisterModal.css";
import { X, ArrowLeft, User, Building2, LogIn } from "lucide-react";

export default function RegisterModal({ isOpen, onClose }) {
  const [step, setStep] = useState("choose");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (isOpen) {
      setStep("choose");
      setLoading(false);
      setMessage("");
    }
  }, [isOpen]);

  const handleFakeLogin = (provider) => {
    setLoading(true);
    setMessage(`Connecting to ${provider}...`);

    setTimeout(() => {
      setLoading(false);
      setMessage(`✅ Signed in successfully with ${provider}!`);
      setTimeout(() => onClose(), 1500);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="register-overlay" onClick={onClose}>
      <div className="register-box" onClick={(e) => e.stopPropagation()}>
        {step === "choose" ? (
          <>
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>

            <div className="register-header">
              <span className="emoji">🌱</span>
              <h2>I don’t have an account.</h2>
              <p>Join us and make Earth greener!</p>
            </div>

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
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
            <button className="back-btn" onClick={() => setStep("choose")}>
              <ArrowLeft size={18} />
            </button>

            <div className="register-header">
              <h2>Create your profile</h2>
              <p>Access your trees, track your impact, and share your story 🌍</p>
            </div>

            <div className="social-buttons">
              {loading ? (
                <div className="loading">
                  <div className="spinner"></div>
                  <p>{message}</p>
                </div>
              ) : (
                <>
                  <button
                    className="social-btn google"
                    onClick={() => handleFakeLogin("Google")}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                      alt="Google"
                    />
                    Continue with Google
                  </button>

                  <button
                    className="social-btn facebook"
                    onClick={() => handleFakeLogin("Facebook")}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/5968/5968764.png"
                      alt="Facebook"
                    />
                    Continue with Facebook
                  </button>

                  <button
                    className="social-btn apple"
                    onClick={() => handleFakeLogin("Apple")}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/179/179309.png"
                      alt="Apple"
                    />
                    Continue with Apple
                  </button>

                  <button
                    className="social-btn email"
                    onClick={() => handleFakeLogin("Email")}
                  >
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
                      alt="Email"
                    />
                    Continue with Email
                  </button>
                </>
              )}
            </div>

            {message && !loading && (
              <p className="success-msg">{message}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
}
