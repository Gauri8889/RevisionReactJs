import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./src/pages/cartSlice";
 

const store = configureStore({
    reducer: {
        mycart:cartReducer
    }
})
export default store;