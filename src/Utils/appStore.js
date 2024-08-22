import {configureStore} from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";


const appStore =configureStore({
   reducer: {
    cart: cartReducer,
   }
});
//configure store will create the store
export default appStore;