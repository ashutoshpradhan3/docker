import React from 'react';
import '../Testimonials.css';
import rv from '../assets1/rv.png';
import as from '../assets1/as.png';
import vs from '../assets1/vs.png';
import ashutosh from '../assets1/ashutosh.png';
import krishna from '../assets1/krishna.png';
import ayush from '../assets1/ayush.png';
import arnav from '../assets1/arnav.png';
import om from '../assets1/om.png';

function Testimonials() {
  const testimonials = [
    {
      name: 'Amit Sharma',
      feedback: 'The quality of the tiles from Nalanda Ceramics is unmatched! Our home looks beautiful, thanks to their products.',
      image: as,
    },
    {
      name: 'Riya Verma',
      feedback: 'Excellent service and a fantastic selection of marbles! I highly recommend them to anyone looking for top-notch ceramics.',
      image: rv,
    },
    {
      name: 'Vikram Singh',
      feedback: 'Nalanda Ceramics provided us with the perfect bathtub. Their product quality and customer support are excellent!',
      image: vs,
    },
    {
      name: 'Ashutosh Pradhan',
      feedback: 'I was impressed with the tile designs and durability. Nalanda Ceramics exceeded my expectations, and I love how it transformed my space!',
      image: ashutosh,
    },
    {
      name: 'Krishna Kashyap',
      feedback: 'The flooring options at Nalanda Ceramics were amazing. Our new floor looks luxurious, and the installation was smooth and professional.',
      image: krishna,
    },
    {
      name: 'Ayush',
      feedback: 'Great selection and excellent quality! We chose tiles for our office space, and they added a modern and stylish look we wanted.',
      image: ayush,
    },
    {
      name: 'Arnav Raj',
      feedback: 'Their granite countertops were exactly what we were looking for. Perfect quality and quick delivery—would buy from them again!',
      image: arnav,
    },
    {
      name: 'Om sharma',
      feedback: 'Nalanda Ceramics offers unique and beautiful options! The team helped us pick the right products, and our kitchen looks fantastic!',
      image: om,
    }
    
  ];

  return (
    <section id="testimonials" className="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonial-wrapper">
        <div className="testimonial-cards">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div
              className="testimonial-card"
              key={index}
              style={{
                animationDelay: `${index}s`, // Delay animation based on index
              }}
            >
              <img src={testimonial.image} alt={testimonial.name} />
              <h3>{testimonial.name}</h3>
              <p>"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
