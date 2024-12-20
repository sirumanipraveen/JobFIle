

function KeyBordEvents() {
    const handleKeyDown = (event) => console.log(`Key pressed: ${event.key}`);
  return (
   
    <>
    
        {/* <input onKeyDown={handleKeyDown} placeholder="Type something..." />; */}
         {/* <input onKeyUp={handleKeyDown} placeholder="Type something..." />; */}
      <input onKeyPress={handleKeyDown} placeholder="Type something..." />;

    
    </>
  )
}

export default KeyBordEvents