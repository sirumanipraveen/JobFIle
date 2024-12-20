import { useState } from "react"
import ButtomUpChildCom from "./ButtomUpChildCom"

function ButtomUpParentCom() {
    const [name,setName] =useState("")
    function funcs(data){
        setName(data)
    }
  return (
    <>
    <ButtomUpChildCom funcs={funcs} />
    <p>{name}</p>
    </>
  )
}

export default ButtomUpParentCom