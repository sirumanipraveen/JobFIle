import { useState } from "react"


function HandleFormSubmition() {
  const [firstname,setFirstname] = useState("")
  const [Middlename,setMiddlename] = useState("")
  const [Lastrname,setLastname] = useState("")

  const handleFirstName =(e)=>{
    setFirstname(e.target.value)

  }
  const handleMiddleName=(e)=>{
    setMiddlename(e.target.value)
  }

  const handlaststName =(e)=>{
    setLastname(e.target.value)
  }

  const handleForm =(e)=>{
    e.preventDefault()
    console.log(firstname,Middlename,Lastrname)
    
  }
  return (
    
    <form onSubmit={handleForm}>

      <div>
        <label>FirstName</label>
        <input type="text" onChange={handleFirstName} value={firstname} required/>
      </div>
      <div>
        <label>MiddleName</label>
        <input type="text" onChange={handleMiddleName} value={Middlename} required/>
      </div>
      <div>
        <label>LastName</label>
        <input type="text" onChange={handlaststName} value={Lastrname} required/>
      </div>
      <input type="submit"/>
    </form>
 
  )
}

export default HandleFormSubmition