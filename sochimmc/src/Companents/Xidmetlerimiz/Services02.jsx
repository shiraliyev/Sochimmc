import React, { useState, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './mehsullar.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Services02Data from "../../Data/XidmetlerData/Services02Data";

function Services02() {
  const [filter, setFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();
  const blocksRef = useRef([]);

  const handleMouseMove = (e) => {
    const grid = document.querySelector('.monitor-grid-pulse');
    if (grid) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      grid.style.setProperty('--x', `${x}px`);
      grid.style.setProperty('--y', `${y}px`);
    }
  };

  const uniqueCategories = ["all", ...new Set(Services02Data.map(item => item.category))];

  return (
    <div 
      className="monitor-page-wrapper" 
      onMouseMove={handleMouseMove}
      aria-label={t("112_section_arialabel") || "Soçi MMC Mühəndislik və Məsləhət Xidmətləri"}
    >
      {/* SEO Məlumatları */}
      <Helmet>
        <title>{t("112_seo_title") || "Mühəndislik və Məsləhət Xidmətləri | SOCHİ MMC"}</title>
        <meta 
          name="description" 
          content={t("112_seo_description") || "Soçi MMC tərəfindən təqdim olunan mühəndislik xidmətləri: Doğru Material Seçimi (Bikrost, Unifleks, Texnoelast), Büdcə Optimizasiyası və Metraj Hesablamaları."} 
        />
        <meta name="keywords" content={t("112_seo_keywords") || "Soçi MMC mühəndislik, Material seçimi, Büdcə optimizasiyası, Metraj hesablaması, İzolyasiya məsləhət, Bakı"} />
        <link rel="canonical" href="https://sochi.az/muhendislik" />

        <meta property="og:title" content={t("112_seo_title") || "Mühəndislik və Məsləhət Xidmətləri | SOCHİ MMC"} />
        <meta property="og:description" content={t("112_seo_description") || "Doğru material seçimi, büdcə optimizasiyası və dəqiq metraj hesablamaları mühəndislik xidmətləri."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/muhendislik" />
      </Helmet>

      <div className="monitor-grid-pulse" aria-hidden="true"></div>
      
      {/* Arxa plan işıq orb-ları */}
      <div className="blog-bg-fluid-orb blog-orb-heating" aria-hidden="true"></div>
      <div className="blog-bg-fluid-orb blog-orb-cooling" aria-hidden="true"></div>

      <main className="monitor-content-area">
        <div className="designmain">
          <div className="xidmet-future-header">
            <div className="xidmet-cyber-badge">
              <span className="xidmet-pulse-dot" aria-hidden="true"></span>
              {t("112_badge", "What We Do")}
            </div>
            <h2 className="xidmet-future-title">{t("services02")}</h2>
            <p className="xidmet-future-subtitle">{t("services02_description")}</p>
          </div>

          <div className="filter-buttons-container" role="toolbar" aria-label={t("112_filter_toolbar") || "Mühəndislik kateqoriyaları filteri"}>
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-button ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
              >
                {t(cat)} 
              </button>
            ))}
          </div>

          {uniqueCategories.filter(cat => cat !== "all").map((cat) => {
            if (filter !== "all" && filter !== cat) return null;

            const filteredItems = Services02Data.filter(item => item.category === cat);
            const hasEnoughSlides = filteredItems.length > 3; // Slayd sayı 3-dən çoxdursa loop işləsin

            return (
              <div key={cat} className="designmainsec1" ref={(el) => blocksRef.current.push(el)}>
                <div className="designmainsec1basliq">
                  <h2>{t(cat)}</h2>
                  <div className="section-title-line" aria-hidden="true"></div>
                </div>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={false}
                  loop={hasEnoughSlides}
                  loopAdditionalSlides={hasEnoughSlides ? 3 : 0}
                  autoplay={hasEnoughSlides ? { delay: 3500, disableOnInteraction: false } : false}
                  pagination={{ clickable: true }}
                  navigation={hasEnoughSlides}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    320: { slidesPerView: 1, spaceBetween: 15 },
                    768: { slidesPerView: 2, spaceBetween: 20 },
                    1024: { slidesPerView: 3, spaceBetween: 30 }
                  }}
                >
                  {filteredItems.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div 
                        className="profbetonxidmetlercardsw" 
                        onClick={() => setSelectedItem(slide)}
                        aria-label={`${t("112_aria_view_service") || "Xidmətə bax"}: ${t(slide.title)}`}
                      >
                        <div className="blog-tech-bracket blog-bracket-tl" aria-hidden="true"></div>
                        <div className="blog-tech-bracket blog-bracket-br" aria-hidden="true"></div>
                        
                        <div className="profbetonxidmetlercardimg" aria-hidden="true">
                          {slide.icon}
                        </div>
                        <div className="profbetonxidmetlercardtext">
                          <h3>{t(slide.title)}</h3>
                          <p>{t(slide.description)}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            );
          })}
        </div>
      </main>

      {/* Modal Pəncərəsi */}
      {selectedItem && (
        <div className="modalOverlay" role="dialog" aria-modal="true" aria-labelledby="modal-title">
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button className="closeButton" onClick={() => setSelectedItem(null)} aria-label={t("112_close") || "Bağla"}>&times;</button>
            <div style={{ fontSize: "4rem", color: "#74b9ff", margin: "20px 0" }} aria-hidden="true">
              {selectedItem.icon}
            </div>
            <h2 id="modal-title" className="modalh222">{t(selectedItem.title)}</h2>
            <p className="modalp1p">{t(selectedItem.description)}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services02;