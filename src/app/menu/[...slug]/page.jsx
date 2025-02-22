'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import axios from 'axios'
// ______________________________________________
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext.jsx";
import Link from 'next/link'
// ______________________________________________


function Page() {


  // ======================================================

  //Context Data
  const {
    dbItems,
    LoadingItems,
    LoadingUsers,
  } = useContext(AppContext);

  // ======================================================

  useEffect(() => {

    LoadingUsers();
    LoadingItems();
    LoadingItemsLocally() // 



  }, []);

  // ======================================================

  const { slug } = useParams()

  // State for database item
  const [dbItem, setdbItem] = useState([])

  // ======================================================

  const LoadingItemsLocally = async () => {

    const response = await axios.get('/api/items')

    const selectedItem = response.data.find(item => item.id == slug)

    setdbItem(selectedItem)

  }

  // ======================================================


  return (
    <>
      <section className='text-white bg-gradient-to-b from-white to-red-100 body-font overflow-hidden'>
        <div className='container px-5 py-16 mx-auto'>
          <div className='lg:w-4/5 mx-auto flex flex-wrap bg-red-800 text-white rounded-[10px] shadow-xl p-6'>
            <Image
              alt={dbItem.title}
              className='border-1 border-red-700 lg:w-1/2 w-full lg:h-auto h-72 rounded-[10px]'
              src={dbItem.img_url}
              width={400}
              height={400}
            />
            <div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0  text-white '>
              <h1 className='text-4xl font-bold mb-2  text-white '>{dbItem.title}</h1>
              <h5 className='text-3xl font-semibold  text-yellow-300  mb-4'>{dbItem.price} rs</h5>
              <p className='leading-relaxed text-lg mb-4'>
                Indulge in the rich flavors and perfect blend of spices that make this dish truly irresistible. Crafted with the finest ingredients, each bite delivers a delightful burst of taste and aroma. Whether enjoyed alone or paired with your favorite sides, it promises a satisfying experience. Freshly prepared with love and care, it’s a treat for both the eyes and the palate. Perfect for any occasion, this dish brings comfort and joy with every serving.
              </p>
              <div className='flex mt-6'>
                <Link href={'/menu'}>
                  <button className='text-white bg-red-700 border-2 border-white py-2 px-10 rounded-[10px] shadow-md hover:bg-white hover:text-red-800 transition-all duration-300'>
                    Back
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Page
