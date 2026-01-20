"use client";  //now its a frontend or client component

import Link from "next/link";
import React, {useState} from "react";
import { useRouter } from "next/navigation";
import { Axios } from "axios";



export default function SignupPage(){
    const [user, setUser]= React.useState({
        email: "",
        password: "",
        username: "",
    });

    const onSignup = async ()=>{   //async bcoz it'll talk to DB

    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mb-4 text-lg">SignUp</h1>
            <hr />
            <label htmlFor="username">UserName</label>
            <input type="text" 
                name="" 
                id="username" 
                value={user.username}
                onChange={(e)=>setUser({...user, username: e.target.value})}
                placeholder="username"
                className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <label htmlFor="email">Email</label>
            <input type="text" 
                id="email" 
                value={user.email}
                onChange={(e)=>setUser({...user, email: e.target.value})}
                placeholder="email"
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
                onClick={onSignup}
            >SignUp</button>
            <Link href="/login">Login Instead</Link>
        </div>
    )
}