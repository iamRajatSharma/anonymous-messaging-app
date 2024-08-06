import { string, z } from "zod";

export const usernameValidation = z.string().min(6, "Username must atleast 2 character").max(6, "Username must be no more 20 character").trim();
export const emailValidation = z.string().email();
export const passwordValidation = z.string().min(6, "Password must be greater than 6 character");


export const signUpSchema = z.object({
    username: usernameValidation,
    email: emailValidation,
    password: passwordValidation
})