import React from "react";
import { Link, Outlet } from "react-router";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";

const RootLayout = () => {
  return (
    <div>
      <div className="relative hidden md:block h-38 pt-8 bg-base-100">
        <div className="w-11/12 mx-auto">
          <div className="flex items-center justify-center">
            <img src="favicon.png" className="w-12" alt="" />
            <Link
              to="/"
              className="text-3xl text-base-content font-bold ms-2 hidden md:block"
            >
              Artifact Tracker
            </Link>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-50 -mt-11">
        <Navbar></Navbar>
      </header>
      <main className="mt-10 md:-mt-8">
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default RootLayout;
