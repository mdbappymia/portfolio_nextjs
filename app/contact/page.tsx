import ContactDetails from "@/components/Contact/ContactDetails";
import ContactForm from "@/components/Contact/ContactForm";
import Link from "next/link";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <div className="inline-block">
        <Link
          href={"/"}
          className="uppercase font-bold text-md flex items-center"
        >
          <FaArrowLeft className="inline-block mr-3" /> Back to{" "}
          <span className="text-lime-500 inline-block ml-2">home</span>
        </Link>
      </div>
      <div className="lg:grid grid-cols-4 gap-3 my-5">
        <div>
          <ContactDetails />
        </div>
        <div className="col-span-3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
