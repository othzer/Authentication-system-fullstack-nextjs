"use client";

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function VerifyEmailPage(){
    const [token, setToken] = useState("");
    const [verified, setVerified] = useState(false);
    const [error, setError] = useState(false);

    const verifyUserEmail = async ()=>{
        try {
            await axios.post('/api/users/verifyemail', {token});
            setVerified(true);
        } catch (error:any) {
            setError(true);
            console.log("Error in verifying email", error.response.data);
        }
    }

    //when page is loaded first time it takes the token from url and puts in state
    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1];  //to get token, at [0] left of "=" and at [1]right of "="
        setToken(urlToken || "");
    }, []);

    useEffect(()=>{
        if(token.length>0) verifyUserEmail();
    }, [token]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Verify Email</h1>
            <h2 className="p-2 bg-amber-400 text-white">{token? `${token}`: "no token"}</h2>
        
            {verified && (
                <div>
                    <h2 className="text-green-600 text-2xl">Email Verified Successfully!</h2>
                    <Link href="/login" className="text-blue-500 underline">Click here to Login</Link>
                </div>
            )}

            {error && (
                <div>
                    <h2 className="text-red-600 text-2xl">Error: Something went wrong</h2>
                    <Link href="/login" className="text-blue-500 underline">Click here to Login</Link>
                </div>
            )}
        </div>
    )
}
