import React from "react";
import "./Homelogoblok.css";

function Homelogoblok() {
  return (
    <section className="logo-future-canvas">
      {/* Kiber Elementlər */}
      <div className="logo-cyber-grid-pulse"></div>
      <div className="logo-frame-bracket logo-bracket-top"></div>
      <div className="logo-frame-bracket logo-bracket-bottom"></div>

      <div className="logo-content-wrapper">
        <div className="logo-glow-aura"></div>
        <img
          src="img/logoblok03-unscreen.gif"
          alt="Premium System Logo"
          className="logo-future-img"
        />
      </div>

      {/* Texnoloji xətt */}
      <div className="logo-vector-line"></div>
    </section>
  );
}

export default Homelogoblok;