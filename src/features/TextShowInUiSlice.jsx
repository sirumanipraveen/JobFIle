/* eslint-disable react-refresh/only-export-components */
import { createSlice } from '@reduxjs/toolkit'
const initialState={
display :"",
}
export const TextShow = createSlice({
    name :"texts",
    initialState,
    reducers :{
        textshow:((state)=>{
            state.display  +="welcome to hyd"
        })
    }
})

export const { textshow } = TextShow.actions

export default TextShow.reducer
