import React from "react";
import { useTranslation } from "react-i18next";
import { HomeblogData } from "../../Data/Homedata/HomeblogData/HomeblogData";
import "./Homeblog.css";

export default function Blog() {
  const { t } = useTranslation();

  const handleMouseMove = (e) => {
    const grid = e.currentTarget.querySelector('.blog-cyber-grid-pulse');
    if (grid) {
      const rect = e.currentTarget.getBoundingClientRect();
      grid.style.setProperty('--x', `${e.clientX - rect.left}px`);
      grid.style.setProperty('--y', `${e.clientY - rect.top}px`);
    }
  };

  return (
    <section className="blog-future-canvas" onMouseMove={handleMouseMove}>
      <div className="blog-bg-fluid-orb blog-orb-heating"></div>
      <div className="blog-bg-fluid-orb blog-orb-cooling"></div>
      <div className="blog-cyber-grid-pulse"></div>

      <div className="blog-future-container">
        <div className="blog-future-header">
          <div className="blog-cyber-badge">
            <span className="blog-pulse-dot"></span>
            {t("blog.badge")}
          </div>
          <h2 className="blog-future-title">{t("blog.mainTitle")}</h2>
          <p className="blog-future-subtitle">{t("blog.subtitle")}</p>
        </div>

        <div className="blog-future-grid">
          {HomeblogData.map((post) => (
            <div key={post.id} className="blog-future-card">
              <div className="blog-card-image">
                <img src={post.img} alt={t(post.titleKey)} />
              </div>
              <div className="blog-tech-bracket blog-bracket-tl"></div>
              <div className="blog-tech-bracket blog-bracket-br"></div>
              
              <div className="blog-future-card-content">
                <h3 className="blog-future-name">{t(post.titleKey)}</h3>
                <p className="blog-future-desc">{t(post.descKey)}</p>
                
                <div className="blog-future-trigger">
                  <span className="blog-trigger-text">{t("blog.triggerText")}</span>
                  <div className="blog-trigger-line-wrapper">
                    <div className="blog-trigger-line"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}