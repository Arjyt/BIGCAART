import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [] // The cart array is inside this object.
  },
  reducers: {
    addToCart: (state, action) => {
      const exisistingProduct=state.cart.find(item=>item.id==action.payload.id)
      if(exisistingProduct){
        const remainingProducts=state.cart.filter(item=>item.id!=exisistingProduct.id)
        exisistingProduct.quantity++
        exisistingProduct.totalprice=exisistingProduct.price*exisistingProduct.quantity
        state=[...remainingProducts,exisistingProduct]
      }
      else{
        state.cart.push({...action.payload,quantity:1,totalprice:action.payload.price})
      }
      },
      removeFromCart: (state, action) => {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      },
      emptyCart:(state,action)=>{
        state.cart=[]
      }
    
  }
});

export const { addToCart,removeFromCart,emptyCart } = cartSlice.actions;

export default cartSlice.reducer;
