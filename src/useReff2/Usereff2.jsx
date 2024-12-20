import { useRef } from "react"



function Usereff2() {

  const currentInput = useRef()
  console.log(currentInput.current.value)

  return (
    <>
    
     <input type="text" ref={(currentInput)}/>
    </>


  )
}

export default Usereff2