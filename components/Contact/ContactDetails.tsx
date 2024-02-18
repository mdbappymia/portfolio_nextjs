import React from "react";
import { BiHome, BiMailSend, BiPhone } from "react-icons/bi";

const ContactDetails = () => {
  return (
    <div className="px-2">
      <h3 className="text-lime-600 text-lg mb-3">Contact info</h3>
      <h1 className="text-3xl font-bold">Get In Touch</h1>
      <h3 className="text-xl my-5 font-semibold text-gray-800 dark:text-gray-400">
        Don’t be afraid man! Just say hello
      </h3>
      <div>
        <div className="flex items-center my-10">
          <div>
            <BiPhone className="text-6xl border border-1 rounded-full p-3 border-gray-700 mr-4" />
          </div>
          <div>
            <h1 className="text-lg font-bold my-1">Phone</h1>
            <p className="text-gray-700 dark:text-gray-400">+8801732249303</p>
          </div>
        </div>
        <div className="flex items-center my-10">
          <div>
            <BiMailSend className="text-6xl border border-1 rounded-full p-3 border-gray-700 mr-4" />
          </div>
          <div>
            <h1 className="text-lg font-bold my-1">Email</h1>
            <p className="text-gray-700 dark:text-gray-400">
              mdbappymia.hstu@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center my-10">
          <div>
            <BiHome className="text-6xl border border-1 rounded-full p-3 border-gray-700 mr-4" />
          </div>
          <div>
            <h1 className="text-lg font-bold my-1">Address</h1>
            <p className="text-gray-700 dark:text-gray-400">
              Dhaka, Bangladesh.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
