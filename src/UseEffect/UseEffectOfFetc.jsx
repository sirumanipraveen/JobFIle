import { useEffect, useState } from 'react';

const MyComponent = () => {
  const [count, setCount] = useState(0);

 

  //MOUNTING PHASE 

  useEffect(()=>{

    console.log("Mounting phase")
    
  })



  //UPDATE PHASE

  //  useEffect(()=>{
  //   console.log("updating phase")
  // },[count])


  //UNMOUNTING PHASE 

  //  useEffect(()=>{
   
  //   return ()=>{
  //     console.log("unmounting phase")
  //   }
  // },[count])






  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default MyComponent




























// import { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     const timer = setInterval(() => {
//       console.log('Interval running');
//     }, 1000);


//     return () => {
//       clearInterval(timer);
//       console.log('Component unmounted!');
//     };
//   }, []); 

//   return <div>Timer running in background</div>;
// };

// export default MyComponent



// import { useEffect } from 'react';

// const MyComponent = () => {
//   useEffect(() => {
//     console.log('Component mounted!');
//     // Place side effect code (e.g., API calls, event listeners)
//   }, []); // Empty array means this effect runs only once after mount

//   return <div>Hello World</div>;
// };
