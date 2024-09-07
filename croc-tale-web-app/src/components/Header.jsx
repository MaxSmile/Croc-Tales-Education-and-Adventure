// src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo'; 

export default function Header({ user }) {
  return (
    <header className="bg-ntOrange shadow" id="header">
      <div className="container mx-auto flex justify-between items-center p-4 text-white">
        <a href="/" className="text-xl font-bold flex items-center hover:text-gray-200"><Logo />&nbsp;<span> Croc Tales</span> </a> 
        <Navbar user={user} />
      </div>
    </header>
  );
}
