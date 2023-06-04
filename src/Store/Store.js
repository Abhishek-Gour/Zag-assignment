import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './CartSlice'
const store = configureStore({
    reducer: {
        mainCart: cartReducer,
    }
})
export default store