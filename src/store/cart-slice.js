import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    initialState: (() => {
        try {
            return JSON.parse(localStorage.getItem("carts")) || [];
        } catch {
            return [];
        }
    })(),
    name: 'cart',
    reducers: {
        addToCart(state, action){
            if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
                const findProduct = state.find((product) => product.id === action.payload.id)
                if(findProduct){
                    findProduct.quanitiy += 1
                }else{
                    const productClone = {...action.payload, quanitiy: 1}
                    state.push(productClone)
                }
                // console.log(findProduct)
                // console.log(state)
                localStorage.setItem("carts", JSON.stringify(state))
            } else{
                alert("Sign up first")
            }
        
    },
    increaseQuantity(state, action) {
        const findProduct = state.find((product) => product.id === action.payload);
        if (findProduct) {
            findProduct.quanitiy += 1;
            console.log(findProduct.quanitiy);
        }
        localStorage.setItem("carts", JSON.stringify(state))
    },
    decreaseQuantity(state, action) {
        const findProduct = state.find((product) => product.id === action.payload);
        if (findProduct && findProduct.quanitiy > 1) {
            findProduct.quanitiy -= 1;
        } else if(findProduct.quanitiy === 1){
            console.log(findProduct.id)
            const index = state.findIndex((product) => product.id === findProduct.id)
            if(index !== -1){
                console.log(index)
                state.splice(index, 1)
            }
        }
        localStorage.setItem("carts", JSON.stringify(state))
    }
}
})

export const {addToCart, increaseQuantity, decreaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;