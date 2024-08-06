import { z } from "zod";


export const messageSchema = z.object({
    content: z.string().min(10, "Message must be atleast of 10 character").max(30, "Message must be no longer than 300 character")
})