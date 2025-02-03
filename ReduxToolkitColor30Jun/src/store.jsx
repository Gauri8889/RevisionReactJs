import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";

const store=configureStore({
    reducer:{
        myslice:colorReducer
    }

})
 export default store;

   
