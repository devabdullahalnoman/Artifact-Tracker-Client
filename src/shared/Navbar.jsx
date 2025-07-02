import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/authContext/AuthContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const menuRef = useRef(null);
  const userMenuRef = useRef(null);

  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "ancientlight"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
      if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        Swal.fire({
          title: "Signed Out!",
          text: "You have successfully Signed Out!",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        const ErrorMessage = error.message;
        toast.error(ErrorMessage, {
          position: "top-left",
        });
      });
  };

  const links = (
    <div className="flex flex-col md:flex-row text-base md:text-lg text-base-content gap-4 lg:gap-6">
      <li className="hover:text-xl hover:bg-accent hover:rounded">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>
          Home
        </Link>
      </li>
      <li className="hover:text-xl hover:bg-accent hover:rounded">
        <Link to="/allArtifacts" onClick={() => setIsMenuOpen(false)}>
          All Artifacts
        </Link>
      </li>
      {user && (
        <li className="hover:text-xl hover:bg-accent hover:rounded">
          <Link to="/addArtifact" onClick={() => setIsMenuOpen(false)}>
            Add Artifact
          </Link>
        </li>
      )}
      <li className="hover:text-xl hover:bg-accent hover:rounded">
        <Link to="/aboutUs" onClick={() => setIsMenuOpen(false)}>
          About Us
        </Link>
      </li>
      <li className="hover:text-xl hover:bg-accent hover:rounded">
        <Link to="/contactUs" onClick={() => setIsMenuOpen(false)}>
          Contact Us
        </Link>
      </li>
    </div>
  );

  return (
    <div className="lg:w-10/12 mx-auto bg-base-300 shadow-sm rounded-lg">
      <div className="navbar">
        <div className="navbar-start">
          <div className="relative md:hidden" ref={menuRef}>
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="btn btn-ghost"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            {isMenuOpen && (
              <ul className="absolute flex flex-col gap-5 right-0 left-0 mt-2 w-52 bg-base-300 rounded-box shadow z-50 p-5 space-y-2">
                {links}
                <li>
                  <div>
                    <label className="flex cursor-pointer gap-2 items-center justify-between">
                      <p>Theme</p>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="5" />
                        <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                      </svg>

                      <input
                        type="checkbox"
                        className="toggle theme-controller text-base-content"
                        onChange={(e) => {
                          const newTheme = e.target.checked
                            ? "ancientdark"
                            : "ancientlight";
                          document.documentElement.setAttribute(
                            "data-theme",
                            newTheme
                          );
                          localStorage.setItem("theme", newTheme);
                          setTheme(newTheme);
                        }}
                        checked={theme === "ancientdark"}
                      />

                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                      </svg>
                    </label>
                  </div>
                </li>
              </ul>
            )}
          </div>
          <div className="flex md:hidden items-center">
            <img src="favicon.png" className="w-12" alt="" />
            <Link
              to="/"
              className="text-xl text-base-content font-bold ms-2 hidden sm:block"
            >
              Artifact Tracker
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
        <div className="navbar-end gap-3">
          <div className="hidden sm:block">
            <label className="flex cursor-pointer gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>

              <input
                type="checkbox"
                className="toggle theme-controller text-base-content"
                onChange={(e) => {
                  const newTheme = e.target.checked
                    ? "ancientdark"
                    : "ancientlight";
                  document.documentElement.setAttribute("data-theme", newTheme);
                  localStorage.setItem("theme", newTheme);
                  setTheme(newTheme);
                }}
                checked={theme === "ancientdark"}
              />

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          {user ? (
            <>
              <div className="relative mr-2" ref={userMenuRef}>
                <button
                  onClick={() => setIsUserMenuOpen((prev) => !prev)}
                  className="avatar"
                >
                  <div className="w-13 rounded-full hover:cursor-pointer">
                    <img src={user.photoURL} alt="User avatar" />
                  </div>
                </button>

                {isUserMenuOpen && (
                  <ul className="absolute right-0 mt-2 w-52 bg-base-300 text-base-content rounded-box shadow z-50 p-2 space-y-2">
                    <li>
                      <p className="px-4 py-2 font-semibold">
                        {user.displayName}
                      </p>
                    </li>
                    <li>
                      <Link
                        to="/myArtifacts"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-accent hover:text-white transition"
                      >
                        My Artifacts
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/likedArtifacts"
                        onClick={() => setIsUserMenuOpen(false)}
                        className="block px-4 py-2 rounded hover:bg-accent hover:text-white transition"
                      >
                        My Liked Artifacts
                      </Link>
                    </li>
                    <li>
                      <button
                        onClick={() => {
                          setIsUserMenuOpen(false);
                          handleSignOut();
                        }}
                        className="block w-full text-left px-4 py-2 rounded hover:bg-error hover:text-white transition"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                )}
              </div>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="btn bg-base-100 hover:bg-accent hover:text-white"
              >
                Sign Up
              </Link>
              <Link
                to="/signin"
                className="btn bg-base-100 hover:bg-accent hover:text-white mr-2"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Navbar;
