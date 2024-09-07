// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { FaBars } from "react-icons/fa";
import { CgClose } from "react-icons/cg";


export default function Navbar({ user }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  // Links for non-authenticated users
  const navLinks = [
    { to: "/explore", label: "Explore", type: "link" },
    { to: "/quiz", label: "Quiz", type: "link" },
    { to: "/stories", label: "Stories", type: "link" },
    { to: "/signin", label: "Sign In", type: "link" },
    { label: "Scan", type: "button", onClick: () => auth.signOut() },
  ];

  // Links for authenticated users
  const authNavLinks = [
    { to: "/explore", label: "Explore", type: "link" },
    { to: "/quiz", label: "Quiz", type: "link" },
    { to: "/stories", label: "Stories", type: "link" },
    { to: "/achievements", label: "Achievements", type: "link" },
    { label: "Logout", type: "button", onClick: () => auth.signOut() },
  ];

  // Choose the appropriate links based on authentication status
  const activeLinks = user ? authNavLinks : navLinks;

  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg ">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            {(!navbarOpen) ? <FaBars /> : <CgClose />}
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" + (navbarOpen ? " block" : " hidden")
          }
          id="navbar-menu"
        >
          {/* Render navigation links based on authentication status */}
          <ul className="flex flex-col lg:flex-row list-none mr-auto uppercase">
            {activeLinks.map((link, index) => (
              <li key={index} className="flex items-center">
                {link.type === "link" && (
                  <Link
                    to={link.to}
                    className="hover:text-gray-200 px-3 py-4 lg:py-2 flex items-center text-base"
                  >
                    {link.label}
                  </Link>
                )}
                {link.type === "button" && (
                  <button
                    onClick={link.onClick}
                    className="btn shadow px-3 py-4 lg:py-2 flex items-center text-base"
                  >
                    {link.label}
                  </button>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
