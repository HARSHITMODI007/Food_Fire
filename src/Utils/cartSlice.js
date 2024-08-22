import {createSlice} from "@reduxjs/toolkit"
//createSlice creates a slice & it takes a configuration to create a slice
const cartSlice = createSlice(
{
    name:'cart',
    initialState:{
        items: []
    },
    reducers:{
        //reducer function modifies the slice of the store,gets access to state & this action
        //now it will modify the state based on action
        additem: (state,action)=>{
            //mutating the state over here
            console.log("action.payload=",action.payload);
            state.items.push(action.payload);

        },
        removeItem:(state)=>{
            state.items.pop()
        },
        clearCart:(state)=>{
            state.items.length=0;
        }
    }
}

)
export const{additem,removeItem,clearCart}=cartSlice.actions
export default cartSlice.reducer