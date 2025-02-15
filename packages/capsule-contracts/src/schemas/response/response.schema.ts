import { z } from 'zod';

export const ResponseSchema = z.object({
  status: z.number(),
  body: z.object({}),
});

export type ResponseType = {
  status: number;
  body: object;
};
