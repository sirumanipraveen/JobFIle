import { useState } from "react"
import Childmemo from "./Childmemo"


function Memo() {
    const [count,setcount] = useState(0)
   return (

    <>
    
    <p>{count}</p>
    <Childmemo/>
    <button onClickCapture={()=> setcount(count+1)}>click</button>
    </>
  )
}

export default Memo