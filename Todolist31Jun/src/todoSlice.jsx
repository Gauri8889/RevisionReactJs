import { createSlice } from "@reduxjs/toolkit";
const TaskSlice=createSlice({
    name:"todotask",
    initialState:{
        task:[]
    },
    reducers:{
        addData:(state, actions)=>{
            state.task.push(actions.payload);
        },
        deletData:(state,actions)=>{
            state.task=state.task.filter((key)=>key.id!=actions.payload);
        },
        compliteData:(state , actions)=>{
            const Item =state.task.find((key)=> key.id===actions.payload)
            if(Item) Item.status=true;

        },
        UncompliteData:(state, actions)=>{
            const Item = state.task.find((key)=>key.id===actions.payload)
            if(Item) Item.status=false;

        },
        EditData:(state , actions)=>{
            const Item = state.task.find((key)=>key.id===actions.payload.id)
            if(Item) Item.work=actions.payload.work
        }
    }
})
export const{addData , deletData,UncompliteData, compliteData,EditData}=TaskSlice.actions;
export default TaskSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// const todoSlice =createSlice({
//     name:"myslice",
//     initialState:{
//         task:[]
//     },
//     reducers:{
//         addTask:(state,actions)=>{
//             state.task.push(actions.payload);
//         },
//         removeTask:(state,actions)=>{
//             state.task=state.task.filter(item=>item.id=actions.payload.id)
//         },
//         taskComplete:(state,actions)=>{
//             for(var i=0;i<state.task.length;i++)
//             {
//                 if(state.task[i].id==actions.payload.id)
//                 {
//                     state.task[i].state="InComplete";
//                 }

//             }
//         },
//         taskInComplete:(state,actions)=>{
//             for(var i=0;i<state.task.length;i++)
//             {
//                 if(state.task[i].id==actions.payload.id)
//                 {
//                     state.task[i].state="Complete";
//                 }
                
//             }
//         }
//     }
// })
// export const {addTask,removeTask, taskComplete, taskInComplete,myEditSave}=todoSlice.actions;
// export default todoSlice.reducer;