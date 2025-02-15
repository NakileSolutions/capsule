import { z } from 'zod';

export const RegisterBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
  pseudo: z.string(),
});

export const LoginBodySchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
