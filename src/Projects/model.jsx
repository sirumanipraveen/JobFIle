



import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';


const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) {
    return null 
    
  } 

  else{
  return ReactDOM.createPortal(
    <div >
      <div style={{backgroundColor:"black" ,color:"white"}} >
        <h2>Modal Title</h2>
        <p>This is a simple modal rendered using React Portal.</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root') 
  );
};}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired, 
  onClose: PropTypes.func.isRequired, 
};

export default Modal