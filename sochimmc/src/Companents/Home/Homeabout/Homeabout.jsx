import React from 'react';
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import HomeAboutData from "../../../Data/Homedata/HomeAboutData/HomeAboutData";
import "./Homeabout.css";

const LordIcon = ({ src, colors, delay }) => (
    <lord-icon
        src={src}
        trigger="loop"
        delay={delay || "2000"}
        colors={colors || "primary:#0e52f2,secondary:#d97706"}
        style={{ width: "60px", height: "60px" }}
    ></lord-icon>
);

export default function Homeabout() {
    const { t } = useTranslation();

    return (
        <section className="about-future-canvas">
            <div className="about-bg-fluid-orb about-orb-alpha"></div>
            <div className="about-bg-fluid-orb about-orb-beta"></div>
            <div className="about-cyber-grid-static"></div>

            <div className="about-content-wrapper">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="about-header-zone">
                    <div className="about-cyber-badge"><span className="about-pulse-dot"></span> {t(HomeAboutData.badge)}</div>
                    <h2 className="about-main-title">{t(HomeAboutData.title)}</h2>
                    <p className="about-lead-text">{t(HomeAboutData.leadText)}</p>
                </motion.div>

                <div className="about-features-grid">
                    {HomeAboutData.stats.map((stat) => (
                        <motion.div key={stat.id} whileHover={{ y: -15, scale: 1.02 }} className="about-stat-card">
                            <LordIcon src={stat.icon} />
                            <h3>{stat.value}</h3>
                            <p>{t(stat.label)}</p>
                            <div className="about-hover-line"></div>
                        </motion.div>
                    ))}
                </div>

                <div className="about-mission-section">
                    <div className="about-text-column">
                        <h3 className="about-sub-title">{t(HomeAboutData.whyUsTitle)}</h3>
                        <p>{t(HomeAboutData.whyUsDesc)}</p>
                        <div className="about-feature-list">
                            {HomeAboutData.features.map((item) => (
                                <div key={item.id} className="about-list-item">
                                    <LordIcon src={item.icon} colors={item.colors || "primary:#0e52f2,secondary:#d97706"} delay="1000" />
                                    <span>{t(item.title)}</span>
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