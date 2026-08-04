import React from "react";
import { useTranslation } from "react-i18next";
import "./Preloader.css";

const Preloader = () => {
  const { t } = useTranslation();

  return (
    <div className="preloader-wrapper">
      <div className="preloader-content">
        {/* Günəş */}
        <svg id="sun" viewBox="0 0 10 10">
          <circle cx="5" cy="5" r="2" fill="#ff9900" />
          {[...Array(8)].map((_, i) => (
            <path key={i} fill="#ff9900" d="M5,1 L5,2.5" transform={`rotate(${i * 45} 5 5)`} stroke="#ff9900" strokeWidth="0.5" />
          ))}
        </svg>

        {/* Bulud */}
        <svg id="cloud" viewBox="0 0 10 10">
          <path d="M8.528,5.624H8.247c-0.085,0-0.156-0.068-0.156-0.154c0-0.694-0.563-1.257-1.257-1.257c-0.098,0-0.197,0.013-0.3,0.038C6.493,4.259,6.45,4.252,6.415,4.229C6.38,4.208,6.356,4.172,6.348,4.131C6.117,3.032,5.135,2.235,4.01,2.235c-1.252,0-2.297,0.979-2.379,2.23-0.004,0.056-0.039,0.108-0.093,0.13C1.076,4.793,0.776,5.249,0.776,5.752c0,0.693,0.564,1.257,1.257,1.257h6.495c0.383,0,0.695-0.31,0.695-0.692S8.911,5.624,8.528,5.624z" />
        </svg>

        {/* Yağış */}
        <div className="rain">
          {[...Array(10)].map((_, i) => <span key={i} className="drop"></span>)}
        </div>

        {/* Mətn hissəsi */}
        <div className="text-container">
          <div className="company-name">{t('SOCHİ_MMC1')}</div>
          <div className="status-text">{t('preloader.status')}</div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;