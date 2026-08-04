import "./Homekatalog.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import HomekatalogBAsData from "../../../Data/Homedata/Homekatalog/HomekatalogBAsData";
import HomekatalogCardData from "../../../Data/Homedata/Homekatalog/HomekatalogCardData";
import { useTranslation } from "react-i18next";

export default function Homekatalog() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate("/products"); 
  };

  return (
    <section className="katalog-future-canvas">
      {/* Premium Arxa Plan Sistemi */}
      <div className="katalog-bg-fluid-orb katalog-orb-heating"></div>
      <div className="katalog-bg-fluid-orb katalog-orb-cooling"></div>
      <div className="katalog-bg-fluid-orb katalog-orb-ventilation"></div>
      <div className="katalog-cyber-grid-pulse"></div>
      <div className="katalog-cyber-glow-mesh"></div>
      <div className="katalog-vector-axis"></div>

      <div className="katalog-future-container">
        {/* Üst Başlıq */}
        <div className="katalog-future-header">
          <div className="katalog-cyber-badge">
            <span className="katalog-pulse-dot"></span>
            {t("DIGITAL ARCHIVE") || "DIGITAL ARCHIVE"}
          </div>
          <h2 className="katalog-future-title">{t(HomekatalogBAsData.Title) || "Kataloqlar"}</h2>
          <p className="katalog-future-subtitle">Məhsul və sistemlərin rəqəmsal kitabxanası</p>
        </div>

        {/* Elit Keçidli Grid */}
        <div className="katalog-future-grid">
          {HomekatalogCardData.map((item, index) => (
            <div 
              key={item.id} 
              className="katalog-glass-luxury-card" 
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={handleCardClick}
            >
              {/* Kartın daxili işıq effekti */}
              <div className="katalog-card-internal-glow"></div>

              {/* Şəkil Sahəsi */}
              <div className="katalog-img-mask">
                <img src={item.image} alt={t(item.name)} className="katalog-luxury-img" />
                <div className="katalog-img-shimmer"></div>
                {item.brand && <div className="katalog-luxury-tag">{item.brand}</div>}
              </div>

              {/* Kontent Sahəsi */}
              <div className="katalog-luxury-body">
                <div className="katalog-title-wrapper">
                  <h3 className="katalog-luxury-title">{t(item.name)}</h3>
                  <div className="katalog-luxury-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </div>
                </div>
                
                <p className="katalog-luxury-desc">{t(item.desc)}</p>
                
                <div className="katalog-luxury-footer">
                  <span className="katalog-footer-brand">2026 Collection</span>
                  <span className="katalog-action-link">{t("İncələ")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}