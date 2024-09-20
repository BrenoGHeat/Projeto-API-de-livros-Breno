import { z } from "zod";

export const createBooksBodySchema = z.object({
    name: z.string().min(3),
    pages: z.number().min(1),
    category: z.string().optional()
})


export const editBooksBodySchema = z.object({
    name: z.string().min(3).optional(),
    pages: z.number().min(1).optional(),
    category: z.string().optional()
})