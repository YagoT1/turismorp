// src/components/HomeWrapper.jsx
import Navbar from './Navbar';
import Hero from './Hero';

const HomeWrapper = () => {
  return (
    <div 
      className="w-full bg-cover bg-center bg-no-repeat bg-fixed" 
      style={{ backgroundImage: "url('/bgrp.jpg')" }}
    >
      <Navbar />
      <Hero />
    </div>
  );
};

export default HomeWrapper;