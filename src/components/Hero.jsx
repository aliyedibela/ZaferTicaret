import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import './Hero.css';
import { FaArrowRight, FaLeaf } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  
  const slides = [
    {
      id: 1,
      image: "/assets/images/slide1.png", 
      title: "TOPRAĞIN BEREKETİ, GÜVENİN ADRESİ",
      subtitle: "Zafer Ticaret ile tarımda verimliliği zirveye taşıyın.",
      btnText: "ÜRÜNLERİMİZİ İNCELE",
      btnLink: "/urunler"
    },
    {
      id: 2,
      image: "/assets/images/slide2.png", 
      title: "YÜKSEK VERİMLİ YEM ÇEŞİTLERİ",
      subtitle: "Büyükbaş ve küçükbaş hayvanlarınız için en kaliteli besin kaynakları.",
      btnText: "YEM GRUBU",
      btnLink: "/urunler/yem"
    },
    {
      id: 3,
      image: "/assets/images/slide3.png", 
      title: "SERTİFİKALI TOHUM VE GÜBRE",
      subtitle: "Hasat zamanı yüzünüzü güldürecek çözümler burada.",
      btnText: "TOHUM GRUBU",
      btnLink: "/urunler/tohum"
    }
  ];

  return (
    <div className="hero-section">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        loop={true}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide" style={{ backgroundImage: `url(${slide.image})` }}>
              
              <div className="overlay"></div>

              <div className="hero-content">
                <div className="hero-badge">
                  <FaLeaf /> ZAFER TİCARET
                </div>

                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>

                <div className="hero-btns">
                  <Link to={slide.btnLink} className="btn-hero primary">
                    {slide.btnText} <FaArrowRight />
                  </Link>
                  <Link to="/iletisim" className="btn-hero secondary">
                    BİZE ULAŞIN
                  </Link>
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;