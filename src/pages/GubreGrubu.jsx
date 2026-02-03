import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './GubreGrubu.css';
import { FaWhatsapp, FaArrowRight, FaVial, FaChartLine, FaLeaf, FaFilter } from 'react-icons/fa';

const GubreGrubu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); 
  const [selectedBrand, setSelectedBrand] = useState('all');   


  const gubreUrunleri = [

    {
      id: 1,
      title: 'Yeşil Başak NPK 15-15-15 (+15 SO₃)',
      brand: 'yesilbasak',
      category: 'taban',
      desc: 'Bitkinin her döneminde ihtiyaç duyduğu azot, fosfor ve potasyumu dengeli sağlayan kompoze gübre.',
      specs: ['15-15-15 Dengeli', 'Kükürt İlaveli', 'Taban Gübresi'],
      image: '/assets/images/yb_151515.png'
    },
    {
      id: 2,
      title: 'Yeşil Başak NPK 12-15-5 (Leonarditli)',
      brand: 'yesilbasak',
      category: 'taban',
      desc: 'Leonardit katkısı sayesinde toprağın organik yapısını düzenleyen ve besleyen özel formül.',
      specs: ['Leonarditli', 'Toprak Düzenleyici', 'Organomineral'],
      image: '/assets/images/yb_12515.png'
    },
    {
      id: 3,
      title: 'Yeşil Başak NP 16-15-0 (Leonarditli)',
      brand: 'yesilbasak',
      category: 'taban',
      desc: 'Azot ve fosfor ihtiyacını karşılarken toprağı canlandıran leonarditli taban gübresi.',
      specs: ['Azot & Fosfor', 'Kök Gelişimi', 'Leonardit Etkisi'],
      image: '/assets/images/yb_16150.png'
    },
    {
      id: 4,
      title: 'Yeşil Başak NPK 11-11-11 (Leonarditli)',
      brand: 'yesilbasak',
      category: 'taban',
      desc: 'Düşük tuz indeksi ve organik içerik ile toprağı yormadan besleyen dengeli gübre.',
      specs: ['Dengeli Formül', 'Organik Katkı', 'Tuzluluğu Azaltır'],
      image: '/assets/images/yb_111111.png'
    },
    {
      id: 5,
      title: 'Yeşil Başak NK 8-20-0 (Leonarditli)',
      brand: 'yesilbasak',
      category: 'taban',
      desc: 'Fosfor ağırlıklı, köklenmeyi teşvik eden ve leonardit ile toprağı iyileştiren gübre.',
      specs: ['Yüksek Fosfor', 'Güçlü Kök', 'Toprak Islahı'],
      image: '/assets/images/yb_8200.png'
    },
    {
      id: 6,
      title: 'Yeşil Başak Süper Kompoze 16-15-0 + Zn',
      brand: 'yesilbasak',
      category: 'taban',
      desc: 'Çinko (Zn) katkısı ile tahıllarda kardeşlenmeyi ve verimi artıran süper kompoze.',
      specs: ['Çinko Katkılı', 'Süper Verim', 'Tahıl Özel'],
      image: '/assets/images/yb_16150zn.png'
    },
    {
      id: 7,
      title: 'Yeşil Başak DAP 18-46-0',
      brand: 'yesilbasak',
      category: 'taban',
      desc: 'Yüksek fosfor içeriği ile kök gelişimini ve çiçeklenmeyi maksimuma çıkaran klasik gübre.',
      specs: ['%46 Fosfor', 'Hızlı Köklenme', 'Diamonyum Fosfat'],
      image: '/assets/images/yb_dap.png'
    },
    {
      id: 10,
      title: 'Yeşil Başak Nitro Star (Azot)',
      brand: 'yesilbasak',
      category: 'ust',
      desc: 'Bitkinin yeşil aksamını geliştiren, hızlı etkili özel azot kaynağı.',
      specs: ['Hızlı Yeşerme', 'Nitro Güç', 'Üst Gübre'],
      image: '/assets/images/yb_nitrostar.png'
    },
    {
      id: 11,
      title: 'Yeşil Başak Süper Granül Azot (%20 N)',
      brand: 'yesilbasak',
      category: 'ust',
      desc: 'Amonyum Sülfat bazlı, kükürt içeren ve toprağın pH dengesini düzenleyen gübre.',
      specs: ['Şeker Gübre', 'pH Düzenleyici', '%20 Azot'],
      image: '/assets/images/yb_supergranul.png'
    },
    {
      id: 12,
      title: 'Yeşil Başak Granül Üre',
      brand: 'yesilbasak',
      category: 'ust',
      desc: 'En yüksek azot içeriğine (%46) sahip, bitki boyunu ve gelişimini artıran üre gübresi.',
      specs: ['%46 Azot', 'Granül Yapı', 'Güçlü Gelişim'],
      image: '/assets/images/yb_ure.png'
    },
    {
      id: 13,
      title: 'Yeşil Başak ASN 26 Azot',
      brand: 'yesilbasak',
      category: 'ust',
      desc: 'Hem nitrat hem amonyum azotu içeren, yıkanmaya dayanıklı Amonyum Nitrat Sülfat.',
      specs: ['Çift Etkili Azot', 'Verim Artırıcı', 'ASN 26'],
      image: '/assets/images/yb_asn26.png'
    },
    {
      id: 14,
      title: 'Yeşil Başak %20 Granül Amonyum Sülfat',
      brand: 'yesilbasak',
      category: 'ust',
      desc: 'Halk arasında şeker gübre olarak bilinen, kireçli topraklara ilaç gibi gelen gübre.',
      specs: ['Kireç Çözücü', 'Sülfatlı', 'Granül Yapı'],
      image: '/assets/images/yb_as20.png'
    }
  ];


  const filteredProducts = gubreUrunleri.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const brandMatch = selectedBrand === 'all' || item.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  return (
    <div className="gubre-container">

      <section className="gubre-hero">
        <div className="gubre-hero-overlay"></div>
        <div className="container gubre-hero-content">
          <span className="gubre-tag">VERİMLİ TOPRAKLAR</span>
          <h1>Doğru Besleme <br/><span>Zengin Hasat</span></h1>
          <p>Toprağınızın analiz değerlerine uygun, bitki gelişimini her aşamada destekleyen profesyonel gübre çeşitleri.</p>
        </div>
      </section>
      <section className="gubre-features-row container">
        <div className="gubre-f-card">
          <div className="gubre-f-icon"><FaVial /></div>
          <h3>Analiz Desteği</h3>
          <p>Toprak analizinize göre en doğru gübreleme programını birlikte hazırlıyoruz.</p>
        </div>
        <div className="gubre-f-card">
          <div className="gubre-f-icon"><FaChartLine /></div>
          <h3>Yüksek Randıman</h3>
          <p>Bitkinin ihtiyacı olan besin elementlerini doğrudan almasını sağlayan özel formüller.</p>
        </div>
        <div className="gubre-f-card">
          <div className="gubre-f-icon"><FaLeaf /></div>
          <h3>Toprak Dostu</h3>
          <p>Toprak yapısını bozmayan, sürdürülebilir tarımı destekleyen kaliteli içerik.</p>
        </div>
      </section>
      <section className="advanced-filter container">
        <div className="filter-title"><FaFilter /> GÜBRE FİLTRELEME</div>
        
        <div className="filter-wrapper">
          <div className="filter-group">
            <span className="f-head">Uygulama:</span>
            <div className="f-options">
              <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>Tümü</button>
              <button className={selectedCategory === 'taban' ? 'active' : ''} onClick={() => setSelectedCategory('taban')}>Taban Gübresi</button>
              <button className={selectedCategory === 'ust' ? 'active' : ''} onClick={() => setSelectedCategory('ust')}>Üst Gübre (Azot)</button>
            </div>
          </div>
          <div className="filter-group">
            <span className="f-head">Marka:</span>
            <div className="f-options">
              <button className={selectedBrand === 'all' ? 'active' : ''} onClick={() => setSelectedBrand('all')}>Tüm Markalar</button>
              <button className={selectedBrand === 'yesilbasak' ? 'active' : ''} onClick={() => setSelectedBrand('yesilbasak')}>Yeşil Başak</button>
            </div>
          </div>
        </div>
      </section>

      <section className="gubre-product-list container">
        <div className="section-title">
          <h2>
            {selectedBrand === 'all' ? '' : selectedBrand === 'yesilbasak' ? 'Yeşil Başak ' : ''}
            {selectedCategory === 'all' ? 'Tüm Gübre Çeşitlerimiz' : (selectedCategory === 'taban' ? 'Taban Gübreleri' : 'Üst Gübreler')}
          </h2>
          <div className="title-bar"></div>
        </div>

        {filteredProducts.length > 0 ? (
          filteredProducts.map(gubre => (
            <div key={gubre.id} className="gubre-item-card">
              <div className="gubre-item-image">
                <img src={gubre.image} alt={gubre.title} />
              </div>
              <div className="gubre-item-details">
                <div className="gubre-item-badge">
                   {gubre.brand === 'yesilbasak' ? 'YEŞİL BAŞAK' : gubre.brand.toUpperCase()} | {gubre.category === 'taban' ? 'TABAN' : 'ÜST GÜBRE'}
                </div>
                <h3>{gubre.title}</h3>
                <p>{gubre.desc}</p>
                <div className="gubre-item-specs">
                  {gubre.specs.map((s, i) => <span key={i} className="gubre-spec-tag">{s}</span>)}
                </div>
                <div className="gubre-item-btns">
                  <Link to="/iletisim" state={{productName: gubre.title}} className="gubre-btn-main">
                    BİLGİ AL <FaArrowRight />
                  </Link>
                  <a href={`https://wa.me/+905305435341?text=${encodeURIComponent(gubre.title)} hakkında bilgi almak istiyorum.`} className="gubre-btn-wa">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-result-box" style={{textAlign: 'center', padding: '60px', background: '#f8fafc', borderRadius: '20px', border: '2px dashed #cbd5e1'}}>
             <h3>Aradığınız kriterlere uygun ürün bulunamadı.</h3>
             <button onClick={() => {setSelectedCategory('all'); setSelectedBrand('all')}} style={{marginTop: '20px', background: 'var(--wheat)', color: 'white', border: 'none', padding: '10px 25px', borderRadius: '8px', cursor: 'pointer', fontWeight: '700'}}>Filtreleri Temizle</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default GubreGrubu;