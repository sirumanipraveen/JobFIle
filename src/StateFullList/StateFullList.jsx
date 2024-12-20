
import { useState } from "react"


function StateFullList() {
    const [lists,setLists] = useState(["apple","mango","banana","orange"])
    const [inputValue,setInputValue] = useState("")
console.log(inputValue)
    const handleInput =(e)=>{
        setInputValue(e.target.value)

    }
    

  const handleKeys=(event)=>{
    if(event.key ==='Enter'){
        setLists([...lists,inputValue])
    }
  }

  return (
    <>

    {
        lists.map((elements)=>(
            <div key={elements}>
                <li>{elements}</li>
            </div>
        ))
    }

     <input type="text" 
     onChange={handleInput} 
    value={inputValue}
     onKeyDown={handleKeys}
     
     />
    </>
  )
}

export default StateFullList