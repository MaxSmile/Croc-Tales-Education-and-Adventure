// src/App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Quiz from './pages/Quiz';
import CrocStory from './pages/CrocStory';
import Achievements from './pages/Achievements';
import NotFound from './pages/NotFound';
import CrocStories from './pages/CrocStories';
import Roadmap from './pages/Roadmap';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/stories" element={<CrocStories/> } />
      <Route path="/story/:crocId" element={<CrocStory />} />
      <Route path="/achievements" element={<Achievements />} />
      <Route path="/roadmap" element={<Roadmap />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;