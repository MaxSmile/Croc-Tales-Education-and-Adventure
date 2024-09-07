// src/pages/Home.jsx
import React from 'react';
import Layout from '../layouts/Layout';


const blocks = [
  {
    title: 'Start Your Adventure',
    description: 'Begin exploring by taking your first quiz or viewing the map.',
    path: '/quiz',
  },
  {
    title: 'Explore Croc Locations',
    description: 'View the interactive map of crocodile statues across the Northern Territory.',
    path: '/explore',
  },
  {
    title: 'View Achievements',
    description: 'Check your progress and unlock achievements and badges.',
    path: '/achievements',
  },
  {
    title: 'Find Your Path',
    description: 'Learn important safety tips for encountering crocodiles.',
    path: '/stories',
  },
];

const Home = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Croc Tales: Education and Adventure
        </h1>

        <p className="text-lg text-center mx-auto max-w-3xl my-8">
          This project is part of the GovHack 2024 competition, with the goal of boosting NT tourism and enhancing public safety education. By blending culture, wildlife, and technology, Croc Tales delivers a fun, educational experience for both locals and tourists.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {blocks.map((block, index) => (
            <div
              key={index}
              className={`bg-ntBlack text-white hover:bg-ntOrange px-6 py-4 rounded shadow-md transition duration-300 flex flex-col items-center justify-center`}
            >
              <h2 className="text-xl font-semibold mb-2"><a href={block.path}>{block.title}</a></h2>
              <p className="text-sm">{block.description}</p>
              {block.component && <block.component />}
            </div>
          ))}
        </div>

      </div>
    </Layout>
  );
};

export default Home;

