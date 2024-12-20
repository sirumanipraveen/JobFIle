


import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    value:0,
    text :""
}

export const userslice = createSlice ({
    name:"counter",
    initialState,
    reducers :{
        increment : ((state)=>{
            state.value +=1
        }),
        decrement:((state)=>{
            state.value -=1
        }),
        increamentbyamout : ((state,action)=>{
            state.value +=action.payload
        }),
        text:((state)=>{
            state.text= "welcome to redux tool kit"
        })
    }

})

export const {decrement,increment, increamentbyamout,text} = userslice.actions 
export default userslice.reducer