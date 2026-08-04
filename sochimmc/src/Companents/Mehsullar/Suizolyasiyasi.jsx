import React, { useEffect, useState, useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import './mehsullar.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import SuizoData from "../../Data/SuizoData/SuizoData";

function Suizolyasiyasi() {
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

  const uniqueCategories = ["all", ...new Set(SuizoData.map(item => item.category))];

  return (
    <div className="monitor-page-wrapper" onMouseMove={handleMouseMove}>
      <Helmet>
        <title>{t("116_seo_title") || "Su İzolyasiyası Materialları | Stekloizol, Bikrost, Texnoelast | SOCHİ MMC"}</title>
        <meta 
          name="description" 
          content={t("116_seo_description") || "Binaların təməlini və divarlarını rütubətdən qoruyan, su sızmalarının qarşısını alan Stekloizol XPP, Bikrost TKP, Linokrom EPP, Unifleks EPP və Texnoelast TKP hidroizolyasiya sistemləri."} 
        />
        <meta name="keywords" content={t("116_seo_keywords") || "Su izolyasiyası, Hidroizolyasiya, Stekloizol XPP, Bikrost TKP, Linokrom EPP, Unifleks EPP, Texnoelast TKP, Dam örtükləri, Təməl izolyasiyası, Soçi MMC Bakı"} />
        <link rel="canonical" href="https://sochi.az/su-izolyasiyasi" />

        <meta property="og:title" content={t("116_seo_title") || "Su İzolyasiyası Materialları | SOCHİ MMC"} />
        <meta property="og:description" content={t("116_seo_description") || "Peşəkar su və rütubət izolyasiyası üçün yüksək keyfiyyətli rulon materialları."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/su-izolyasiyasi" />
      </Helmet>

      <div className="monitor-grid-pulse"></div>
      <main className="monitor-content-area">
        <div className="designmain">
          <div className="xidmet-future-header">
            <div className="xidmet-cyber-badge">
              <span className="xidmet-pulse-dot"></span>
              {t("116_mehsullar_badge", "SU İZOLYASİYA SİSTEMLƏRİ")}
            </div>
            <h2 className="xidmet-future-title">{t("suizolyasiya")}</h2>
            <p className="xidmet-future-subtitle">{t("suizolyasiya_aciqlama")}</p>
          </div>

          <div className="filter-buttons-container">
            {uniqueCategories.map((cat) => (
              <button
                key={cat}
                className={`filter-button ${filter === cat ? "active" : ""}`}
                onClick={() => setFilter(cat)}
              >
                {t(cat)} 
              </button>
            ))}
          </div>

          {uniqueCategories.filter(cat => cat !== "all").map((cat) => {
            if (filter !== "all" && filter !== cat) return null;

            const filteredItems = SuizoData.filter(item => item.category === cat);

            return (
              <div key={cat} className="designmainsec1" ref={(el) => blocksRef.current.push(el)}>
                <div className="designmainsec1basliq">
                  <h2>{t(cat)}</h2>
                  <div className="section-title-line"></div>
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
                      <div className="profbetonxidmetlercardsw" onClick={() => setActiveModal(slide)}>
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
        <div className="modalOverlay"> 
          <div className="modalContent" onClick={(e) => e.stopPropagation()}>
            <span className="closeButton" onClick={closeModal}>×</span>
            
            <img 
              src={activeModal.image} 
              alt={`SOCHİ MMC - ${t(activeModal.title)} | ${t(activeModal.description)}`} 
              className="modalImage" 
              loading="lazy"
           />
            <h2 className="modalh222">{t(activeModal.title)}</h2>
            <p className="modalp1p">{t(activeModal.modalContent)}</p>
            
            <a 
              href={`https://wa.me/+994502042031?text=${encodeURIComponent(
                t("whatsapp_message", { 
                  product: t(activeModal.title),
                  defaultValue: `Salam, SOCHİ MMC ilə əməkdaşlıq etmək istəyirəm. "${t(activeModal.title)}" su izolyasiyası məhsulu ilə maraqlanıram və ətraflı məlumat almaq istəyirəm.` 
                })
              )}`}
              target="_blank" 
              rel="noopener noreferrer"
              className="whatsappOrderButton"
            >
              {t("order_now")}
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

export default Suizolyasiyasi;