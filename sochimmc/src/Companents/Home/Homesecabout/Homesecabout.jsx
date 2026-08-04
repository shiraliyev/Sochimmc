import './Homesecabout.css';
import React, { useState, useRef } from "react";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import HomeAboutData from "../../../Data/Homedata/HomeAboutData";

function Homesecabout() {
    const [activeModal, setActiveModal] = useState(null);
    const { t } = useTranslation();
    const blocksRef = useRef([]);
    const closeModal = () => setActiveModal(null);

    return (
        <section className="sec3" aria-label={t("102_section_arialabel") || "Soçi MMC Haqqımızda və Şirkət Məlumatları"}>
            <Helmet>
                {/* Maksimum Gücləndirilmiş SEO Metatagları */}
                <title>{t("102_seo_title") || "Haqqımızda | SOCHİ MMC - Peşəkar İzolyasiya Sistemləri"}</title>
                <meta 
                    name="description" 
                    content={t("102_seo_description") || "Soçi MMC olaraq illərin təcrübəsi ilə sənaye və mülki tikililər üçün ən keyfiyyətli su, istilik və səs izolyasiyası materialları təqdim edirik."} 
                />
                <meta name="keywords" content={t("102_seo_keywords") || "Soçi MMC haqqımızda, izolyasiya şirkəti Bakı, su izolyasiyası təchizatçısı, tikinti materialları MMC"} />
                <link rel="canonical" href="https://sochi.az/about" />

                {/* Open Graph / Sosial Media Optimizasiyası */}
                <meta property="og:title" content={t("102_seo_title") || "Haqqımızda | SOCHİ MMC"} />
                <meta property="og:description" content={t("102_seo_description") || "Soçi MMC olaraq peşəkar izolyasiya sistemləri təqdim edirik."} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sochi.az/about" />
            </Helmet>

            <div className="sec3div1">
                <span className="sec3-badge" aria-hidden="true">{t(HomeAboutData.badge)}</span>
                <h2 className="sec3-title">{t(HomeAboutData.title)}</h2>
                <p className="sec3-lead">{t(HomeAboutData.leadText)}</p>
                
                <div className="sec3-info-box">
                    <h3 className="sec3-info-title">{t(HomeAboutData.whyUsTitle)}</h3>
                    <p>{t(HomeAboutData.whyUsDesc)}</p>
                </div>

                <a href="/about" aria-label={t("102_aria_moreread") || "Soçi MMC haqqında daha ətraflı məlumat əldə edin"}>
                    <button type="button">{t("102_btn_more") || "Daha Ətraflı"}</button>
                </a>
            </div>
        </section>
    );
}

export default Homesecabout;