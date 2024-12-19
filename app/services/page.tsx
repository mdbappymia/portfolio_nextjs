import React from "react";
import services from "@/public/data/services.json";
import ServiceCard from "@/components/Services/ServiceCard";
import Education from "@/components/About/Education";
import SocialBottom from "@/components/About/SocialBottom";
import WorkTogather from "@/components/About/WorkTogather";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const ServicePage = () => {
  return (
    <div>
      <div className="inline-block mb-3">
        <Link
          href={"/"}
          className="uppercase font-bold text-md flex items-center"
        >
          <FaArrowLeft className="inline-block mr-3" /> Back to{" "}
          <span className="text-lime-500 inline-block ml-2">home</span>
        </Link>
      </div>
      <div className="lg:grid grid-cols-2 gap-3">
        {services.map((service: any, i: number) => (
          <div key={i} className="flex w-full flex-row">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
      <div className="mt-3">
        <div className="md:grid lg:grid-cols-4 md:grid-cols-2 gap-3">
          <div className="order-1">
            <SocialBottom />
          </div>
          <div className="col-span-2 my-3 md:my-0 md:order-3 lg:order-2">
            <Education />
          </div>
          <div className="md:order-2 lg:order-3">
            <WorkTogather />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
