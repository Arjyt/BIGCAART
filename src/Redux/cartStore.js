import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productsSlice"; // Import the reducer from the slice
import WishlistSlice from './wishListslice'
import cartReducer from './cartSlice'
import { removeFromCart } from "./cartSlice";

const cartStore = configureStore({
    reducer: {
        productReducer: productSlice, // Use only the reducer from the slice
        WishlistReducer:WishlistSlice ,//
        cart: cartReducer,
        removeFromCart:removeFromCart
    }
});

export default cartStore;
