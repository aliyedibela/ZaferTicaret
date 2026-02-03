import React from 'react';
import './HomeContent.css';
import { FaSeedling, FaTractor, FaTruck, FaAward, FaPhoneVolume, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const HomeContent = () => {
  return (
    <div className="home-content">
      <section className="section-padding info-section">
        <div className="container">
          <div className="section-header">
            <span className="sub-title">NE İHTİYACIN VAR?</span>
            <h2>Ürün Gruplarımız</h2>
            <div className="line"></div>
          </div>

          <div className="card-grid">
            <Link to="/urunler/yem" className="info-card">
              <div className="icon-wrapper">
                <FaTractor />
              </div>
              <h3>Yem Grubu</h3>
              <p>Büyükbaş ve küçükbaş hayvanlarınız için yüksek proteinli, verim artıran besi ve süt yemleri.</p>
              <span className="card-link">İncele <FaArrowRight /></span>
            </Link>
            <Link to="/urunler/tohum" className="info-card">
              <div className="icon-wrapper">
                <FaSeedling />
              </div>
              <h3>Sertifikalı Tohum</h3>
              <p>Bölge iklimine uygun, hastalıklara dayanıklı buğday, arpa ve yem bitkisi tohumları.</p>
              <span className="card-link">İncele <FaArrowRight /></span>
            </Link>
            <Link to="/urunler/gubre" className="info-card">
              <div className="icon-wrapper">
                <FaLeaf />
              </div>
              <h3>Gübre Çeşitleri</h3>
              <p>Toprağınızın verimini artıracak taban ve üst gübre çeşitleri ile hasadınız bol olsun.</p>
              <span className="card-link">İncele <FaArrowRight /></span>
            </Link>
          </div>
        </div>
      </section>
      <section className="features-strip">
        <div className="container flex-features">
          
          <div className="feature-item">
            <FaAward className="f-icon"/>
            <div className="f-text">
              <h4>50+ Yıllık Tecrübe</h4>
              <p>Sektörde güven ve kalite.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaTruck className="f-icon"/>
            <div className="f-text">
              <h4>Hızlı Teslimat</h4>
              <p>Kapınıza kadar sevkiyat.</p>
            </div>
          </div>

          <div className="feature-item">
            <FaSeedling className="f-icon"/>
            <div className="f-text">
              <h4>Analizli Ürün</h4>
              <p>Laboratuvar onaylı kalite.</p>
            </div>
          </div>

        </div>
      </section>
      <section className="cta-section">
        <div className="cta-overlay"></div>
        <div className="container cta-content">
          <h2>Verimli Bir Hasat İçin Doğru Adres</h2>
          <p>Hayvanlarınızın beslenmesi ve tarlanızın verimi için uzman ekibimizden destek alın.</p>
          <div className="cta-buttons">
             <Link to="/iletisim" className="btn-cta primary">BİZE ULAŞIN</Link>
             <a href="tel:+905305435341" className="btn-cta secondary"><FaPhoneVolume /> +90 (530) 543 53 41</a>
          </div>
        </div>
      </section>

<section className="partners-section">
  <div className="container">
    <div className="section-header">
      <span className="sub-title">GÜÇLÜ İŞBİRLİKLERİ</span>
      <h2>Çözüm Ortaklarımız</h2>
      <div className="line"></div>
    </div>
    
<div className="partners-grid">
  <div className="partner-logo">
    <a href="https://www.gubretas.com.tr/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/gubretas.png" alt="Tarım Kredi Kooperatifleri" />
    </a>
  </div>

  <div className="partner-logo">
    <a href="https://www.proyem.com.tr/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/proyem.png" alt="Proyem" />
    </a>
  </div>

  <div className="partner-logo">
    <a href="https://www.yesilbasak.com/" target="_blank" rel="noopener noreferrer">
      <img src="/assets/images/yesilbasak.png" alt="Yeşilbaşak" />
    </a>
  </div>
</div>

  </div>
</section>

    </div>
  );
};

import { FaLeaf } from 'react-icons/fa';

export default HomeContent;