"use client";  //now its a frontend or client component

import Link from "next/link";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";



export default function SignupPage(){
    //after designing the BkND we are going to add variables from BND
    const router = useRouter();

    const [user, setUser]= React.useState({
        email: "",
        password: "",
        username: "",
    });

    //just to disable button if any field is empty
    const [buttonDisabled, setButtonDisabled] = React.useState(true);
    useEffect(()=>{
        if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);

    const [loading, setLoading] = React.useState(false);

    const onSignup = async ()=>{   //async bcoz it'll talk to DB
        try {
            setLoading(true);
            const response = await axios.post("/api/users/signup", user);//making a post request to the backend
            console.log("Signup success", response.data);

            //once signup is successful, redirect to login page
            router.push("/login");

        } catch (error: any) {
            console.log("SignUp failed", error.message);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="mb-4 text-lg">{loading? "Processing":"SignUp"}</h1>
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
                disabled={buttonDisabled}
            >{buttonDisabled? "No SignUP": "SignUp"}</button>
            <Link href="/login">Login Instead</Link>
        </div>
    )
}