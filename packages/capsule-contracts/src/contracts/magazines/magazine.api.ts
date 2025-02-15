import { initContract } from '@ts-rest/core';
import { ResponseSchema } from '../../schemas';

const c = initContract();

export const magazineContract = c.router({
  getMagazines: {
    method: 'GET',
    path: '/magazines',
    query: undefined,
    responses: {
      200: ResponseSchema,
    },
    summary: 'list magazines',
  },
});
