import { NextResponse } from "next/server";

export async function GET(){
    try {
        const response = await NextResponse.json(
            {   message: "Logout successfull", 
                success: true
            });
        //the repsonse can interact with cookies
        response.cookies.set("token", "", {httpOnly: true, expires: new Date(0)});
        return response;

    } catch (error:any) {
        console.log("Something went wrong", error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}