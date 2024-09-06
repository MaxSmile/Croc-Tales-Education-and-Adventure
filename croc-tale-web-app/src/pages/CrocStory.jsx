// src/pages/CrocStory.jsx
import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../layouts/Layout';

// Dummy data for croc stories
const crocStories = {
  1: {
    title: "The Legend of Darwin's Croc",
    description: "This crocodile statue in Darwin symbolizes the resilience of the Northern Territory's people. It was crafted in 1985 and stands as a reminder of living harmoniously with nature.",
    location: "Darwin City",
  },
  2: {
    title: "Kakadu's Wild Crocodile",
    description: "Found in the heart of Kakadu National Park, this statue represents the wild spirit of the crocodiles that inhabit the region. Visitors are reminded of the importance of Crocwise safety measures in this remote area.",
    location: "Kakadu National Park",
  },
  3: {
    title: "Katherine's Croc Protector",
    description: "Standing tall in Katherine, this statue tells the story of how the local community has coexisted with crocodiles for centuries, respecting their space and power.",
    location: "Katherine",
  },
  4: {
    title: "Arnhem Land's Sacred Croc",
    description: "This statue, located in Arnhem Land, holds deep cultural significance for the Indigenous communities, representing the sacred connection between the people and the land’s crocodile population.",
    location: "Arnhem Land",
  },
};

const CrocStory = () => {
  const { crocId } = useParams(); // Get the dynamic crocId from the URL
  const crocStory = crocStories[crocId]; // Get the story based on crocId

  return (
    <Layout>
      <div className="container mx-auto text-center py-10">
        {/* Check if the croc story exists */}
        {crocStory ? (
          <>
            <h1 className="text-4xl font-bold mb-4 text-blue-600">{crocStory.title}</h1>
            <p className="text-lg mb-6 text-gray-700">{crocStory.description}</p>
            <p className="text-md text-gray-500">Location: {crocStory.location}</p>
          </>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-600">Crocodile Story Not Found</h1>
            <p className="text-lg text-gray-700">We couldn't find the story for this crocodile. Please try a different one.</p>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default CrocStory;
