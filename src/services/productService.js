// productService.js placeholder
// productService.js placeholder
import API from './api';

export const getProducts = () => API.get('/products');
export const getProductById = (id) => API.get(`/products/${id}`);