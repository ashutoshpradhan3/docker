// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductHighlights from './components/ProductHighlights';
import AboutUs from './components/AboutUs';
import Testimonials from './components/Testimonials';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

// Import individual company pages
import Somany from './components/Companies/Somany'
import Jaquar from './components/Companies/Jaquar'
import Kajaria from './components/Companies/Kajaria'
import Orient from './components/Companies/Orient'
import Agl from './components/Companies/Agl'
import Cera from './components/Companies/Cera'
import Jhonson from './components/Companies/Johnson'
import Bajaj from './components/Companies/Bajaj'
// ... Import other company pages similarly




// Import individual product pages
import Showers from './components/Products/Showers'
import Bathtubs from './components/Products/Bathtubs'
import Bathsink from './components/Products/Bathsink';
import Fauecets from './components/Products/Faucets'
import Tiles from './components/Products/Tiles'
import Marble from './components/Products/Marble'
import Granite from './components/Products/Granite';
import Sanitary from './components/Products/Sanitary'
// ... Import other product pages similarly

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          {/* Main homepage route displaying all the main sections */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <ProductHighlights />
                <AboutUs />
                <Testimonials />
                <ContactUs />
                <Footer />
              </>
            }
          />

          {/* Company-specific routes */}
          <Route path="/company/somany" element={<Somany />} />
          <Route path="/company/jaquar" element={<Jaquar />} />
          <Route path="/company/kajaria" element={<Kajaria />} />
          <Route path="/company/orient" element={<Orient />} />
          <Route path="/company/agl" element={<Agl />} />
          <Route path="/company/cera" element={<Cera />} />
          <Route path="/company/johnson" element={<Jhonson />} />
          <Route path="/company/bajaj" element={<Bajaj />} />
          {/* Add routes for other companies here */}

          {/* Product-specific routes */}
          <Route path="/product/showers" element={<Showers />} />
          <Route path="/product/bathtubs" element={<Bathtubs />} />
          <Route path="/product/bathsink" element={<Bathsink />} />
          <Route path="/product/faucets" element={<Fauecets />} />
          <Route path="/product/tiles" element={<Tiles />} />
          <Route path="/product/marble" element={<Marble />} />
          <Route path="/product/granite" element={<Granite />} />
          <Route path="/product/sanitary" element={<Sanitary />} />
          {/* Add routes for other products here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
