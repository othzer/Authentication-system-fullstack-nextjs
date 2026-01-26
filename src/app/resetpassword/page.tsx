"use client"

import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function ResetPasswordPage(){
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const[buttonDisabled, setButtonDisabled] = useState(true);
    const[token, setToken] =useState("");
    const[resetDone, setResetDone] = useState("NOT_DONE");

    useEffect(()=>{
        if(password.length>0 && confirmPassword.length>0 && password===confirmPassword){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    }, [password, confirmPassword]);

    useEffect(()=>{
        const urlToken = window.location.search.split("=")[1];
        setToken(urlToken);
    },[])

    const resetPassword = async()=>{
        try {
            const response = await axios.post("api/users/resetpassword", {password, token});
            console.log("Reset password response", response.data);
            toast.success("Password reset successfully. You can now login with new password.");
            setResetDone("DONE");
            setPassword("");
            setConfirmPassword("");
        } catch (error: any) {
            console.log("Error resetting password", error.message);
            setResetDone("ERROR")
            toast.error("Something went wrong while resetting password", error.message);
        }
    };

    return(
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <div className="w-full p-6 bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md dark:bg-gray-800 dark:border-gray-700 sm:p-8">
            <h1 className="mb-1 text-xl font-bold leading-tight tracking-tight text-blue-600 md:text-2xl">Reset Password</h1>
            <hr />

            {resetDone==="DONE" && (
                <div className="p-4 mt-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                    Password reset successfully. <Link href="/login" className="font-medium underline hover:text-green-800">Click here to login</Link>
                </div>
            )}

            {resetDone==="ERROR" && (
                <div className="p-4 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800" role="alert">
                    Error resetting password. Please try again later.
                </div>
            )}

            {resetDone==="NOT_DONE" && (
            <div>
                <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                    <label htmlFor="newPassword" className="block mb-2 text-sm font-medium">Password:</label>
                    <input type="password" name="" id="newPassword"
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>
                <div className="mt-4 space-y-4 lg:mt-5 md:space-y-5">
                    <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium">Confirm Password:</label>
                    <input type="password" name="" id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e)=>setConfirmPassword(e.target.value)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600"
                    />
                </div>
                <button 
                        disabled={buttonDisabled}
                        className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4 border border-white"
                        onClick={resetPassword}
                >{buttonDisabled? "No submit": "Submit"}</button>
            </div>
            )}
            </div>
        </div>
    )
}