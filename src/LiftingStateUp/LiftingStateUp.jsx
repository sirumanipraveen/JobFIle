
import LiftingChild1 from "./LiftingChild1"
import LiftingChild2 from "./LiftingChild2"
import { useState } from "react"
function LiftingStateUp() {
    const [InputValue,setInputValue] = useState("")
   


    function lift(e){
      setInputValue(e.target.value)
    }
  return (
    <>
    <LiftingChild1 InputValue={InputValue} lift={lift}/>
    <LiftingChild2 InputValue={InputValue}/>
    </>
    
  )

}

export default LiftingStateUp



