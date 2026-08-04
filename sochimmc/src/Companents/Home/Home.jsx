import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import './css/Home.css';
import Homeabout from "./Homeabout/Homeabout";
import Homesec03esas from "./Homesec03esas/Homesec03esas";
import Homesec1 from "./Homesec1/Homesec1";
import Homesec2 from "./Homesec2/Homesec2";
import Homeservis from "./Homeservis/Homeservis";
import HomePartniyor from "./Partniyor/HomePartniyor";
import Homeblog from "./Homeblog/Homeblog";
import HomeReferans from "./HomeReferans/HomeReferans";
import Homewhyus from "./Homeniyebiz/Homewhyus";
import HomeContact from "./HomeContact/HomeContact";
import Homesec01 from "./Homsec01/Homesec01";

function Home() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const blocksRef = useRef([]);

  const closeModal = () => setActiveModal(null);

  // Sadə və təmiz i18n SEO tənzimləməsi
  useEffect(() => {
    document.title = t('home_seo_title');

    const metaDescription = document.querySelector("meta[name='description']");
    if (metaDescription) {
      metaDescription.setAttribute("content", t('home_seo_desc'));
    }
  }, [t]);

  // Scroll effekti (Xidmətlər bloku üçün)
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight * 0.8;
      const element = document.querySelector('.profbetonxidmetler1');
      
      if (element) {
        const position = element.getBoundingClientRect().top;
        if (position < triggerHeight && window.scrollY > 50) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Blokların animasiya keçidləri
  useEffect(() => {
    const handleScrollAnim = () => {
      const screenPosition = window.innerHeight / 1.3;
      blocksRef.current.forEach((block, index) => {
        if (block) {
          const blockPosition = block.getBoundingClientRect().top;
          if (blockPosition < screenPosition) {
            setTimeout(() => {
              block.classList.add("visible");
            }, index * 200);
          } else {
            setTimeout(() => {
              block.classList.remove("visible");
            }, index * 200);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScrollAnim);
    return () => {
      window.removeEventListener("scroll", handleScrollAnim);
    };
  }, []);

  return (
    <div>
      <main>
        <div className="homeswiperblok01">
          <Homesec03esas />
        </div>

        <div className="tariflervesiralamablok">
          <Homeservis />
          <Homeabout />
          <Homesec01 />
          <Homesec2 />
          <HomeContact />
          <Homewhyus />
          <HomePartniyor />
          <HomeReferans />
          <Homeblog />
        </div>
      </main>
    </div>
  );
}

export default Home;