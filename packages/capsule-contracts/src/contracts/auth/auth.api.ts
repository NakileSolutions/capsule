import { initContract } from '@ts-rest/core';
import { LoginBodySchema, RegisterBodySchema } from './schemas/auth.schema';
import { ResponseSchema } from '../../schemas';

const c = initContract();

export const authContract = c.router({
  register: {
    method: 'POST',
    path: '/register',
    body: RegisterBodySchema,
    responses: {
      200: ResponseSchema,
    },
    summary: 'Register new user',
  },
  login: {
    method: 'POST',
    path: '/login',
    body: LoginBodySchema,
    responses: {
      200: ResponseSchema,
    },
    summary: 'Log in user',
  },
});
