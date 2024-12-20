import { useState } from "react"

function SimpleDynamicInLine() {
    const [color,setColor] = useState("red")
    const [active,setActive] = useState(false)
    const handleFontColor =()=>{
        setActive(!active)
        active ? setColor("blue"):setColor("red")
    }
    const bestStyles = {
        padding: "30px",
    }
  return (
<>

<p style={{backgroundColor:color,color:"black",bestStyles}}>Welcome To Hyderabad</p>
<button onClick={handleFontColor}>Change Color</button>

</>
)
}

export default SimpleDynamicInLine