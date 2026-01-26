"use client";  //now its a frontend or client component

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage(){
    const router = useRouter();
    const [user, setUser]= React.useState({
        email: "",
        password: "",
    });

    //just to disable button if any field is empty
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);
    const [loading, setLoading] = React.useState(false);

    const onLogin = async ()=>{   //async bcoz it'll talk to DB
        try {
            setLoading(true);
            const response = await axios.post("/api/users/login", user);//making a post request to the backend
            console.log("Login success", response.data);
            toast.success("Login Successful");

            //once login is successful, redirect to home page
            router.push("/profile");
        } catch (error: any) {
            console.log("Login failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mb-4 text-lg">{loading? "processing": "Login"}</h1>
            <hr />
            <label htmlFor="email">Email</label>
            <input type="text" 
                id="email" 
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                placeholder="whatever@email.com"
                className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <label htmlFor="password">Password</label>
            <input type="password" 
                id="password" 
                value={user.password}
                onChange={(e)=>setUser({...user, password: e.target.value})}
                placeholder="wHatever@123"
                className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <button
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                onClick={onLogin}
                disabled={buttonDisabled}
            >{buttonDisabled? "No Login": "Login"}</button>
            <Link href="/signup" className="text-blue-600 hover:underline">No account? Register instead</Link>
            <Link href="/forgotpassword" className="text-blue-600 hover:underline">Forgot Password? Reset here</Link>
        </div>
    )
}