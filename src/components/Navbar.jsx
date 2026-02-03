import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const toggleDropdown = () => setDropdown(!dropdown);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={scrolled ? 'navbar scrolled' : 'navbar'}>
      
      <div className="nav-slant-bg"></div>

      <div className="nav-container">
        
        <div className="nav-left">
          <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
            <img src="/favicon.png" alt="Zafer Ticaret" className="logo-img" />
            
            <div className="logo-text">
              <span className="brand">ZAFER</span>
              <span className="sub">TİCARET</span>
            </div>
          </Link>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Anasayfa</Link>
            </li>

            <li className="nav-item dropdown-li" 
                onMouseEnter={() => window.innerWidth > 960 && setDropdown(true)}
                onMouseLeave={() => window.innerWidth > 960 && setDropdown(false)}
            >
              <div className="nav-links dropdown-trigger" onClick={toggleDropdown}>
                Kurumsal <FaChevronDown className="arrow-icon"/>
              </div>
              {(dropdown || window.innerWidth > 960) && (
                <ul className={window.innerWidth <= 960 && dropdown ? "dropdown-menu mobile-show" : "dropdown-menu"}>
                  <li><Link to="/kurumsal/hakkimizda" onClick={closeMobileMenu}>Hakkımızda</Link></li>
                  <li><Link to="/kurumsal/vizyon-misyon" onClick={closeMobileMenu}>Vizyon & Misyon</Link></li>
                </ul>
              )}
            </li>

          <li
  className="nav-item dropdown-li"
  onMouseEnter={() => window.innerWidth > 960 && setDropdown(true)}
  onMouseLeave={() => window.innerWidth > 960 && setDropdown(false)}
>
  <div className="nav-links dropdown-trigger" onClick={toggleDropdown}>
    Ürünler <FaChevronDown className="arrow-icon" />
  </div>

  {(dropdown || window.innerWidth > 960) && (
    <ul
      className={
        window.innerWidth <= 960 && dropdown
          ? "dropdown-menu mobile-show"
          : "dropdown-menu"
      }
    >
      <li>
        <Link to="/urunler/yem" onClick={closeMobileMenu}>
          Yem
        </Link>
      </li>
      <li>
        <Link to="/urunler/tohum" onClick={closeMobileMenu}>
          Tohum
        </Link>
      </li>
      <li>
        <Link to="/urunler/gubre" onClick={closeMobileMenu}>
          Gübre
        </Link>
      </li>
    </ul>
  )}
</li>
            <li className="nav-item">
              <Link to="/iletisim" className="nav-links" onClick={closeMobileMenu}>İletişim</Link>
            </li>

            <li className="nav-item mobile-only">
               <Link to="/teklif-al" className="btn-mobile" onClick={closeMobileMenu}>FİYAT LİSTESİ</Link>
            </li>
          </ul>
        </div>
        <div className="nav-right-content">
          <a href="tel:04421234567" className="info-group">
            <div className="icon-box"><FaPhoneAlt /></div>
            <div className="text-box">
              <span className="label">Bize Ulaşın</span>
              <span className="value">+90 (530) 543 53 41</span>
            </div>
          </a>

        <a 
  href="/assets/docs/ZaferTicaretEKatalog.pdf" 
  target="_blank" 
  rel="noopener noreferrer" 
  className="btn-header"
>
  E-KATALOG <FaFileAlt />
</a>
        </div>
        <div className="menu-icon" onClick={handleClick}>
           {click ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;