"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
// ______________________________________________
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext.jsx";
import { useEffect } from "react";
import { setCookie } from "cookies-next";
// ______________________________________________


const AdminLoginPage = () => {

  // _________________________________________________________
  //Context Data
  const {
    dbUsers,
    LoadingItems,
    LoadingUsers,
  } = useContext(AppContext);

  // _________________________________________________________

  useEffect(() => {

    LoadingUsers();
    LoadingItems();


  }, []);

  // _________________________________________________________

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // _________________________________________________________

  const resetInput = () => {
    setEmail("");
    setPassword("");
  };
  // _________________________________________________________

  const handleAdminLogin = async (e) => {

    e.preventDefault();

    const isAdmin = dbUsers.some(
      (user) =>
        user.email === email &&
        user.password === password
    );


    if (isAdmin) {
      
      setCookie("role", "admin");

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome to the Admin Panel!",
        timer: 2000,
        showConfirmButton: false,
        background: "#fff",
        color: "#b91c1c",
      });

      resetInput();

      router.push("/pladmin");

    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Credentials",
        text: "Incorrect email or password. Please try again.",
        background: "#fff",
        color: "#b91c1c",
      });
    }



  }

  // _________________________________________________________

  return (
    <div className="min-h-screen flex items-center justify-center bg-red-800">
      <div className="w-full max-w-md bg-white rounded-[10px] shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center text-red-700 mb-6">
          Admin Login Panel
        </h2>
        <form onSubmit={handleAdminLogin}>
          {/* Email Input */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-red-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-red-700 bg-gray-100 text-red-800 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
              placeholder="Enter admin email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-red-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-red-700 bg-gray-100 text-red-800 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-red-700 focus:border-transparent"
              placeholder="Enter admin password"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="mb-6 mt-6">
            <button
              type="submit"
              className="w-full bg-red-700 font-bold border-2 border-red-700 hover:bg-transparent hover:text-red-700 transition-all duration-300 text-white py-2 px-4 rounded-[10px]"
            >
              Login as Admin
            </button>
          </div>

          {/* Forgot Password & Back to Home */}
          <div className="text-center">
            <p className="text-gray-600">
              Not an admin?{" "}
              <Link
                href="/"
                className="text-red-700 font-medium hover:underline"
              >
                Go to Home
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
