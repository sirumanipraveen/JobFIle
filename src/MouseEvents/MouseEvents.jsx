
function MouseEvents() {
    const handleButton=()=>{
        alert("is done ")
    }
  return (
    <button onMouseOver={handleButton}>click</button>
    // <button onMouseDown={handleButton}>click</button>
    // <button onMouseOut={handleButton}>click</button>
    // <button onMouseMove={handleButton}>click</button>
    // <button onMouseUp={handleButton}>click</button>
  )
}

export default MouseEvents