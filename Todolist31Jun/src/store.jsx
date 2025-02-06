import { configureStore } from "@reduxjs/toolkit";
import myReduser from "./todoSlice";

const store=configureStore({
    reducer:{
        //your reduser hear:
        todotask:myReduser
        
    }
})
export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import myreducer from "./todoSlice";
// const store=configureStore({
//     reducer:{
//         myslice:myreducer
//     }
// })
// export default store;