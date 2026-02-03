import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Hero from './components/Hero'; 
import HomeContent from './components/HomeContent';
import Footer from './components/Footer'; 
import Contact from './pages/Contact';
import YemGrubu from './pages/YemGrubu';
import About from './pages/About'; 
import VisionMission from './pages/VisionMission'; 
import TohumGrubu from './pages/TohumGrubu';
import GubreGrubu from './pages/GubreGrubu';

function App() {
  return (
    <div className="app-container">
      <Navbar /> 
      
      <Routes>
                <Route path="/" element={<>
            <Hero />
            <HomeContent />
                                      </>
                        } />

                <Route path="/urunler" element={<Products />} />
                <Route path="/urunler/yem" element={<YemGrubu />} />
                <Route path="/urunler/tohum" element={<TohumGrubu />} />
                <Route path="/urunler/gubre" element={<GubreGrubu />} />
                <Route path="/kurumsal/hakkimizda" element={<About />} />
                <Route path="/iletisim" element={<Contact />} />
                <Route path="/kurumsal/vizyon-misyon" element={<VisionMission />} />

      </Routes>
      <Footer />

    </div>
  );
}

export default App;