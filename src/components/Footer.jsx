import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-col brand-col">
          <div className="footer-logo">
            <span>ZAFER</span><span className="trade">TİCARET</span>
          </div>
          <p className="footer-desc">
            Toprağın bereketini teknolojiyle buluşturuyoruz. 
            Bölgenin en güvenilir tarım tedarikçisi.
          </p>
          <div className="social-links">
            <a href="https://www.facebook.com/muzaffer.algur.3/" className="social-icon"><FaFacebookF /></a>
            <a href="https://www.instagram.com/algurmuzaffer/" className="social-icon"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/aliyedibela/" className="social-icon"><FaLinkedinIn /></a>
          </div>
        </div>
        <div className="footer-col">
          <h3>Hızlı Erişim</h3>
          <ul className="footer-links">
            <li><Link to="/">Anasayfa</Link></li>
            <li><Link to="/kurumsal/hakkimizda">Kurumsal</Link></li>
            <li><Link to="/urunler">Ürünlerimiz</Link></li>
            <li><Link to="/iletisim">İletişim</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h3>Ürünler</h3>
          <ul className="footer-links">
            <li><Link to="/urunler/yem">Büyükbaş Yem</Link></li>
            <li><Link to="/urunler/yem">Küçükbaş Yem</Link></li>
            <li><Link to="/urunler/tohum">Tohum</Link></li>
            <li><Link to="/urunler/gubre">Gübre</Link></li>
          </ul>
        </div>
        <div className="footer-col contact-col">
          <h3>İletişim</h3>
          <ul className="contact-list">
            <li>
              <FaMapMarkerAlt className="c-icon" />
              <span>Kazım Karabekir Paşa Mah., 1. Karanfil Sok., No: 11<br/>Yakutiye / ERZURUM</span>
            </li>
            <li>
              <FaPhoneAlt className="c-icon" />
              <a href="tel:+905305435341">+90 (530) 543 53 41</a>
            </li>
            <li>
              <FaEnvelope className="c-icon" />
              <a href="mailto:info@zaferticaret.com">info@zaferticaret.com</a>
            </li>
          </ul>
        </div>

      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Zafer Ticaret. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
};

export default Footer;