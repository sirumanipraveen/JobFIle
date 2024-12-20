

function FormEvents() {

    //  const handleFocus = () => console.log("Input focused!");
    // const handleInput = (event) => console.log(`Input value: ${event.target.value}`);
   
  return (
   <>
    <form>
          <input type="text" placeholder="Enter text" />
          <button type="reset">Reset</button>

          {/* <input onInput={handleInput} placeholder="Type something..." />; */}
           
          {/* <input onFocus={handleFocus} placeholder="Focus on me!" />; */}

              



        </form>
   </>
  )
}

export default FormEvents