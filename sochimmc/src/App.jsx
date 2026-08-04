import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import './i18n';
import { useTranslation } from 'react-i18next';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Sertifkat from './Companents/Sertifkat/Sertifkat';

import Navbar from './Companents/Nav/Navbar';
import Appeal from './Companents/Appeal/Appeal';
import Footer from './Companents/Footer/Footer';
import Home from './Companents/Home/Home';
import About from './Companents/About/About';
import Contact from './Companents/Contact/Contact';
import NotFoundPage from './Companents/NotFoundPage/NotFoundPage';
import Preloader from "./Preloader/Preloader"; 

import İstilikvesesizolyasiyasi from './Companents/Mehsullar/İstilikvesesizolyasiyasi';
import Mayeizolyasiyaveaksesuarlar from './Companents/Mehsullar/Mayeizolyasiyaveaksesuarlar';
import BerkizolyasiyaXPS from './Companents/Mehsullar/BerkizolyasiyaXPS';
import Suizolyasiyasi from './Companents/Mehsullar/Suizolyasiyasi';
import Services01 from './Companents/Xidmetlerimiz/Services01';
import Services02 from './Companents/Xidmetlerimiz/Services02';
import Blog from './Companents/Blog/Blog';

function App() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(() => {
    const savedLanguage = localStorage.getItem('selectedLanguage');
    return savedLanguage || 'az';
  });

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage, i18n]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (loading) return <Preloader />;

  return (
    <>
      <Helmet>
        <title>SOCHİ MMC | Rəsmi ТЕХНОНИКОЛЬ İzolyasiya Sistemləri və Materialları</title>
        <meta 
          name="description" 
          content="SOCHİ MMC — Bakıda rəsmi ТЕХНОНИКОЛЬ brendinin su izolyasiyası, istilik və səs izolyasiyası, bərk XPS lövhələri, maye bitum və mastika məhsullarının topdan və pərakəndə satışı." 
        />
        <meta 
          name="keywords" 
          content="SOCHİ MMC, ТЕХНОНИКОЛЬ, Texnonikol Bakı, su izolyasiyası, istilik izolyasiyası, səs izolyasiyası, bərk izolyasiya, XPS lövhələri, maye bitum, mastika, dam örtükləri, hidroizolyasiya" 
        />
        <link rel="canonical" href="https://sochi.az" />

        <meta property="og:title" content="SOCHİ MMC | Rəsmi ТЕХНОНИКОЛЬ İzolyasiya Sistemləri" />
        <meta property="og:description" content="Təməl, dam və fasadlar üçün rəsmi ТЕХНОНИКОЛЬ izolyasiya məhsulları və peşəkar xidmətlər." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sochi.az" />
      </Helmet>

      <div className="global-grid-pulse"></div>
      <Navbar selectedLanguage={selectedLanguage} setSelectedLanguage={setSelectedLanguage} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appeal' element={<Appeal />} />
        <Route path='/istilikvesesizolyasiyasi' element={<İstilikvesesizolyasiyasi />} />
        <Route path='/mayeizolyasiyaveaksesuarlar' element={<Mayeizolyasiyaveaksesuarlar />} />
        <Route path='/berkizolyasiyaxps' element={<BerkizolyasiyaXPS />} />
        <Route path='/suizolyasiyasi' element={<Suizolyasiyasi />} />
        <Route path='/sertifkat' element={<Sertifkat />} />
        <Route path='/services01' element={<Services01 />} />
        <Route path='/services02' element={<Services02 />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;