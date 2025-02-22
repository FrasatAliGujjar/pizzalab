"use client"

import Link from "next/link";
import Image from "next/image";
import React from "react";
import { TypeAnimation } from 'react-type-animation';
import { FaStar, FaPizzaSlice, FaTruck, FaLeaf, FaInstagram, FaFacebook, FaEnvelope, FaFire, FaClock } from "react-icons/fa";



import Slider from "../modules/slider/slider";
// ______________________________________________
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext.jsx";
import { useEffect } from "react";
import { setCookie } from "cookies-next";
// ______________________________________________


const Desktop = () => {


  // _________________________________________________________
  //Context Data
  const {
    dbItems,
    LoadingItems,
    LoadingUsers,
  } = useContext(AppContext);

  // _________________________________________________________

  useEffect(() => {

    LoadingUsers();
    LoadingItems();
    setCookie("role", "invalid");



  }, []);

  // _________________________________________________________


  const randomItems = dbItems.sort(() => Math.random() - 0.5).slice(0, 8); //Print random 8 items

  // _________________________________________________________







  // ===================================== [ Whatapp Link ] =================================================


  const WhatsappOpen = async () => {

    // const phoneNumber = "+923419385624"; // Me
    const phoneNumber = "+923098800038"; // Me

    const message = encodeURIComponent(
      `*Asslam-o-Alaikum !*\n\n` +
      `*________________________*\n\n` +
      `*I Discovered this contact from your Website*\n\n` +
      `*I want to order ....*\n\n`
    );


    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    // window.open(url, "_blank");
    window.location.href = url;


  }


  // ===================================== [ Whatapp Link ] =================================================











  return (
    <>
      {/* Slider Section */}
      <Slider />

      {/* Typing Animation Section */}
      <div className="text-center text-red-800 text-4xl font-bold mt-8">
        {/* ============================================================================= */}

        <TypeAnimation
          sequence={[
            'We serve delicious Pizzas',
            1000,
            'We serve juicy Burgers',
            1000,
            'We serve crispy Fries',
            1000,
            'We serve mouthwatering Fast Food',
            1000
          ]}
          wrapper="span"
          speed={50}
          className="font-lobster text-md md:text-[80px]"
          repeat={Infinity}
        />

        {/* ============================================================================= */}
      </div>

      {/* Most Famous Food Items Section */}
      <section className="text-gray-600 body-font border-2 text-center px-5 py-12 mx-auto">

        <h2 className="text-xl md:text-3xl font-bold text-red-800 mb-6">Most Famous Food Items</h2>

        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 justify-center">
          {randomItems.map((item, i) => (
            <div
              key={i}
              className='p-4 w-full shadow-lg border border-red-300 rounded-[5px] hover:scale-105 transition-transform duration-300'
            >
              <Image
                alt={item.title}
                className='m-auto w-[300px] h-[200px] rounded-[5px] shadow-md'
                src={item.img_url}
                width={500}
                height={500}
                priority
              />
              <div className='mt-4'>
                <div className='flex justify-between px-4'>
                  <h2 className='text-red-800 title-font text-lg font-bold'>
                    {item.title}
                  </h2>
                  <p className='mt-1 text-red-800 font-bold'>
                    PKR {item.price}
                  </p>
                </div>
                <Link href={`/menu/${item.id}`}>
                  <button className='bg-red-800 w-full hover:bg-transparent border-2 border-red-800 transition-all duration-300 hover:text-red-700 font-bold m-2 shadow-lg rounded-[5px] p-3 text-white'>
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>

      </section>






      {/* Featured Categories Section */}
      <section className="text-center py-12 ">
        <h2 className="text-xl md:text-3xl font-bold text-red-800 mb-6">Explore Our Categories</h2>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 p-5">
          {['Veg', 'Chicken', 'BBQ', 'Desserts'].map((category, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-[5px] shadow-md hover:scale-105 transition-transform">
              <h3 className="text-red-800 font-bold text-lg">{category}</h3>
            </div>
          ))}
        </div>
      </section>







      {/* Customer Reviews Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-xl md:text-4xl font-bold text-red-800 mb-6 flex justify-center items-center gap-2">
          <FaStar className="text-yellow-500" /> Customer Reviews
        </h2>
        <p className="text-lg text-gray-700 flex items-center justify-center gap-2">
          "Best pizza Near NTU!" <FaPizzaSlice className="text-red-500" /> ⭐⭐⭐⭐⭐ – Frasat Ali
        </p>
        <p className="text-lg text-gray-700 mt-2">"Incredible flavors & fast delivery!" <FaTruck className="text-blue-500" /> ⭐⭐⭐⭐⭐ – M.Awais</p>
      </section>












      {/* Special Deals Section */}
      <section className="text-center py-12 bg-red-50">
        <h2 className="text-xl md:text-4xl font-bold text-red-800 mb-6 flex justify-center items-center gap-2">
          <FaFire className="text-red-600" /> Special Deals & Discounts
        </h2>
        <p className="font-bold text-sm md:text-2xl text-red-600 flex items-center justify-center gap-2">
          <FaClock className="text-black" /> 50% Off on Large Pizzas - Ends in <span className="text-black font-extrabold">2 Hours!</span>
        </p>
        <button
          onClick={() => WhatsappOpen()}
          className="mt-4 px-6 py-2 text-white bg-red-700 hover:bg-red-600 rounded-[5px] text-lg font-semibold">
          Order Now
        </button>
      </section>














      {/* Our Ingredients Section */}
      <section className="text-center py-12">
        <h2 className="text-xl md:text-4xl font-bold text-red-800 mb-6 flex justify-center items-center gap-2">
          <FaLeaf className="text-green-500" /> Our Fresh Ingredients
        </h2>
        <p className="text-lg text-gray-700">
          We use 100% fresh mozzarella, hand-kneaded dough, and organic herbs to create the
          perfect slice!
        </p>
      </section>












      {/* Order Tracking Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-xl md:text-4xl font-bold text-red-800 mb-6 flex justify-center items-center gap-2">
          <FaTruck className="text-blue-500" /> Order Tracking
        </h2>
        <p className="text-lg text-gray-700">
          Track your order live & enjoy your hot, fresh pizza in 30 minutes or less!
        </p>
        <button
          onClick={() => WhatsappOpen()}
          className="mt-4 px-6 py-2 text-white bg-red-700 hover:bg-red-600 rounded-[5px] text-lg font-semibold">
          Track My Order
        </button>
      </section>












      {/* Social Media Section */}
      <section className="text-center py-12">
        <h2 className="text-xl md:text-4xl font-bold text-red-800 mb-6 flex justify-center items-center gap-2">
          📲 Follow Us on Social Media
        </h2>
        <p className="text-lg text-gray-700">
          Tag us <span className="font-bold text-red-700">@PizzaLab</span> for a chance to win a free pizza!
        </p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="https://www.instagram.com/pizza_labfsd/" className="text-red-800 text-3xl hover:text-red-600">
            <FaInstagram />
          </Link>
          <Link href="https://www.facebook.com/profile.php?id=61550877096209" className="text-blue-800 text-3xl hover:text-blue-600">
            <FaFacebook />
          </Link>
        </div>
      </section>












      {/* Newsletter Signup Section */}
      <section className="text-center py-12 bg-gray-100">
        <h2 className="text-xl md:text-4xl font-bold text-red-800 mb-6 flex justify-center items-center gap-2">
          <FaEnvelope className="text-yellow-500" /> Subscribe for Exclusive Deals
        </h2>
        <p className="text-lg text-gray-700">Subscribe & Get 10% Off Your First Order!</p>
        <div className="mt-4 flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 border border-gray-300 rounded-[5px] text-lg"
          />
          <button
            onClick={() => WhatsappOpen()}
            className="px-6 py-2 text-white bg-red-700 hover:bg-red-600 rounded-[5px] text-lg font-semibold">
            Subscribe
          </button>
        </div>
      </section>













    </>
  );

};

export default Desktop;
