export const BASE_URL =
  process.env.NODE_ENV === 'production'
    ? 'https://alstn113.vercel.app/api'
    : 'http://localhost:3000/api';
