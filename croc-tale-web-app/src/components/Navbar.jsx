import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebaseConfig";


export default function Navbar({ user }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <button
            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" + (navbarOpen ? " block" : " hidden")
          }
          id="navbar-menu"
        >
          <ul className="flex flex-col lg:flex-row list-none mr-auto">
            <li className="flex items-center">
              <Link
                to="/explore"
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              >
                Explore
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/quiz"
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              >
                Quiz
              </Link>
            </li>
            <li className="flex items-center">
              <Link
                to="/achievements"
                className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
              >
                Achievements
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            {user ? (
              <>
                <li className="flex items-center">
                  <button
                    onClick={() => auth.signOut()} // Use the imported getAuth to sign out
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="flex items-center">
                  <Link
                    to="/login"
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Login
                  </Link>
                </li>
                <li className="flex items-center">
                  <Link
                    to="/register"
                    className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  >
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
