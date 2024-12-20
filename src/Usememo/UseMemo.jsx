import  { useState, useMemo } from 'react';

function Usememo() {
  const [count, setCount] = useState(1);
 

  
  const expensiveCalculation = useMemo(() => {
    console.log(count);
    return count * 2009798646545440000 +65434344+8765; 
  }, [count]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <p>Expensive Calculation Result: {expensiveCalculation}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  )
}

export default Usememo;
















