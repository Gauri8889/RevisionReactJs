// import { configureStore } from "@reduxjs/toolkit";
// import countReducer from "./counterSlice";

// const store = configureStore({
//   reducer: {
//     mycolor: countReducer,
//   },
// });

// export default store;


import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    myslice: todoReducer,
  },
});

export default store;