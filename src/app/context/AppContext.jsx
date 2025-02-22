"use client"

import axios from "axios";

// context/AppContext.jsx
import { createContext, useState } from "react";

// Create the context
export const AppContext = createContext();






// Create the provider component
export const AppProvider = ({ children }) => {




    // ============================= [ Data ] ===============================

    let [dbUsers, setDbUsers] = useState([]);
    let [dbItems, setDbItems] = useState([]);

    // ========================================
    const LoadingItems = async () => {

        const response = await axios.get("/api/items");

        setDbItems(response.data)

    }
    // ========================================

    const LoadingUsers = async () => {

        const response = await axios.get("/api/user");

        setDbUsers(response.data)

    }
    // ========================================


    // ======================================================================


    return (

        <AppContext.Provider value={{
            dbUsers,
            setDbUsers,
            dbItems,
            setDbItems,
            LoadingItems,
            LoadingUsers,
        }}>


            {children}



        </AppContext.Provider>

    );
};
