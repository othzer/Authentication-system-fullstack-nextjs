"use client"

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ForgotPasswordPage(){
    const[emailId, setEmailId] = useState("");
    const[emailSended, setEmailSended] = useState("NO");
    
    const[buttonDisabled, setButtonDisabled] = useState(true);
    useEffect(()=>{
        if(emailId.length>0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [emailId]);

    const sendResetEmail = async ()=>{
        try {
            const response = await axios.post("api/users/forgotpassword", {emailId});
            console.log("Reset email sent", response.data);
            toast.success("Reset email sent successfully");
            setEmailId("");
            setEmailSended("YES");

        } catch (error: any) {
            console.log("Error in sending reset email", error.message);
            setEmailSended("ERROR");
            toast.error(error.message);
        }
    }
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-3xl text-blue-600 mb-2">Forgot Password Page</h1>
            <hr />

            {emailSended==="YES" 
                ? <h2 className="p-4 mt-4 text-sm text-green-700 bg-green-100 rounded-lg">Reset email sent successfully. Please check your inbox.</h2>
                : emailSended==="ERROR"
                    ? <h2 className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg">Error in sending reset email. Please try again.</h2>
                    : null
            }

            <label htmlFor="email">email: </label>
            <input type="email"
                name="email"
                id="email"
                placeholder="Enter your emailId"
                value={emailId}
                onChange={(e)=>setEmailId(e.target.value)}
                className="bg-white text-black px-4 py-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
            />
            <button onClick={sendResetEmail}
                className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
                disabled={buttonDisabled}
                >{buttonDisabled? "No Submit": "Submit"}</button>

            <Link href="/login" className="text-blue-600 hover:underline">
                Back to Login
            </Link>

        </div>
    )
}
