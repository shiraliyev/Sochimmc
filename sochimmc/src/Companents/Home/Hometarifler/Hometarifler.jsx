import "./Hometarifler.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import HTarifBAsData from "../../../Data/Homedata/HTarifler/HTarifBAsData";
import HTarifCardData from "../../../Data/Homedata/HTarifler/HTarifCardData";
import { useTranslation } from "react-i18next";

const KineticIcon = ({ type }) => {
  if (type === "heating") {
    return (
      <div className="mehsul-kinetic-wrapper mehsul-kinetic-heating">
        <div className="mehsul-fire-core"></div>
        <div className="mehsul-orbit-ring"></div>
        <div className="mehsul-pulse-glow"></div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === "cooling") {
    return (
      <div className="mehsul-kinetic-wrapper mehsul-kinetic-cooling">
        <div className="mehsul-frost-shards">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="mehsul-pulse-glow"></div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2v20M2 12h20M12 12l7.5-7.5M12 12L4.5 19.5M12 12l7.5 7.5M12 12L4.5 4.5" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="mehsul-kinetic-wrapper mehsul-kinetic-ventilation">
      <div className="mehsul-vortex-blade"></div>
      <div className="mehsul-pulse-glow"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default function Hometarifler() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/products");
  };

  const getColorVars = (type) => {
    switch (type) {
      case "heating": return { "--node-color": "#ff3300", "--node-glow": "rgba(255, 51, 0, 0.15)" };
      case "cooling": return { "--node-color": "#0066ff", "--node-glow": "rgba(0, 102, 255, 0.15)" };
      case "ventilation": return { "--node-color": "#00cc66", "--node-glow": "rgba(0, 204, 102, 0.15)" };
      default: return { "--node-color": "#000000", "--node-glow": "rgba(0, 0, 0, 0.05)" };
    }
  };

  return (
    <section className="mehsul-future-canvas">
      {/* BACKGROUND ULTRA-PREMIUM SİSTEMİ */}
      <div className="mehsul-bg-fluid-orb mehsul-orb-heating"></div>
      <div className="mehsul-bg-fluid-orb mehsul-orb-cooling"></div>
      <div className="mehsul-bg-fluid-orb mehsul-orb-ventilation"></div>
      <div className="mehsul-cyber-grid-pulse"></div>
      <div className="mehsul-cyber-glow-mesh"></div>
      <div className="mehsul-vector-axis"></div>

      <div className="mehsul-future-container">
        {/* Üst Başlıq */}
        <div className="mehsul-future-header">
          <div className="mehsul-cyber-badge">
            <span className="mehsul-pulse-dot"></span>
            {t("SYSTEM ARCHITECTURE") || "SYSTEM ARCHITECTURE"}
          </div>
          <h2 className="mehsul-future-title">{t(HTarifBAsData.Title) || "Məhsullar"}</h2>
          <p className="mehsul-future-subtitle">Mikroklimatın gələcək inteqrasiyası</p>
        </div>

        {/* Axıcı Grid */}
        <div className="mehsul-future-grid">
          {HTarifCardData.map((item, index) => (
            <div 
              key={item.id} 
              className={`mehsul-future-card mehsul-node-${item.type}`} 
              style={getColorVars(item.type)}
              onClick={handleCardClick}
            >
              {/* Premium künc xətləri və daxili elementlər */}
              <div className="mehsul-tech-bracket mehsul-bracket-tl"></div>
              <div className="mehsul-tech-bracket mehsul-bracket-br"></div>
              <div className="mehsul-coordinate-axis"></div>
              <div className="mehsul-fluid-liquid"></div>
              
              <span className="mehsul-card-index">0{index + 1}</span>
              
              <div className="mehsul-future-card-content">
                <div className="mehsul-future-icon-zone">
                  <KineticIcon type={item.type} />
                </div>

                <div className="mehsul-future-text-center">
                  <h3 className="mehsul-future-name">{t(item.name)}</h3>
                  <p className="mehsul-future-desc">{t(item.desc)}</p>
                </div>

                <div className="mehsul-future-trigger">
                  <span className="mehsul-trigger-text">DISCOVER</span>
                  <div className="mehsul-trigger-line-wrapper">
                    <div className="mehsul-trigger-line"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}