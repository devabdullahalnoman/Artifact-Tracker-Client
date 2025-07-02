import React from "react";
import { PiAddressBook } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const ContactUs = () => {
  return (
    <div className="bg-base-200 py-14">
      <h1 className="text-4xl font-bold text-center pt-5 mb-10">
        Our Contact details
      </h1>
      <div className="hidden md:flex justify-center">
        <img
          src="https://i.ibb.co/0pSjkqQ5/Banner-photo-2.jpg"
          className="max-w-4/12 rounded-2xl mb-5"
          alt=""
        />
      </div>
      <div className="my-10 lg:grid grid-cols-2 w-10/12 mx-auto">
        <div className="mb-5">
          <div className="my-3">
            <h2 className="text-2xl font-semibold flex items-center gap-4">
              <PiAddressBook />
              Address:
            </h2>
            <p className="text-xl">
              123 Artifact Street, Historyville, HT 45678
            </p>
          </div>
          <div className="my-3">
            <h2 className="text-2xl font-semibold flex items-center gap-4">
              <FaPhoneAlt />
              Phone:
            </h2>
            <p className="text-xl">+1-555-123-4567</p>
          </div>
          <div className="my-3">
            <h2 className="text-2xl font-semibold flex items-center gap-4">
              <MdAlternateEmail />
              Email:
            </h2>
            <a className="text-xl hover:text-blue-600 hover:underline">
              support@historicalartifactstracker.com
            </a>
          </div>
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-4">
              <CgWebsite />
              Website:
            </h2>
            <a className="text-xl hover:text-blue-600 hover:underline">
              https://artifact-tracker-22c55.web.app/
            </a>
          </div>
        </div>
        <form className="bg-base-300 p-4 md:p-8 rounded-xl shadow space-y-6">
          <h2 className="text-3xl font-bold text-center mb-4">
            Send Us a Message
          </h2>
          <div>
            <label className="block text-lg font-medium mb-1">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full bg-base-200 text-lg"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full bg-base-200 text-lg"
              required
            />
          </div>
          <div>
            <label className="block text-lg font-medium mb-1">Message</label>
            <textarea
              rows="5"
              placeholder="Your message..."
              className="textarea textarea-bordered w-full bg-base-200 text-lg"
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary w-full text-lg">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
