import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './Sertifkat.css';

import SertifkatData from "../../Data/SertifkatData/SertifkatData";

function Sertifkat() {
  const [activeModal, setActiveModal] = useState(null);
  const { t } = useTranslation();

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "auto";
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

  const handleMouseMove = (e) => {
    const grid = document.querySelector('.Ser-monitor-grid-pulse');
    if (grid) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      grid.style.setProperty('--x', `${x}px`);
      grid.style.setProperty('--y', `${y}px`);
    }
  };

  // ✅ Dinamik URL təyini (Localhost xətasının qarşısını alır)
  const currentUrl = typeof window !== "undefined" 
    ? `${window.location.origin}/sertifikatlar` 
    : "https://sochi.az/sertifikatlar";

  return (
    <div 
      className="Ser-monitor-page-wrapper" 
      onMouseMove={handleMouseMove}
      aria-label={t("110_section_arialabel") || "Soçi MMC Sertifikatlar və Tərəfdaşlıq Sənədləri"}
    >
      <Helmet>
        <title>{t("110_seo_title") || "Sertifikatlar və Tərəfdaşlıq | SOCHİ MMC"}</title>
        <meta 
          name="description" 
          content={t("110_seo_description") || "Soçi MMC-nin TEXNONIKOL rəsmi tərəfdaşlıq sertifikatları, BakuBuild sərgi iştirak sənədləri və layiq görüldüyü mükafatlar."} 
        />
        <meta name="keywords" content={t("110_seo_keywords") || "Soçi MMC sertifikatlar, TEXNONIKOL rəsmi tərəfdaş, BakuBuild sərgisi, izolyasiya mükafatları, tərəfdaşlıq sənədləri Bakı"} />
        
        {/* ✅ DÜZƏLDİLMİŞ HİSSƏ: */}
        <link rel="canonical" href={currentUrl} />

        <meta property="og:title" content={t("110_seo_title") || "Sertifikatlar və Tərəfdaşlıq | SOCHİ MMC"} />
        <meta property="og:description" content={t("110_seo_description") || "TEXNONIKOL tərəfdaşlıq sertifikatları, BakuBuild iştirak sənədləri və mükafatlarımız."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={currentUrl} />
      </Helmet>

      <div className="Ser-monitor-grid-pulse" aria-hidden="true"></div>
      <main className="Ser-monitor-content-area">
        <div className="Ser-designmain">
          <div className="Ser-xidmet-future-header">
            <div className="Ser-xidmet-cyber-badge">
              <span className="Ser-xidmet-pulse-dot" aria-hidden="true"></span>
              {t("110_portfel", "PORTFEL")}
            </div>
            <h2 className="Ser-xidmet-future-title">{t("110_sertifikatlar_title", "Sertifikatlar")}</h2>
            <p className="Ser-xidmet-future-subtitle">{t("110_sertifikatlar_aciqlama", "Rəsmi tərəfdaşlıq sertifikatlarımız və uğur sənədlərimiz.")}</p>
          </div>

          <div className="Ser-designmainsec1">
            <div className="Ser-designmainsec1basliq">
              <h2>{t("110_bizim_sertifikatlar", "Bizim Sertifikatlar")}</h2>
              <div className="Ser-section-title-line" aria-hidden="true"></div>
            </div>

            <div className="Ser-certificates-grid">
              {SertifkatData.map((slide) => (
                <div 
                  key={slide.id} 
                  className="Ser-profbetonxidmetlercardsw" 
                  onClick={() => setActiveModal(slide)}
                  aria-label={`${t("110_aria_view_cert") || "Sertifikata bax"}: ${t(slide.title)}`}
                >
                  <img 
                    src={slide.image} 
                    alt={`SOCHİ MMC - ${t(slide.title)} | ${t(slide.description)}`} 
                    className="Ser-profbetonxidmetlercardimg" 
                    loading="lazy"
                    width="400"
                    height="300"
                  />
                  <div className="Ser-profbetonxidmetlercardtext">
                    <h3>{t(slide.title)}</h3>
                    <p>{t(slide.description)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {activeModal && (
        <div className="Ser-modalOverlay" onClick={closeModal}> 
          <div className="Ser-modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="Ser-closeButton" onClick={closeModal} aria-label={t("110_close") || "Bağla"}>×</button>
            
            <img 
              src={activeModal.image} 
              alt={`SOCHİ MMC - ${t(activeModal.title)} | ${t(activeModal.description)}`} 
              className="Ser-modalImage" 
              loading="lazy"
            />
            <h2 className="Ser-modalh222">{t(activeModal.title)}</h2>
            <p className="Ser-modalp1p">{t(activeModal.modalContent)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sertifkat;