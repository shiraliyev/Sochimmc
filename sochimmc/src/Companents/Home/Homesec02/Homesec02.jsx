import React, { useEffect } from "react";
import './Homesec02.css';
import Hsec02BasliqData from "../../../Data/Homedata/Hsec02/Hsec02BasliqData";
import Hsec02CardData from "../../../Data/Homedata/Hsec02/Hsec02CardData";
import { useTranslation } from "react-i18next";
import Homelogoblok from "./../Homelogoblok/Homelogoblok";

function Homesec02() {
  const { t } = useTranslation();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.lordicon.com/lusqsztk.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const renderIcon = (icon) => {
    const icons = {
      "fast-connection": "/lordicons/vwwysvjs.json",
      "support-agent": "/lordicons/nnbhwnej.json",
      "affordable-prices": "/lordicons/qhviklyi.json",
      "professional-team": "/lordicons/zpxybbhl.json"
    };

    return (
      <lord-icon
        src={icons[icon]}
        trigger="loop"
        colors="primary:#121331,secondary:#08a88a"
        style={{ width: "64px", height: "64px" }}
      ></lord-icon>
    );
  };

  return (
    <div className="homesec02-wrapper">
        <Homelogoblok />

      <div className="homesec0222bashliq">
        <h2>{t(Hsec02BasliqData.titleKey)}</h2>
        <div className="underline" />
      </div>

      <div className="homesec02-grid">
        {Hsec02CardData.map((block, index) => (
          <div className={`homesec02-card card-${index + 1}`} key={index}>
            <div className="icon-section">{renderIcon(block.icon)}</div>
            <div className="text-section">
              <h2>{t(block.titleKey)}</h2>
              <p>{t(block.descKey)}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Homesec02;
