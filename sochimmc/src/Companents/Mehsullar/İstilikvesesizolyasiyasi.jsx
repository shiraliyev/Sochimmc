import React, { useEffect, useState, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './mehsullar.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import IstisesizoData from "../../Data/IstisesizoData/IstisesizoData";

function İstilikvesesizolyasiyasi() {
  const [activeModal, setActiveModal] = useState(null);
  const [filter, setFilter] = useState("all");
  const { t } = useTranslation();
  const blocksRef = useRef([]);

  useEffect(() => {
    document.body.style.overflow = activeModal ? "hidden" : "auto";
  }, [activeModal]);

  const closeModal = () => setActiveModal(null);

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

  const uniqueCategories = ["all", ...new Set(IstisesizoData.map(item => item.category))];

  return (
    <div 
      className="monitor-page-wrapper" 
      onMouseMove={handleMouseMove}
      aria-label={t("113_section_arialabel") || "Soçi MMC İstilik və Səs İzolyasiya Məhsulları Kataloqu"}
    >
      <Helmet>
        <title>{t("113_seo_title") || "İstilik və Səs İzolyasiya Materialları | İZOBOKS, Texnofas, Texnovent, Roklait | SOCHİ MMC"}</title>
        <meta 
          name="description" 
          content={t("113_seo_description") || "Enerji sərfiyyatını azaldan və səs izolyasiyası təmin edən peşəkar material növləri: Rulonlu daş yunları İZOBOKS, fasad üçün Texnofas, ventilyasiya olunan fasadlar üçün Texnovent və universal Roklait daş yunları."} 
        />
        <meta name="keywords" content={t("113_seo_keywords") || "İstilik izolyasiyası, Səs izolyasiyası, Daş yunu, İZOBOKS, Texnofas, Texnovent, Roklait, Rosklite, Rulonlu daş yunu, Fasad izolyasiyası, Akustik izolyasiya, Soçi MMC Bakı"} />
        <link rel="canonical" href="https://sochi.az/istilik-ses-izolyasiyasi" />

        <meta property="og:title" content={t("113_seo_title") || "İstilik və Səs İzolyasiya Materialları | SOCHİ MMC"} />
        <meta property="og:description" content={t("113_seo_description") || "İZOBOKS, Texnofas, Texnovent, Roklait və digər peşəkar istilik-səs izolyasiya məhsulları növləri."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/istilik-ses-izolyasiyasi" />
      </Helmet>

      <div className="monitor-grid-pulse" aria-hidden="true"></div>
      <main className="monitor-content-area">
        <div className="designmain">
          <div className="xidmet-future-header">
            <div className="xidmet-cyber-badge">
              <span className="xidmet-pulse-dot" aria-hidden="true"></span>
              {t("113_mehsullar_badge", "İSTİLİK VƏ SƏS İZOLYASİYASI")}
            </div>
            <h2 className="xidmet-future-title">{t("istilik_sesizolyasiya")}</h2>
            <p className="xidmet-future-subtitle">{t("mehsullar_istivəsəsizo_aciqlama")}</p>
          </div>

          <div className="filter-buttons-container" role="toolbar" aria-label={t("113_filter_toolbar") || "Məhsul növləri üzrə filter paneli"}>
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`filter-button ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
                aria-pressed={filter === cat}
                aria-label={`${t("113_aria_filter_btn") || "Məhsul növünü seç"} ${t(cat)}`}
              >
                {t(cat)} 
              </button>
            ))}
          </div>

          {uniqueCategories.filter(cat => cat !== "all").map((cat) => {
            if (filter !== "all" && filter !== cat) return null;

            const filteredItems = IstisesizoData.filter(item => item.category === cat);

            return (
              <div key={cat} className="designmainsec1" ref={(el) => blocksRef.current.push(el)}>
                <div className="designmainsec1basliq">
                  <h2>{t(cat)}</h2>
                  <div className="section-title-line" aria-hidden="true"></div>
                </div>
                <Swiper
                  spaceBetween={30}
                  slidesPerView={3}
                  loop={filteredItems.length > 3} 
                  autoplay={{ delay: 3500, disableOnInteraction: false }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                  }}
                >
                  {filteredItems.map((slide) => (
                    <SwiperSlide key={slide.id}>
                      <div 
                        className="profbetonxidmetlercardsw" 
                        onClick={() => setActiveModal(slide)}
                        role="button"
                        tabIndex={0}
                        aria-label={`${t("113_aria_card_click") || "Məhsul növünün xüsusiyyətlərinə bax"}: ${t(slide.title)}`}
                      >
                        <img 
                          src={slide.image} 
                          alt={`SOCHİ MMC - ${t(slide.title)} | ${t(slide.description)}`} 
                          className="profbetonxidmetlercardimg" 
                          loading="lazy"
                          width="400"
                          height="300"
                       />
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

      {activeModal && (
        <div className="modalOverlay" role="dialog" aria-modal="true" aria-labelledby="modal-title"> 
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <button 
              type="button" 
              className="closeButton" 
              onClick={closeModal}
              aria-label={t("113_close_modal") || "Məhsul pəncərəsini bağla"}
            >
              ×
            </button>
            <img 
              src={activeModal.image} 
              alt={`SOCHİ MMC - ${t(activeModal.title)} | ${t(activeModal.description)}`} 
              className="modalImage" 
              loading="lazy"
           />
            <h2 id="modal-title" className="modalh222">{t(activeModal.title)}</h2>
            <p className="modalp1p">{t(activeModal.modalContent)}</p>
            
            <a 
              href={`https://wa.me/+994502042031?text=${encodeURIComponent(
                t("whatsapp_message", { 
                  product: t(activeModal.title),
                  defaultValue: `Salam, SOCHİ MMC ilə əməkdaşlıq etmək istəyirəm. "${t(activeModal.title)}" məhsul növü ilə maraqlanıram və ətraflı məlumat almaq istəyirəm.` 
                })
              )}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsappOrderButton"
              aria-label={`${t("113_aria_whatsapp") || "WhatsApp vasitəsilə sifariş et"} - ${t(activeModal.title)}`}
            >
              {t("order_now")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default İstilikvesesizolyasiyasi;