"use client"

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProfilePage() {
    const router = useRouter();
    const [data, setData] = useState("whatever!");
    const logout = async ()=>{
        try {
            await axios.get("api/users/logout");
            toast.success("Logout Successful");
            router.push("/login");

        } catch (error: any) {
            console.log("Logout failed", error.message);
            toast.error(error.message);
        }
    }
    const getUserDetails = async ()=>{
        const response = await axios.get('api/users/me')
        console.log("User details", response.data);
        setData(response.data.data._id);
    }
    
    ///other way
    // useEffect(()=>{
    //     getUserDetails();
    // }, [data])

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <p>Base Profile page</p>
            <h2 className="bg-yellow-300 text-white text-3xl rounded-lg p-2 m-2">
                {data === 'whatever!'? "WhatEvErrr": <Link href={`/profile/${data}`}>Visit profile</Link>}
            </h2>

        <hr />

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold m-4 py-2 px-4 rounded"
            onClick={logout}>
            Logout
        </button>

        <button className="bg-pink-500 hover:bg-pink-700 text-white font-bold m-4 py-2 px-4 rounded"
            onClick={getUserDetails}>
            Get User Details
        </button>

        </div>
    )
}