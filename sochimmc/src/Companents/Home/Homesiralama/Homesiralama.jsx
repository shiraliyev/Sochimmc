import React, { useEffect, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { MdBuild, MdPayment, MdDoneOutline } from "react-icons/md";
import "./Homesiralama.css";

import HSirBasData from "../../../Data/Homedata/HSiralama/HSirBasData";
import HSirCardData from "../../../Data/Homedata/HSiralama/HSirCardData";
import { useTranslation } from "react-i18next";

const iconMap = {
  phone: <FaPhoneAlt />,
  build: <MdBuild />,
  payment: <MdPayment />,
  done: <MdDoneOutline />,
};

export default function Homesiralama() {
  const { t } = useTranslation();
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;

    // Mobil və planşet ölçüləri üçün scroll aktivləşdirilir
    if (!container || window.innerWidth > 1024) return;

    let scrollAmount = 1;
    let direction = 1;

    const autoScroll = () => {
      if (!container) return;

      container.scrollLeft += scrollAmount * direction;

      const maxScroll = container.scrollWidth - container.clientWidth;

      // Daha sabit scroll üçün "yumşaq" yoxlamalar
      if (container.scrollLeft >= maxScroll - 1) {
        direction = -1;
      } else if (container.scrollLeft <= 1) {
        direction = 1;
      }
    };

    const interval = setInterval(autoScroll, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="homesec0222bashliq">
        <h2>{t(HSirBasData.basliq)}</h2>
        <div className="underline" />
      </div>

      <div className="steps-container" ref={scrollRef}>
        {HSirCardData.map((step, i) => (
          <div key={i} className="step-item">
            <div className="circle-number">{i + 1}</div>
            <div className="icon">{iconMap[step.icon]}</div>
            <h3 className="title">{t(step.title)}</h3>
            <p className="desc">{t(step.desc)}</p>
            {i < HSirCardData.length - 1 && <div className="connector"></div>}
          </div>
        ))}
      </div>
    </div>
  );
}
