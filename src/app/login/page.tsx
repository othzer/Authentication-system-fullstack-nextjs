"use client";  //now its a frontend or client component

import Link from "next/link";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";



export default function LoginPage(){
    const [user, setUser]= React.useState({
        email: "",
        password: "",
    });

    const onLogin = async ()=>{   //async bcoz it'll talk to DB

    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mb-4 text-lg">Login</h1>
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
            >Login</button>
            <Link href="/signup">No account? Register instead</Link>
        </div>
    )
}