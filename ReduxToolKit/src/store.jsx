import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./counterslice";

const store=configureStore({
    reducer:{
        myslice:countReducer
    }

})
 export default store;

   
