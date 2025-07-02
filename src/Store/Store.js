import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../Features/Cart/CartSlice.js"





export const Store = configureStore({
    reducer: cartReducer
})