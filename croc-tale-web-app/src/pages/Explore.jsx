// src/pages/Explore.jsx
import React from 'react';
import Layout from '../layouts/Layout';
import { Link } from 'react-router-dom';

const Explore = () => {
  return (
    <Layout>
      <div className="container mx-auto text-center py-10">
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Explore Northern Territory</h1>
        
        {/* Introduction */}
        <p className="text-lg text-gray-700 mb-8">
          Discover the crocodile statues scattered across the Northern Territory.<br />
          Or, check out the numerous parks and natural reserves<br />
          Explore locations, learn about crocodile safety, and uncover the stories behind each unique statue.
        </p>

        {/* Map Preview (Placeholder for future integration) */}
        <div className="mb-10">
          <div className="bg-gray-500 rounded-lg h-full flex items-center justify-center">
            <iframe
              title="Streamlit application"
              src="https://croc-tales.streamlit.app/~/+/?embed=true"
              style={{width: "100%", height: "800px"}}
            ></iframe>
          </div>
        </div>

        {/* Explore Categories (Statue Locations) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Statue Category 1 */}
          <Link to="/story/1" className="bg-green-500 text-white p-6 rounded shadow-lg hover:bg-green-600 transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">Darwin City Statues</h2>
            <p>Explore the iconic crocodile statues in the heart of Darwin.</p>
          </Link>

          {/* Statue Category 2 */}
          <Link to="/story/2" className="bg-blue-500 text-white p-6 rounded shadow-lg hover:bg-blue-600 transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">Kakadu National Park</h2>
            <p>Uncover crocodile statues in the wild and majestic Kakadu.</p>
          </Link>

          {/* Statue Category 3 */}
          <Link to="/story/3" className="bg-yellow-500 text-white p-6 rounded shadow-lg hover:bg-yellow-600 transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">Katherine & Surrounds</h2>
            <p>Learn about crocodiles as you explore the historic Katherine region.</p>
          </Link>

          {/* Statue Category 4 */}
          <Link to="/story/4" className="bg-red-500 text-white p-6 rounded shadow-lg hover:bg-red-600 transition duration-300">
            <h2 className="text-2xl font-semibold mb-2">Arnhem Land</h2>
            <p>Delve into the cultural stories of crocodiles in Arnhem Land.</p>
          </Link>
        </div>

        {/* Call to Action */}
        <div className="mt-12">
          <Link
            to="/map"
            className="btn-orange text-lg"
          >
            Start Exploring the Map
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Explore;
