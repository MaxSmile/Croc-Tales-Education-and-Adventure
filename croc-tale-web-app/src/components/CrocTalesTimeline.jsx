// src/components/CrocTalesTimeline.jsx
import React from 'react';
import { Chrono } from 'react-chrono';
import TimeLineItems from '../data/timeline';

const CrocTalesTimeline = () => {
    const items = TimeLineItems;

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Croc Tales Roadmap</h2>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};

export default CrocTalesTimeline;
