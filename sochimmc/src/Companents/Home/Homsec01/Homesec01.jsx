import React from "react";
import { useTranslation } from 'react-i18next';
import { Helmet } from "react-helmet-async";
import './Homesec01.css';
import Hsec01Data from "../../../Data/Homedata/Hsec01/Hsec01Data";

function Homesec01() {
  const { t } = useTranslation();

  return (
    <main className="homesec-container">
      <Helmet>
        {/* Maksimum Gücləndirilmiş Səhifə SEO Optimizasiyası */}
        <title>{t("103_seo_title") || "SOCHİ MMC | İzolyasiya Sistemləri və Texnologiyaları"}</title>
        <meta 
          name="description" 
          content={t("103_seo_description") || "Soçi MMC müasir izolyasiya sistemləri, keyfiyyətli materiallar və peşəkar tətbiq həlləri ilə xidmətinizdədir."} 
        />
        <meta name="keywords" content={t("103_seo_keywords") || "izolyasiya texnologiyaları, su izolyasiyası, istilik sistemləri, Soçi MMC məhsullar"} />
        <link rel="canonical" href="https://sochi.az/" />

        {/* Sosial Media və Open Graph Optimizasiyası */}
        <meta property="og:title" content={t("103_seo_title") || "SOCHİ MMC | İzolyasiya Sistemləri və Texnologiyaları"} />
        <meta property="og:description" content={t("103_seo_description") || "Soçi MMC müasir izolyasiya sistemləri və peşəkar tətbiq həlləri təqdim edir."} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az/" />
      </Helmet>

      {/* Section 1 */}
      <section className="homesec-grid" aria-label={t("103_section1_arialabel") || "Soçi MMC İzolyasiya Texnologiyaları Bölməsi 1"}>
        <div className="homesec-text">
          <h2 className="title squada-one-regular">
            {t(Hsec01Data.section1.title)}
          </h2>
          <h3 className="subtitle squada-one-regular">
            {t(Hsec01Data.section1.subtitle)}
          </h3>
          <h5 className="description squada-one-regular">
            {t(Hsec01Data.section1.description)}
          </h5>
        </div>
        <div className="homesec-image">
          <img src={Hsec01Data.section1.image} alt={t("103_img_alt_1") || "Soçi MMC izolyasiya sistemləri və vizual təqdimat 1"} />
        </div>
      </section>

      {/* Section 2 */}
      <section className="homesec-grid reverse" aria-label={t("103_section2_arialabel") || "Soçi MMC İzolyasiya Texnologiyaları Bölməsi 2"}>
        <div className="homesec-image">
          <img src={Hsec01Data.section2.image} alt={t("103_img_alt_2") || "Soçi MMC izolyasiya sistemləri və vizual təqdimat 2"} />
        </div>
        <div className="homesec-text">
          <h2 className="title squada-one-regular">
            {t(Hsec01Data.section2.title)}
          </h2>
          <h3 className="subtitle squada-one-regular">
            {t(Hsec01Data.section2.subtitle)}
          </h3>
          <h5 className="description squada-one-regular">
            {t(Hsec01Data.section2.description)}
          </h5>
        </div>
      </section>
    </main>
  );
}

export default Homesec01;