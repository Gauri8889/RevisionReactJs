import { createSlice } from "@reduxjs/toolkit";
const todoSlice =createSlice({
    name:"myslice",
    initialState:{
        task:[]
    },
    reducers:{
        addTask:(state,actions)=>{
            state.task.push(actions.payload);
        },
        removeTask:(state,actions)=>{
            state.task=state.task.filter(item=>item.id=actions.payload.id)
        },
        taskComplete:(state,actions)=>{
            for(var i=0;i<state.task.length;i++)
            {
                if(state.task[i].id==actions.payload.id)
                {
                    state.task[i].state="InComplete";
                }
            }
        }
    }
})
export const {addTask,removeTask, taskComplete, taskInComplete,myEditSave}=todoSlice.actions;
export default todoSlice.reducer;