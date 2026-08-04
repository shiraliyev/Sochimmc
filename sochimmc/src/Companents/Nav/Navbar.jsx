import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { FaPhoneAlt, FaInstagram, FaTiktok } from 'react-icons/fa';
import './css/navbar.css';

function NavBar() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('selectedLanguage', lng);
  };

  const currentLang = localStorage.getItem('selectedLanguage') || 'az';

  return (
    <header className="site-header" role="banner">
      <div className="top-bar">
        <Container className="d-flex justify-content-between align-items-center">
          <a 
            href="/" 
            className="brand-wrapper" 
            style={{ textDecoration: 'none' }}
            aria-label={t("117_brand_aria") || "SOCHİ MMC - Rəsmi ТЕХНОНИКОЛЬ Məhsullarının Satışı"}
          >
            <img src="/img/sochilogo.png" alt="SOCHİ MMC Logo" className="logo-img" width="50" height="50" />
            <div className="brand-text-container">
              <div className="brand-main">
                <span className="brand-light">SOCHİ</span>
                <span className="brand-bold">MMC</span>
              </div>
              <span className="brand-sub">ТЕХНОНИКОЛЬ</span>
            </div>
          </a>
          
          <div className="top-bar-right">
            <a 
              href="tel:+994559770101" 
              className="contact-premium"
              aria-label={t("117_phone_aria") || "Bizə zəng edin: (+994) 55 977 01 01"}
            >
              <span className="phone-icon-box" aria-hidden="true"><FaPhoneAlt /></span>
              <span className="phone-number">(+994) 55 977 01 01</span>
            </a>
            
            <div className="lang-and-logo">
              <div 
                className="lang-switcher"
                role="toolbar"
                aria-label={t("117_lang_toolbar") || "Dil seçimi paneli"}
              >
                <span 
                  className={currentLang === 'az' ? 'active' : ''} 
                  onClick={() => changeLanguage('az')}
                  role="button"
                  tabIndex={0}
                  aria-label="Azərbaycan dilinə keçid"
                >
                  AZ
                </span>
                <span>|</span>
                <span 
                  className={currentLang === 'en' ? 'active' : ''} 
                  onClick={() => changeLanguage('en')}
                  role="button"
                  tabIndex={0}
                  aria-label="İngilis dilinə keçid"
                >
                  EN
                </span>
                <span>|</span>
                <span 
                  className={currentLang === 'ru' ? 'active' : ''} 
                  onClick={() => changeLanguage('ru')}
                  role="button"
                  tabIndex={0}
                  aria-label="Rus dilinə keçid"
                >
                  RU
                </span>
              </div>

              <a 
                href="https://www.tn.ru/" 
                target="_blank" 
                rel="noreferrer" 
                className="top-bar-external-logo"
                aria-label={t("117_tn_aria") || "Rəsmi ТЕХНОНИКОЛЬ veb-saytına keçid"}
              >
                <img src="/img/texno02logo.jpg" alt="ТЕХНОНИКОЛЬ rəsmi tərəfdaş" />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Navbar expand="lg" className="main-navbar" variant="dark" aria-label={t("117_nav_aria") || "Əsas Naviqasiya Menyusu"}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" aria-label={t("117_menu_toggle") || "Menyunu aç/bağla"} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" role="navigation">
              <Nav.Link href="/" aria-label={t("117_home_aria") || "Ana səhifə - ТЕХНОНИКОЛЬ məhsulları"}>{t('home')}</Nav.Link>
              <Nav.Link href="/about" aria-label={t("117_about_aria") || "Haqqımızda - SOCHİ MMC"}>{t('about1')}</Nav.Link>
              
              <NavDropdown title={t('products')} id="products-nav-dropdown" aria-label={t("117_products_aria") || "ТЕХНОНИКОЛЬ məhsul kataloqu"}>
                <NavDropdown.Item href="/suizolyasiyasi">{t('suizolyasiya')}</NavDropdown.Item>
                <NavDropdown.Item href="/istilikvesesizolyasiyasi">{t('istilik_sesizolyasiya')}</NavDropdown.Item>
                <NavDropdown.Item href="/berkizolyasiyaxps">{t('berkizolyasiya')}</NavDropdown.Item>
                <NavDropdown.Item href="/mayeizolyasiyaveaksesuarlar">{t('mayeizolyasiya')}</NavDropdown.Item>
              </NavDropdown>

              <NavDropdown title={t('services')} id="services-nav-dropdown" aria-label={t("117_services_aria") || "İzolyasiya xidmətləri"}>
                <NavDropdown.Item href="/services01">{t('services01')}</NavDropdown.Item>
                <NavDropdown.Item href="/services02">{t('services02')}</NavDropdown.Item>
              </NavDropdown>
              
              <Nav.Link href="/contact" aria-label={t("117_contact_aria") || "Əlaqə məlumatları"}>{t('contact')}</Nav.Link>
              <Nav.Link href="/sertifkat" aria-label={t("117_cert_aria") || "ТЕХНОНИКОЛЬ keyfiyyət sertifikatları"}>{t('sertifikatlar')}</Nav.Link>
            </Nav>

            <div className="social-icons" aria-label={t("117_social_aria") || "Sosial şəbəkə səhifələrimiz"}>
              <a href="https://www.instagram.com/sochi_mmc?igsh=MjdleHdtMzUzZ3Fv&utm_source=qr" target="_blank" rel="noreferrer" aria-label="SOCHİ MMC Instagram səhifəsi"><FaInstagram /></a>
              <a href="https://www.tiktok.com/@soci.mmc?_t=ZS-8zRkTK8nRej&_r=1" target="_blank" rel="noreferrer" aria-label="SOCHİ MMC TikTok səhifəsi"><FaTiktok /></a>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavBar;