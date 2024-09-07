// src/components/Footer.jsx
import React from "react";
import { FaGithub } from "react-icons/fa";

// Footer Links Arrays
const footerLinks = [
  { href: "https://github.com/MaxSmile/Croc-Tales-Education-and-Adventure/blob/main/docs/PRIVACY_POLICY.md", label: "Privacy Policy" },
  { href: "https://github.com/MaxSmile/Croc-Tales-Education-and-Adventure/blob/main/CODE_OF_CONDUCT.md", label: "Code of Conduct" },
  { href: "https://github.com/MaxSmile/Croc-Tales-Education-and-Adventure/blob/main/CONTRIBUTING.md", label: "Contributing" },
  { href: "/roadmap", label: "Roadmap" },
];

const teamLinks = [
  { href: "https://hackerspace.govhack.org/profiles/roland", label: "Roland" },
  { href: "https://hackerspace.govhack.org/profiles/james_k", label: "James K" },
  { href: "https://hackerspace.govhack.org/profiles/maksym_vasylkov", label: "Maksym Vasylkov" },
  { href: "https://hackerspace.govhack.org/profiles/iryna_vasylkova", label: "Iryna Vasylkova" },
  { href: "https://hackerspace.govhack.org/profiles/vanni", label: "Vanni" },
];

const challengeLinks = [
  { href: "https://hackerspace.govhack.org/challenges/boosting_tourism_in_the_northern_territory", label: "Boosting Tourism in the Northern Territory" },
  { href: "https://hackerspace.govhack.org/challenges/crocodile_watch_enhancing_public_safety", label: "Crocodile Watch - Enhancing Public Safety" },
  { href: "https://hackerspace.govhack.org/challenges/connecting_communities_your_guide_to_local_information_and_services", label: "Connecting Communities - Local Information & Services" },
];

export default function Footer() {
  return (
    <footer className="bg-ntBlack text-gray-200 p-8">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between lg:space-x-8 pt-8">
        {/* Left Column: Project and Repository Info */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold">Croc Tales: Education and Adventure</h3>
          <p className="mt-2 text-sm">
            Croc Tales aims to promote tourism in the Northern Territory while educating users on Crocwise safety practices through interactive exploration and fun challenges.
          </p>
          <p className="mt-2 text-sm">
            This project is open-source. Check out the repository on 
            <a 
              href="https://github.com/MaxSmile/Croc-Tales-Education-and-Adventure"
              target="_blank"
              rel="noopener noreferrer"
              className="text-bold hover:underline ml-1"
            >
              GitHub <FaGithub className="inline-block m-1" />
            </a>.
          </p>
          <h3 className="text-xl font-semibold mt-4">GovHack Challenges</h3>
          <ul className="mt-2 space-y-2 text-sm">
            {challengeLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-bold hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Middle Column: Useful Links */}
        <div className="lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-semibold">Useful Links</h3>
          <ul className="mt-2 space-y-2">
            {footerLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-bold hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Team Members & Challenges */}
        <div className="lg:w-1/3">
          <h3 className="text-xl font-semibold">Team Members</h3>
          <ul className="mt-2 space-y-2">
            {teamLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-bold hover:underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center">
        <p>&copy; 2024 <a href="https://hackerspace.govhack.org/team_management/teams/2553" target="_blank" className="text-bold hover:underline">Vasilkoff Govhack Fellowship</a>. All rights reserved.</p>
      </div>
    </footer>
  );
}
