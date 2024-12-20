
import { useReducer } from "react"

const initailsState = {
    count :0
}

const counterReducer =(state,action)=>{
    switch(action.type){
        case "Increament By 4":
            return{
                count : state.count + action.payload
            }
        case "Increament By 3":
            return {
                count :state.count + action.payload
            }
        default:
            return {
                count : state.count + action.payload
            }
    }

}



function Payload() {

    const [state,dispatch] = useReducer(counterReducer,initailsState)
  return (
   <>
   <h1>counts :{state.count} </h1>
   <button onClick={()=> dispatch({type: 'Increament By 4' ,payload:4})}>Increament By 4</button>
   <button onClick={()=> dispatch({type:"Increament By 3",payload:3})}>Increament By 3</button>
   <button  onClick={()=> dispatch({type:"Increament By 5",payload:5})}>Increament By 5</button>
   
   </>
  )
}

export default Payload