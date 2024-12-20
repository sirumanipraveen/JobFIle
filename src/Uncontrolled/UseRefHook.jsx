import { useRef } from "react"

function UseRefHook() {
  let ref = useRef(0)

  const handleout =()=>{
    ref.current= ref.current+1

  }
  
  return (
    <button onClick={handleout}>click</button>
  )
}

export default UseRefHook