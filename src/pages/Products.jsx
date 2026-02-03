import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { FaLeaf, FaTractor, FaSeedling, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const Products = () => {
  const [category, setCategory] = useState('all');

  const products = [
    {
      id: 1,
      category: 'yem',
      title: 'Süt Yemi 19 HP',
      desc: 'Yüksek süt verimi için özel formüle edilmiş, protein ve enerji dengeli süt yemi.',
      image: '/assets/images/milkseed.png',
      badge: 'Yüksek Verim'
    },
    {
      id: 2,
      category: 'yem',
      title: 'Besi Geliştirme Yemi',
      desc: 'Hızlı canlı ağırlık artışı sağlayan, sindirilebilirliği yüksek besi yemi.',
      image: '/assets/images/besiyemi.png',
      badge: 'Hızlı Kilo'
    },
    {
      id: 3,
      category: 'tohum',
      title: 'Sertifikalı Buğday Tohumu',
      desc: 'Soğuğa ve kuraklığa dayanıklı, glüten değeri yüksek ekmeklik buğday tohumu.',
      image: '/assets/images/wheatseed.png',
      badge: 'Sertifikalı'
    },
    {
      id: 4,
      category: 'gubre',
      title: 'Üre Gübresi (%46 Azot)',
      desc: 'Bitkinin yeşil aksamını geliştiren, suda çabuk eriyen yüksek azotlu gübre.',
      image: '/assets/images/azoture.png',
      badge: 'Güçlü Gelişim'
    },
    {
      id: 5,
      category: 'gubre',
      title: 'DAP (Taban Gübresi)',
      desc: 'Kök gelişimini hızlandıran, fosfor ve azot içerikli taban gübresi.',
      image: '/assets/images/dap.png',
      badge: 'Kök Güçlendirici'
    },
    {
      id: 7,
      category: 'yem',
      title: 'Buzağı Başlangıç Yemi',
      desc: 'Buzağıların işkembe gelişimini hızlandıran, lezzetli ve besleyici yem.',
      image: '/assets/images/buzagiyemi.png',
      badge: 'Sağlıklı Büyüme'
    }
  ];

  const filteredProducts = category === 'all' 
    ? products 
    : products.filter(item => item.category === category);

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="p-overlay"></div>
        <div className="p-header-content">
          <h1>Ürünlerimiz</h1>
          <p>En kaliteli tarım ürünleri, en uygun fiyatlarla.</p>
        </div>
      </div>

      <section className="filter-section container">
        <div className="filter-buttons">
          <button className={category === 'all' ? 'active' : ''} onClick={() => setCategory('all')}>Tümü</button>
          <button className={category === 'yem' ? 'active' : ''} onClick={() => setCategory('yem')}><FaTractor /> Yem Grubu</button>
          <button className={category === 'tohum' ? 'active' : ''} onClick={() => setCategory('tohum')}><FaSeedling /> Tohum</button>
          <button className={category === 'gubre' ? 'active' : ''} onClick={() => setCategory('gubre')}><FaLeaf /> Gübre</button>
        </div>
      </section>

      <section className="products-grid container">
        {filteredProducts.map((product) => {
          const message = `Merhaba, ${product.title} ürünü hakkında fiyat ve detaylı bilgi almak istiyorum.`;
          const waLink = `https://wa.me/905305435341?text=${encodeURIComponent(message)}`;
          return (
            <div key={product.id} className="product-card fade-in">
              <div className="card-img">
                <img src={product.image} alt={product.title} />
                <div className="card-badge">{product.badge}</div>
              </div>
              <div className="card-body">
                <span className="card-cat">{product.category === 'yem' ? 'YEM GRUBU' : product.category === 'tohum' ? 'TOHUM' : 'GÜBRE'}</span>
                <h3>{product.title}</h3>
                <p>{product.desc}</p>
                <div className="card-footer">
                  <Link 
                    to="/iletisim" 
                    state={{ productName: product.title }}
                    className="btn-detail"
                  >
                    Bilgi Al <FaArrowRight />
                  </Link>
                  <a href={waLink} target="_blank" rel="noreferrer" className="btn-whatsapp">
                    <FaWhatsapp />
                  </a>

                </div>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default Products;