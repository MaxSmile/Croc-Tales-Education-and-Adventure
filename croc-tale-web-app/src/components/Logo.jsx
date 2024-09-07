// src/components/Logo.jsx
import React from 'react';
import logo from '../assets/logo.png';

const Logo = () => {
  return (
    <img src={logo} alt="Croc Tales Logo" 
    className="w-12 h-12 rounded-full" width="50" height="50" />
  );
};

export default Logo;
