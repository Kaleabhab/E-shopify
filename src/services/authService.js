// authService.js placeholder
// authService.js placeholder
import API from './api';

export const loginUser = (credentials) => API.post('/auth/login', credentials);
export const signupUser = (data) => API.post('/auth/signup', data);