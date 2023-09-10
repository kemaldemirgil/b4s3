import axios from "axios";

// Create a separate Axios instance with configuration
const baseAxios = axios.create({ baseURL: "http://localhost:3001/", withCredentials: true });

// Create a separate error handler function
const handleError = (error) => {
  if (error.response) {
    console.error("Response Data:", error.response.data);
    console.error("Response Status:", error.response.status);
  } else if (error.request) {
    console.error("No response received:", error.request);
  } else {
    console.error("Error:", error.message);
  }
};

// Add an Axios response interceptor for handling errors globally
baseAxios.interceptors.response.use(
  (response) => response,
  (error) => {
    handleError(error);
    return Promise.reject(error);
  }
);

/**
 * Helper function to perform a GET request to the API.
 *
 * @async
 * @function
 * @param {string} endpoint - The API endpoint to request.
 * @returns {Promise<any>} A Promise that resolves to the response data.
 * @throws {Error} If an error occurs during the API request.
 */
export async function apiGet(endpoint) {
  try {
    const { data } = await baseAxios.get(endpoint);
    return data;
  } catch (error) {
    throw error;
  }
}
