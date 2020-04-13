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
      avatarUrl,
      repositories(first: 50, orderBy: { field: UPDATED_AT, direction: DESC }) {
        nodes {
          name,
          updatedAt,
          languages(first: 10) {
            nodes {
              name,
              color
            }
          }
        }
      }
    }
  }
  `
);
