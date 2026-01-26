import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest){
    try {
        const reqBody= await request.json();
        const {password, token} = reqBody;
    
        const user = await User.findOne({forgotPasswordToken: token, forgotPasswordTokenExpiry: {$gt: Date.now()}})
        console.log(user);
        if(!user){
            return NextResponse.json({error: "Invalid Token"}, {status: 500});
        }
    
        const salt=await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash(password, salt)
        
        user.forgotPasswordToken = undefined;
        user.forgotPasswordTokenExpiry = undefined;
        user.password = hashedPassword
    
        await user.save();
    
        return NextResponse.json({message: "Successfully reset password", status: 200, success: true})
    } catch (error: any) {
        console.log("something went wrong while reseting password", error.message);
        return NextResponse.json({error: error.message}, {status: 500});
    }

}