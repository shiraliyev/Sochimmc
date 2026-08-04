import React, { useEffect, useRef } from "react";
import { useTranslation } from 'react-i18next';
import '../../Xidmetlerimiz/Xidmetler111.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Homesec1Data from "../../../Data/Homedata/Hsec1/Hsec1"; // düz yol

function Homesec1() {
  const { t } = useTranslation();
  const blocksRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const elements = document.querySelectorAll('.profbetonxidmetler11');

      elements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        if (position < triggerHeight && window.scrollY > 50) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <main>
        <div className="designmain">
          <div className="designmainsec1">
            <div className="designmainsec1basliq">
              <h2>{t('services')}</h2>
              <hr />
            </div>
            <div className="profbetonxidmetler11" ref={(el) => blocksRef.current.push(el)}>
              <Swiper
                spaceBetween={30}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                navigation={true}
                speed={4000}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={{
                  640: { slidesPerView: 2, spaceBetween: 20 },
                  768: { slidesPerView: 2, spaceBetween: 30 },
                  1024: { slidesPerView: 3, spaceBetween: 40 },
                }}
              >
                {Homesec1Data.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <a href={slide.href} className="profbetonxidmetlercardsw">
                      <img
                        src={slide.image}
                        alt={slide.title}
                        className="profbetonxidmetlercardimg"
                      />
                      <div className="profbetonxidmetlercardtext">
                        <h3 className="mehsulh333" style={{ color: 'white' }}>{t(slide.title)}</h3>
                        <p>{t(slide.description)}</p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Homesec1;
