// src/App.js
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';

// Use lazy loading for main and non-essential components
const Hero = lazy(() => import('./components/Hero'));
const ProductHighlights = lazy(() => import('./components/ProductHighlights'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const Footer = lazy(() => import('./components/Footer'));

// Lazy load company-specific pages
const Somany = lazy(() => import('./components/Companies/Somany'));
const Jaquar = lazy(() => import('./components/Companies/Jaquar'));
const Kajaria = lazy(() => import('./components/Companies/Kajaria'));
const Orient = lazy(() => import('./components/Companies/Orient'));
const Agl = lazy(() => import('./components/Companies/Agl'));
const Cera = lazy(() => import('./components/Companies/Cera'));
const Jhonson = lazy(() => import('./components/Companies/Johnson'));
const Bajaj = lazy(() => import('./components/Companies/Bajaj'));

// Lazy load product-specific pages
const Showers = lazy(() => import('./components/Products/Showers'));
const Bathtubs = lazy(() => import('./components/Products/Bathtubs'));
const Bathsink = lazy(() => import('./components/Products/Bathsink'));
const Fauecets = lazy(() => import('./components/Products/Faucets'));
const Tiles = lazy(() => import('./components/Products/Tiles'));
const Marble = lazy(() => import('./components/Products/Marble'));
const Granite = lazy(() => import('./components/Products/Granite'));
const Sanitary = lazy(() => import('./components/Products/Sanitary'));

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
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

            {/* Product-specific routes */}
            <Route path="/product/showers" element={<Showers />} />
            <Route path="/product/bathtubs" element={<Bathtubs />} />
            <Route path="/product/bathsink" element={<Bathsink />} />
            <Route path="/product/faucets" element={<Fauecets />} />
            <Route path="/product/tiles" element={<Tiles />} />
            <Route path="/product/marble" element={<Marble />} />
            <Route path="/product/granite" element={<Granite />} />
            <Route path="/product/sanitary" element={<Sanitary />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
