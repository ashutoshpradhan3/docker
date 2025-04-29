import React, { useState, useEffect } from 'react';
import '../Hero.css';

function Hero() {
  const words = ["Elegant Designs", "Timeless Quality", "Prime Quality", "Luxury Styles"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [words.length]);

  const handleButtonClick = () => {
    const productSection = document.getElementById("products"); // Refers to the id in ProductHighlights.js
    if (productSection) {
      productSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <h1>
          Transform Your Spaces with{" "}
          <span className="rotating-text">{words[currentWordIndex]}</span>
        </h1>
        <p>Top Quality Tiles, Marbles, and Bathtubs from the Heart of Patna</p>
        <button className="cta-button" onClick={handleButtonClick}>
          View Our Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;
