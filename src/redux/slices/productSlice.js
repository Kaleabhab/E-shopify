import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Mock API functions (replace with actual API calls in production)
const api = {
  fetchProducts: async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    return mockProducts;
  },
  fetchProductById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    const product = mockProducts.find(p => p.id === parseInt(id));
    if (!product) throw new Error('Product not found');
    return product;
  },
  searchProducts: async (query) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return mockProducts.filter(p => 
      p.title.toLowerCase().includes(query.toLowerCase()) ||
      p.description.toLowerCase().includes(query.toLowerCase())
    );
  }
};

// More realistic mock data
const mockProducts = [
  {
    id: 1,
    title: 'Wireless Bluetooth Headphones',
    price: 89.99,
    description: 'Premium noise-cancelling headphones with 30hr battery life',
    image: '/assets/images/headphones.jpg',
    rating: 4.5,
    stock: 15,
    category: 'electronics',
    variants: [
      { color: 'black', price: 89.99, images: ['/assets/images/headphones-black.jpg'] },
      { color: 'white', price: 94.99, images: ['/assets/images/headphones-white.jpg'] }
    ],
    reviews: 42
  },
  {
    id: 2,
    title: 'Smart Fitness Watch',
    price: 199.99,
    description: 'Track your heart rate, steps, and sleep patterns',
    image: '/assets/images/smartwatch.jpg',
    rating: 4.2,
    stock: 8,
    category: 'electronics',
    variants: [
      { color: 'black', price: 199.99 },
      { color: 'blue', price: 209.99 }
    ],
    reviews: 28,
    discount: 15 // percentage
  },
  {
    id: 3,
    title: 'Organic Cotton T-Shirt',
    price: 24.99,
    description: 'Comfortable eco-friendly t-shirt available in multiple colors',
    image: '/assets/images/tshirt.jpg',
    rating: 4.7,
    stock: 0, // out of stock
    category: 'clothing',
    variants: [
      { size: 'S', color: 'white' },
      { size: 'M', color: 'white' },
      { size: 'L', color: 'blue' }
    ],
    reviews: 63
  }
];

// Thunks
export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      return await api.fetchProducts();
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const fetchProductById = createAsyncThunk(
  'products/fetchById',
  async (id, { rejectWithValue }) => {
    try {
      return await api.fetchProductById(id);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const searchProducts = createAsyncThunk(
  'products/search',
  async (query, { rejectWithValue }) => {
    try {
      return await api.searchProducts(query);
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

const initialState = {
  products: [],
  filteredProducts: [],
  product: null,
  loading: false,
  error: null,
  searchQuery: '',
  filters: {
    category: 'all',
    priceRange: [0, 500],
    inStock: false,
    rating: 0
  }
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    clearFilters: (state) => {
      state.filters = initialState.filters;
    },
    applyFilters: (state) => {
      state.filteredProducts = state.products.filter(product => {
        // Category filter
        if (state.filters.category !== 'all' && 
            product.category !== state.filters.category) {
          return false;
        }
        
        // Price range filter
        if (product.price < state.filters.priceRange[0] || 
            product.price > state.filters.priceRange[1]) {
          return false;
        }
        
        // In stock filter
        if (state.filters.inStock && product.stock <= 0) {
          return false;
        }
        
        // Rating filter
        if (product.rating < state.filters.rating) {
          return false;
        }
        
        return true;
      });
    }
  },
  extraReducers: (builder) => {
    builder
      // Fetch all products
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
        state.filteredProducts = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to load products';
      })
      
      // Fetch single product
      .addCase(fetchProductById.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.product = null;
      })
      .addCase(fetchProductById.fulfilled, (state, action) => {
        state.loading = false;
        state.product = action.payload;
      })
      .addCase(fetchProductById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Product not found';
      })
      
      // Search products
      .addCase(searchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.filteredProducts = action.payload;
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Search failed';
      });
  }
});

export const { 
  setSearchQuery, 
  setFilters, 
  clearFilters, 
  applyFilters 
} = productSlice.actions;

export const selectProductLoading = (state) => state.products.loading;
export const selectAllProducts = (state) => state.products.products;
export const selectFilteredProducts = (state) => state.products.filteredProducts;
export const selectProductDetails = (state) => state.products.product;
export const selectProductError = (state) => state.products.error;
export const selectCurrentFilters = (state) => state.products.filters;

export default productSlice.reducer;