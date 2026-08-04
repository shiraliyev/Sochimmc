import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import "./css/About.css";
// Yolu öz layihənizdəki yerinə görə düzgün qoyduğunuzdan əmin olun
import { stats, features } from "../../Data/AboutData/AboutData";

// LordIcon komponenti (Primary göy, Secondary narıncı tonlarda)
const LordIcon = ({ src, colors, delay }) => (
    <lord-icon
        src={src}
        trigger="loop"
        delay={delay || "2000"}
        colors={colors || "primary:#0284c7,secondary:#d97706"}
        style={{ width: "60px", height: "60px" }}
        aria-hidden="true"
    ></lord-icon>
);

export default function About() {
    const { t } = useTranslation();
    const [isHovered, setIsHovered] = useState(false);
    
    // Qar dənəcikləri üçün massiv
    const snowflakes = Array.from({ length: 50 });

    return (
        <section className="about-future-canvas" aria-label={t("108_section_arialabel") || "Haqqımızda və İzolyasiya Sistemləri | SOCHİ MMC"}>
            <Helmet>
                <title>{t("108_seo_title") || "Haqqımızda | Su, İstilik və Səs İzolyasiyası | SOCHİ MMC"}</title>
                <meta 
                    name="description" 
                    content={t("108_seo_description") || "Soçi MMC haqqında məlumat. Su İzolyasiyası, XPS lövhələri, Texnonikol Carbon ECO, İZOBOKS daş yunları, Texnofas, Bikrost və Maye Bitum məhsulları."} 
                />
                <meta name="keywords" content={t("108_seo_keywords") || "Soçi MMC haqqında, Su İzolyasiyası, İstilik və Səs İzolyasiyası, XPS lövhələri, Texnonikol Carbon ECO, İZOBOKS, Texnofas, Bikrost, Unifleks, Maye Bitum və Mastikalar"} />
                <link rel="canonical" href="https://sochi.az/haqqimizda" />

                <meta property="og:title" content={t("108_seo_title") || "Haqqımızda | Su, İstilik və Səs İzolyasiyası | SOCHİ MMC"} />
                <meta property="og:description" content={t("108_seo_description") || "Soçi MMC haqqında məlumat. Su və istilik izolyasiyası materialları, Texnonikol, XPS lövhələri və sistemləri."} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://sochi.az/haqqimizda" />
            </Helmet>

            <div className="about-bg-fluid-orb about-orb-alpha" aria-hidden="true"></div>
            <div className="about-bg-fluid-orb about-orb-beta" aria-hidden="true"></div>
            <div className="about-cyber-grid-static" aria-hidden="true"></div>

            <div className="about-content-wrapper">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} 
                    whileInView={{ opacity: 1, y: 0 }} 
                    transition={{ duration: 0.8 }} 
                    className="about-header-zone"
                >
                    <div className="about-cyber-badge">
                        <span className="about-pulse-dot" aria-hidden="true"></span> {t("about.badge")}
                    </div>
                    <h2 className="about-main-title">{t("about.mainTitle")}</h2>
                    <p className="about-lead-text">{t("about.leadText")}</p>
                </motion.div>

                <div className="about-features-grid">
                    {stats.map((stat) => (
                        <motion.div key={stat.id} whileHover={{ y: -15, scale: 1.02 }} className="about-stat-card">
                            {/* Burada istəsəniz fərqli rənglər də verə bilərsiniz */}
                            <LordIcon src={stat.icon} colors="primary:#38bdf8,secondary:#d97706" />
                            <h3>{stat.value}</h3>
                            <p>{t(stat.label)}</p>
                        </motion.div>
                    ))}
                </div>

                <div className="about-extra-info-section">
                    <div className="about-extra-text">
                        <h3>{t("about.simulatorTitle")}</h3>
                        <p>{t("about.simulatorDesc")}</p>
                    </div>
                    <div className="about-visual-column">
                        <div 
                            className="climate-simulator-container"
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            <AnimatePresence mode="wait">
                                {!isHovered ? (
                                    <motion.div
                                        key="sun"
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 1.2 }}
                                        transition={{ duration: 0.5 }}
                                        className="climate-mode sun-mode"
                                    >
                                        <div className="sun-core"><div className="sun-rays"></div></div>
                                        <div className="heat-waves"></div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="snow"
                                        initial={{ opacity: 0, scale: 1.2 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.8 }}
                                        transition={{ duration: 0.5 }}
                                        className="climate-mode snow-mode"
                                    >
                                        <div className="snow-core"><div className="frost-pattern"></div></div>
                                        <div className="snowflakes-container">
                                            {snowflakes.map((_, i) => (
                                                <motion.div
                                                    key={i}
                                                    className="snowflake"
                                                    animate={{ y: ["0vh", "100vh"], x: ["0vw", `${Math.random() * 20 - 10}vw`] }}
                                                    transition={{ duration: Math.random() * 3 + 2, repeat: Infinity, delay: Math.random() * 2, ease: "linear" }}
                                                    style={{
                                                        left: `${Math.random() * 100}%`,
                                                        opacity: Math.random() * 0.7 + 0.3,
                                                        width: `${Math.random() * 8 + 4}px`,
                                                        height: `${Math.random() * 8 + 4}px`,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

                <div className="about-mission-section">
                    <div className="about-text-column">
                        <h3 className="about-sub-title">{t("about.whyUsTitle")}</h3>
                        <p>{t("about.whyUsDesc")}</p>
                        <div className="about-feature-list">
                            {features.map((item, idx) => (
                                <div key={idx} className="about-list-item">
                                    <LordIcon src={item.icon} colors="primary:#0284c7,secondary:#d97706" delay="1000" />
                                    <span>{t(item.titleKey)}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="about-visual-column">
                        <div className="hvac-atmosphere-core">
                            <div className="hvac-heat-layer"></div>
                            <div className="hvac-orb">
                                <div className="hvac-orb-inner"></div>
                                <div className="hvac-orb-glow"></div>
                            </div>
                            <div className="hvac-flow-ring ring-1"></div>
                            <div className="hvac-flow-ring ring-2"></div>
                            <div className="hvac-particles"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}