

import Child from "./Child"
import  {Usercontext } from "./Usercontext"
import PropTypes from "prop-types"



function Context() {
    
    const name = "praveen"
    const age = 20

  return (
    <>
    <Usercontext.Provider value={{name,age}}>
     
   <Child/>
    </Usercontext.Provider>
    </>
  )
}


Context.propTypes={
  Children:PropTypes.object
}

export default Context





// useContext only provides access to context, not state logic like useReducer or useState

// All components consuming the context re-render on any context value change.

// No dedicated tools like Redux DevTools for tracking context changes.


// Not Suitable for Local State: Using useContext for non-shared 

// Managing multiple dynamic or frequently changing contexts can become cumbersome.

