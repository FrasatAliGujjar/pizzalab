'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Swal from 'sweetalert2';

const supabaseUrl = 'https://abqmdbqdlytgzzctlifl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFicW1kYnFkbHl0Z3p6Y3RsaWZsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyNzIyOTAsImV4cCI6MjA1Mjg0ODI5MH0.8Ko4R13OZD1x1lHEbbH38Bg3EZre3PN13xJFqHZoqk4';
const supabase = createClient(supabaseUrl, supabaseKey);

const UploadFoodImage = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleUpload = async () => {
        if (!image) {
            Swal.fire({
                icon: 'error',
                title: 'No Image Selected',
                text: 'Please select an image to upload!',
            });
            return;
        }

        const fileName = `${Date.now()}-${image.name}`;

        try {
            const { data, error } = await supabase.storage
                .from('Food_Items')
                .upload(fileName, image);

            if (error) {
                throw error;
            }

            const { data: publicData, error: publicError } = supabase.storage
                .from('Food_Items')
                .getPublicUrl(fileName);

            if (publicError) {
                throw publicError;
            }

            Swal.fire({
                icon: 'success',
                title: 'Upload Successful',
                text: `Image uploaded successfully! Public URL: ${publicData.publicUrl}`,
            });

            setImage(null);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Upload Failed',
                text: error.message,
            });
        }
    };


    return (
        <div className="min-h-screen bg-gradient-to-r from-red-800 to-white flex items-center justify-center">
            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                <h1 className="text-2xl font-bold text-center mb-4 text-red-800">Upload Food Image</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 font-semibold mb-2">Select Image:</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-red-800 focus:border-red-800"
                    />
                </div>
                <button
                    onClick={handleUpload}
                    className="w-full bg-red-800 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                >
                    Upload
                </button>
            </div>
        </div>
    );
};

export default UploadFoodImage;
