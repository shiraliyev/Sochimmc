import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import "./Homesec03esas.css";
import Hsec03Data from "../../../Data/Homedata/Hsec03Data";
import { useTranslation } from "react-i18next";

const Homesec03esas = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === Hsec03Data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? Hsec03Data.length - 1 : prev - 1));
  };

  useEffect(() => {
    const autoPlayTimer = setInterval(nextSlide, 5000);
    return () => clearInterval(autoPlayTimer);
  }, [currentSlide]);

  const getSlideColorVars = (type) => {
    switch (type) {
      case "heating":
        return { "--slide-node-color": "#ff3300", "--slide-node-glow": "rgba(255, 51, 0, 0.15)" };
      case "cooling":
        return { "--slide-node-color": "#0066ff", "--slide-node-glow": "rgba(0, 102, 255, 0.15)" };
      case "ventilation":
        return { "--slide-node-color": "#00cc66", "--slide-node-glow": "rgba(0, 204, 102, 0.15)" };
      default:
        return { "--slide-node-color": "#ffffff", "--slide-node-glow": "rgba(255, 255, 255, 0.15)" };
    }
  };

  return (
    <section className="slider-future-canvas" aria-label={t("101_slider_arialabel") || "Soçi MMC - İzolyasiya Materialları və Sistemləri Slayderi"}>
      <Helmet>
        {/* Maksimum SEO və Axtarış Optimizasiyası */}
        <title>{t("101_seo_title") || "SOCHİ MMC | İzolyasiya Materialları Satışı Bakıda"}</title>
        <meta 
          name="description" 
          content={t("101_seo_description") || "Soçi MMC - Keyfiyyətli su, istilik və səs izolyasiyası materialları satışı. Geniş məhsul çeşidimizlə tanış olun."} 
        />
        <meta name="keywords" content={t("101_seo_keywords1") || "izolyasiya materialları, su izolyasiyası, istilik izolyasiyası, səs izolyasiyası, Soçi MMC, Bakıda izolyasiya satışı"} />
        <link rel="canonical" href="https://sochi.az/" />
        
        {/* Open Graph / Sosial Media SEO Optimizasiyası */}
        <meta property="og:title" content={t("101_seo_title") || "SOCHİ MMC | İzolyasiya Materialları Satışı Bakıda"} />
        <meta property="og:description" content={t("101_seo_description") || "Soçi MMC - Keyfiyyətli su, istilik və səs izolyasiyası materialları satışı."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/" />
      </Helmet>

      {/* BACKGROUND ORBS - Performans üçün vizual elementlər */}
      <div className="slider-bg-fluid-orb slider-orb-alpha" aria-hidden="true"></div>
      <div className="slider-bg-fluid-orb slider-orb-beta" aria-hidden="true"></div>
      <div className="slider-cyber-grid-pulse" aria-hidden="true"></div>
      <div className="slider-vector-axis" aria-hidden="true"></div>

      {Hsec03Data.map((slide, index) => {
        const isActive = index === currentSlide;
        const slideType = slide.type || (index % 3 === 0 ? "heating" : index % 3 === 1 ? "cooling" : "ventilation");

        return (
          <div
            key={slide.id || index}
            className={`slider-future-item ${isActive ? "active" : ""}`}
            style={{
              ...getSlideColorVars(slideType),
              backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.85) 30%, rgba(0, 0, 0, 0.4) 100%), url(${slide.img})`,
            }}
            aria-hidden={!isActive}
          >
            {/* SEO & Performance üçün ilkin slayd şəklini öncədən yükləyirik */}
            {index === 0 && (
              <link rel="preload" as="image" href={slide.img} />
            )}

            {isActive && (
              <div className="slider-future-container" role="region" aria-live="polite">
                <div className="slider-tech-bracket slider-bracket-tl" aria-hidden="true"></div>
                <div className="slider-tech-bracket slider-bracket-br" aria-hidden="true"></div>
                
                <div className="slider-future-content-wrapper">
                  <div className="slider-cyber-badge">
                    <span className="slider-pulse-dot" aria-hidden="true"></span>
                    <span>{t("101_badge_name") || "SOCHİ MMC"}</span>
                    <span className="slider-slide-index" aria-hidden="true">// 0{index + 1}</span>
                  </div>

                  {/* Səhifənin əsas hiyerarxiyasına uyğun olaraq başlıq strukturu */}
                  <h1 className="slider-future-title">{t(slide.basliq) || "SOCHİ MMC"}</h1>
                  <p className="slider-future-description">{t(slide.metin)}</p>

                  <a 
                    href={slide.link || "/about"} 
                    className="slider-future-trigger-btn" 
                    aria-label={`${t("101_aria_moreread") || "Ətraflı bax"}: ${t(slide.basliq)}`}
                  >
                    <span className="slider-trigger-btn-text">{t('about1') || "Haqqımızda"}</span>
                    <div className="slider-trigger-btn-line-wrapper" aria-hidden="true">
                      <div className="slider-trigger-btn-line"></div>
                    </div>
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div className="slider-future-arrows">
        <button className="slider-arrow-btn-premium" onClick={prevSlide} aria-label={t("101_aria_prev") || "Əvvəlki izolyasiya məhsulu slaydı"}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
        <button className="slider-arrow-btn-premium" onClick={nextSlide} aria-label={t("101_aria_next") || "Növbəti izolyasiya məhsulu slaydı"}>
          <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Homesec03esas;