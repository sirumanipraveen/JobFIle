
import ChildCom from "./ChildCom"
function ParentCom() {
    const name ="praveen"
  return (
    <>
    <ChildCom name={name}/>
    </>
   
  )
}

export default ParentCom