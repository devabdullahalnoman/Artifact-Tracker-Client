import React from "react";

const NewsLetter = () => {
  return (
    <div>
      <div className="py-20 bg-base-300">
        <div className="max-w-xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="mb-6 text-base text-base-content">
            Subscribe to our newsletter for the latest discoveries and
            historical insights.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full sm:flex-1 h-11 text-base"
            />
            <button className="btn btn-primary w-full sm:w-auto">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
