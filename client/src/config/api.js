/**
 * API Configuration
 * Centralized configuration for API endpoints and base URLs
 */

export const API_CONFIG = {
  // Base API URL - uses environment variable or defaults to localhost
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  
  // Application domain
  appDomain: import.meta.env.VITE_APP_DOMAIN || 'https://theskribe.com',
  
  // API timeout (in milliseconds)
  timeout: 10000,
  
  // Enable credentials (cookies, authorization headers) in requests
  withCredentials: true,
  
  // API version
  version: 'v1'
};

/**
 * Get full API endpoint URL
 * @param {string} endpoint - The API endpoint path (e.g., '/auth/login')
 * @returns {string} Full URL
 */
export const getApiUrl = (endpoint) => {
  return `${API_CONFIG.baseURL}/api${endpoint}`;
};

/**
 * Available API endpoints
 */
export const API_ENDPOINTS = {
  // Authentication
  AUTH: {
    SIGNUP: '/auth/signup',
    LOGIN: '/auth/login',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    FORGOT_PASSWORD: '/auth/forgot-password',
    RESET_PASSWORD: '/auth/reset-password'
  },
  
  // Users
  USERS: {
    PROFILE: '/users/profile',
    UPDATE_PROFILE: '/users/profile',
    GET_USER: (userId) => `/users/${userId}`
  },
  
  // Writers
  WRITERS: {
    LIST: '/writers',
    GET_WRITER: (writerId) => `/writers/${writerId}`,
    CONTACT: '/writers/contact'
  },
  
  // Health Check
  HEALTH: '/health'
};

export default API_CONFIG;
