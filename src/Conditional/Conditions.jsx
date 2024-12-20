import { useState } from "react"

function Conditions() {
    const [isLogin,setIsLogin] = useState(false)
const handleButton =()=>{
    setIsLogin(true)
}
function Greating(){

// if(isLogin){
//     return <h1>Login completed...</h1>
// }else{
//     return <h1>Login is pending...</h1>
// }}
switch(isLogin){
    case true :
        return <h1>Login completed...</h1>
    default:
        return <h1>Login is pending...</h1>
}


}


return (
    <>
    {Greating()}
    <button onClick={handleButton}>
        {
           isLogin ? "Logout":"Login"
        }

    </button>
    </>
  )
}

export default Conditions















