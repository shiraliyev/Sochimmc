import React from "react";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './Homesec2.css';
import Homesec2Data from "../../../Data/Homesec2Data";

export default function Homesec2() {
  const { t } = useTranslation();

  const handleMouseMove = (e) => {
    const grid = e.currentTarget.querySelector('.xidmet-cyber-grid-pulse');
    if (grid) {
      const rect = e.currentTarget.getBoundingClientRect();
      grid.style.setProperty('--x', `${e.clientX - rect.left}px`);
      grid.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
  };

  return (
    <section className="xidmet-future-canvas" onMouseMove={handleMouseMove} aria-label={t("104_section_arialabel") || "Soçi MMC Məhsullar və İzolyasiya Sistemləri Slayderi"}>
      <Helmet>
        {/* Maksimum Gücləndirilmiş Məhsul və Axtarış Optimizasiyası */}
        <title>{t("104_seo_title") || "Su, İstilik və Səs İzolyasiya Məhsulları | SOCHİ MMC"}</title>
        <meta 
          name="description" 
          content={t("104_seo_description") || "Soçi MMC-də Su İzolyasiyası, XPS lövhələri, Texnonikol Carbon ECO, İZOBOKS daş yunları, Texnofas, Bikrost, Unifleks və Maye Bitum məhsullarının satışı."} 
        />
        <meta name="keywords" content={t("104_seo_keywords") || "Su İzolyasiyası, İstilik və Səs İzolyasiyası, XPS lövhələri, Texnonikol Carbon ECO, İZOBOKS, Texnofas, Bikrost Unifleks Texnoelast, Maye Bitum və Mastikalar, Soçi MMC"} />
        <link rel="canonical" href="https://sochi.az/mehsullar" />

        {/* Sosial Media və Open Graph Optimizasiyası */}
        <meta property="og:title" content={t("104_seo_title") || "Su, İstilik və Səs İzolyasiya Məhsulları | SOCHİ MMC"} />
        <meta property="og:description" content={t("104_seo_description") || "Su İzolyasiyası, XPS lövhələri, Texnonikol, İZOBOKS və digər izolyasiya məhsullarının rəsmi satışı."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/mehsullar" />
      </Helmet>

      {/* Grid effektləri */}
      <div className="xidmet-cyber-grid-pulse" aria-hidden="true"></div>
      <div className="xidmet-bg-fluid-orb xidmet-orb-heating" aria-hidden="true"></div>
      <div className="xidmet-bg-fluid-orb xidmet-orb-cooling" aria-hidden="true"></div>

      <div className="xidmet-future-container">
        <div className="xidmet-future-header">
          <div className="xidmet-cyber-badge">
            <span className="xidmet-pulse-dot" aria-hidden="true"></span>
            {t("104_system_architecture") || "İZOLYASİYA SİSTEMLƏRİ VƏ MƏHSULLAR"}
          </div>
          <h2 className="xidmet-future-title">{t('products')}</h2>
          <p className="xidmet-future-subtitle">{t('Homemehsullaraciqlama')}</p>
        </div>

        <Swiper
          spaceBetween={30}
          slidesPerView={3}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="xidmet-future-grid"
        >
          {Homesec2Data.map((item, index) => (
            <SwiperSlide key={item.id}>
              <a 
                href={item.href} 
                className="xidmet-future-card"
                aria-label={`${t("104_aria_product_link") || "Məhsula bax"}: ${t(item.title)}`}
              >
                <div className="xidmet-tech-bracket xidmet-bracket-tl" aria-hidden="true"></div>
                <div className="xidmet-tech-bracket xidmet-bracket-br" aria-hidden="true"></div>
                <span className="xidmet-card-index" aria-hidden="true">0{index + 1}</span>
                
                <div className="xidmet-future-card-content">
                  <div className="product-image-wrapper">
                    <img src={item.image} alt={t(item.title) || "Soçi MMC izolyasiya məhsulu"} />
                  </div>
                  <div className="xidmet-future-text-center">
                    <h3 className="xidmet-future-name">{t(item.title)}</h3>
                    <p className="xidmet-future-desc">{t(item.description)}</p>
                  </div>
                  <div className="xidmet-future-trigger">
                    <span className="xidmet-trigger-text">{t('discover')}</span>
                    <div className="xidmet-trigger-line-wrapper" aria-hidden="true">
                      <div className="xidmet-trigger-line"></div>
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}