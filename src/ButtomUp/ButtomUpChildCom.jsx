import PropTypes from "prop-types"


function ButtomUpChildCom({funcs}) {
    const handleButton=()=>{
        funcs("praveen")
    }
  return (
   <button onClick={handleButton}>click</button>
  )
}
 
ButtomUpChildCom.propTypes={
    funcs :PropTypes.func
}

export default ButtomUpChildCom