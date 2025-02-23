"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaHome, FaUtensils, FaPhone, FaInfoCircle, FaUserShield, FaSignOutAlt, FaBars } from "react-icons/fa";
import Image from "next/image";
import Style from "./navbar.module.css";
import Logo from "@/app/assets/images/logo/Logo.png";
// ______________________________________________
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext.jsx";
// ______________________________________________


const Navbar = () => {

  // _________________________________________________________
  //Context Data
  const {
    floatNav,
    setfloatNav,
  } = useContext(AppContext);

  // _________________________________________________________


  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setfloatNav((prev) => !prev)
  };

  return (
    <>
      <nav className="bg-red-800 border-gray-200 navbar-body z-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link href="/" className="flex items-center space-x-3">
            <span className="flex self-center text-2xl font-bold whitespace-nowrap text-white ml-5">
              <Image
                alt="logo"
                className="-mt-2 -ml-4"
                src={Logo}
                width={50}
                height={50}
                priority
              />
              <p className="font-lobster">Pizza Lab</p>
            </span>
          </Link>
          <button
            onClick={showMenu}
            aria-expanded={isMenuOpen}
            className="p-2 w-10 h-10 inline-flex items-center justify-center text-white rounded-[5px] md:hidden hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-400"
          >
            <span className="sr-only">Toggle menu</span>
            <FaBars className="w-5 h-5" />
          </button>

          {/* Smooth Dropdown Transition */}
          <div
            className={`absolute z-100 top-16 left-0 w-full bg-red-800 md:static md:w-auto md:block md:bg-transparent transition-all duration-300 ease-in-out transform ${isMenuOpen ? "opacity-100 scale-100 visible" : "opacity-0 scale-95 invisible"
              } md:opacity-100 md:scale-100 md:visible`}
          >
            <ul className="z-100 font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-red-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
              <li>
                <Link
                  href="/"
                  className="flex items-center gap-2 py-2 px-3 text-white rounded hover:bg-red-400 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  <FaHome /> Home
                </Link>
              </li>
              <li>
                <Link
                  href="/menu"
                  className="flex items-center gap-2 py-2 px-3 text-white rounded hover:bg-red-400 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  <FaUtensils /> Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="flex items-center gap-2 py-2 px-3 text-white rounded hover:bg-red-400 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  <FaPhone /> Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="flex items-center gap-2 py-2 px-3 text-white rounded hover:bg-red-400 md:hover:bg-transparent md:border-0 md:hover:text-white md:p-0"
                >
                  <FaInfoCircle /> About
                </Link>
              </li>
              <li className="bg-white text-red-800 rounded-[5px] -mt-1 px-5 py-1 text-center">
                <Link
                  href="/login"
                  className="flex items-center gap-2 py-2 px-3 rounded-[5px] hover:text-red-800 md:border-0 md:p-0"
                >
                  <FaUserShield /> Admin
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
