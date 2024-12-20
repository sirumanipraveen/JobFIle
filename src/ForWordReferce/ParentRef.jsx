import { useRef } from "react"
import ChildRef from "./ChildRef"

function ParentRef() {
const inputref = useRef()

const handle=()=>{
    console.log(inputref.current.value)
}

  return (
    <>
    <ChildRef ref={inputref}/>
    <button onClick={handle}>submit</button>
    </>
  )
}

export default ParentRef