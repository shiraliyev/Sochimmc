import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Homecontactdata } from "../../../Data/Homedata/Homecontactdata/Homecontactdata";
import "./HomeContact.css";

export default function HomeContact() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    const grid = e.currentTarget.querySelector('.contact-cyber-grid-pulse');
    if (grid) {
      const rect = e.currentTarget.getBoundingClientRect();
      grid.style.setProperty('--x', `${e.clientX - rect.left}px`);
      grid.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
  };

  const renderIcon = (path) => (
    <lord-icon
      src={path}
      trigger="loop"
      colors="primary:#74b9ff,secondary:#ffffff"
      style={{ width: "60px", height: "60px" }}
      aria-hidden="true"
    ></lord-icon>
  );

  return (
    <section className="contact-future-canvas" onMouseMove={handleMouseMove} aria-label={t("105_section_arialabel") || "Soçi MMC Əlaqə və Bildirim Bölməsi"}>
      <Helmet>
        <title>{t("105_seo_title") || "Bizimlə Əlaqə | SOCHİ MMC - İzolyasiya Xidmətləri"}</title>
        <meta 
          name="description" 
          content={t("105_seo_description") || "Soçi MMC ilə əlaqə saxlayın. İstilik, su və səs izolyasiyası layihələriniz üçün peşəkar mühəndis dəstəyi və məsləhət alın."} 
        />
        <meta name="keywords" content={t("105_seo_keywords") || "Soçi MMC əlaqə, izolyasiya mərkəzi Bakı, telefon, ünvan, e-poçt, tikinti dəstək"} />
        <link rel="canonical" href="https://sochi.az/elaqe" />
        <meta property="og:title" content={t("105_seo_title") || "Bizimlə Əlaqə | SOCHİ MMC"} />
        <meta property="og:description" content={t("105_seo_description") || "İstilik, su və səs izolyasiyası layihələriniz üçün bizimlə əlaqə saxlayın."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/elaqe" />
      </Helmet>

      <div className="contact-bg-fluid-orb contact-orb-one" aria-hidden="true"></div>
      <div className="contact-bg-fluid-orb contact-orb-two" aria-hidden="true"></div>
      <div className="contact-bg-fluid-orb contact-orb-three" aria-hidden="true"></div>
      <div className="contact-cyber-grid-pulse" aria-hidden="true"></div>
      <div className="contact-cyber-glow-mesh" aria-hidden="true"></div>
      <div className="contact-vector-axis" aria-hidden="true"></div>

      <div className="contact-future-container">
        <div className="contact-future-header">
          <div className="contact-cyber-badge">
            <span className="contact-pulse-dot" aria-hidden="true"></span>
            {t("105_contact_badge", "BİLDIRİM & ƏLAQƏ")}
          </div>
          <h2 className="contact-future-title">{t("105_contact_mainTitle", "Bizimlə Əlaqə Saxlayın")}</h2>
          <p className="contact-future-subtitle">{t("105_contact_subtitle", "İstilik, su və səs izolyasiyası layihələriniz üçün peşəkar dəstək alın.")}</p>
        </div>

        <div className="contact-future-grid">
          {Homecontactdata.map((item) => (
            <a 
              href={item.link} 
              key={item.id} 
              className="contact-future-card" 
              target="_blank" 
              rel="noreferrer"
              aria-label={`${t("105_aria_contact_card") || "Əlaqə vasitəsi"}: ${t(item.titleKey)}`}
            >
              <div className="contact-tech-bracket contact-bracket-tl" aria-hidden="true"></div>
              <div className="contact-tech-bracket contact-bracket-br" aria-hidden="true"></div>
              {renderIcon(item.iconPath)}
              <h3 className="contact-title">{t(item.titleKey)}</h3>
              <p className="contact-content">{item.content}</p>
              <div className="contact-hover-glow" aria-hidden="true"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}