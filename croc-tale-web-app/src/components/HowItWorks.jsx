// src/components/HowItWorks.jsx

import React from 'react';
import { FaMapMarkerAlt, FaQuestionCircle, FaTrophy } from 'react-icons/fa';

const HowItWorks = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">How It Works</h2>

        {/* Step-by-Step Explanation */}
        <div className="flex flex-col lg:flex-row justify-around items-center">
          
          {/* Step 1 */}
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <FaMapMarkerAlt className="text-ntOrange text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Explore NT Cities</h3>
            <p className="text-lg text-gray-600">
              Find and scan crocodile statues using our mobile-friendly web app.
            </p>
          </div>
          
          {/* Step 2 */}
          <div className="flex flex-col items-center mb-8 lg:mb-0">
            <FaQuestionCircle className="text-ntOrange text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Learn Crocwise</h3>
            <p className="text-lg text-gray-600">
              Complete quizzes and unlock essential crocodile safety tips.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center">
            <FaTrophy className="text-ntOrange text-6xl mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Collect Rewards</h3>
            <p className="text-lg text-gray-600">
              Earn badges, share achievements, and explore more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
