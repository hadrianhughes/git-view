import { API_URL } from './config';

const api = (query: string) =>
  fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `bearer ${process.env.ACCESS_TOKEN}`
    },
    body: JSON.stringify({ query })
  })
    .then(response => response.json());

export const searchUser = (user: string) => api(
  `
  {
    user(login: "${user}") {
      avatarUrl
    }
  }
  `
);
