import { useState } from "react"

function TwoWayBonding() {
    const [name,setName] = useState("praveen")
    const handleInput = (e) =>{
        setName(e.target.value)
    }
  return (
    <>
    <p>{name}</p>
    <input type="texy" onChange={handleInput}/>
    </>
  )
}

export default TwoWayBonding