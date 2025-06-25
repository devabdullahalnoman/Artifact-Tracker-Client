import React from "react";
import { Link } from "react-router";

const PageNotFound = () => {
  return (
    <div className="mx-auto mb-8">
      <img
        src="https://i.ibb.co/9m1MF7cW/notfound.png"
        className="mx-auto max-h-[600px]"
        alt=""
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl mb-6">Go back to Home</h1>
        <Link to="/">
          <button className="btn btn-xl btn-outline">Home</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
