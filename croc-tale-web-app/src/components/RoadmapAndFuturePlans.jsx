// src/components/RoadmapAndFuturePlans.jsx
import React from 'react';
import { Chrono } from 'react-chrono'; // Import react-chrono for timeline
import { Link } from 'react-router-dom';
import TimeLineItems from '../data/timeline';



const RoadmapAndFuturePlans = () => {
  // Timeline Data
  const roadmapItems = TimeLineItems;
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8">Our Journey So Far</h2>

        {/* Timeline Section */}
        <div className="mb-8">
          <Chrono
            items={roadmapItems}
            mode="VERTICAL_ALTERNATING"
            theme={{
              primary: 'green',
              secondary: 'orange',
              cardBgColor: '#fff',
              cardForeColor: '#333',
            }}
            slideShow
            slideItemDuration={4000} // Optional: auto slide each item
          />
        </div>

        {/* CTA Button */}
        <Link
          to="/roadmap"
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg"
        >
          Follow Our Progress
        </Link>
      </div>
    </section>
  );
};

export default RoadmapAndFuturePlans;
