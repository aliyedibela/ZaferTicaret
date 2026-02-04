import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Products.css';
import { FaLeaf, FaTractor, FaSeedling, FaArrowRight, FaWhatsapp } from 'react-icons/fa';

const Products = () => {
  const [category, setCategory] = useState('all');

  const yemUrunleri = [
    { id: 1, title: 'Proyem Mat Besi', brand: 'proyem', type: 'buyukbas', desc: 'Ekonomik ve dengeli besleme sağlayan, besi performansını destekleyen standart besi yemi.', specs: ['Ekonomik Seri', 'Standart Besi', 'Dengeli Enerji'], image: '/assets/images/matbesi.png' },
    { id: 2, title: 'Proyem Şah Besi', brand: 'proyem', type: 'buyukbas', desc: 'Besi sığırlarının ihtiyaç duyduğu enerji ve proteini karşılayan güçlü besi yemi.', specs: ['Yüksek Randıman', 'Hızlı Kilo', 'Şah Performans'], image: '/assets/images/sah.png' },
    { id: 3, title: 'Proyem Spr Tosun', brand: 'proyem', type: 'buyukbas', desc: 'Besinin son dönemlerinde maksimum canlı ağırlık artışı için özel formül.', specs: ['Süper Performans', 'Bitiş Dönemi', 'Karkas Kalitesi'], image: '/assets/images/sprtosun.png' },
    { id: 4, title: 'Proyem Tahıl Besi', brand: 'proyem', type: 'buyukbas', desc: 'Tahıl ağırlıklı besleme yapan işletmeler için özel olarak dengelenmiş konsantre yem.', specs: ['Tahıl Takviyeli', 'Yoğun Enerji', 'Özel Rasyon'], image: '/assets/images/tahilbesi.png' },
    { id: 5, title: 'Proyem Tane Besi', brand: 'proyem', type: 'buyukbas', desc: 'Besi hayvanlarının tane yem ihtiyacını karşılayan, sindirilebilirliği yüksek ürün.', specs: ['Tane Yapılı', 'Kolay Sindirim', 'İştah Açıcı'], image: '/assets/images/tanebesi.png' },
    { id: 6, title: 'Proyem Tosun', brand: 'proyem', type: 'buyukbas', desc: 'Genç tosunların iskelet ve kas yapısını güçlendiren, gelişimi hızlandıran yem.', specs: ['Genç Besi', 'Kas Gelişimi', 'Sağlam İskelet'], image: '/assets/images/tosun.png' },
    { id: 7, title: 'Proyem Aktif Süt', brand: 'proyem', type: 'buyukbas', desc: 'Orta verimli inekler için ideal, süt verimini ve kalitesini koruyan yem.', specs: ['Aktif Verim', 'Ekonomik Süt', 'Sağmal İnek'], image: '/assets/images/aktif.png' },
    { id: 8, title: 'Proyem Çizgi Süt', brand: 'proyem', type: 'buyukbas', desc: 'Sürdürülebilir süt verimi için özel olarak tasarlanmış, istikrarlı bir yem.', specs: ['Çizgi Koruma', 'Dengeli Protein', 'Laktasyon Boyu'], image: '/assets/images/cizgi.png' },
    { id: 9, title: 'Proyem Enerji Süt', brand: 'proyem', type: 'buyukbas', desc: 'Yüksek süt verimine sahip ineklerin enerji açığını kapatan özel seri.', specs: ['Yüksek Enerji', 'Negatif Enerjiyi Önler', 'Pik Dönemi'], image: '/assets/images/enerji.png' },
    { id: 10, title: 'Proyem Kanıt Süt', brand: 'proyem', type: 'buyukbas', desc: 'Kalitesi kanıtlanmış, verim artışı sağlayan profesyonel süt yemi.', specs: ['Kanıtlanmış Kalite', 'Yüksek Protein', 'Meme Sağlığı'], image: '/assets/images/kanit.png' },
    { id: 11, title: 'Proyem Pro 41', brand: 'proyem', type: 'buyukbas', desc: 'Özel çiftlikler için 4x4 lük performans sağlayan üst segment süt yemi.', specs: ['Profesyonel Seri', 'Maksimum Verim', 'Pro Kalite'], image: '/assets/images/pro41.png' },
    { id: 12, title: 'Proyem Pro 4x4', brand: 'proyem', type: 'buyukbas', desc: 'Her yönüyle tam besleme sağlayan, yüksek verimli sürüler için premium yem.', specs: ['Dört Dörtlük', 'Tam Besleme', 'Zirve Performans'], image: '/assets/images/pro4x4.png' },
    { id: 13, title: 'Proyem Tane Süt', brand: 'proyem', type: 'buyukbas', desc: 'Tane yapısı sayesinde hayvanların severek tükettiği, verim artıran yem.', specs: ['Tane Form', 'Yüksek Lezzet', 'Kolay Tüketim'], image: '/assets/images/tanesut.png' },
    { id: 14, title: 'Proyem Verim Süt', brand: 'proyem', type: 'buyukbas', desc: 'İşletme karlılığını düşünenler için fiyat/performans odaklı verim yemi.', specs: ['Fiyat/Performans', 'Verim Odaklı', 'Standart Süt'], image: '/assets/images/verim.png' },
    { id: 15, title: 'Proyem Balans', brand: 'proyem', type: 'buyukbas', desc: 'Rasyon dengesini sağlayan, sindirim sorunlarını önleyen tamamlayıcı yem.', specs: ['Rasyon Dengeleyici', 'Asidoz Önleyici', 'Sindirim Dostu'], image: '/assets/images/balans.png' },
    { id: 16, title: 'Proyem Doğuş', brand: 'proyem', type: 'buyukbas', desc: 'Buzağıların hayata sağlıklı başlaması için özel formüle edilmiş başlangıç yemi.', specs: ['Buzağı Başlangıç', 'Bağışıklık Güçlendirici', 'Hızlı Gelişim'], image: '/assets/images/dogus.png' },
    { id: 18, title: 'Proyem Protek Besi', brand: 'proyem', type: 'buyukbas', desc: 'Besideki hayvanlar için protein destekli özel gelişim yemi.', specs: ['Protek Serisi', 'Besi Desteği', 'Kas Yapıcı'], image: '/assets/images/protek.png' },
    { id: 19, title: 'Proyem Düve Yemi', brand: 'proyem', type: 'buyukbas', desc: 'Damızlık değeri yüksek düvelerin ideal kondisyonda gelişmesini sağlar.', specs: ['Düve Gelişim', 'İdeal Kondisyon', 'Döl Verimi'], image: '/assets/images/duve.png' },
    { id: 20, title: 'Proyem Kuru Dönem', brand: 'proyem', type: 'buyukbas', desc: 'Doğuma hazırlanan ineklerin metabolik sağlığını koruyan özel yem.', specs: ['Doğum Hazırlık', 'Metabolik Denge', 'Sağlıklı Buzağı'], image: '/assets/images/kurudonem.png' },
    { id: 21, title: 'Proyem Son 60', brand: 'proyem', type: 'buyukbas', desc: 'Gebeliğin son 2 ayında (Son 60 gün) anneyi ve yavruyu destekleyen yem.', specs: ['Gebelik Sonu', 'Güçlü Anne', 'Canlı Yavru'], image: '/assets/images/son60.png' },
    { id: 22, title: 'Proyem Tutku', brand: 'proyem', type: 'buyukbas', desc: 'Hayvanların iştahla tükettiği, besleyiciliği yüksek özel karışım.', specs: ['Yüksek İştah', 'Tutkulu Tüketim', 'Özel Aroma'], image: '/assets/images/tutku.png' },
    { id: 23, title: 'Proyem Vira', brand: 'proyem', type: 'buyukbas', desc: 'Laktasyon başlangıcında veya beside start vermek için kullanılan yem.', specs: ['Hızlı Başlangıç', 'Vira Bismillah', 'Enerji Deposu'], image: '/assets/images/vira.png' },
    { id: 24, title: 'Proyem Skor', brand: 'proyem', type: 'buyukbas', desc: 'İşletmenizin üretim skorunu yükselten, sonuç odaklı performans yemi.', specs: ['Skor Odaklı', 'Yüksek Kazanç', 'Tam Verim'], image: '/assets/images/skor.png' },
    { id: 25, title: 'Proyem Toklu', brand: 'proyem', type: 'kucukbas', desc: 'Kuzuların toklu döneminde hızlı gelişimini sağlayan özel besi yemi.', specs: ['Toklu Besi', 'Hızlı Kilo', 'Küçükbaş Özel'], image: '/assets/images/toklu.png' },
    { id: 26, title: 'Proyem Keçi Süt', brand: 'proyem', type: 'kucukbas', desc: 'Süt keçilerinin yüksek verim ve süt kalitesi için özel formüle edilmiştir.', specs: ['Keçi Özel', 'Yüksek Yağ', 'Lezzetli Süt'], image: '/assets/images/kecisut.png' },
    { id: 27, title: 'Proyem Koyun Süt', brand: 'proyem', type: 'kucukbas', desc: 'Sağmal koyunların süt verimini artıran ve kondisyonunu koruyan yem.', specs: ['Koyun Özel', 'Süt Artışı', 'Sağlıklı Sürü'], image: '/assets/images/koyunsut.png' },
    { id: 28, title: 'Proyem Etlik 1 (Civciv)', brand: 'proyem', type: 'kanatli', desc: 'Etlik civcivlerin ilk haftalarda hızlı ve sağlıklı gelişimi için başlangıç yemi.', specs: ['Etlik Başlangıç', 'Hızlı Büyüme', 'Yüksek Protein'], image: '/assets/images/etlik1.png' },
    { id: 29, title: 'Proyem Etlik 2 (Piliç)', brand: 'proyem', type: 'kanatli', desc: 'Etlik piliçlerin kesim öncesi dönemde et tutmasını sağlayan büyütme yemi.', specs: ['Etlik Büyütme', 'Et Kalitesi', 'Maksimum Ağırlık'], image: '/assets/images/etlik2.png' },
    { id: 30, title: 'Proyem Köy Tavuğu 1', brand: 'proyem', type: 'kanatli', desc: 'Doğal ortamda yetişen köy civcivleri için özel başlangıç yemi.', specs: ['Köy Tipi', 'Doğal Besleme', 'Civciv Yemi'], image: '/assets/images/koytavugu1.png' },
    { id: 31, title: 'Proyem Köy Tavuğu 2', brand: 'proyem', type: 'kanatli', desc: 'Yetişkin köy tavuklarının yumurta ve et verimini destekleyen yem.', specs: ['Köy Tipi', 'Yetişkin Tavuk', 'Dengeli Besin'], image: '/assets/images/koytavugu2.png' },
    { id: 32, title: 'Proyem Yumurtacı 1', brand: 'proyem', type: 'kanatli', desc: 'Yumurta tavuğu civcivlerinin yumurtlama dönemine sağlıklı hazırlanması için.', specs: ['Yumurta Başlangıç', 'İskelet Gelişimi', 'Sağlıklı Büyüme'], image: '/assets/images/yumurtaci1.png' },
    { id: 33, title: 'Proyem Yumurtacı 2', brand: 'proyem', type: 'kanatli', desc: 'Yumurtlama dönemindeki tavuklar için kabuk kalitesini ve verimi artıran yem.', specs: ['Yumurta Verim', 'Sarı Yumurta', 'Güçlü Kabuk'], image: '/assets/images/yumurtaci2.png' },
  ];

  const gubreUrunleri = [
    { id: 1, title: 'Yeşil Başak NPK 15-15-15 (+15 SO₃)', brand: 'yesilbasak', category: 'taban', desc: 'Bitkinin her döneminde ihtiyaç duyduğu azot, fosfor ve potasyumu dengeli sağlayan kompoze gübre.', specs: ['15-15-15 Dengeli', 'Kükürt İlaveli', 'Taban Gübresi'], image: '/assets/images/yb_151515.png' },
    { id: 2, title: 'Yeşil Başak NPK 12-15-5 (Leonarditli)', brand: 'yesilbasak', category: 'taban', desc: 'Leonardit katkısı sayesinde toprağın organik yapısını düzenleyen ve besleyen özel formül.', specs: ['Leonarditli', 'Toprak Düzenleyici', 'Organomineral'], image: '/assets/images/yb_12515.png' },
    { id: 3, title: 'Yeşil Başak NP 16-15-0 (Leonarditli)', brand: 'yesilbasak', category: 'taban', desc: 'Azot ve fosfor ihtiyacını karşılarken toprağı canlandıran leonarditli taban gübresi.', specs: ['Azot & Fosfor', 'Kök Gelişimi', 'Leonardit Etkisi'], image: '/assets/images/yb_16150.png' },
    { id: 4, title: 'Yeşil Başak NPK 11-11-11 (Leonarditli)', brand: 'yesilbasak', category: 'taban', desc: 'Düşük tuz indeksi ve organik içerik ile toprağı yormadan besleyen dengeli gübre.', specs: ['Dengeli Formül', 'Organik Katkı', 'Tuzluluğu Azaltır'], image: '/assets/images/yb_111111.png' },
    { id: 5, title: 'Yeşil Başak NK 8-20-0 (Leonarditli)', brand: 'yesilbasak', category: 'taban', desc: 'Fosfor ağırlıklı, köklenmeyi teşvik eden ve leonardit ile toprağı iyileştiren gübre.', specs: ['Yüksek Fosfor', 'Güçlü Kök', 'Toprak Islahı'], image: '/assets/images/yb_8200.png' },
    { id: 6, title: 'Yeşil Başak Süper Kompoze 16-15-0 + Zn', brand: 'yesilbasak', category: 'taban', desc: 'Çinko (Zn) katkısı ile tahıllarda kardeşlenmeyi ve verimi artıran süper kompoze.', specs: ['Çinko Katkılı', 'Süper Verim', 'Tahıl Özel'], image: '/assets/images/yb_16150zn.png' },
    { id: 7, title: 'Yeşil Başak DAP 18-46-0', brand: 'yesilbasak', category: 'taban', desc: 'Yüksek fosfor içeriği ile kök gelişimini ve çiçeklenmeyi maksimuma çıkaran klasik gübre.', specs: ['%46 Fosfor', 'Hızlı Köklenme', 'Diamonyum Fosfat'], image: '/assets/images/yb_dap.png' },
    { id: 10, title: 'Yeşil Başak Nitro Star (Azot)', brand: 'yesilbasak', category: 'ust', desc: 'Bitkinin yeşil aksamını geliştiren, hızlı etkili özel azot kaynağı.', specs: ['Hızlı Yeşerme', 'Nitro Güç', 'Üst Gübre'], image: '/assets/images/yb_nitrostar.png' },
    { id: 11, title: 'Yeşil Başak Süper Granül Azot (%20 N)', brand: 'yesilbasak', category: 'ust', desc: 'Amonyum Sülfat bazlı, kükürt içeren ve toprağın pH dengesini düzenleyen gübre.', specs: ['Şeker Gübre', 'pH Düzenleyici', '%20 Azot'], image: '/assets/images/yb_supergranul.png' },
    { id: 12, title: 'Yeşil Başak Granül Üre', brand: 'yesilbasak', category: 'ust', desc: 'En yüksek azot içeriğine (%46) sahip, bitki boyunu ve gelişimini artıran üre gübresi.', specs: ['%46 Azot', 'Granül Yapı', 'Güçlü Gelişim'], image: '/assets/images/yb_ure.png' },
    { id: 13, title: 'Yeşil Başak ASN 26 Azot', brand: 'yesilbasak', category: 'ust', desc: 'Hem nitrat hem amonyum azotu içeren, yıkanmaya dayanıklı Amonyum Nitrat Sülfat.', specs: ['Çift Etkili Azot', 'Verim Artırıcı', 'ASN 26'], image: '/assets/images/yb_asn26.png' },
    { id: 14, title: 'Yeşil Başak %20 Granül Amonyum Sülfat', brand: 'yesilbasak', category: 'ust', desc: 'Halk arasında şeker gübre olarak bilinen, kireçli topraklara ilaç gibi gelen gübre.', specs: ['Kireç Çözücü', 'Sülfatlı', 'Granül Yapı'], image: '/assets/images/yb_as20.png' }
  ];

  const tohumUrunleri = [
    { id: 1, title: 'Sertifikalı Ekmeklik Buğday', desc: 'Kışlık ekime uygun, soğuğa ve kuraklığa dayanıklı, yüksek glüten değerli ekmeklik buğday tohumu.', specs: ['Sertifikalı', 'Yüksek Verim', 'Hastalıklara Dayanıklı'], image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=1925&auto=format&fit=crop' },
    { id: 2, title: 'Hibrit Silajlık Mısır', desc: 'Bol yapraklı, yüksek boylu ve yüksek enerji değerine sahip silajlık mısır tohumu çeşitleri.', specs: ['Hızlı Gelişim', 'Yüksek Tonaj', 'ADF/NDF Dengeli'], image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?q=80&w=1770&auto=format&fit=crop' }
  ];

  const products = [
    ...yemUrunleri.map(item => ({ ...item, category: 'yem', badge: 'PROYEM' })),
    
    ...gubreUrunleri.map(item => ({ ...item, id: item.id + 100, category: 'gubre', badge: 'YEŞİL BAŞAK' })),

    ...tohumUrunleri.map(item => ({ ...item, id: item.id + 200, category: 'tohum', badge: 'SERTİFİKALI' }))
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
                <img 
                  src={product.image} 
                  alt={product.title} 
                  onError={(e) => {e.target.src = '/assets/images/yemsection.png';}}
                />
                <div className="card-badge">{product.badge}</div>
              </div>
              <div className="card-body">
                <span className="card-cat">
                  {product.category === 'yem' ? 'YEM GRUBU' : product.category === 'tohum' ? 'TOHUM' : 'GÜBRE'}
                </span>
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