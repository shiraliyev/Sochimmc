import React, { useState, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './mehsullar.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import Services01Data from "../../Data/XidmetlerData/Services01Data";

function Services01() {
  const [filter, setFilter] = useState("Hamısı");
  const [selectedItem, setSelectedItem] = useState(null);
  const { t } = useTranslation();
  const blocksRef = useRef([]);

  const data = Services01Data(t);

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

  const uniqueCategories = ["Hamısı", ...new Set(data.map(item => item.category))];

  return (
    <div 
      className="monitor-page-wrapper" 
      onMouseMove={handleMouseMove}
      aria-label={t("111_section_arialabel") || "Soçi MMC Peşəkar İzolyasiya və Tikinti Xidmətləri"}
    >
      <Helmet>
        <title>{t("111_seo_title") || "İzolyasiya və Tikinti Xidmətləri | SOCHİ MMC"}</title>
        <meta 
          name="description" 
          content={t("111_seo_description") || "Soçi MMC tərəfindən təqdim olunan peşəkar xidmətlər: Rulonlu Materiallarla Dam Örtüyü (Bikrost, Linokrom, Unifleks), Təməl və Zirzəmi Hidroizolyasiyası, Daş Yunu ilə İstilik İzolyasiyası."} 
        />
        <meta name="keywords" content={t("111_seo_keywords") || "Soçi MMC xidmətlər, Rulonlu Dam Örtüyü, Bikrost, Linokrom, Unifleks, Təməl Hidroizolyasiyası, Daş Yunu İstilik İzolyasiyası, Texnofas, Bakı"} />
        <link rel="canonical" href="https://sochi.az/servis-xidmeti" />

        <meta property="og:title" content={t("111_seo_title") || "İzolyasiya və Tikinti Xidmətləri | SOCHİ MMC"} />
        <meta property="og:description" content={t("111_seo_description") || "Rulonlu materiallarla dam örtüyü, təməl hidroizolyasiyası və daş yunu ilə istilik izolyasiyası xidmətləri."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/servis-xidmeti" />
      </Helmet>

      {/* Arxa plan elementləri */}
      <div className="blog-bg-fluid-orb blog-orb-heating" aria-hidden="true"></div>
      <div className="blog-bg-fluid-orb blog-orb-cooling" aria-hidden="true"></div>
      <div className="monitor-grid-pulse" aria-hidden="true"></div>

      <main className="monitor-content-area">
        <div className="designmain">
          <div className="xidmet-future-header">
            <div className="xidmet-cyber-badge">
              <span className="xidmet-pulse-dot" aria-hidden="true"></span>
              {t("111_badge", "What We Do")}
            </div>
            <h2 className="xidmet-future-title">{t("services01")}</h2>
            <p className="xidmet-future-subtitle">{t("services01_description")}</p>
          </div>

          <div className="filter-buttons-container" role="toolbar" aria-label={t("111_filter_toolbar") || "Xidmət kateqoriyaları filteri"}>
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-button ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
              >
                {cat === "Hamısı" ? t("all", "Hamısı") : cat}
              </button>
            ))}
          </div>

          {uniqueCategories.filter(cat => cat !== "Hamısı").map((cat) => {
            if (filter !== "Hamısı" && filter !== cat) return null;

            const filteredItems = data.filter(item => item.category === cat);
            const hasEnoughSlides = filteredItems.length > 3; // 3-dən çoxdursa loop işləsin

            return (
              <div key={cat} className="designmainsec1" ref={(el) => blocksRef.current.push(el)}>
                <div className="designmainsec1basliq">
                  <h2>{cat}</h2>
                  <div className="section-title-line" aria-hidden="true"></div>
                </div>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={false}
                  loop={hasEnoughSlides}
                  loopAdditionalSlides={hasEnoughSlides ? 3 : 0}
                  autoplay={hasEnoughSlides ? { delay: 3500, disableOnInteraction: false } : false}
                  navigation={hasEnoughSlides}
                  pagination={{ clickable: true }}
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
                        aria-label={`${t("111_aria_view_service") || "Xidmətə bax"}: ${slide.title}`}
                      >
                        <div className="blog-tech-bracket blog-bracket-tl" aria-hidden="true"></div>
                        <div className="blog-tech-bracket blog-bracket-br" aria-hidden="true"></div>
                        
                        <div className="profbetonxidmetlercardimg" aria-hidden="true">
                          {slide.icon}
                        </div>
                        <div className="profbetonxidmetlercardtext">
                          <h3>{slide.title}</h3>
                          <p>{slide.description}</p>
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
            <button className="closeButton" onClick={() => setSelectedItem(null)} aria-label={t("111_close") || "Bağla"}>&times;</button>
            <div style={{ fontSize: "4rem", color: "#74b9ff", margin: "20px 0" }} aria-hidden="true">
              {selectedItem.icon}
            </div>
            <h2 id="modal-title" className="modalh222">{selectedItem.title}</h2>
            <p className="modalp1p">{selectedItem.description}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Services01;