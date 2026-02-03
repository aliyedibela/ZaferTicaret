import React from 'react';
import './VisionMission.css';
import { FaBullseye, FaLightbulb, FaGlobe, FaLeaf, FaHandHoldingHeart, FaChartLine } from 'react-icons/fa';

const VisionMission = () => {
  return (
    <div className="vm-page">
      <div className="vm-header">
        <div className="vm-overlay"></div>
        <div className="vm-header-content">
          <h1>Vizyon & Misyon</h1>
          <p>Geleceği ekiyor, güven biçiyoruz.</p>
        </div>
      </div>
      <section className="mission-section">
        <div className="container vm-grid">
          <div className="vm-text">
            <div className="vm-icon-box mission-icon">
              <FaHandHoldingHeart />
            </div>
            <span className="vm-subtitle">NEDEN VARIZ?</span>
            <h2>Misyonumuz</h2>
            <p>
              Zafer Ticaret olarak misyonumuz; bölgemizdeki çiftçi ve üreticilere 
              uluslararası standartlarda, yüksek verimli <strong>yem, tohum ve gübre</strong> tedarik etmektir.
            </p>
            <p>
              Sadece ürün satmak değil, üreticimizin emeğine değer katan doğru tarım tekniklerini yaygınlaştırmak, 
              hasat bereketini artırmak ve sürdürülebilir tarım için güvenilir bir çözüm ortağı olmak önceliğimizdir.
            </p>
          </div>
          <div className="vm-image">
            <img 
              src="/assets/images/mission.png" 
              alt="Çiftçi ve Hasat" 
            />
          </div>
        </div>
      </section>
      <section className="vision-section">
        <div className="container vm-grid reverse-grid">
          <div className="vm-image">
            <img 
              src="/assets/images/vision.png" 
              alt="Teknolojik Tarım" 
            />
          </div>
          <div className="vm-text dark-mode">
            <div className="vm-icon-box vision-icon">
              <FaLightbulb />
            </div>
            <span className="vm-subtitle">NEREYE GİDİYORUZ?</span>
            <h2>Vizyonumuz</h2>
            <p>
              Tarım teknolojilerini ve yenilikçi besleme yöntemlerini yakından takip ederek, 
              <strong>Türkiye'nin tarım sektörüne yön veren</strong> lider tedarik zinciri olmak.
            </p>
            <p>
              Gelecekte, dijital tarım uygulamalarıyla entegre olmuş, doğaya saygılı ve 
              ekonomik kalkınmaya öncülük eden, üreticinin "vazgeçilmez iş ortağı" konumuna erişmektir.
            </p>
          </div>
        </div>
      </section>
      <section className="goals-section container">
        <div className="section-title-center">
          <h2>Stratejik Hedeflerimiz</h2>
          <div className="title-line"></div>
        </div>

        <div className="goals-grid">
          <div className="goal-card">
            <FaBullseye className="g-icon"/>
            <h3>Liderlik</h3>
            <p>Bölgesel pazarda %100 müşteri memnuniyeti ile pazar liderliğini korumak.</p>
          </div>

          <div className="goal-card">
            <FaLeaf className="g-icon"/>
            <h3>Sürdürülebilirlik</h3>
            <p>Toprak sağlığını koruyan organik ve verimli gübre kullanımını teşvik etmek.</p>
          </div>

          <div className="goal-card">
            <FaChartLine className="g-icon"/>
            <h3>Verimlilik</h3>
            <p>Çiftçimizin birim alandan aldığı verimi artıracak AR-GE destekli ürünler sunmak.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default VisionMission;