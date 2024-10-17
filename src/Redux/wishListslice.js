import { createSlice } from "@reduxjs/toolkit";



const wishListslice=createSlice({
    name:"wishlist",
    initialState:{
        Wishlist:[]
    },
    reducers:{
      addTowishList:(state,action)=>{
        state.Wishlist.push(action.payload)
      },
      removeFromWishlist:(state,action)=>{
      state.Wishlist=state.Wishlist.filter(item=>item.id!=action.payload)
      }
    }
})

export const{addTowishList,removeFromWishlist}=wishListslice.actions
export default wishListslice.reducer