# Croc Tales: Education and Adventure

Project for GovHack 2024. Northern Territory Challenges:
1. Boosting Tourism in the Northern Territory: How can data be leveraged to create innovative solutions that boost tourism in the Northern Territory, attract more visitors, and/or enhance their cultural experience?
2. Crocodile Watch - Enhancing Public Safety: How can crocodile monitoring data be leveraged to create solutions that improve public safety and reduce the risk of crocodile encounters in the Northern Territory?
3. Connecting Communities - Your Guide to local Information and Services: How can we assist local residents and visitors in easily locating local services and providing answers to frequently asked questions?

**Croc Tales: Education and Adventure** is an interactive tourism and education initiative aimed at promoting public safety and increasing engagement with the Northern Territory’s (NT) rich wildlife and cultural heritage. Inspired by the success of Wrocław’s gnome statues, this project features crocodile statues scattered across NT cities, integrated with an interactive mobile-friendly web app. The app encourages users to explore NT, learn about Crocwise safety measures, and unlock fun rewards as they discover each statue.


![Croc Tales Logo](./images/CrocTales_Education-and-Adventure.webp)

Demo: [https://croc-tales.web.app/](https://croc-tales.web.app/)

## About the Project

Croc Tales is a React.js-based web app built to enhance Northern Territory (NT) tourism while promoting **Crocwise** education through an interactive exploration of crocodile statues across NT cities. Tourists can scan QR codes integrated into crocodile statues, unlock stories about the location, and learn crocodile safety tips, all while progressing through the app.

## Purpose of the Project
This project is part of the **GovHack 2024** competition, with the goal of boosting NT tourism and enhancing public safety education. By blending culture, wildlife, and technology, Croc Tales delivers a fun, educational experience for both locals and tourists.

## Challenges of the Competition
- **Tourism Growth**: Encouraging tourists to explore more cities and spend more time visiting crocodile statues across NT.
- **Crocwise Education**: Promoting public safety through interactive educational materials on crocodile safety, aligned with the NT government’s **Crocwise** program.
- **Cultural Promotion**: Highlighting the connection between crocodiles, NT’s wildlife, and Indigenous culture through historical and cultural storytelling.

---

## Project Features
1. **React.js Web Application**:  
   - Modern, fast, and responsive interface built with React.js.
   - Supports cross-platform use for seamless exploration of NT’s crocodile statues.

2. **Firebase Integration**:  
   - **Firebase Authentication**:  
     - **Anonymous Authentication**: Allows users to explore the app and participate without signing up.
     - **Email Authentication**: Users can sign up with email for a more personalized experience, storing their quiz progress, [achievements](./docs/ACHIEVEMENTS.md), and preferences.
   - **Firebase Firestore**: Stores user data (e.g., quiz completions, unlocked statues), making the experience dynamic and interactive.
   - **Firebase Hosting**: Simplifies app deployment and scales with user demand.

3. **QR Code Integration**:  
   - QR codes integrated into crocodile statues, enabling users to scan and unlock cultural stories and **Crocwise** safety tips.

4. **Crocwise Education**:  
   - Promotes public safety by educating tourists on crocodile behavior and safety through interactive quizzes and stories.

5. **Tourism Promotion**:  
   - Encourages exploration of multiple cities and locations, helping boost tourism across NT.

---

## Project Timeline for GovHack

### Design Phase
- Develop a basic UI/UX mockup for the app, focusing on a seamless user experience.
- Suggest crocodile statue themes and ideas, ensuring QR codes are aesthetically integrated into the statue design.

### Implementation
- Draft the **Crocwise** educational flow, including multiple-choice quizzes and progressive learning experiences.
- Set up a mock QR code scanning feature that unlocks stories and safety information.

### Presentation
- Compile the concept into a pitch deck or video presentation, showcasing the app’s core features, benefits, and societal impact.
- Include screenshots, mockups, and possibly art in the presentation for visual impact.

---

## Benefits of the Project

- **Tourism Growth**:  
  Encourages tourists to explore more cities and stay longer, visiting multiple crocodile statues across NT. The interactive and engaging nature of the app motivates extended visits.

- **Crocwise Education**:  
  Provides an educational tool that informs tourists about crocodile safety, supporting the NT government's Crocwise program. This helps ensure tourists and locals alike are aware of the risks and how to stay safe around NT's waters.

- **Cultural Promotion**:  
  Highlights the strong connection between crocodiles, NT’s wildlife, and Indigenous culture. By integrating local stories from the **Territory Stories** archive, tourists can learn more about the cultural significance of the places they visit.

---

## How to Set Up

### Prerequisites
- **Node.js** (v14 or higher)
- **Firebase** account (with Firestore and Authentication enabled)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/croc-tales.git
   cd croc-tales
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Firebase Setup**:
   - Create a Firebase project in the [Firebase Console](https://console.firebase.google.com/).
   - Enable **Anonymous** and **Email Authentication** in the Authentication section.
   - Set up **Firestore** and create necessary collections (e.g., user progress, achievements).
   - Update the Firebase configuration in the project (`src/firebaseConfig.js`).

4. **Run the development server**:
   ```bash
   npm start
   ```

5. **Access the app**:
   Open [http://localhost:3000](http://localhost:3000) in your browser to view and interact with the app.

---

## Tech Stack
- **React.js** for the frontend.
- **Firebase** for backend services (Authentication, Firestore, Hosting).
- **jsQR** for QR code scanning functionality.
- **HTML5 Canvas** for croc-themed photo frames.

---


### **Key Features**:

1. **Croc Statues**:  
   - A series of crocodile statues placed in key tourist and culturally significant locations across NT.
   - Each croc statue will have a unique design, symbolizing local culture or a **Crocwise** educational message.
   - QR codes integrated into the crocodile skin pattern, which can be scanned to reveal a story about the location.

2. **Web App (React.js-based)**:  
   - **Camera QR Scanner**: Users scan QR codes at the statues to unlock stories and progress through the game.
   - **Quiz System**: Users answer questions based on **Crocwise** safety tips to unlock the next crocodile statue location on the map.
   - **Interactive Map**: Shows the user's current location and nearby crocodile statues to visit.
   - **Achievements & Badges**: Users can unlock and share achievements as they visit statues and complete quizzes.
   - **Social Media Integration**: Users can share their achievements and crocodile-themed photo frames on social media platforms.
   - **Crocwise Education**: Integrated educational tips and fun facts about crocodile safety at each stage.

---

### **Data Sources & Integration**:

1. **Territory Stories** (https://territorystories.nt.gov.au/)  
   - Historical and cultural content about the locations of the statues, pulled into the app to enrich the visitor experience.

2. **Northern Territory Tourism Data** (https://northernterritory.com/)  
   - Tourism insights, visitor guides, and location-based recommendations integrated into the app to encourage broader exploration.

3. **Latest Visitor Data** (https://tourismnt.com.au/research-strategies/research/latest-visitor-data)  
   - Real-time visitor insights help determine optimal placements for the statues and improve user engagement with high-traffic tourist spots.

 4. **NT Crocodile Capture Zones and Daily Count**  [NT Crocodile Capture Zones and Daily Count](https://data.nt.gov.au/dataset/nt-crocodile-capture-zones-and-daily-count)  
   **Integration**:  
   - **Real-Time Crocodile Data**: This dataset provides information on crocodile capture zones and daily counts, which can be integrated into the app to inform users about the latest crocodile activity in various zones.  
   - **Interactive Map**: The real-time data can be displayed on the **Explore** map, allowing users to see areas with recent crocodile captures, helping raise awareness about croc-prone areas in real time.  
   - **Crocwise Alerts**: Based on high activity in certain zones, the app can push Crocwise safety alerts to users in proximity to those areas.

5. **Crocodile Monitoring Survey**  [Crocodile Monitoring Survey](https://data.nt.gov.au/dataset/crocodile-monitoring-survey)  
   **Integration**:  
   - **Crocodile Population Insights**: This survey dataset includes monitoring information about crocodile populations across different regions.  
   - **Educational Content**: The app can use this data to educate users about population trends in specific areas, providing context on why Crocwise education is critical.
   - **Location-Based Insights**: Users visiting areas with higher crocodile populations will receive additional Crocwise safety messages based on the data.

By integrating these datasets, the app can deliver more **real-time safety information** and **educational insights**, making it an even more engaging and informative tool for both tourists and locals.

---

### **Statue Themes and Ideas**:

Please see the [statue themes and ideas](./docs/STATUE_THEMES.md) for more details.

---

# App Structure 

Please see the [app structure](./docs/APP_STRUCTURE.md) for more details.

---

## License
This project is licensed under the **[MIT License](./LICENSE)** .
