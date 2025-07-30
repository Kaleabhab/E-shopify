// productSlice.js placeholder
// productSlice.js placeholder
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Dummy API simulation
const dummyProducts = [
  { id: 1, title: 'Product 1', price: 29.99, description: 'Description 1', image: '/assets/images/product1.jpg' },
  { id: 2, title: 'Product 2', price: 49.99, description: 'Description 2', image: '/assets/images/product2.jpg' },
];

// Fetch all products
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  return dummyProducts;
});

// Fetch single product by id
export const fetchProductById = createAsyncThunk('product/fetchProductById', async (id) => {
  return dummyProducts.find(p => p.id === parseInt(id));
});

const productSlice = createSlice({
  name: 'product',
  initialState: { products: [], product: null, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;
