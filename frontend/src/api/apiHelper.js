// apiHelper.js

// Get the base API URL from environment variables
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

/**
 * Helper function to handle responses.
 * @param {Response} response - Fetch API response.
 * @returns {Promise<Object>} - Parsed JSON if response is OK.
 * @throws Will throw an error if the response is not OK.
 */
async function handleResponse(response) {
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || 'An error occurred');
  }
  return response.json();
}

/**
 * Performs a GET request to the given endpoint.
 * @param {string} endpoint - API endpoint (e.g., '/todos').
 * @param {Object} [options={}] - Additional fetch options.
 * @returns {Promise<Object>} - Parsed JSON response.
 */
export async function getRequest(endpoint, options = {}) {
  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
  return handleResponse(response);
}

/**
 * Performs a POST request to the given endpoint.
 * If the data is an instance of FormData, it will be sent as is.
 * Otherwise, it will be stringified as JSON.
 * @param {string} endpoint - API endpoint (e.g., '/todos/import').
 * @param {Object|FormData} data - Data to be sent.
 * @param {Object} [options={}] - Additional fetch options.
 * @returns {Promise<Object>} - Parsed JSON response.
 */
export async function postRequest(endpoint, data, options = {}) {
  const isFormData = data instanceof FormData;

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: 'POST',
    headers: isFormData ? {} : { 'Content-Type': 'application/json' },
    body: isFormData ? data : JSON.stringify(data),
    ...options,
  });
  return handleResponse(response);
}

// Optionally, you can export a default object to use throughout your app
const apiHelper = {
  get: getRequest,
  post: postRequest,
};

export default apiHelper;
