import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/dbConfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";

connect();

export async function POST(request: NextRequest){
    try {
        const reqBody = await request.json();
        const {emailId} = reqBody;
        console.log("email id: ", emailId);

        const user = await User.findOne({email: emailId});
        if(!user) return NextResponse.json({error: "User doesnt exist"},{status: 404});

        await sendEmail({email: emailId, emailType: "RESET", userId: user._id});

        return NextResponse.json({message: "Reset email send successfully", success: true, status: 200});

    } catch (error: any) {
        console.log("Something went wrong in forgot password", error.message);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}