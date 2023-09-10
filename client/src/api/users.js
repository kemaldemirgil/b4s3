import { apiGet } from "../initializers";

/**
 * Fetches a list of users from the API.
 *
 */
export async function getUsers() {
  return apiGet(`/users/`);
}

/**
 * Fetches a user by their ID from the API.
 *
 * @param {number} id - The ID of the user to fetch.
 */
export async function getUser(id) {
  return apiGet(`/users/${id}`);
}
