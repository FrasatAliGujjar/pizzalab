'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
// ______________________________________________
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext.jsx";
// ______________________________________________


const Menu = () => {

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


  }, []);

  // _________________________________________________________



  return (
    <>
      <section className='text-gray-600 body-font border-2 text-center px-5 py-12 mx-auto'>
        <div className='flex flex-wrap justify-center -m-4'>
          {/* ================================================================== */}
          {dbItems.map((item, i) => (
            <div
              key={i}
              className='lg:w-1/4 md:w-1/3 sm:w-1/3 p-4 w-full shadow-lg m-5'
            >
              <Image
                alt={item.title}
                className='m-auto w-[300px] h-[200px] shadow-stone-300 shadow-sm hover:shadow-lg'
                src={`${item.img_url}`}
                width={500}
                height={500}
                priority
              />
              <div className='mt-4'>
                <div className='flex justify-around'>
                  <h2 className='text-red-800 title-font text-lg font-bold'>
                    {item.title}
                  </h2>
                  <p className='mt-1 text-red-800 font-bold'>
                    PKR {item.price}
                  </p>
                </div>
                <Link href={`/menu/${item.id}`}>
                  <button className='bg-red-600 w-full  hover:bg-transparent border-2 border-red-600 transition-all duration-300 hover:text-red-700 font-bold m-2 shadow-slate-500 shadow-sm rounded-[5px] p-3 text-white'>
                    More Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
          {/* ================================================================== */}
        </div>
      </section>
    </>
  )
}
export default Menu
