import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../contexts/authContext/AuthContext";
import Swal from "sweetalert2";
import { toast, ToastContainer } from "react-toastify";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);

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
    <div className="flex flex-col md:flex-row text-lg text-yellow-100 gap-6">
      <li className="hover:text-xl hover:bg-yellow-600 hover:rounded">
        <Link to="/">Home</Link>
      </li>
      <li className="hover:text-xl hover:bg-yellow-600 hover:rounded">
        <Link to="/allArtifacts">All Artifacts</Link>
      </li>
      <li className="hover:text-xl hover:bg-yellow-600 hover:rounded">
        <Link to="/addArtifact">Add Artifact</Link>
      </li>
      <li className="hover:text-xl hover:bg-yellow-600 hover:rounded">
        <Link to="/contactUs">Contact Us</Link>
      </li>
    </div>
  );

  return (
    <div className="lg:w-10/12 mx-auto bg-[#302e2f] shadow-sm rounded-lg">
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-[#302e2f] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div className="flex md:hidden items-center">
            <img src="favicon.png" className="w-12" alt="" />
            <Link to="/" className="text-xl text-yellow-600 font-bold ms-2">
              Artifact Tracker
            </Link>
          </div>
          <div className="hidden md:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
        </div>
        <div className="navbar-end gap-3">
          {user ? (
            <>
              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="m-1">
                  <div className="avatar">
                    <div className="w-13 rounded-full hover:cursor-pointer">
                      <img src={user.photoURL} />
                    </div>
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-[#302e2f] text-yellow-100 rounded-box z-1 w-52 p-2 shadow-sm"
                >
                  <li>
                    <p>{user.displayName}</p>
                  </li>
                  <li>
                    <Link to="/myArtifacts">My Artifacts</Link>
                  </li>
                  <li>
                    <Link to="/likedArtifacts">My Liked Artifacts</Link>
                  </li>
                  <li>
                    <button onClick={handleSignOut} className="btn">
                      Sign Out
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link to="/signup" className="btn">
                Sign Up
              </Link>
              <Link to="/signin" className="btn">
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
