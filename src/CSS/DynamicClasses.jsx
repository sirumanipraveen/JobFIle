import { useState } from 'react'
import './style.css'
function DynamicClasses() {
    const[isActive,setIsActive] = useState(false)
    const toggle =()=>{
        setIsActive(!isActive)
    }
  return (
    <>

    {/* <h1 className={
        isActive ? 'Active':'unActive'
    }>Hi Praveen Welcome To Hyderabad!</h1> */}
     <h1 className={`${isActive ? 'Active':'unActive'}`}>Hi Praveen Welcome To Hyderabad!</h1>
<button onClick={toggle}>
{isActive ? 'Active':'UnActive'}
</button>

    </>
    
  )
}

export default DynamicClasses