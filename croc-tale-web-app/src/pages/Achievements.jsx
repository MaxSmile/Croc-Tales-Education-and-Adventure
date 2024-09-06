// src/pages/Achievements.jsx
import React, { useState } from 'react';
import Layout from '../layouts/Layout';

const dummyAchievements = [
  {
    id: 1,
    title: "First Croc Location Explored",
    description: "You explored your first crocodile statue location!",
    unlocked: true,
  },
  {
    id: 2,
    title: "Crocwise Safety Expert",
    description: "You successfully completed the Crocwise quiz.",
    unlocked: true,
  },
  {
    id: 3,
    title: "Explorer of the North",
    description: "You visited 5 crocodile statue locations.",
    unlocked: false,
  },
  {
    id: 4,
    title: "Ultimate Croc Hunter",
    description: "You visited all crocodile statue locations across NT.",
    unlocked: false,
  },
];

const Achievements = () => {
  const [achievements] = useState(dummyAchievements);

  return (
    <Layout>
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold mb-6 text-blue-600">Achievements</h1>

        {/* Unlocked Achievements */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-green-600">Unlocked Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {achievements
              .filter((achievement) => achievement.unlocked)
              .map((achievement) => (
                <div key={achievement.id} className="bg-green-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-700">{achievement.description}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Locked Achievements */}
        <div>
          <h2 className="text-2xl font-semibold text-red-600">Locked Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {achievements
              .filter((achievement) => !achievement.unlocked)
              .map((achievement) => (
                <div key={achievement.id} className="bg-gray-100 p-6 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-gray-600 mb-2">{achievement.title}</h3>
                  <p className="text-gray-500">{achievement.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Achievements;
