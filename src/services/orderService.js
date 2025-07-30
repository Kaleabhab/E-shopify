// orderService.js placeholder
// orderService.js placeholder
import API from './api';

export const placeOrder = (orderData) => API.post('/orders', orderData);
export const getUserOrders = () => API.get('/orders');