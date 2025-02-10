
import { createSlice } from "@reduxjs/toolkit"
import {message} from "antd";
const CartSlice= createSlice({
    name:"mycart",
    initialState:{
        cart:[]
    },
    reducers:{
        addtoCart:(state,action)=>{
            const data = state.cart.filter(key=>key.id==action.payload.id)

            if(data.length>=1){
               alert("Product already added")
            }
            else{
              state.cart.push(action.payload);
            }
        },
        qntyInc:(state, actions)=>{
            for (var i=0; i<state.cart.length; i++)
            {
               if (state.cart[i].id==actions.payload.id)
            
               {
                   state.cart[i].qnty++;
               }
            }
       },
       qntyDec:(state, actions)=>{
           for (var i=0; i<state.cart.length; i++)
           {
              if (state.cart[i].id==actions.payload.id)
              {
                  if (state.cart[i].qnty<=1)
                  {
                     message.error("Quantity not less than 1")
                  }
                  else 
                  {
                   state.cart[i].qnty--;
                  }
                 
              }
           }
      },


   proDelete:(state, actions)=>{
    state.cart= state.cart.filter(key=>key.id!=actions.payload)
   }
    }
});

export const {addtoCart,qntyInc,qntyDec,proDelete} = CartSlice.actions;
export default CartSlice.reducer;