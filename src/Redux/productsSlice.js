import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"; 
import axios from "axios";

// Define and export the fetchProducts thunk
export const fetchProducts = createAsyncThunk('allProducts/fetchProducts', async () => {
    const result = await axios.get('https://dummyjson.com/products');
    localStorage.setItem("products",JSON.stringify(result.data.products))
    return result.data.products;
});

export const productSlice = createSlice({
    name: "allProducts",
    initialState: {
        products: [],
        productsDummy:[],
        loading: false,
        error: ""
    },
    reducers: {
        searchProducts:(state,action)=>{
            state.products=state.productsDummy.filter(item=>item.title.toLowerCase().includes(action.payload))
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload; // Fix: Added action parameter
                state.productsDummy=action.payload
            })
            .addCase(fetchProducts.rejected, (state, action) => { // Added action parameter here as well
                state.loading = false;
                state.products = [];
                state.productsDummy=[];
                state.error = action.error.message || "API Failed... Please try after some time..."; // Handle error properly
            });
    }
});

export default productSlice.reducer;
export const {searchProducts}=productSlice.actions