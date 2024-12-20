import { useState } from "react"
import { Link, Navigate } from "react-router-dom"

function Header() {
  const [isLogin,setLogout]= useState(false)
  if(isLogin){
    return <Navigate to="/login"/>
  }
  return (
    <>
    <div >
    <nav style={{
          display:"flex",justifyContent:"flex-end",position:"fixed",top:"0",left:"0",width:"100% " ,paddingRight:"10px"
        }}>
    
     <Link to="/about" style={{paddingRight:"20px" ,marginTop:"10px"}}> About</Link>
  
  
    <Link to="/product" style={{paddingRight:"20px" ,marginTop:"10px"}}>Products</Link>

 <Link to="/contact" style={{paddingRight:"20px",marginTop:"10px"}}> Cart</Link>

    <button style={{backgroundColor:"red",width:"80px" ,height:"40px",textAlign:"center",margin:"10px",color:"white" ,paddingBottom:"10px",borderRadius:"20px", paddingLeft:"3px"}} onClick={()=> setLogout(true)} >LogOut</button>
       
  
    </nav>
    </div>
    </>
  )
}

export default Header