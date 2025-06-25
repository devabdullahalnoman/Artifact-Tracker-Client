import React from "react";
import { PiAddressBook } from "react-icons/pi";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const ContactUs = () => {
  return (
    <div>
      <h1 className="mt-20 text-4xl font-bold text-center">
        Our Contact details
      </h1>
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/0pSjkqQ5/Banner-photo-2.jpg"
          className="max-w-4/12 mt-10"
          alt=""
        />
      </div>
      <div className="text-center my-10">
        <div className="my-3">
          <h2 className="text-2xl font-semibold flex justify-center items-center gap-4">
            <PiAddressBook />
            Address:
          </h2>
          <p className="text-xl">123 Artifact Street, Historyville, HT 45678</p>
        </div>
        <div className="my-3">
          <h2 className="text-2xl font-semibold flex justify-center items-center gap-4">
            <FaPhoneAlt />
            Phone:
          </h2>
          <p className="text-xl">+1-555-123-4567</p>
        </div>
        <div className="my-3">
          <h2 className="text-2xl font-semibold flex justify-center items-center gap-4">
            <MdAlternateEmail />
            Email:
          </h2>
          <a className="text-xl hover:text-blue-600 hover:underline">
            support@historicalartifactstracker.com
          </a>
        </div>
        <div>
          <h2 className="text-2xl font-semibold flex justify-center items-center gap-4">
            <CgWebsite />
            Website:
          </h2>
          <a className="text-xl hover:text-blue-600 hover:underline">
            https://artifact-tracker-22c55.web.app/
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
