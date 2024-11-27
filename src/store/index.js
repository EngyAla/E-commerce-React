import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart-slice'
import favReducer from './fav-slice'


export const store = configureStore({
    reducer: {
        cart: cartReducer,
        fav: favReducer
    }
})

