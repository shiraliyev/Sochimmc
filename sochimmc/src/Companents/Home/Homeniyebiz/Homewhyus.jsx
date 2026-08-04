import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import { HomewhyusData } from "../../../Data/Homedata/HomewhyusData/HomewhyusData";
import "./Homewhyus.css";

export default function Homewhyus() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lordicon.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      if (document.body.contains(script)) document.body.removeChild(script);
    };
  }, []);

  const renderIcon = (path) => (
    <lord-icon
      src={path}
      trigger="loop"
      colors="primary:#d97706,secondary:#ffffff"
      style={{ width: "50px", height: "50px" }}
      aria-hidden="true"
    ></lord-icon>
  );

  return (
    <section className="why-future-canvas" aria-label={t("106_section_arialabel") || "Soçi MMC Niyə Biz və Üstünlüklərimiz"}>
      <Helmet>
        {/* Maksimum Gücləndirilmiş SEO Optimizasiyası */}
        <title>{t("106_seo_title") || "SOCHİ MMC — Rəsmi ТЕХНОНИКОЛЬ Distribütoru və İzolyasiya Sistemləri"}</title>
        <meta 
          name="description" 
          content={t("106_seo_description") || "Soçi MMC olaraq keyfiyyətli izolyasiya materiallarının etibarlı təchizatı, peşəkar mühəndis dəstəyi və sərfəli şərtlərlə xidmətinizdəyik."} 
        />
        <meta name="keywords" content={t("106_seo_keywords") || "niyə biz, Soçi MMC üstünlükləri, etibarlı izolyasiya təchizatçısı, keyfiyyətli tikinti materialları Bakı"} />
        <link rel="canonical" href="https://sochi.az/niyebiz" />

        {/* Sosial Media və Open Graph Optimizasiyası */}
        <meta property="og:title" content={t("106_seo_title") || "SOCHİ MMC — Rəsmi ТЕХНОНИКОЛЬ Distribütoru və İzolyasiya Sistemləri"} />
        <meta property="og:description" content={t("106_seo_description") || "Soçi MMC olaraq keyfiyyətli izolyasiya materiallarının etibarlı təchizatı, peşəkar mühəndis dəstəyi və sərfəli şərtlərlə xidmətinizdəyik."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/niyebiz" />
      </Helmet>

      <div className="why-future-container">
        <div className="why-future-header">
          <div className="why-cyber-badge">
            <span className="why-pulse-dot" aria-hidden="true"></span>
            {t("106_whyUs_badge", "NİYƏ BİZ?")}
          </div>
          <h2 className="why-future-title">{t("106_whyUs_mainTitle", "NİYƏ BİZİ SEÇİRLƏR?")}</h2>
          <p className="why-future-subtitle">{t("106_whyUs_subtitle", "Keyfiyyətli izolyasiya materiallarının etibarlı təchizatı.")}</p>
        </div>

        <div className="why-future-block-grid">
          {HomewhyusData.map((item) => (
            <div 
              key={item.id} 
              className="why-future-block"
              aria-label={`${t("106_aria_advantage") || "Üstünlük"}: ${t(item.titleKey)}`}
            >
              <div className="why-tech-bracket why-bracket-tl" aria-hidden="true"></div>
              <div className="why-tech-bracket why-bracket-br" aria-hidden="true"></div>
              <div className="why-icon-side">{renderIcon(item.icon)}</div>
              <div className="why-text-side">
                <h3 className="why-future-name">{t(item.titleKey)}</h3>
                <p className="why-future-desc">{t(item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}