
import { useContext } from "react"
import { CreateCOntx } from "./CreateContext"

function Hi() {

    const user = useContext(CreateCOntx)
  return (
    <div>{user}</div>
  )
}

export default Hi