import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './YemGrubu.css';
import { FaWhatsapp, FaArrowRight, FaAward, FaTruckMoving, FaFlask, FaFilter } from 'react-icons/fa';

const YemGrubu = () => {
  // --- STATE (FİLTRE HAFIZASI) ---
  const [selectedCategory, setSelectedCategory] = useState('all'); // all, buyukbas, kucukbas, kanatli
  const [selectedBrand, setSelectedBrand] = useState('all');       // all, proyem, matli, cp

  // --- ÜRÜN VERİLERİ ---
  const yemUrunleri = [
    // --- BÜYÜKBAŞ BESİ GRUBU ---
    {
      id: 1,
      title: 'Proyem Besi',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Ekonomik ve dengeli besleme sağlayan, besi performansını destekleyen standart besi yemi.',
      specs: ['Ekonomik Seri', 'Standart Besi', 'Dengeli Enerji'],
      image: '/assets/images/besi.png'
    },
    {
      id: 101,
      title: 'Proyem Mat Besi',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Ekonomik ve dengeli besleme sağlayan, besi performansını destekleyen standart besi yemi.',
      specs: ['Ekonomik Seri', 'Standart Besi', 'Dengeli Enerji'],
      image: '/assets/images/matbesi.png'
    },
    {
      id: 2,
      title: 'Proyem Şah Besi',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Besi sığırlarının ihtiyaç duyduğu enerji ve proteini karşılayan güçlü besi yemi.',
      specs: ['Yüksek Randıman', 'Hızlı Kilo', 'Şah Performans'],
      image: '/assets/images/sah.png'
    },
    {
      id: 3,
      title: 'Proyem Spr Tosun',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Besinin son dönemlerinde maksimum canlı ağırlık artışı için özel formül.',
      specs: ['Süper Performans', 'Bitiş Dönemi', 'Karkas Kalitesi'],
      image: '/assets/images/sprtosun.png'
    },
    {
      id: 4,
      title: 'Proyem Tahıl Besi',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Tahıl ağırlıklı besleme yapan işletmeler için özel olarak dengelenmiş konsantre yem.',
      specs: ['Tahıl Takviyeli', 'Yoğun Enerji', 'Özel Rasyon'],
      image: '/assets/images/tahilbesi.png'
    },
    {
      id: 5,
      title: 'Proyem Tane Besi',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Besi hayvanlarının tane yem ihtiyacını karşılayan, sindirilebilirliği yüksek ürün.',
      specs: ['Tane Yapılı', 'Kolay Sindirim', 'İştah Açıcı'],
      image: '/assets/images/tanebesi.png'
    },
    {
      id: 6,
      title: 'Proyem Tosun',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Genç tosunların iskelet ve kas yapısını güçlendiren, gelişimi hızlandıran yem.',
      specs: ['Genç Besi', 'Kas Gelişimi', 'Sağlam İskelet'],
      image: '/assets/images/tosun.png'
    },

    // --- BÜYÜKBAŞ SÜT GRUBU ---
    {
      id: 7,
      title: 'Proyem Aktif Süt',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Orta verimli inekler için ideal, süt verimini ve kalitesini koruyan yem.',
      specs: ['Aktif Verim', 'Ekonomik Süt', 'Sağmal İnek'],
      image: '/assets/images/aktif.png'
    },
    {
      id: 8,
      title: 'Proyem Çizgi Süt',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Sürdürülebilir süt verimi için özel olarak tasarlanmış, istikrarlı bir yem.',
      specs: ['Çizgi Koruma', 'Dengeli Protein', 'Laktasyon Boyu'],
      image: '/assets/images/cizgi.png'
    },
    {
      id: 9,
      title: 'Proyem Enerji Süt',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Yüksek süt verimine sahip ineklerin enerji açığını kapatan özel seri.',
      specs: ['Yüksek Enerji', 'Negatif Enerjiyi Önler', 'Pik Dönemi'],
      image: '/assets/images/enerji.png'
    },
    {
      id: 10,
      title: 'Proyem Kanıt Süt',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Kalitesi kanıtlanmış, verim artışı sağlayan profesyonel süt yemi.',
      specs: ['Kanıtlanmış Kalite', 'Yüksek Protein', 'Meme Sağlığı'],
      image: '/assets/images/kanit.png'
    },
    {
      id: 11,
      title: 'Proyem Pro 41',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Özel çiftlikler için 4x4 lük performans sağlayan üst segment süt yemi.',
      specs: ['Profesyonel Seri', 'Maksimum Verim', 'Pro Kalite'],
      image: '/assets/images/pro41.png'
    },
    {
      id: 12,
      title: 'Proyem Pro 4x4',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Her yönüyle tam besleme sağlayan, yüksek verimli sürüler için premium yem.',
      specs: ['Dört Dörtlük', 'Tam Besleme', 'Zirve Performans'],
      image: '/assets/images/pro4x4.png'
    },
    {
      id: 13,
      title: 'Proyem Tane Süt',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Tane yapısı sayesinde hayvanların severek tükettiği, verim artıran yem.',
      specs: ['Tane Form', 'Yüksek Lezzet', 'Kolay Tüketim'],
      image: '/assets/images/tanesut.png'
    },
    {
      id: 14,
      title: 'Proyem Verim Süt',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'İşletme karlılığını düşünenler için fiyat/performans odaklı verim yemi.',
      specs: ['Fiyat/Performans', 'Verim Odaklı', 'Standart Süt'],
      image: '/assets/images/verim.png'
    },

    // --- ÇİFTLİK GRUBU ---
    {
      id: 15,
      title: 'Proyem Balans',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Rasyon dengesini sağlayan, sindirim sorunlarını önleyen tamamlayıcı yem.',
      specs: ['Rasyon Dengeleyici', 'Asidoz Önleyici', 'Sindirim Dostu'],
      image: '/assets/images/balans.png'
    },
    {
      id: 16,
      title: 'Proyem Doğuş',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Buzağıların hayata sağlıklı başlaması için özel formüle edilmiş başlangıç yemi.',
      specs: ['Buzağı Başlangıç', 'Bağışıklık Güçlendirici', 'Hızlı Gelişim'],
      image: '/assets/images/dogus.png'
    },
    {
      id: 17,
      title: 'Proyem Protek Süt',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Genç hayvanların protein ihtiyacını karşılayan, büyütme faktörlü yem.',
      specs: ['Yüksek Protein', 'Büyütme Yemi', 'Sağlıklı Nesiller'],
      image: '/assets/images/protek.png'
    },
    {
      id: 19,
      title: 'Proyem Düve Yemi',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Damızlık değeri yüksek düvelerin ideal kondisyonda gelişmesini sağlar.',
      specs: ['Düve Gelişim', 'İdeal Kondisyon', 'Döl Verimi'],
      image: '/assets/images/duve.png'
    },
    {
      id: 20,
      title: 'Proyem Kuru Dönem',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Doğuma hazırlanan ineklerin metabolik sağlığını koruyan özel yem.',
      specs: ['Doğum Hazırlık', 'Metabolik Denge', 'Sağlıklı Buzağı'],
      image: '/assets/images/kurudonem.png'
    },
    {
      id: 21,
      title: 'Proyem Son 60',
      brand: 'proyem',
      type: 'buyukbas',
      desc: 'Gebeliğin son 2 ayında (Son 60 gün) anneyi ve yavruyu destekleyen yem.',
      specs: ['Gebelik Sonu', 'Güçlü Anne', 'Canlı Yavru'],
      image: '/assets/images/son60.png'
    },
    {
      id: 22,
      title: 'Proyem Tutku',
      brand: 'proyem',
      type: 'kucukbas',
      desc: 'Hayvanların iştahla tükettiği, besleyiciliği yüksek özel karışım.',
      specs: ['Yüksek İştah', 'Tutkulu Tüketim', 'Özel Aroma'],
      image: '/assets/images/tutku.png'
    },
    {
      id: 23,
      title: 'Proyem Vira',
      brand: 'proyem',
      type: 'kucukbas',
      desc: 'Laktasyon başlangıcında veya beside start vermek için kullanılan yem.',
      specs: ['Hızlı Başlangıç', 'Vira Bismillah', 'Enerji Deposu'],
      image: '/assets/images/vira.png'
    },
    {
      id: 24,
      title: 'Proyem Skor',
      brand: 'proyem',
      type: 'kucukbas',
      desc: 'İşletmenizin üretim skorunu yükselten, sonuç odaklı performans yemi.',
      specs: ['Skor Odaklı', 'Yüksek Kazanç', 'Tam Verim'],
      image: '/assets/images/skor.png'
    },
    {
      id: 25,
      title: 'Proyem Toklu',
      brand: 'proyem',
      type: 'kucukbas', // Çiftlik grubunda ama türü küçükbaş
      desc: 'Kuzuların toklu döneminde hızlı gelişimini sağlayan özel besi yemi.',
      specs: ['Toklu Besi', 'Hızlı Kilo', 'Küçükbaş Özel'],
      image: '/assets/images/toklu.png'
    },

    // --- KÜÇÜKBAŞ SÜT YEMLERİ ---
    {
      id: 26,
      title: 'Proyem Keçi Süt',
      brand: 'proyem',
      type: 'kucukbas',
      desc: 'Süt keçilerinin yüksek verim ve süt kalitesi için özel formüle edilmiştir.',
      specs: ['Keçi Özel', 'Yüksek Yağ', 'Lezzetli Süt'],
      image: '/assets/images/kecisut.png'
    },
    {
      id: 27,
      title: 'Proyem Koyun Süt',
      brand: 'proyem',
      type: 'kucukbas',
      desc: 'Sağmal koyunların süt verimini artıran ve kondisyonunu koruyan yem.',
      specs: ['Koyun Özel', 'Süt Artışı', 'Sağlıklı Sürü'],
      image: '/assets/images/koyunsut.png'
    },

    // --- KANATLI YEMLERİ ---
    {
      id: 28,
      title: 'Proyem Etlik 1 (Civciv)',
      brand: 'proyem',
      type: 'kanatli',
      desc: 'Etlik civcivlerin ilk haftalarda hızlı ve sağlıklı gelişimi için başlangıç yemi.',
      specs: ['Etlik Başlangıç', 'Hızlı Büyüme', 'Yüksek Protein'],
      image: '/assets/images/etlik1.png'
    },
    {
      id: 29,
      title: 'Proyem Etlik 2 (Piliç)',
      brand: 'proyem',
      type: 'kanatli',
      desc: 'Etlik piliçlerin kesim öncesi dönemde et tutmasını sağlayan büyütme yemi.',
      specs: ['Etlik Büyütme', 'Et Kalitesi', 'Maksimum Ağırlık'],
      image: '/assets/images/etlik2.png'
    },
    {
      id: 30,
      title: 'Proyem Köy Tavuğu 1',
      brand: 'proyem',
      type: 'kanatli',
      desc: 'Doğal ortamda yetişen köy civcivleri için özel başlangıç yemi.',
      specs: ['Köy Tipi', 'Doğal Besleme', 'Civciv Yemi'],
      image: '/assets/images/koytavugu1.png'
    },
    {
      id: 31,
      title: 'Proyem Köy Tavuğu 2',
      brand: 'proyem',
      type: 'kanatli',
      desc: 'Yetişkin köy tavuklarının yumurta ve et verimini destekleyen yem.',
      specs: ['Köy Tipi', 'Yetişkin Tavuk', 'Dengeli Besin'],
      image: '/assets/images/koytavugu2.png'
    },
    {
      id: 32,
      title: 'Proyem Yumurtacı 1 (Başlangıç)',
      brand: 'proyem',
      type: 'kanatli',
      desc: 'Yumurta tavuğu civcivlerinin yumurtlama dönemine sağlıklı hazırlanması için.',
      specs: ['Yumurta Başlangıç', 'İskelet Gelişimi', 'Sağlıklı Büyüme'],
      image: '/assets/images/yumurtaci1.png'
    },
    {
      id: 33,
      title: 'Proyem Yumurtacı 2 (Verim)',
      brand: 'proyem',
      type: 'kanatli',
      desc: 'Yumurtlama dönemindeki tavuklar için kabuk kalitesini ve verimi artıran yem.',
      specs: ['Yumurta Verim', 'Sarı Yumurta', 'Güçlü Kabuk'],
      image: '/assets/images/yumurtaci2.png'
    }
  ];

  // --- FİLTRELEME MANTIĞI (DÜZELTİLDİ: item.type kullanıldı) ---
  const filteredProducts = yemUrunleri.filter(item => {
    // selectedCategory ile item.type'ı karşılaştırıyoruz
    const categoryMatch = selectedCategory === 'all' || item.type === selectedCategory;
    const brandMatch = selectedBrand === 'all' || item.brand === selectedBrand;
    return categoryMatch && brandMatch;
  });

  // Başlık Metnini Dinamik Ayarla
  const getTitle = () => {
    let title = selectedBrand === 'all' ? '' : selectedBrand.toUpperCase() + ' ';
    
    if (selectedCategory === 'all') title += 'Tüm Ürünlerimiz';
    else if (selectedCategory === 'buyukbas') title += 'Büyükbaş Yemleri';
    else if (selectedCategory === 'kucukbas') title += 'Küçükbaş Yemleri';
    else if (selectedCategory === 'kanatli') title += 'Kanatlı Yemleri';
    
    return title;
  };

  return (
    <div className="yem-container">
      {/* HERO SECTION */}
      <section className="yem-hero">
        <div className="yem-hero-overlay"></div>
        <div className="container yem-hero-content">
          <span className="yem-tag">PROFESYONEL BESİ ÇÖZÜMLERİ</span>
          <h1>Hayvancılıkta <br/><span>Maksimum Verim</span></h1>
          <p>Erzurum'un iklim şartlarına ve hayvan ırklarına en uygun rasyonlarla hazırlanmış, taze ve yüksek enerjili yem grupları.</p>
        </div>
      </section>

      {/* ÖZELLİKLER */}
      <section className="yem-features-row container">
        <div className="yem-f-card">
          <div className="yem-f-icon"><FaFlask /></div>
          <h3>Besin Analizli</h3>
          <p>Her çuvalda aynı protein ve enerji değerlerini garanti ediyoruz.</p>
        </div>
        <div className="yem-f-card">
          <div className="yem-f-icon"><FaTruckMoving /></div>
          <h3>Hızlı Sevkiyat</h3>
          <p>İşletmenize kadar kendi araçlarımızla güvenli teslimat sağlıyoruz.</p>
        </div>
        <div className="yem-f-card">
          <div className="yem-f-icon"><FaAward /></div>
          <h3>Güçlü Referans</h3>
          <p>Bölgedeki binlerce besicinin 20 yıldır değişmez tercihiyiz.</p>
        </div>
      </section>

      {/* --- FİLTRE ALANI --- */}
      <section className="advanced-filter container">
        <div className="filter-title"><FaFilter /> ÜRÜN FİLTRELEME</div>
        
        <div className="filter-wrapper">
          {/* 1. Kategori Seçimi */}
          <div className="filter-group">
            <span className="f-head">Hayvan Türü:</span>
            <div className="f-options">
              <button className={selectedCategory === 'all' ? 'active' : ''} onClick={() => setSelectedCategory('all')}>Tümü</button>
              <button className={selectedCategory === 'buyukbas' ? 'active' : ''} onClick={() => setSelectedCategory('buyukbas')}>Büyükbaş</button>
              <button className={selectedCategory === 'kucukbas' ? 'active' : ''} onClick={() => setSelectedCategory('kucukbas')}>Küçükbaş</button>
              <button className={selectedCategory === 'kanatli' ? 'active' : ''} onClick={() => setSelectedCategory('kanatli')}>Kanatlı</button>
            </div>
          </div>

          {/* 2. Marka Seçimi */}
          <div className="filter-group">
            <span className="f-head">Marka:</span>
            <div className="f-options">
              <button className={selectedBrand === 'all' ? 'active' : ''} onClick={() => setSelectedBrand('all')}>Tüm Markalar</button>
              <button className={selectedBrand === 'proyem' ? 'active' : ''} onClick={() => setSelectedBrand('proyem')}>Proyem</button>
            </div>
          </div>
        </div>
      </section>

      {/* ÜRÜN LİSTESİ */}
      <section className="yem-product-list container">
        <div className="section-title">
          <h2>{getTitle()}</h2>
          <div className="title-bar"></div>
        </div>

        {filteredProducts.length > 0 ? (
          filteredProducts.map(yem => (
            <div key={yem.id} className="yem-item-card">
              <div className="yem-item-image">
                <img src={yem.image} alt={yem.title} />
              </div>
              <div className="yem-item-details">
                <div className="yem-item-badge">
                  {yem.brand.toUpperCase()} | {yem.type === 'buyukbas' ? 'BÜYÜKBAŞ' : yem.type === 'kucukbas' ? 'KÜÇÜKBAŞ' : 'KANATLI'}
                </div>
                <h3>{yem.title}</h3>
                <p>{yem.desc}</p>
                <div className="yem-item-specs">
                  {yem.specs.map((s, i) => <span key={i} className="spec-tag">{s}</span>)}
                </div>
                <div className="yem-item-btns">
                  <Link to="/iletisim" state={{productName: yem.title}} className="yem-btn-main">
                    BİLGİ AL <FaArrowRight />
                  </Link>
                  <a href={`https://wa.me/+905305435341?text=${encodeURIComponent(yem.title)} hakkında bilgi almak istiyorum.`} className="yem-btn-wa">
                    <FaWhatsapp />
                  </a>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="no-result-box">
             <h3>Aradığınız kriterlere uygun ürün bulunamadı.</h3>
             <p>Filtreleri temizleyerek tekrar deneyebilirsiniz.</p>
             <button onClick={() => {setSelectedCategory('all'); setSelectedBrand('all')}}>Filtreleri Temizle</button>
          </div>
        )}
      </section>
    </div>
  );
};

export default YemGrubu;