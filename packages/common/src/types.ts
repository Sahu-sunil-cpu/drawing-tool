import { z } from "zod";

export const CreateUserSchema = z.object({
   
    password: z.string(),
    username: z.string(),
    email: z.string().email(),
})

export const SigninSchema = z.object({
    username: z.string().min(3).max(20),
    password: z.string(),
    email: z.string().email(),
})

export const CreateRoomSchema = z.object({
    name: z.string().min(3).max(20),
})



