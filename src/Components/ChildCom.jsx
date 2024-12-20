import PropTypes from "prop-types"
function ChildCom({name}) {
  return (
    <>
    <p>{name}</p>
    </>
  )
}

ChildCom.propTypes={
    name:PropTypes.string
}

export default ChildCom