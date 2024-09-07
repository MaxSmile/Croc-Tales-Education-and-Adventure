// scr/components/DataSetsAndOpenData.jsx

import React from 'react';

const DataSetsAndOpenData = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-8 text-center">Open Data in Action</h2>

        {/* Introduction Text */}
        <p className="text-lg text-gray-700 mb-6">
          Our project, Croc Tales, leverages various open data sets to promote public safety, tourism, and education across the Northern Territory. These data sources empower the app to provide real-time updates on crocodile activity, educational content, and optimal tourist engagement, ensuring users can safely explore the region while learning vital Crocwise safety measures. Below, we explain how each dataset contributes to achieving our goals.
        </p>

        {/* NT Crocodile Capture Zones and Daily Count */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">NT Crocodile Capture Zones and Daily Count</h3>
          <p className="text-lg text-gray-700">
            This dataset provides real-time information on crocodile capture zones and daily counts, allowing the app to alert users about the proximity of crocodile activity. By integrating this data into our interactive map, users can see where crocodiles have been captured recently and make safer choices about where to explore. Additionally, users can scan QR codes on statues in these zones to get up-to-date information about crocodile activity and Crocwise safety alerts.
          </p>
        </div>

        {/* Crocodile Monitoring Survey */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Crocodile Monitoring Survey</h3>
          <p className="text-lg text-gray-700">
            The Crocodile Monitoring Survey provides data on crocodile populations across the Northern Territory. This dataset is critical for educating users about crocodile behavior and conservation efforts. The app uses this data to deliver location-based insights and quizzes, giving users a deeper understanding of why Crocwise education is essential in regions with higher crocodile populations. Users visiting these areas will receive additional safety messages, helping them stay informed and aware of the risks.
          </p>
        </div>

        {/* Northern Territory Tourism Data */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Northern Territory Tourism Data</h3>
          <p className="text-lg text-gray-700">
            This dataset helps us strategically place crocodile statues in high-traffic tourist areas. By analyzing tourism data, we can ensure that the statues are located in places where tourists are likely to engage with them, maximizing both educational impact and user interaction. This data allows us to attract more visitors to specific regions while also promoting Crocwise safety through interactive, gamified experiences.
          </p>
        </div>

        {/* Territory Stories */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Territory Stories</h3>
          <p className="text-lg text-gray-700">
            Territory Stories provides historical and cultural content about the locations of our crocodile statues. This rich, location-based storytelling adds depth to the visitor experience, allowing users to learn about the cultural significance of the areas they are exploring. The app integrates this data with the statues to create a narrative that blends local history, indigenous stories, and Crocwise education.
          </p>
        </div>

        {/* Latest Visitor Data */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Latest Visitor Data</h3>
          <p className="text-lg text-gray-700">
            Real-time visitor data helps us optimize the placement of statues and ensures that our content reaches the most engaged users. This dataset informs our decisions about where to place new crocodile statues, ensuring they are positioned in areas with the highest foot traffic. By doing this, we not only boost tourism but also ensure that visitors receive Crocwise safety messages when they are most relevant.
          </p>
        </div>

      </div>
    </section>
  );
};

export default DataSetsAndOpenData;
