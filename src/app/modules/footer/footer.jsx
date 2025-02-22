"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../assets/images/logo/Logo.png"
import Footer_CSS from "./footer.module.css";

const Footer = () => {

  return (
    <footer className="bg-red-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400">
              We are a leading Food Ordering platform offering a wide range of
              Food. Our mission is to provide the best online Food
              experience for our customers.
            </p>
          </div>


          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <Link href="/menu" className="text-gray-400 hover:text-white">Menu</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">
                <span className="font-bold">Address:</span> Near National Textile Unversity,
                Faisalabad, Pakistan
              </li>
              <li className="text-gray-400">
                <span className="font-bold">Phone:</span> +92 3098800038
              </li>
              <li className="text-gray-400">
                <span className="font-bold">Email:</span> Food@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          <p className="flex justify-center">
            &copy;  2024
            <Image
              alt="logo"
              className="rounded-full -mt-2"
              src={Logo}
              width={40}
              height={10}
              priority
            />
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
