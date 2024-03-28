"use server"

import { FormEventHandler } from "react";
import z from "zod";

export const onEmailGet = async(currState :  {
    success: boolean,
    error: string | null,
    msg : string | null,
    status : number | null
}, data : FormData) => {
    const email = data.get("email");

    // Validate the email
    const emailSchema = z.string({
        required_error: "Email is required"
    }).email({
        message: "Invalid email address"
    });

    const emailValid = emailSchema.safeParse(email);
    if(!emailValid.success) {
        return {
            success: false,
            error: emailValid.error.errors[0].message,
            msg : null,
            status : null
        };
    }

    // Send email to the user
    // backend code to send email to the user

    const message = "Email sent successfully";
    return {
        success: true,
        error: null,
        msg : message,
        status : 200
    };
}

    