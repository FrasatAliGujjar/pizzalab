import React from "react";
import style from "./about.module.css";
import Image from "next/image";
import awais from "@/app/assets/images/members/awais.png";
import hamza from "@/app/assets/images/members/hamza.png";
import frasat from "@/app/assets/images/members/frasat.jpeg";
import bg from "../assets/images/bg/bg1.jpg";

const AboutUs = () => {
  return (
    <div className="bg-white text-gray-700">
      {/* Hero Section */}
      <section className="bg-slate-800 text-white p-14 h-[50vh]"
        style={{
          backgroundImage: `url('/bg4.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-5 text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Welcome to our website! We are passionate about delivering
            exceptional services and creating memorable experiences for our
            customers.
          </p>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-red-700 mb-4">
                Our Mission
              </h2>
              <p className="text-lg">
                Our mission is to provide high-quality Food items and services
                that enrich the lives of our customers. We are committed to
                innovation, excellence, and building a strong community.
              </p>
            </div>
            <div className="">
              <Image
                src={bg}
                alt="Our Mission"
                className="rounded-[10px] shadow-lg w-full"
                width={200}
                height={200}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-5">
          <h2 className="text-3xl font-bold text-red-700 text-center mb-8">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <Image
                alt="awais"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                src={frasat}
                width={100}
                height={100}
                priority
              />

              <h3 className="text-xl font-bold">Frasat Ali Gujjar</h3>
              <p className="text-red-700 font-bold">Web Developer</p>
            </div>
            {/* Team Member 2 */}
            <div className="text-center">
              <Image
                alt="awais"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                src={awais}
                width={100}
                height={100}
                priority
              />

              <h3 className="text-xl font-bold">Awais Johal</h3>
              <p className="text-red-700 font-bold">Web Developer</p>
            </div>
            {/* Team Member 3 */}
            <div className="text-center">
              <Image
                alt="awais"
                className="w-32 h-32 mx-auto rounded-full mb-4"
                src={hamza}
                width={100}
                height={100}
                priority
              />
              <h3 className="text-xl font-bold">Hamza Gujjar</h3>
              <p className="text-red-700 font-bold">Requirement Engineer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
