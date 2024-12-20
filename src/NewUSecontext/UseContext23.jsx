
import PropTypes from "prop-types"
import { CreateCOntx } from "./CreateContext"

function UseContext23({children}) {
    const user ="praveen"

  return (
    <>
    <CreateCOntx.Provider value={user}>
     {children}
    </CreateCOntx.Provider>
    </>
  )
}

UseContext23.propTypes={
    
    children : PropTypes.any
}

export default UseContext23