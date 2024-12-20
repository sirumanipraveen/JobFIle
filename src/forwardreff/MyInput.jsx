/* eslint-disable react/display-name */

import PropTypes from "prop-types"
import { forwardRef } from "react"


const MyInput = forwardRef((props,ref)=>{
  return (
    <>
    <input type="text" ref={ref} {...props}/>
    </>
  )
})

MyInput.propTypes={
    ref:PropTypes.func,
    props:PropTypes.object
}
export default MyInput
