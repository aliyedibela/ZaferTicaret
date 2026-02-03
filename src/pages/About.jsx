import React from 'react';
import './About.css';
import { FaHandshake, FaAward, FaUsers, FaLeaf, FaHistory, FaCheckCircle } from 'react-icons/fa';

const About = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="header-overlay"></div>
        <div className="header-content">
          <h1>Hakkımızda</h1>
          <p>Topraktan aldığımız gücü, güvenle harmanlıyoruz.</p>
        </div>
      </div>
      <section className="about-section container">
        <div className="about-grid">
          <div className="about-img">
            <img 
              src="/assets/images/wheatfield.png" 
              alt="Zafer Ticaret Ofis" 
            />
            <div className="exp-badge">
              <span className="years">20+</span>
              <span className="text">Yıllık<br/>Tecrübe</span>
            </div>
          </div>
          <div className="about-text">
            <span className="sub-heading">BİZ KİMİZ?</span>
            <h2>Zafer Ticaret: Bölgenin Tarım Lideri</h2>
            <p>
              Zafer Ticaret olarak, Erzurum ve çevre bölgelerde tarım ve hayvancılık sektörünün ihtiyaçlarını karşılamak amacıyla yola çıktık. 
              Kurulduğumuz günden bu yana, çiftçimizin emeğine değer katmayı ve verimliliği artırmayı kendimize misyon edindik.
            </p>
            <p>
              Yem, tohum ve gübre alanında dünyanın en kaliteli markalarını üreticilerimizle buluşturuyoruz. 
              Sadece bir tedarikçi değil, aynı zamanda üreticinin yol arkadaşıyız.
            </p>
            
            <ul className="about-list">
              <li><FaCheckCircle className="check-icon"/> Geniş Ürün Yelpazesi</li>
              <li><FaCheckCircle className="check-icon"/> Uzman Ziraat Mühendisi Desteği</li>
              <li><FaCheckCircle className="check-icon"/> Hızlı ve Güvenilir Sevkiyat</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="stats-strip">
        <div className="container stats-grid">
          
          <div className="stat-item">
            <FaHistory className="stat-icon"/>
            <h3>2004</h3>
            <p>Kuruluş Yılı</p>
          </div>

          <div className="stat-item">
            <FaUsers className="stat-icon"/>
            <h3>5000+</h3>
            <p>Mutlu Çiftçi</p>
          </div>

          <div className="stat-item">
            <FaLeaf className="stat-icon"/>
            <h3>%100</h3>
            <p>Müşteri Memnuniyeti</p>
          </div>

          <div className="stat-item">
            <FaAward className="stat-icon"/>
            <h3>15+</h3>
            <p>Ödül ve Sertifika</p>
          </div>

        </div>
      </section>
      <section className="values-section container">
        <div className="section-title-center">
          <h2>Değerlerimiz</h2>
          <div className="title-line"></div>
        </div>

        <div className="values-grid">
          <div className="value-card">
            <div className="v-icon-box"><FaHandshake /></div>
            <h3>Güven</h3>
            <p>Sözümüz senettir. Ticaretimizde şeffaflık ve dürüstlük en temel ilkemizdir.</p>
          </div>

          <div className="value-card">
            <div className="v-icon-box"><FaAward /></div>
            <h3>Kalite</h3>
            <p>Çiftçimizin verimini düşürecek hiçbir ürünü raflarımıza koymayız.</p>
          </div>

          <div className="value-card">
            <div className="v-icon-box"><FaLeaf /></div>
            <h3>Sürdürülebilirlik</h3>
            <p>Toprağın geleceğini düşünüyor, doğa dostu tarım uygulamalarını destekliyoruz.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;