

import './Home.css'

import PropTypes from 'prop-types'

function HomeChild({details}) {
  // console.log(details)
  return (
    <div className='container'>
    <img src={details.image} className='img-style'/>
    <h1 className='title-style'>{details?.title}</h1>
    <p className='priceStyle'> price : Rs {details?.price}</p>
    </div>
  )
}

HomeChild.propTypes={
  details:PropTypes.object
}

export default HomeChild