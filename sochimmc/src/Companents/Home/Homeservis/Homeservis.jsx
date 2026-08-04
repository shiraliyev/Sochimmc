import "./Homeservis.css";
import React from "react";
import HTarifBAsData from "../../../Data/Homedata/HTarifler/HTarifBAsData";
import HTarifCardData from "../../../Data/Homedata/HTarifler/HTarifCardData";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

const KineticIcon = ({ type }) => {
  if (type === "heating") {
    return (
      <div className="xidmet-kinetic-wrapper xidmet-kinetic-heating" aria-hidden="true">
        <div className="xidmet-fire-core"></div>
        <div className="xidmet-orbit-ring"></div>
        <div className="xidmet-pulse-glow"></div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <circle cx="12" cy="12" r="4" strokeLinecap="round" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === "cooling") {
    return (
      <div className="xidmet-kinetic-wrapper xidmet-kinetic-cooling" aria-hidden="true">
        <div className="xidmet-frost-shards">
          <span></span><span></span><span></span><span></span>
        </div>
        <div className="xidmet-pulse-glow"></div>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="xidmet-kinetic-wrapper xidmet-kinetic-ventilation" aria-hidden="true">
      <div className="xidmet-vortex-blade"></div>
      <div className="xidmet-pulse-glow"></div>
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M11 5L6 9H2v6h4l5 4V5zM19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default function Homeservis() {
  const { t } = useTranslation();
  
  const handleWhatsAppClick = (itemName) => {
    const phoneNumber = "+994502042031";
    const serviceName = t(itemName) || "İzolyasiya xidməti";
    const customMessage = `Salam, SOCHİ MMC. "${serviceName}" xidməti ilə maraqlanıram, əməkdaşlıq etmək istəyirəm.`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(customMessage)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleMouseMove = (e) => {
    const grid = e.currentTarget.querySelector('.xidmet-cyber-grid-pulse');
    if (grid) {
      const rect = e.currentTarget.getBoundingClientRect();
      grid.style.setProperty('--x', `${e.clientX - rect.left}px`);
      grid.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
  };

  const getColorVars = (type) => {
    switch (type) {
      case "heating": return { "--node-color": "#d97706", "--node-glow": "rgba(217, 119, 6, 0.15)" };
      case "cooling": return { "--node-color": "#0d9488", "--node-glow": "rgba(13, 148, 136, 0.15)" };
      case "ventilation": return { "--node-color": "#6366f1", "--node-glow": "rgba(99, 102, 241, 0.15)" };
      default: return { "--node-color": "#ffffff", "--node-glow": "rgba(255, 255, 255, 0.05)" };
    }
  };

  return (
    <section className="xidmet-future-canvas" onMouseMove={handleMouseMove} aria-label={t("101_section_arialabel") || "Soçi MMC Peşəkar İzolyasiya Xidmətləri"}>
      <Helmet>
        <meta name="keywords" content={t("101_seo_keywords") || "izolyasiya xidmətləri, su izolyasiyası quraşdırılması, istilik izolyasiyası, səs izolyasiyası, Soçi MMC"} />
        <meta name="description" content={t("101_seo_desc") || "Soçi MMC olaraq peşəkar səviyyədə su, istilik və səs izolyasiyası xidmətləri təqdim edirik. Keyfiyyətli və zəmanətli xidmət üçün bizə müraciət edin."} />
      </Helmet>

      {/* Premium Mat Arxa Fon Orbları */}
      <div className="xidmet-bg-fluid-orb xidmet-orb-heating" aria-hidden="true"></div>
      <div className="xidmet-bg-fluid-orb xidmet-orb-cooling" aria-hidden="true"></div>
      <div className="xidmet-bg-fluid-orb xidmet-orb-ventilation" aria-hidden="true"></div>
      <div className="xidmet-cyber-grid-pulse" aria-hidden="true"></div>
      <div className="xidmet-cyber-glow-mesh" aria-hidden="true"></div>
      <div className="xidmet-vector-axis" aria-hidden="true"></div>

      <div className="xidmet-future-container">
        <div className="xidmet-future-header">
          <div className="xidmet-cyber-badge">
            <span className="xidmet-pulse-dot" aria-hidden="true"></span>
            <span>{t("101_badge_title") || "PEŞƏKAR İZOLYASİYA XİDMƏTLƏRİ"}</span>
          </div>
          <h2 className="xidmet-future-title">{t(HTarifBAsData.Title)}</h2>
          <p className="xidmet-future-subtitle">{t(HTarifBAsData.Subtitle)}</p>
        </div>

        <div className="xidmet-future-grid">
          {HTarifCardData.map((item, index) => (
            <article 
              key={item.id || index} 
              className={`xidmet-future-card xidmet-node-${item.type}`} 
              style={getColorVars(item.type)}
            >
              <div className="xidmet-tech-bracket xidmet-bracket-tl" aria-hidden="true"></div>
              <div className="xidmet-tech-bracket xidmet-bracket-br" aria-hidden="true"></div>
              <div className="xidmet-coordinate-axis" aria-hidden="true"></div>
              <div className="xidmet-fluid-liquid" aria-hidden="true"></div>
              <span className="xidmet-card-index" aria-hidden="true">0{index + 1}</span>
              
              <div className="xidmet-future-card-content">
                <div className="xidmet-future-icon-zone">
                  <KineticIcon type={item.type} />
                </div>
                <div className="xidmet-future-text-center">
                  <h3 className="xidmet-future-name">{t(item.name)}</h3>
                  <p className="xidmet-future-desc">{t(item.desc)}</p>
                </div>
                
                <button 
                  type="button"
                  className="xidmet-future-trigger" 
                  onClick={() => handleWhatsAppClick(item.name)}
                  aria-label={`${t(item.name)} xidməti üzrə əlaqə saxlayın`}
                >
                  <span className="xidmet-trigger-text">{t("101_btn_contact") || "BİZİMLƏ ƏLAQƏ"}</span>
                  <div className="xidmet-trigger-line-wrapper" aria-hidden="true">
                    <div className="xidmet-trigger-line"></div>
                  </div>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}