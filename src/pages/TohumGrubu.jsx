import React from 'react';
import { Link } from 'react-router-dom';
import './TohumGrubu.css';
import { FaWhatsapp, FaArrowRight, FaCertificate, FaSeedling, FaMicroscope } from 'react-icons/fa';

const TohumGrubu = () => {
  const tohumUrunleri = [
    {
      id: 1,
      title: 'Sertifikalı Ekmeklik Buğday',
      desc: 'Kışlık ekime uygun, soğuğa ve kuraklığa dayanıklı, yüksek glüten değerli ekmeklik buğday tohumu.',
      specs: ['Sertifikalı', 'Yüksek Verim', 'Hastalıklara Dayanıklı'],
      image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1925&auto=format&fit=crop'
    },
    {
      id: 2,
      title: 'Hibrit Silajlık Mısır',
      desc: 'Bol yapraklı, yüksek boylu ve yüksek enerji değerine sahip silajlık mısır tohumu çeşitleri.',
      specs: ['Hızlı Gelişim', 'Yüksek Tonaj', 'ADF/NDF Dengeli'],
      image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1770&auto=format&fit=crop'
    }
  ];

  return (
    <div className="tohum-container">
      <section className="tohum-hero">
        <div className="tohum-hero-overlay"></div>
        <div className="container tohum-hero-content">
          <span className="tohum-tag">TOPRAĞIN GELECEĞİ</span>
          <h1>Bereketli <br/><span>Hasatın Anahtarı</span></h1>
          <p>Erzurum ve Doğu Anadolu iklimine en uygun, verimi tescillenmiş sertifikalı tohum çeşitleri ile tarlanızın gücüne güç katın.</p>
        </div>
      </section>
      <section className="tohum-features-row container">
        <div className="tohum-f-card">
          <div className="tohum-f-icon"><FaCertificate /></div>
          <h3>Sertifikalı Tohum</h3>
          <p>Bakanlık onaylı, çimlenme gücü yüksek ve garantili tohumlar.</p>
        </div>
        <div className="tohum-f-card">
          <div className="tohum-f-icon"><FaMicroscope /></div>
          <h3>Ar-Ge Destekli</h3>
          <p>Bölge toprağına en uygun genetiği belirlenmiş özel çeşitler.</p>
        </div>
        <div className="tohum-f-card">
          <div className="tohum-f-icon"><FaSeedling /></div>
          <h3>Yüksek Çimlenme</h3>
          <p>Fire oranını minimize eden, topraktan fışkıran bereket.</p>
        </div>
      </section>
      <section className="tohum-product-list container">
        <div className="section-title">
          <h2>Tohum Çeşitlerimiz</h2>
          <div className="title-bar"></div>
        </div>
        {tohumUrunleri.map(tohum => (
          <div key={tohum.id} className="tohum-item-card">
            <div className="tohum-item-image">
              <img src={tohum.image} alt={tohum.title} />
            </div>
            <div className="tohum-item-details">
              <div className="tohum-item-badge">TOHUM GRUBU</div>
              <h3>{tohum.title}</h3>
              <p>{tohum.desc}</p>
              <div className="tohum-item-specs">
                {tohum.specs.map((s, i) => <span key={i} className="tohum-spec-tag">{s}</span>)}
              </div>
              <div className="tohum-item-btns">
                <Link to="/iletisim" state={{productName: tohum.title}} className="tohum-btn-main">
                  BİLGİ AL <FaArrowRight />
                </Link>
                <a href={`https://wa.me/+905305435341?text=${encodeURIComponent(tohum.title)} hakkında bilgi almak istiyorum.`} className="tohum-btn-wa">
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default TohumGrubu;