// src/pages/Home.jsx
import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto text-center py-10">
        {/* Main Features at a Glance */}
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Welcome to Croc Tales</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Start Your Adventure */}
          <Link to="/quiz" className="bg-green-500 text-white p-6 rounded shadow-lg hover:bg-green-600 transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">Start Your Adventure</h2>
            <p>Begin exploring by taking your first quiz or viewing the map.</p>
          </Link>

          {/* Explore Croc Locations */}
          <Link to="/explore" className="bg-blue-500 text-white p-6 rounded shadow-lg hover:bg-blue-600 transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">Explore Croc Locations</h2>
            <p>View the interactive map of crocodile statues across the Northern Territory.</p>
          </Link>

          {/* View Achievements */}
          <Link to="/achievements" className="bg-yellow-500 text-white p-6 rounded shadow-lg hover:bg-yellow-600 transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">View Achievements</h2>
            <p>Check your progress and unlock achievements and badges.</p>
          </Link>

          {/* Crocwise Tips */}
          <div className="bg-[#e48557] text-white p-6 rounded shadow-lg">
            <h2 className="text-2xl font-semibold mb-2">Crocwise Tips</h2>
            <CrocwiseTips />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

// Crocwise Tips Component
const CrocwiseTips = () => {
  const tips = [
    "Stay at least 5 meters from the water’s edge.",
    "Always check for crocodile warning signs.",
    "Never swim in areas known for crocodiles.",
    "Dispose of food and bait scraps in bins.",
    "Keep pets away from water’s edge."
  ];

  return (
    <div className="mt-4">
      <div className="overflow-hidden h-20">
        <ul className="animate-marquee">
          {tips.map((tip, index) => (
            <li key={index} className="mb-2 text-left text-sm">
              • {tip}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// CSS for Crocwise Tips (add to your tailwind config or custom CSS file)
// Example Tailwind-style animation for a scrolling tips effect
<style jsx>{`
  .animate-marquee {
    animation: marquee 10s linear infinite;
  }

  @keyframes marquee {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`}</style>
