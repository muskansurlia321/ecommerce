
const API_BASE_URL = process.env.REACT_APP_API_URL || "https://ecomm-backend-0b7x.onrender.com";

export const apiFetch = (url, options = {}) => {
  return fetch(`${API_BASE_URL}${url}`, options);
};
