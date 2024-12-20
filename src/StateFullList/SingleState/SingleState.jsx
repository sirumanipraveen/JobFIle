
import { useState } from "react"



function SingleState() {
    const [state,setState] = useState({
        count:0,
        text :"hi"
    })


    const handleText =()=>{
        setState({...state,text:"hi praveen"})
    }

const handleCount =()=>{
    setState({...state,count:state.count+1})
}
  return (
<>
<p>{state.text}</p>
<p>{state.count}</p>
<button onClick={handleCount}>Increament</button>
<button onClick={handleText}>Text</button> 


</>
  )
}

export default SingleState