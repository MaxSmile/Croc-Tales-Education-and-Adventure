import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-200 text-gray-700 p-4 text-center">
      <p>&copy; 2024 Croc Tales: Education and Adventure. All rights reserved.</p>
      
      {/* Open Source Info */}
      <p className="mt-2">
        This project is open-source. Check out the repository on 
        <a 
          href="https://github.com/MaxSmile/Croc-Tales-Education-and-Adventure"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline ml-1"
        >
          GitHub
        </a>.
      </p>
      
      {/* Project Purpose */}
      <p className="mt-2">
        Croc Tales aims to promote tourism in the Northern Territory while educating users on Crocwise safety practices through interactive exploration and fun challenges.
      </p>

      {/* Privacy Policy Link */}
      <p className="mt-2">
        View our 
        <Link 
          to="https://github.com/MaxSmile/Croc-Tales-Education-and-Adventure/docs/privacy_policy.md"
          className="text-blue-600 hover:underline ml-1"
        >
          Privacy Policy
        </Link>.
      </p>
    </footer>
  );
}
