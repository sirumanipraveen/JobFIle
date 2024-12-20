import { useState } from 'react'
import styles from './style.module.css'

function CssModule() {
    const [isActive,setIsActive] =useState(false)
  return (

<>

    <h1 className={`${isActive ? styles.heading:styles.heading1}`}>
       welcome css module
    </h1>
    <button onClick={()=> setIsActive(!isActive)}>click</button>
</>

) 
}

export default CssModule