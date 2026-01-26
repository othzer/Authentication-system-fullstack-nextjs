// import nodemailer from 'nodemailer';
// import User from "@/models/userModel";
// import bcryptjs from 'bcryptjs';
// import { env } from "@/lib/env";


// export const sendEmail = async ({email, emailType, userId}:any)=>{
//     try {
//         //create a hashed token for verification
//         const hashedToken = await bcryptjs.hash(userId.toString(), 10)

//         if(emailType ==="VERIFY"){  //to verify email id
//             await User.findByIdAndUpdate(userId, 
//                             {verifyToken: hashedToken, 
//                              verifyTokenExpiry: Date.now()+3600000 })
//         }else if(emailType ==="RESET"){  //to reset password
//             await User.findByIdAndUpdate(userId, 
//                             {forgotPasswordToken: hashedToken,
//                             forgotPasswordTokenExpiry: Date.now()+240000 })
//         }

//         const transporter = nodemailer.createTransport({
//             host: "sandbox.smtp.mailtrap.io",
//             port: env.MAILTRAP_PORT,
//             auth: {
//               user: env.MAILTRAP_USER_ID,
//               pass: env.MAILTRAP_PASSWORD
//             }
//         });

//         const mailOptions = {
//             from: "dev-otzr@gmail.com",
//             to: email,
//             subject: emailType === "VERIFY"? "Verify your email": "Reset your password",
//             html: `<p>CLick <a href ="${env.DOMAIN}/${emailType==="VERIFY"? "verifyemail":"resetpassword"}?">here</a> to ${emailType==="VERIFY" ? "Verify your email": "Reset your password"}
//             Or open the link in your browser. <br/> ${env.DOMAIN}/${emailType==="VERIFY"? "verifyemail":"resetpassword"}?token=${hashedToken}</p>`
//         }
//         const mailResponse = await transporter.sendMail(mailOptions);
//         return mailResponse;
        
//     } catch (error: any) {
//         throw new Error(error.message);
//     }
// }

import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";
import bcryptjs from "bcryptjs";
import User from "@/models/userModel";
import { env } from "@/helpers/env";

type EmailType = "VERIFY" | "RESET";

interface SendEmailParams {
  email: string;
  emailType: EmailType;
  userId: string;
}

export const sendEmail = async ({
  email,
  emailType,
  userId,
}: SendEmailParams) => {
  try {
    // create hashed token
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 240000,
      });
    }

    //Explicit SMTP typing
    const transportOptions: SMTPTransport.Options = {
      host: env.MAILTRAP_HOST,
      port: Number(env.MAILTRAP_PORT),
      auth: {
        user: env.MAILTRAP_USER_ID,
        pass: env.MAILTRAP_PASSWORD,
      },
    };

    const transporter = nodemailer.createTransport(transportOptions);

    const actionPath =
      emailType === "VERIFY" ? "verifyemail" : "resetpassword";

    const mailOptions = {
      from: "dev-otzr@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY"
          ? "Verify your email"
          : "Reset your password",
      html: `
        <p>
          Click
          <a href="${env.DOMAIN}/${actionPath}?token=${hashedToken}">
            here
          </a>
          to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}.
          <br/>
          Or open this link in your browser:
          <br/>
          ${env.DOMAIN}/${actionPath}?token=${hashedToken}
        </p>
      `,
    };

    return await transporter.sendMail(mailOptions);
  } catch (error: any) {
    throw new Error(error.message);
  }
};
