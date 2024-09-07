// src/components/FulfillingChallengeTasks.jsx

import React from 'react';

const FulfillingChallengeTasks = () => {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-center">Meeting the GovHack Challenges</h2>

        {/* Subheading */}
        <h3 className="text-2xl font-semibold mb-4 text-center">How Croc Tales Aligns with the Challenge Goals</h3>

        {/* Content - Challenge Tasks */}
        <div className="text-left text-lg text-gray-700 space-y-8">
          
          {/* Tourism Growth */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Tourism Growth</h4>
            <p>
              By creating a network of crocodile statues in key locations across the Northern Territory (NT), Croc Tales encourages tourists to explore more cities and stay longer. Each statue is strategically placed in high-traffic areas, making it a must-visit attraction. The interactive web app provides a gamified experience that not only attracts tourists but also educates them about the region’s rich wildlife and culture, enhancing their overall visit. Visitors will want to explore all the statues, learn their stories, and discover the diverse regions of NT.
            </p>
          </div>

          {/* Crocwise Education */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Crocwise Education</h4>
            <p>
              Our app integrates Crocwise educational content directly into the user's exploration journey. By scanning QR codes at crocodile statues, users unlock critical safety tips about living with crocodiles and receive access to engaging quizzes. These quizzes reinforce safe behavior around crocodile habitats, helping to reduce the risk of crocodile encounters and promoting Crocwise safety practices across the NT. This aligns with the NT Government’s Crocwise public safety initiative.
            </p>
          </div>

          {/* Cultural Promotion */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Cultural Promotion</h4>
            <p>
              Each crocodile statue is deeply connected to the local culture, telling stories of the region’s Indigenous heritage and the spiritual significance of crocodiles. Croc Tales enhances this experience by providing background stories and educational material through the app. Users can explore the cultural ties between crocodiles and the Indigenous people of NT, fostering a greater appreciation for both wildlife and local traditions. This cultural promotion helps tourists engage meaningfully with the region.
            </p>
          </div>

          {/* Public Safety */}
          <div>
            <h4 className="text-xl font-semibold mb-2">Public Safety</h4>
            <p>
              Croc Tales leverages real-time crocodile data and Crocwise educational content to raise public awareness about crocodile safety. The app helps users understand crocodile behavior, learn how to stay safe in croc-prone areas, and provides up-to-date information on recent crocodile activity. This proactive approach to education helps prevent dangerous encounters and supports the NT Government's ongoing public safety initiatives.
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

export default FulfillingChallengeTasks;
