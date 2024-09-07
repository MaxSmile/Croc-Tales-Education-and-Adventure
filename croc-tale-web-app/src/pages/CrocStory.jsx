// src/pages/CrocStory.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';
import CrocStoriesData from '../data/crocs';
import NotFound from './NotFound'; // Import the NotFound component

import placeholderImage from "../assets/placeholder.svg";

const CrocStory = () => {
  const { crocId } = useParams(); // Get the dynamic crocId from the URL
  const crocStory = CrocStoriesData[crocId]; // Get the story based on crocId

  const PlaceholderImage = () => <img src={placeholderImage} alt="Placeholder" 
  className="w-full max-w-xs rounded-lg shadow-md" />

  // If crocStory is not found, render the NotFound component
  if (!crocStory) {
    return <NotFound />;
  }

  return (
    <Layout>
      <div className="container mx-auto py-10 flex flex-col lg:flex-row items-center">
        {/* Left side: Image section */}
        <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
          {crocStory.image ? (
            <img src={crocStory.image} alt={crocStory.title} 
                className="w-full max-w-xs rounded-lg shadow-md" />
          ) : (
            <PlaceholderImage />
          )}
        </div>

        {/* Right side: Text section */}
        <div className="lg:w-1/2 text-center lg:text-left lg:pl-10">
          <h1 className="text-4xl font-bold mb-4 text-gray-800">{crocStory.title}</h1>
          <p className="text-lg mb-6 text-gray-700">{crocStory.story}</p>
          <p className="text-md mb-4 text-gray-500">Location: {crocStory.location}</p>
          <p className="text-md mb-4 text-gray-500">Design: {crocStory.design}</p>
          <p className="text-md text-green-600 font-semibold">Crocwise Lesson: {crocStory.crocwiseLesson}</p>
        </div>
        <p className="mt-6 lg:mt-0 text-gray-500 text-left">
            <a href="/stories" className="btn-orange">Back to more croc stories</a>
        </p>
      </div>
    </Layout>
  );
};

export default CrocStory;
