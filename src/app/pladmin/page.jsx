"use client";

import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { createClient } from '@supabase/supabase-js'; // npm install @supabase/supabase-js
import { Upload } from "lucide-react";
import Image from "next/image";
// ______________________________________________
import { useContext } from "react";
import { AppContext } from "@/app/context/AppContext.jsx";
// ______________________________________________


const AdminPanel = () => {



    //Image Panel Hnadels
    // ============================================================================================
    let [Picurl, setPicUrl] = useState("");
    const [image, setImage] = useState(null);
    const [preview, setPreview] = useState(null);



    //COnnnection with Bucket
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;

    const supabase = createClient(supabaseUrl, supabaseKey);



    const handleImageUpload = async () => {
        if (!image) {
            Swal.fire("Error", "Please select an image to upload!", "error");
            return;
        }

        const fileName = `${Date.now()}-${image.name}`;

        try {
            const { data, error } = await supabase.storage
                .from('food-items')
                .upload(fileName, image);

            if (error) {
                throw error;
            }

            const { data: publicData, error: publicError } = supabase.storage
                .from('food-items')
                .getPublicUrl(fileName);

            if (publicError) {
                throw publicError;
            }

            setPicUrl(publicData.publicUrl.toString());
            Swal.fire("Success", "Image uploaded successfully!", "success");
            setImage(null);
            setPreview(null);
        } catch (error) {
            Swal.fire("Error", "Image upload failed. Please try again.", "error");
        }
    };
    // ============================================================================================

















    // FoodItem Crud Handels
    // ============================================================================================


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


    }, [dbItems]);

    // _________________________________________________________

    // ==================================================

    const [id, setId] = useState("");

    // ==================================================

    const [editMode, seteditMode] = useState(false);

    const handleEditClick = async (Itemid) => {

        const selectedItem = dbItems.find((item) => item.id == Itemid);

        setId(selectedItem.id)
        settitle(selectedItem.title)
        setprice(selectedItem.price)

        seteditMode(true);
    };

    // ==================================================

    const [title, settitle] = useState("");
    const [price, setprice] = useState("");

    // ==================================================

    // Reset Form
    const resetForm = () => {
        settitle("");
        setprice("");
    };

    // ==================================================

    // Add New FoodItem
    const handelAddFoodItems = async (e) => {

        e.preventDefault()


        if (Picurl === "") {

            Swal.fire("Error", "Please upload a Food Item picture.", "error");

        }
        else {

            try {

                const newItem = {
                    title,
                    price,
                    img_url: Picurl
                };

                const response = await axios.post("/api/items", newItem);

                resetForm();

                setPicUrl("");

                Swal.fire("Success", "Food Item added successfully!", "success");

            } catch (error) {

                Swal.fire("Error", "Failed to add the Item. Please try again.", "error");
            }
        }

    };

    // ==================================================

    // Delete Item
    const handelDeleteFoodItem = async (Itemid) => {

        await axios.delete('/api/items', { data: { id: Itemid } });

        Swal.fire('Success', 'FoodItem deleted successfully!', 'success');

        resetForm();
    };

    // ==================================================

    // Update Food Item
    const handleUpdateItem = async (e) => {

        e.preventDefault()

        await axios.patch('/api/items', {
            id,
            title,
            price,
        });

        Swal.fire('Success', 'FoodItem updated successfully!', 'success');
        seteditMode(false)
        resetForm();
    };

    // ==================================================


    // ============================================================================================
















    return (

        <div className="min-h-screen bg-red-50 py-8 flex items-center justify-center">
            <div className="max-w-7xl w-full mx-auto bg-white shadow-xl rounded-lg p-6 border border-red-300">

                <h1 className="text-[20px] md:text-4xl font-extrabold text-center text-red-800 mb-8">
                    Food Item Management
                </h1>

                <div className="my-3 bg-red-100 p-4 rounded-lg">
                    <label className="block text-red-800 font-semibold mb-2">Select Item Image:</label>
                    <div className="flex items-center space-x-4">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => {
                                const file = e.target.files[0];
                                if (file) {
                                    setImage(file);
                                    setPreview(URL.createObjectURL(file));
                                }
                            }}
                            required
                            className="block w-full px-3 py-2 border border-red-400 rounded-md focus:ring-red-600 focus:border-red-600"
                        />
                        <button
                            onClick={handleImageUpload}
                            className="bg-red-800 text-white p-2 rounded-[5px] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 flex items-center justify-center"
                        >
                            <Upload className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Image Preview */}
                    {preview && (
                        <div className="mt-4">
                            <p className="text-red-800 font-semibold">Preview:</p>
                            <Image
                                src={preview}
                                alt="Selected"
                                width={150}
                                height={150}
                                className="mt-2 rounded-md border border-red-400"
                            />
                        </div>
                    )}
                </div>

                {/* Add Food Form */}
                <form className="mb-8 bg-red-100 p-6 rounded-lg">
                    <h2 className="text-2xl font-semibold text-red-800 mb-4">
                        Add New Food Item
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                        <input
                            type="text"
                            placeholder="Item Name"
                            value={title}
                            onChange={(e) => settitle(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />
                        <input
                            type="number"
                            placeholder="item Price"
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                            className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                            required
                        />

                    </div>

                    <button onClick={handelAddFoodItems} className="mt-4 px-6 py-2 bg-red-800 text-white rounded-lg hover:bg-red-700 w-full text-center">
                        Add FoodItem
                    </button>
                </form>

                {/* FoodItem Table */}
                <div className="p-4">
                    <h1 className="text-3xl font-bold text-red-800 mb-6 text-center">FoodItem Management</h1>
                    <div className="overflow-x-auto">
                        <table className="w-full table-auto border-collapse border border-red-300">
                            <thead>
                                <tr className="bg-red-800 text-white">
                                    <th className="border text-center border-red-300 px-4 py-2">Item Image</th>
                                    <th className="border text-center border-red-300 px-4 py-2">Item Name</th>
                                    <th className="border text-center border-red-300 px-4 py-2">Item Price</th>
                                    <th className="border text-center border-red-300 px-4 py-2">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {dbItems.map((item, index) => (
                                    <tr key={index} className="hover:bg-red-100">
                                        <td className="border flex justify-center items-center text-center border-red-300 px-4 py-2">
                                            <Image
                                                src={item.img_url}
                                                width={50}
                                                height={50}
                                                alt={item.title}
                                                className="rounded-[8px]"
                                            />
                                        </td>
                                        <td className="border text-center border-red-300 px-4 py-2">{item.title}</td>
                                        <td className="border text-center border-red-300 px-4 py-2">{item.price}</td>
                                        <td className="border text-center border-red-300 px-4 py-2">
                                            <div className="flex justify-around items-center gap-2">
                                                <button onClick={() => handelDeleteFoodItem(item.id)} className="px-4 py-2 w-[100px] text-center bg-red-600 text-white rounded-[5px] hover:bg-red-700">Delete</button>
                                                <button onClick={() => handleEditClick(item.id)} className="px-4 py-2 w-[100px] text-center bg-blue-600 text-white rounded-[5px] hover:bg-blue-700">Edit</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>




                    {/* Edit FoodItem Form */}

                    {
                        editMode &&
                        <div className="mt-5 max-w-6xl mx-auto bg-gradient-to-r from-red-600 to-red-800 shadow-xl rounded-xl p-8">

                            <form onSubmit={handleUpdateItem} className="mb-8">
                                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                                    Update FoodItem Details
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                                    <input
                                        type="text"
                                        placeholder="Item Name"
                                        value={title}
                                        onChange={(e) => settitle(e.target.value)}
                                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />
                                    <input
                                        type="text"
                                        placeholder="item Price"
                                        value={price}
                                        onChange={(e) => setprice(e.target.value)}
                                        className="border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-red-500"
                                        required
                                    />

                                </div>
                                <button
                                    type="submit"
                                    className="mt-6 w-full py-3 bg-white text-red-600 font-semibold rounded-xl shadow-lg hover:bg-red-100 transition ease-in-out duration-300"
                                >
                                    Update Item
                                </button>
                            </form>

                        </div>
                    }

                </div>







            </div>
        </div >
    );
};

export default AdminPanel;
