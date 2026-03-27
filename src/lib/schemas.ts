import { z } from "zod";

// ============================================
// Auth - Inscription
// ============================================

export const signUpSchema = z
    .object({
        name: z.string().min(1, "Le nom est requis"),
        email: z.string().email("Email invalide"),
        password: z.string().min(8, "Le mot de passe doit contenir au moins 8 caractères"),
        confirmPassword: z.string().min(1, "La confirmation est requise"),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Les mots de passe ne correspondent pas",
        path: ["confirmPassword"],
    });

export type SignUpFormData = z.infer<typeof signUpSchema>;

// ============================================
// Auth - Connexion
// ============================================

export const signInSchema = z.object({
    email: z.string().email("Email invalide"),
    password: z.string().min(1, "Le mot de passe est requis"),
});

export const createBookingSchema = z.object({
  date: z.date(),
  start: z.date(),
  end: z.date(),
  spaceId: z.string()
});

export type SignInFormData = z.infer<typeof signInSchema>;