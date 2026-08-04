import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, FreeMode } from "swiper/modules";
import { HomeReferansData } from "../../../Data/Homedata/HomeReferansData/HomeReferansData";

// Swiper stilləri
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./HomeReferans.css";

export default function HomeReferans() {
  const { t } = useTranslation();

  return (
    <section className="ref-future-canvas">
      {/* Arxa plan işıq süzgəcləri */}
      <div className="ref-bg-glow glow-1"></div>
      <div className="ref-bg-glow glow-2"></div>

      <div className="ref-future-container">
        <div className="ref-future-header">
          <div className="ref-cyber-badge">
            <span className="ref-pulse-dot"></span>
            {t("L_references.badge", "TƏRƏFDAŞLAR")}
          </div>
          <h2 className="ref-future-title">{t("L_references.mainTitle")}</h2>
          <p className="ref-future-subtitle">{t("L_references.subtitle")}</p>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, FreeMode]}
          spaceBetween={24}
          slidesPerView={1}
          loop={true}
          freeMode={{
            enabled: true,
            strict: false,
          }}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          className="ref-swiper-container"
        >
          {HomeReferansData.map((ref) => (
            <SwiperSlide key={ref.id}>
              <div className="ref-future-card">
                <div className="ref-tech-bracket ref-bracket-tl"></div>
                <div className="ref-tech-bracket ref-bracket-br"></div>
                
                <div className="ref-logo-container">
                  <img src={ref.logo} alt={ref.name} className="ref-logo-img" />
                </div>
                
                <div className="ref-footer-bar">
                  <h4 className="ref-company-name">{ref.name}</h4>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}