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
import DetailPage from './components/DetailPage';

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
          {/* Routes for detailed pages for company and product-specific views */}
          <Route path="/company/:companyName" element={<DetailPage />} />
          <Route path="/product/:productName" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


