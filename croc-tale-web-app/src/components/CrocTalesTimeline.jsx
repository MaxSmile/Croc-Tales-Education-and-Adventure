// src/components/CrocTalesTimeline.jsx
import React from 'react';
import { Chrono } from 'react-chrono';
import TimeLineItems from '../data/timelines';

const CrocTalesTimeline = () => {
  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Croc Tales Roadmap</h2>
      <Chrono items={TimeLineItems} mode="VERTICAL" />
    </div>
  );
};

export default CrocTalesTimeline;
