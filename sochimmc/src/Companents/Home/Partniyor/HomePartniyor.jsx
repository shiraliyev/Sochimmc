import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { HomePartnersData } from "../../../Data/Homedata/HomePartnersData/HomePartnersData";
import "./HomePartniyor.css";

export default function HomePartniyor() {
  const { t } = useTranslation();
  
  // Mouse-un koordinatlarını və aktiv olan partnyorun adını saxlamaq üçün state-lər
  const [tooltip, setTooltip] = useState({ show: false, name: "", x: 0, y: 0 });

  const handleMouseMove = (e, name) => {
    setTooltip({
      show: true,
      name: name,
      x: e.clientX,
      y: e.clientY,
    });
  };

  const handleMouseLeave = () => {
    setTooltip({ show: false, name: "", x: 0, y: 0 });
  };

  return (
    <section className="partners-canvas">
      <div className="partners-container">
        <div className="partners-header">
          <div className="partners-cyber-badge">
            <span className="partners-pulse-dot"></span>
            {t("partners.badge", "PARTNYORLAR")}
          </div>
          <h2 className="partners-title">{t("partners.title", "BİZİM PARTNYORLARIMIZ")}</h2>
          <p className="partners-subtitle">{t("partners.subtitle", "Etibarlı və güvənli əməkdaşlıq şəbəkəmiz.")}</p>
        </div>

        <div className="partners-grid">
          {HomePartnersData.map((partner) => (
            <div 
              key={partner.id} 
              className="partner-card"
              onMouseMove={(e) => handleMouseMove(e, partner.name)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="partners-tech-bracket partners-bracket-tl"></div>
              <div className="partners-tech-bracket partners-bracket-br"></div>
              <div className="partner-logo-wrapper">
                <img src={partner.logo} alt={partner.name} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mouse-u izləyən bəzəklitooltip elementi */}
      {tooltip.show && (
        <div 
          className="custom-cursor-tooltip"
          style={{ left: `${tooltip.x + 15}px`, top: `${tooltip.y + 15}px` }}
        >
          <span className="tooltip-cyber-dot"></span>
          {tooltip.name}
        </div>
      )}
    </section>
  );
}