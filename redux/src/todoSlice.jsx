// import { createSlice } from "@reduxjs/toolkit";
// const counterSlice = createSlice({
//   name: "mycolor",
//   initialState: {
//     color: ""
//   },
//   reducers: {
//     colorChange: (state, actions) => {
//       state.color = actions.payload;
//     }
//   }
// });

// export const { colorChange } = counterSlice.actions;
// export default counterSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "myslice",
  initialState: {
    tasks: []
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter(item => item.id != action.payload.id)
    }
  }
})

export const { addTask, removeTask } = todoSlice.actions;
export default todoSlice.reducer;