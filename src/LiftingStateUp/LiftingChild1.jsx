import * as PropTypes from "prop-types";



function LiftingChild1({InputValue,lift}) {
    
  return(
    <>
    <input type="text" placeholder="enter your name !" value={InputValue} onChange={(e)=>{lift(e)}}/>
    </>
  )
}

LiftingChild1.propTypes = {
  InputValue: PropTypes.string, 
  lift:PropTypes.func
};



export default LiftingChild1 

