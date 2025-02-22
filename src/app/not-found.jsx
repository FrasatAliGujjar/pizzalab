import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-red-800 to-black">
            <div className="text-center p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl w-[90%] max-w-lg mx-auto border border-white/20 animate-fade-in">
                <h1 className="text-7xl font-extrabold bg-gradient-to-r from-red-500 to-white bg-clip-text text-transparent animate-pulse">
                    404
                </h1>
                <h2 className="text-3xl font-bold text-white mt-2">Page Not Found</h2>
                <p className="text-lg text-white/80 mt-3 mb-6">
                    Oops! The page you're looking for doesn't exist. Let's get you back home.
                </p>
                <Link
                    href="/"
                    className="inline-block px-8 py-3 bg-red-600 text-white font-semibold rounded-[10px] shadow-md transition-all duration-300 hover:bg-white hover:text-red-600 hover:scale-105"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
