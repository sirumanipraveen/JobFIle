import PropTypes from "prop-types";
function LoggingWrapper({ children }) {
   
    return (

    <div>{children}</div>
)
  }


  LoggingWrapper.propTypes={
    children:PropTypes.string
  }
  
  export default LoggingWrapper;
  