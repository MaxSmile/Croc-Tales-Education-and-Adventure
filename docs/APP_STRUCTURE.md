# App Structure 

In general, the app is React.js based.

## **Main Components**:
- **Header.js & Footer.js**: Navigation and footer with essential links.
- **QuizCard.js**: Displays Crocwise questions and answer options.
- **AchievementBadge.js**: Represents earned achievements and badges.
- **CrocCard.js**: Shows the story and details of each croc after QR scanning.
- **Map.js**: Displays the interactive map with croc locations.
- **QRScanner.js**: Enables users to scan QR codes using the device camera.

## **Pages**:
- **Home.js**: Introduction to the app and key buttons for exploration.
- **Explore.js**: Interactive map with croc statues and location info.
- **Quiz.js**: Quizzes that unlock new croc locations after answering correctly.
- **CrocStory.js**: Reveals the cultural story tied to the location.
- **Achievements.js**: Displays user achievements, badges, and milestones.


## Additional ideas
### **Social Sharing and Photo Frames**:

1. **Achievements Sharing**:  
   - Users can share their unlocked achievements and badges directly to social media platforms like Facebook, Instagram, or Twitter.
   - Pre-generated messages with hashtags like #CrocTalesNT, #CrocwiseSafety.

2. **Photo Frames**:  
   - Croc-themed photo frames available after visiting statues or completing quizzes.  
   - Users can customize the photo with text and download or share it on social media.

---

### **App Flow**:

1. **Start Adventure**: Users are introduced to the app and given a map with the first unlocked crocodile statue location.
2. **Visit and Scan**: Users scan the QR code at a statue, unlocking Crocwise safety information and a local story.
3. **Complete Quiz**: Users complete a Crocwise quiz related to the statue to unlock the next croc location.
4. **Achievements & Sharing**: Users collect digital badges and can share their progress or photos on social media.
5. **Explore More Locations**: Users continue exploring NT by visiting more croc statues, scanning, learning, and unlocking new locations.

---

### **Technical Feasibility**:

- **Web App**: Built using React.js with a mobile-first responsive design.
- **QR Code Scanning**: Integrated using the `getUserMedia()` API and libraries like `jsQR`.
- **Interactive Map**: Google Maps or OpenStreetMap can be used to guide users to croc locations.
- **Social Media Sharing**: Use libraries like `react-share` for easy integration with social platforms.
- **Custom Frames**: HTML5 Canvas API and libraries like `react-photo-editor` for custom croc-themed photo frames.

