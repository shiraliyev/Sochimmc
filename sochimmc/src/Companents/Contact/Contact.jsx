import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { Homecontactdata } from "../../Data/Homedata/Homecontactdata/Homecontactdata"; // Data faylını import edirik
import "./css/Contact.css";

export default function Contact() {
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

  const renderIcon = (path) => (
    <lord-icon
      src={path}
      trigger="loop"
      colors="primary:#000000,secondary:#530ec2"
      style={{ width: "60px", height: "60px" }}
      aria-hidden="true"
    ></lord-icon>
  );

  const handleMouseMove = (e) => {
    const grid = e.currentTarget.querySelector('.contact-cyber-grid-pulse');
    if (grid) {
      const rect = e.currentTarget.getBoundingClientRect();
      grid.style.setProperty('--x', `${e.clientX - rect.left}px`);
      grid.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
  };

  return (
    <section className="contact-future-canvas" onMouseMove={handleMouseMove} aria-label={t("109_section_arialabel") || "Soçi MMC Əlaqə və Müraciət Səhifəsi"}>
      <Helmet>
        <title>{t("109_seo_title") || "Əlaqə | Su, İstilik və Səs İzolyasiyası | SOCHİ MMC"}</title>
        <meta 
          name="description" 
          content={t("109_seo_description") || "Soçi MMC əlaqə məlumatları. Su İzolyasiyası, XPS lövhələri, Texnonikol Carbon ECO, İZOBOKS və digər məhsullar üçün bizimlə əlaqə saxlayın."} 
        />
        <meta name="keywords" content={t("109_seo_keywords") || "Soçi MMC əlaqə, telefon, ünvan, e-poçt, Su İzolyasiyası, İstilik və Səs İzolyasiyası, XPS lövhələri, Texnonikol Carbon ECO, İZOBOKS, Bikrost, Maye Bitum"} />
        <link rel="canonical" href="https://sochi.az/elaqe" />

        <meta property="og:title" content={t("109_seo_title") || "Əlaqə | Su, İstilik və Səs İzolyasiyası | SOCHİ MMC"} />
        <meta property="og:description" content={t("109_seo_description") || "Soçi MMC əlaqə məlumatları. İzolyasiya materialları üçün peşəkar dəstək alın."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/elaqe" />
      </Helmet>

      <div className="contact-cyber-grid-pulse" aria-hidden="true"></div>

      <div className="contact-future-container">
        <div className="contact-future-header">
          <div className="contact-cyber-badge">
            <span className="contact-pulse-dot" aria-hidden="true"></span>
            CONTACT US 
          </div>
          <h2 className="contact-future-title">{t("contact.mainTitle")}</h2>
          <p className="contact-future-subtitle">{t("contact.subtitle")}</p>
        </div>

        <div className="contact-future-grid">
          {Homecontactdata.map((item) => (
            <a 
              href={item.link} 
              key={item.id} 
              className="contact-future-card" 
              target="_blank" 
              rel="noreferrer"
              aria-label={`${t("109_aria_contact") || "Əlaqə vasitəsi"}: ${t(item.titleKey)}`}
            >
              <div className="contact-tech-bracket contact-bracket-tl" aria-hidden="true"></div>
              <div className="contact-tech-bracket contact-bracket-br" aria-hidden="true"></div>
              {renderIcon(item.iconPath)}
              <h3 className="contact-title">{t(item.titleKey)}</h3>
              <p className="contact-content">{item.content}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}