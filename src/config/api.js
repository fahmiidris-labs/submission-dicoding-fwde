export const BASE_URL = 'https://restaurant-api.dicoding.dev';
export const BASE_URL_IMAGE = `${BASE_URL}/images/medium/`;

export const API = {
  LIST: `${BASE_URL}/list`,
  DETAIL: (id) => `${BASE_URL}/detail/${id}`,
};
