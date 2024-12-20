
import PropTypes from "prop-types"


function LiftingChild2({InputValue}) {
  return (
   <>
   <h1> enter the input Value :{InputValue}</h1>
   </>
  )
}
export default LiftingChild2

LiftingChild2.propTypes={
    InputValue:PropTypes.string
}
