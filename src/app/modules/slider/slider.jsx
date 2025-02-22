"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import slider_1 from "@/app/assets/images/Slider/p1.png";
import slider_2 from "@/app/assets/images/Slider/p2.png";
import slider_3 from "@/app/assets/images/Slider/p3.png";
import slider_4 from "@/app/assets/images/Slider/p4.png";

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [
        { src: slider_1, alt: 'Image 1' },
        { src: slider_2, alt: 'Image 2' },
        { src: slider_3, alt: 'Image 3' },
        { src: slider_4, alt: 'Image 4' },
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // Change slide every 5 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);

    return (
        <div className="relative w-full mx-auto overflow-hidden">
            <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="min-w-full">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            layout="responsive"
                            width={1920}
                            height={720}
                            className="rounded-lg"
                        />
                    </div>
                ))}
            </div>
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
            >
                &#10094;
            </button>
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-200"
            >
                &#10095;
            </button>
            <div className="flex justify-center mt-2">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 mx-1 rounded-full ${currentIndex === index ? 'bg-blue-600' : 'bg-gray-300'}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;