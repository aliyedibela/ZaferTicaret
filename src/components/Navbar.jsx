import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaFileAlt } from 'react-icons/fa';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleClick = () => setClick(!click);
  
  const closeMobileMenu = () => {
    setClick(false);
    setActiveDropdown(null); 
  };

  const toggleDropdown = (menuName) => {
    if (activeDropdown === menuName) {
      setActiveDropdown(null); 
    } else {
      setActiveDropdown(menuName);
    }
  };
  const onMouseEnter = (menuName) => {
    if (window.innerWidth > 960) {
      setActiveDropdown(menuName);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960) {
      setActiveDropdown(null);
    }
  };

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

          <div className="menu-icon" onClick={handleClick}>
             {click ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>Anasayfa</Link>
            </li>
            
            <li className="nav-item dropdown-li" 
                onMouseEnter={() => onMouseEnter('kurumsal')}
                onMouseLeave={onMouseLeave}
            >
              <div className="nav-links dropdown-trigger" onClick={() => toggleDropdown('kurumsal')}>
                Kurumsal <FaChevronDown className="arrow-icon"/>
              </div>
              <ul className={activeDropdown === 'kurumsal' ? "dropdown-menu mobile-show" : "dropdown-menu"}>
                <li><Link to="/kurumsal/hakkimizda" onClick={closeMobileMenu}>Hakkımızda</Link></li>
                <li><Link to="/kurumsal/vizyon-misyon" onClick={closeMobileMenu}>Vizyon & Misyon</Link></li>
              </ul>
            </li>
            <li className="nav-item dropdown-li"
                onMouseEnter={() => onMouseEnter('urunler')}
                onMouseLeave={onMouseLeave}
            >
              <div className="nav-links dropdown-trigger" onClick={() => toggleDropdown('urunler')}>
                Ürünler <FaChevronDown className="arrow-icon" />
              </div>
              <ul className={activeDropdown === 'urunler' ? "dropdown-menu mobile-show" : "dropdown-menu"}>
                <li><Link to="/urunler/yem" onClick={closeMobileMenu}>Yem</Link></li>
                <li><Link to="/urunler/tohum" onClick={closeMobileMenu}>Tohum</Link></li>
                <li><Link to="/urunler/gubre" onClick={closeMobileMenu}>Gübre</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/iletisim" className="nav-links" onClick={closeMobileMenu}>İletişim</Link>
            </li>
            <li className="nav-item mobile-only">
               <Link to="/iletisim" className="btn-mobile" onClick={closeMobileMenu}>BİZE ULAŞIN</Link>
            </li>
            <li className="nav-item mobile-only" style={{ marginTop: '15px' }}>
               <a 
                 href="/assets/docs/ZaferTicaretEKatalog.pdf" 
                 target="_blank" 
                 className="btn-mobile" 
                 style={{ 
                   background: 'var(--wheat)', 
                   color: 'white', 
                   display: 'flex', 
                   alignItems: 'center', 
                   justifyContent: 'center', 
                   gap: '10px' 
                 }} 
                 onClick={closeMobileMenu}
               >
                 E-KATALOG<FaFileAlt />
               </a>
            </li>

          </ul>
        </div>
        <div className="nav-right-content">
          <a href="tel:+905305435341" className="info-group">
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

      </div>
    </nav>
  );
};

export default Navbar;