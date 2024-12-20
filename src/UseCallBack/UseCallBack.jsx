import { useCallback, useState } from "react"
import UseChild from "./UseChild"


function UseCallback() {
    const [count,setcount] = useState(0)
   const Learning = useCallback(()=>{

   },[])

   return (

    <>
    
    <p>{count}</p>
    <UseChild Learning={Learning}/>
    <button onClickCapture={()=> setcount(count+1)}>click</button>
    </>
  )
}

export default UseCallback