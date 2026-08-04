import React from 'react';
import './css/footer.css';
import { useTranslation } from 'react-i18next';
import FooterData from '../../Data/Footer/FooterData';
import { FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer-premium-pro" role="contentinfo" aria-label={t("121_footer_aria") || "SOCHİ MMC Rəsmi İzolyasiya Sistemləri Footer"}>
      <div className="footer-glow-top" aria-hidden="true"></div>
      
      <div className="footer-container">
        <div className="footer-col-main" itemScope itemType="https://schema.org/Organization">
          <a href={FooterData.logo.href} aria-label={t("121_logo_aria") || "SOCHİ MMC Ana səhifə - ТЕХНОНИКОЛЬ"}>
            <img src={FooterData.logo.src} alt="SOCHİ MMC ТЕХНОНИКОЛЬ Logo" className="footer-logo" width="120" height="50" itemProp="logo" />
          </a>
          <p className="footer-bio" itemProp="description">
            {t(FooterData.logo.aboutKey) || t("footertexnonikol")}
          </p>
          <div className="social-links" aria-label={t("121_social_aria") || "Sosial şəbəkə hesablarımız"}>
            <a href={FooterData.socialLinks.instagram} className="social-icon" target="_blank" rel="noreferrer" aria-label="SOCHİ MMC Instagram səhifəsi"><FaInstagram /></a>
            <a href={FooterData.socialLinks.tiktok} className="social-icon" target="_blank" rel="noreferrer" aria-label="SOCHİ MMC TikTok səhifəsi"><FaTiktok /></a>
          </div>
        </div>

        <div className="footer-col" role="navigation" aria-label={t("121_products_nav") || "İzolyasiya məhsulları menyusu"}>
          <h5>{t('footer_products_title')}</h5>
          <ul>
            {FooterData.products.map(item => (
              <li key={item.id}>
                <a href={item.href} aria-label={`${t(item.labelKey)} - ТЕХНОНИКОЛЬ`}>{t(item.labelKey)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col" role="navigation" aria-label={t("121_services_nav") || "İzolyasiya xidmətləri menyusu"}>
          <h5>{t('footer_services_title')}</h5>
          <ul>
            {FooterData.services.map(item => (
              <li key={item.id}>
                <a href={item.href} aria-label={`${t(item.labelKey)} - SOCHİ MMC`}>{t(item.labelKey)}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col-contact" itemScope itemType="https://schema.org/LocalBusiness">
          <meta itemProp="name" content="SOCHİ MMC" />
          <meta itemProp="address" content="Bakı, Azərbaycan" />
          <h5>{t('footer_contact_title')}</h5>
          <div className="contact-details">
            <a href={`https://wa.me/${FooterData.contactData.whatsapp.replace(/\s/g, '')}`} className="contact-item" target="_blank" rel="noreferrer" aria-label="WhatsApp əlaqə xətti">
              <FaWhatsapp /> <span itemProp="telephone">{FooterData.contactData.whatsapp}</span>
            </a>
            <a href={`mailto:${FooterData.contactData.email}`} className="contact-item" aria-label="E-poçt ünvanımız">
              <FaEnvelope /> <span itemProp="email">{FooterData.contactData.email}</span>
            </a>
            {FooterData.contactData.phones.map((phone, idx) => (
              <a key={idx} href={`tel:${phone.replace(/\s/g, '')}`} className="contact-item" aria-label="Əlaqə nömrəsi">
                <FaPhone /> <span itemProp="telephone">{phone}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-meta">
        <p>&copy; 2026 {FooterData.companyName}. {t('footer_copyright')}</p>
        <p>
          Developed by{' '}
          <a href={FooterData.gtNetLink} target="_blank" rel="noreferrer" style={{color: '#fff', textDecoration: 'none'}}>
            {FooterData.gtNetName}
          </a>{' '}
          &{' '}
          <a href={FooterData.developerLink} target="_blank" rel="noreferrer" style={{color: '#fff', textDecoration: 'none'}}>
            {FooterData.developerName}
          </a>{' '}
          – {FooterData.authorName}
        </p>
      </div>
    </footer>
  );
}

export default Footer;