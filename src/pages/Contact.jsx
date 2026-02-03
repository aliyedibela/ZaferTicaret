import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './Contact.css';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaPaperPlane, FaSeedling } from 'react-icons/fa';

const Contact = () => {
  const location = useLocation();
  
  const contactTopics = [
    'Fiyat Teklifi Almak İstiyorum',
    'Ürünler Hakkında Detaylı Bilgi',
    'Sipariş ve Sevkiyat Durumu',
    'Bayilik / İşbirliği Talebi',
    'Diğer / Genel İletişim'
  ];

  const [formData, setFormData] = useState({
    selectedProduct: '', 
    name: '',
    phone: '',
    message: ''
  });

  useEffect(() => {
    if (location.state && location.state.productName) {
      setFormData(prev => ({ ...prev, selectedProduct: location.state.productName }));
    } else {
      setFormData(prev => ({ ...prev, selectedProduct: 'Diğer / Genel Bilgi' }));
    }
  }, [location]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const phoneNumber = '905305435341';


    const message = `Merhaba, Zafer Ticaret web sitesinden yazıyorum.
    
*Konu:* ${formData.selectedProduct}
*Ad Soyad:* ${formData.name}
*Telefon:* ${formData.phone}

*Mesaj:* ${formData.message}`;


    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, '_blank');
  };

  return (
    <div className="contact-page-v3">
      <div className="contact-header-v3">
        <div className="ch-overlay"></div>
        <div className="ch-content">
          <h1>İletişim</h1>
          <p>Sorularınız için buradayız.</p>
        </div>
      </div>

      <div className="container main-layout">
        <div className="left-panel fade-up">
          <div className="form-box">
            <div className="box-header">
              <FaSeedling className="box-icon"/>
              <h2>Bize Yazın</h2>
              <p>Fiyat teklifi veya teknik destek için formu doldurun.</p>
            </div>

            <form onSubmit={handleSubmit} className="clean-form">
              <div className="form-group">
                <label>Konu Seçiniz</label>
                <select 
                  name="selectedProduct" 
                  value={formData.selectedProduct} 
                  onChange={handleChange} 
                  required 
                  className="clean-input"
                >
                  <option value="" disabled>Lütfen bir konu seçiniz</option>
                  {contactTopics.map((topic, i) => (
                    <option key={i} value={topic}>{topic}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Ad Soyad</label>
                <input type="text" name="name" required value={formData.name} onChange={handleChange} className="clean-input" placeholder="Adınız" />
              </div>

              <div className="form-group">
                <label>Telefon</label>
                <input type="tel" name="phone" required value={formData.phone} onChange={handleChange} className="clean-input" placeholder="05XX..." />
              </div>

              <div className="form-group">
                <label>Mesaj</label>
                <textarea name="message" rows="4" value={formData.message} onChange={handleChange} className="clean-input" placeholder="Notunuz..."></textarea>
              </div>

              <button type="submit" className="btn-clean-send">
                GÖNDER <FaPaperPlane />
              </button>
            </form>
          </div>
        </div>
        
        <div className="right-panel fade-up delay-100">
          <div className="info-box">
            <h3>İletişim Bilgileri</h3>
            <ul className="info-list">
              <li>
                <FaMapMarkerAlt className="il-icon"/>
                <div>
                  <strong>Adres:</strong>
                  <p>Kazım Karabekir Paşa Mah., 1. Karanfil Sok., No: 11<br/>Yakutiye / ERZURUM</p>
                </div>
              </li>
              <li>
                <FaPhoneAlt className="il-icon"/>
                <div>
                  <strong>Telefon:</strong>
                  <p><a href="tel:+905305435341">+90 (530) 543 53 41</a></p>
                </div>
              </li>
              <li>
                <FaClock className="il-icon"/>
                <div>
                  <strong>Çalışma Saatleri:</strong>
                  <p>Pzt - Cmt: 08:00 - 18:00</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="map-box-sidebar">
            <iframe 
              src="https://yandex.com.tr/map-widget/v1/?ll=41.273078%2C39.913551&z=18&pt=41.273078%2C39.913551,pm2rdm"
              width="100%" 
              height="100%" 
              frameBorder="0" 
              title="Zafer Ticaret Konum"
              className="yandex-frame"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;