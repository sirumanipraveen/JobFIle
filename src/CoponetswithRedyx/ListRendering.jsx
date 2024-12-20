import { useDispatch ,useSelector} from "react-redux"

import {deleteitem} from "./ListSlice"




function ListRendering() {

    const dispatch = useDispatch()
  const users = useSelector((state)=> state.Listitems)

    const handle=(id)=>{
        dispatch(deleteitem(id))
        console.log(id)

    }
    
  return (

   <>
   <div className="container d-flex flex-column justify-content-center align-items-center">
    {
        users.map((items)=>(
            <div key={items.id}>
                <p>{items.email}</p>
                <button onClick={()=>handle(items.id)}>delete</button>
               

            </div>
        ))
    } 
    </div>
    
   </>
  )
}

export default ListRendering