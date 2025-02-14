import { initContract } from '@ts-rest/core';

const c = initContract();

export const magazineContract = c.router({
  getMagazines: {
    method: 'GET',
    path: '/magazines',
    query: undefined,
    responses: {
      200: null
    },
    summary: "list magazines"
  }
})
