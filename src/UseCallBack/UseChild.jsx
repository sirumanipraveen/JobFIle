import PropTypes from "prop-types"
import { memo} from "react"

// eslint-disable-next-line no-unused-vars
function UseChild({Learning}) {
    
    console.log("childememo")
  return (
   <>
   
   </>
  )
}

UseChild.propTypes={
    Learning:PropTypes.func
}
export default memo(UseChild)