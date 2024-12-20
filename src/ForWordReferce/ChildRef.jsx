/* eslint-disable react/display-name */
import PropTypes from "prop-types"
import { forwardRef } from "react"



const ChildRef = forwardRef((props, ref) => {
  return <input type="text" ref={ref} {...props} />;
});

ChildRef.propTypes={
    props:PropTypes.string,
    ref:PropTypes.object
}

export default ChildRef