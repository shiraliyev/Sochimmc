import React, { useState, useRef } from "react";
import "./Homesec4.css";

// Swiper komponentlərini və üslublarını import edirik
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

function Homesec4() {
  const [isPlaying, setIsPlaying] = useState(false);  // Səsin oynatılma vəziyyətini idarə edirik
  const audioRef = useRef(new Audio("/img/profbetonsesuzun.mp3"));  // MP3 faylını istədiyiniz yerdən daxil edin

  const toggleAudio = () => {
    if (isPlaying) {
      audioRef.current.pause();  // Səsi dayandırır
    } else {
      audioRef.current.play();  // Səsi oynadır
    }
    setIsPlaying(!isPlaying);  // Vəziyyəti dəyişdiririk
  };

  return (
    <div className="homesev4esasblok">
      <div className="homesec4blok1cireng">
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            className="wavePath"
            fill="#eae9e9"
            fillOpacity="1"
            d="M0,320L48,288C96,256,192,192,288,160C384,128,480,128,576,144C672,160,768,192,864,224C960,256,1056,288,1152,272C1248,256,1344,192,1392,160L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        speed={3000} // Keçiş sürətini tənzimləyir (1000ms = 1s)
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="homesec4masinsilindirblok" onClick={toggleAudio}>
            <img src="/img/profbetonmasin1.png" alt="Maşın 1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homesec4masinsilindirblok" onClick={toggleAudio}>
            <img src="/img/ekskvator.PNG" alt="Maşın 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homesec4masinsilindirblok" onClick={toggleAudio}>
            <img src="/img/masinsoon01.PNG" alt="Maşın 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homesec4masinsilindirblok" onClick={toggleAudio}>
            <img src="/img/masinsoon03.PNG" alt="Maşın 3" />
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className="homesec4masinsilindirblok" onClick={toggleAudio}>
            <img src="/img/mashinesasdaadi.PNG" alt="Maşın 3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="homesec4masinsilindirblok" onClick={toggleAudio}>
            <img src="/img/zisci001.PNG" alt="Maşın 3" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Homesec4;
