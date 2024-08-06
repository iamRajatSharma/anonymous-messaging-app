import { z } from "zod";


export const verifySchame = z.object({
    code: z.string().min(6, "Verification code must be 6 digit")
})