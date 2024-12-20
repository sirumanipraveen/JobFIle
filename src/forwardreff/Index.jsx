
import { useRef } from "react"


import MyInput from "./MyInput"
function Parent() {
  const inputref = useRef()
  const handleinput = ()=>{
    alert(inputref.current.value)
  }
  return (
    <>
  <MyInput ref={inputref}/>
    <button onClick={handleinput}>click</button>
    </>
  )
}

export default Parent
