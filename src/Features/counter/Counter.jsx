
import { useSelector, useDispatch } from 'react-redux'
import {increment,decrement ,increamentbyamout,text} from '../../CoponetswithRedyx/COmSlice'


import { textshow } from '../../features/TextShowInUiSlice'

function Counter() {
const dispatch = useDispatch()

  const count = useSelector((state) => state.counter.value)
  const greeting = useSelector((state)=> state.counter.text)

  const Show = useSelector((state)=> state.texts.display )
  

  return (
    <div>


   <p>{Show}</p>
        <span >{count}</span>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
          >
          Increment
        </button>
   
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>

        <button onClick={()=> dispatch(increamentbyamout(10))}>increamentbyamout 10</button>
        <button onClick={()=>dispatch(text())}>Greeting</button>
        <h1>{greeting}</h1>


      <button onClick={()=> dispatch(textshow())}>show</button>
      </div>
    </div>
  )
}

export default Counter