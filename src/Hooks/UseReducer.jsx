



import { useReducer } from "react"


const initailstate = {count:0}

function reduce(state,action){

    switch(action.type){
        case 'increament':
            return {count:state.count+1}
        default:
            return {count :state.count-1}
    }
}

function UseReducer() {

    const [state,dispatch] = useReducer(reduce,initailstate)
  return (
   <>
   <p>{state.count}</p>
   <button onClick={()=>{(dispatch({type : "increament"}))}}>Increament</button>
   <button onClick={()=>{(dispatch({type : "decreament"}))}}> decreament</button>
   
   </>
  )
}

export default UseReducer


























// const initailstate = {
//     name :"",
//     email:"",
//     possword:""

// }


// function reduce(state,action){

//     switch(action.type){
//         case "Name":
//             return {...state ,name:action.payload}
//         case 'email':
//             return {...state,email:action.payload}
//         default:
//             return {...state,possword : action.payload
//             }
//     }
// }

// function UseReducer() {

//     const [state,dispatch] = useReducer(reduce,initailstate)
//     console.log(state.name,state.email)
//   return (
//    <>
//    <input type="text" onClick={(e)=> dispatch({type:"Name", payload:e.target.value})}/>
//    <input type="email"  onClick={(e)=> dispatch({type:"email", payload:e.target.value})}/>
//    <input  type="text"    onClick={(e)=> dispatch({type:"possword", payload:e.target.value})}/>
   
//    </>
//   )
// }

// export default UseReducer