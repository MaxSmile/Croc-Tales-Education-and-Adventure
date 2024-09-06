// src/layouts/Layout.jsx
import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; 
import Footer from '../components/Footer';
import Header from '../components/Header';

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);

  // Firebase Authentication listener
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // User is authenticated
      } else {
        setUser(null); // User is not authenticated
      }
    });

    return () => unsubscribe(); // Clean up the listener on unmount
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header user={user} />

      
      <main className="container mx-auto p-4 flex-grow">
        {children}
      </main>

      <Footer />
      
    </div>
  );
};

export default Layout;
