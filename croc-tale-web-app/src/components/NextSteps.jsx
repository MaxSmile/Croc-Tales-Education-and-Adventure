// src/components/NextSteps.jsx

import React from 'react';

const NextSteps = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-center">Next Steps</h2>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold mb-4 text-center">Roadmap for Future Development</h3>

        {/* Content - Challenge Tasks */}
        <div className="text-left text-lg text-gray-700 space-y-8">
          
          {/* Incorporating AI */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Incorporating AI</h4>
              <p>
                A neat feature to add to "Croc Tales" is a chatbot that informs tourists about the history of the Northern Territory and recommends activities to do around the state. This feature will ingest documents from the "Territory Stories" dataset for historical information and the "Visit the Northern Territory" dataset for tourism recommendations, providing a comprehensive and informative experience for visitors.
              </p>
          </div>

          {/* Crocodile Map */}
          <div>
            <h4 className="text-xl font-semibold mb-2">The Crocodile Map</h4>
              <p>
                Improving the crocodile maps is crucial for real-time alerts. The current dataset, limited to 2021-2022, needs updating for accurate information. We propose deploying cameras along crocodile hotspots, utilizing object recognition technology to detect crocodiles automatically. These sightings would be recorded in a database, which would then feed into the map visualization, displaying the latest sightings in real-time. This approach minimizes human interaction, reducing costs and potential dangers to staff. Moreover, it allows for wider coverage, operating 24/7 at a lower cost, significantly enhancing the effectiveness and safety of crocodile monitoring efforts.
            </p>
          </div>

          {/* Activity Map */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Activity Map</h4>
              <p>
                Enhancing the activity map is a key priority for future development. We plan to expand the interactive map's functionality by incorporating a diverse range of data types beyond the current national parks. Our strategy includes obtaining a comprehensive dataset of local tourist attractions from the Northern Territory's official tourism website (https://northernterritory.com/map). Additionally, we aim to collaborate with local businesses to feature their establishments on the map, providing a more holistic view of the region's offerings. To improve user experience and clarity, we'll implement a color-coding system to distinguish between parks, tourist attractions, and local businesses, making it easier for visitors to navigate and explore the Northern Territory's rich landscape of experiences.
            </p>
          </div>
        </div>
        {/* Visual Examples - Logos for Challenges as Links */}
        <div className="mt-10 flex flex-wrap justify-center">
          {/* Boosting Tourism in the Northern Territory */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <a 
              href="https://hackerspace.govhack.org/challenges/boosting_tourism_in_the_northern_territory" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/images/2024_ntg-primary-cmyk.jpg" // Replace with actual logo/image for Boosting Tourism
                alt="Boosting Tourism in the NT"
                width="240px"
              />
            </a>
            <p className="mt-2 text-center">Boosting Tourism in the NT</p>
          </div>

          {/* Crocodile Watch - Enhancing Public Safety */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <a 
              href="https://hackerspace.govhack.org/challenges/crocodile_watch_enhancing_public_safety" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/images/2024_Jackadder_Full_colour_logo.png" // Replace with actual logo/image for Crocodile Watch
                alt="Crocodile Watch - Public Safety"
                width="260px"
              />
            </a>
            <p className="mt-2 text-center">Crocodile Watch - Enhancing Public Safety</p>
          </div>

          {/* Connecting Communities - Local Information */}
          <div className="w-full sm:w-1/2 md:w-1/3 p-4">
            <a 
              href="https://hackerspace.govhack.org/challenges/connecting_communities_your_guide_to_local_information_and_services" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src="/images/2024_ntg-primary-cmyk.jpg" // Replace with actual logo/image for Connecting Communities
                alt="Connecting Communities - Local Info"
                width="240px"
              />
            </a>
            <p className="mt-2 text-center">Connecting Communities - Local Info</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NextSteps;
