// src/components/CrocTalesTimeline.jsx
import React from 'react';
import { Chrono } from 'react-chrono';

const CrocTalesTimeline = () => {
    const items = [
        {
          title: "Phase 1: Initial Planning",
          cardTitle: "Team Formation and Conceptualisation",
          cardDetailedText: "The Vasilkoff GovHack Fellowship team formed and brainstormed ideas for Croc Tales: Education and Adventure. Initial project goals and design concepts were outlined.",
        },
        {
          title: "Phase 2: Design Phase",
          cardTitle: "UI/UX Mockup Development",
          cardDetailedText: "The team developed a basic UI/UX mockup for the web app, ensuring a seamless user experience and a clear design to guide users through the Crocwise education process.",
        },
        {
          title: "Phase 2: Statue Theme Suggestions",
          cardTitle: "Crocodile Statue Theme Ideas",
          cardDetailedText: "The team brainstormed themes and ideas for crocodile statues to be placed across NT cities, with a focus on integrating QR codes aesthetically into the statue designs.",
        },
        {
          title: "Phase 3: Educational Flow Draft",
          cardTitle: "Crocwise Educational Flow",
          cardDetailedText: "Drafted the educational flow of the app, including multiple-choice quizzes and a progressive learning experience for users about crocodile safety.",
        },
        {
          title: "Phase 3: QR Code, Crocodile Alert Generation, Personalised Map Suggestion, Frequently Asked Questions & Answers, User Reviews & Achievements Mock Features",
          cardTitle: "Mock QR Code, Crocodile Alert Generation, Personalised Map Suggestion, Frequently Asked Questions & Answers, User Reviews & Achievements Scanning Setup",
          cardDetailedText: "Set up mock QR Code, Crocodile Alert Generation, Personalised Map Suggestion, Frequently Asked Questions & Answers, User Reviews & Achievements, allowing expected visualisation of complete design in the future.",
        },
        {
          title: "Friday 7:00pm",
          cardTitle: "GovHack 2024 Kickoff",
          cardDetailedText: "The team began work on the technical aspects of the project, focusing on the core web app functionalities, such as Crocwise quizzes, user progress tracking, and statue location mapping.",
        },
        {
          title: "Saturday 10:00am",
          cardTitle: "Mentor Feedback",
          cardDetailedText: "The team met with mentors to gather feedback on the app’s educational content, design, and technical challenges, leading to refinements in the quiz flow and map features.",
        },
        {
          title: "Saturday 12:00pm",
          cardTitle: "Finalise Challenge and App Features",
          cardDetailedText: "By midday, the team finalised the app's core features, ensuring the app met the GovHack challenges and began integrating the Crocwise educational flow with the interactive map.",
        },
        {
          title: "Saturday 7:00pm",
          cardTitle: "Team Meeting: Design and Development Check-in",
          cardDetailedText: "The team reviewed the design progress and refined the mockups to ensure a cohesive user interface and user journey across the app.",
        },
        {
          title: "Sunday 12:00pm",
          cardTitle: "Video Presentation and Pitch Preparation",
          cardDetailedText: "The team began assembling the project presentation, including screenshots, mockups, and possible artistic elements for visual impact. The educational and societal benefits of the project were highlighted.",
        },
        {
          title: "Sunday 3:00pm",
          cardTitle: "Final Submission and Video Upload",
          cardDetailedText: "The final video presentation, project page, and app demo were uploaded for GovHack judging, showcasing the Croc Tales project and its impact on public safety and tourism.",
        },
        {
          title: "Post-GovHack",
          cardTitle: "Art NT Grant Application",
          cardDetailedText: "After GovHack, the team plans to apply for the Art NT Grant to continue developing Croc Tales, adding new educational content, artistic features, and more statues across NT cities.",
        },
      ];
      

  return (
    <div className="container mx-auto my-10">
      <h2 className="text-3xl font-bold text-center mb-6">Croc Tales Roadmap</h2>
      <Chrono items={items} mode="VERTICAL" />
    </div>
  );
};

export default CrocTalesTimeline;
