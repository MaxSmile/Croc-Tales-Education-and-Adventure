// src/components/ProjectIntroduction.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const ProjectIntroduction = () => {
  return (
    <section className="bg-gray-100 py-12 my-8">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">What is Croc Tales?</h2>

        {/* Project Introduction Text */}
        <p className="text-lg mb-8 text-gray-700 max-w-3xl mx-auto">
          Croc Tales: Education and Adventure is an interactive initiative that combines exploration, education, and adventure.
          Discover crocodile statues across the Northern Territory, learn Crocwise safety tips, and unlock fun rewards as you explore.
        </p>

        {/* Visual - Placeholder for a map with crocodile statues */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/map-placeholder.png"
            alt="Map with Crocodile Statues"
            className="w-full max-w-2xl rounded-lg shadow-md"
          />
        </div>

        {/* Optional Button to Explore More */}
        <Link
          to="/explore"
          className="btn-orange"
        >
          Explore Croc Map
        </Link>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
