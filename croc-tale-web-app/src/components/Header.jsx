// src/components/Header.jsx
import React from 'react';
import Navbar from './Navbar';
import Logo from './Logo'; 

export default function Header({ user }) {
  return (
    <header className="bg-[#e48557] shadow">
      <div className="container mx-auto flex justify-between items-center p-4">
        <a href="/" className="text-xl font-bold flex items-center"><Logo />&nbsp;<span> Croc Tales Home</span> </a> 
        <Navbar user={user} />
      </div>
    </header>
  );
}
