"use client"

import React from "react";

const ContactUs = () => {




  // ===================================== [ Whatapp Link ] =================================================


  const WhatsappOpen = async () => {

    // const phoneNumber = "+923419385624"; // Me
    const phoneNumber = "+923098800038"; // PizzaLab Admin

    const message = encodeURIComponent(
      `*Asslam-o-Alaikum !*\n\n` +
      `*________________________*\n\n` +
      `*I Discovered this contact from your Website*\n\n` +
      `*I want to order ....*\n\n`
    );


    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(url, "_blank");

    // window.location.href = url;

  }


  // ===================================== [ Whatapp Link ] =================================================






  return (
    <div className="bg-white min-h-screen flex flex-col justify-between">
      {/* <header className="bg-gray-800 text-white py-10 shadow-lg">
          <h1 className="text-2xl font-bold text-center">Contact Us</h1>
      </header> */}

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-red-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-gray-700">
            We would love to hear from you! Fill out the form below to contact
            us.
          </p>
        </div>

        <form className="bg-white shadow-md rounded-lg px-8 py-6 max-w-lg mx-auto border border-gray-900">
          <div className="mb-4">
            <label
              className="block text-gray-900 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none "
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-900 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-900 rounded focus:outline-none"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-900 font-bold mb-2 focus:outline-none"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className=" outline-none resize-none w-full px-3 py-2 border border-gray-900 rounded "
              id="message"
              rows="4"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              onClick={() => WhatsappOpen()}
              type="submit"
              className="bg-red-700 font-bold border-2 border-red-700 hover:bg-transparent hover:text-red-700 transition-all duration-300 text-white px-4 py-2 rounded shadow hover:bg-gray-800 focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};

export default ContactUs;
