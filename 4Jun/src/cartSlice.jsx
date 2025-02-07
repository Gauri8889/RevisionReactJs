import { createSlice } from "@reduxjs/toolkit";

const cartSlice= createSlice({
    name :"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,genActionStyle)=>{
            console.log(genActionStyle.payload)
        }
    }
})
export const {addtoCart}=cartSlice.actions;
export default cartSlice.reducer;