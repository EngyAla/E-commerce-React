import { createSlice } from "@reduxjs/toolkit";

const favSlice = createSlice({
    initialState: (()=>{
        try{
            return JSON.parse(localStorage.getItem("fav")) || []
        } catch{
            return []
        }
    })(),
    name: 'fav',
    reducers: {
        addToFav(state, action){
            if(localStorage.getItem("username") && localStorage.getItem("email") && localStorage.getItem("password")){
            const favProduct = state.find((item)=> item.id === action.payload.id)
            if(favProduct){
                alert("product already exist")
            } else{
                const favclone = {...action.payload, quanitiy: 1}
                state.push(favclone)
            }
            localStorage.setItem("fav", JSON.stringify(state))
            } else{
                alert("Sign up first")
            }
            
        },
        removeFromFav(state, action){
            const favProduct = state.find((item)=> item.id === action.payload.id)
            const index = state.findIndex((product)=> product.id === favProduct.id)
            if(index !== -1){
                state.splice(index, 1)
            }
            localStorage.setItem("fav", JSON.stringify(state))
        }
    }
})


export const { addToFav, removeFromFav } = favSlice.actions;
export default favSlice.reducer;