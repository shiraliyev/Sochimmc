import React from "react";
import { useTranslation } from 'react-i18next';
import './../css/Home.css';
import './Homesec3l.css';
import { Homesec3lData } from './../../../Data/Homesec3lData'; // Data səhifəsini import edirik

// Swiper komponentlərini və üslublarını import edirik
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

function Homesec3l() {
  const { t } = useTranslation();

  return (
    <div>
      <main>
        <div className="designmain">
          <div className="designmainsec1">
            <div className="designmainsec1basliq">
              <h2>{t('layiheler')}</h2>
              <hr />
            </div>
            <div className={`profbetonxidmetler11lay`}>
              <Swiper
                spaceBetween={10}
                centeredSlides={false}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                speed={4000}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiperlay"
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                  },
                }}
              >
                {Homesec3lData.map((company, index) => (
                  <SwiperSlide key={index}>
                    <div className="companyCardlay">
                      <img
                        src={company.imgSrc}
                        alt={company.alt}
                        className="companyCardLogolay"
                        style={{ borderRadius: '0', boxShadow: 'none' }} // Çərçivəsiz və kölgəsiz
                      />
                      <h3 className="companyCardNamelay" style={{ marginTop: '10px', textAlign: 'center' }}>
                        {company.name}
                      </h3>
                    </div>
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

export default Homesec3l;
