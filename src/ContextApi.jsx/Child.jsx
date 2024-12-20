

import { useContext } from 'react';
import  {Usercontext } from "./Usercontext" 

function Child() {
  const {name,age} = useContext(Usercontext); 

  return (
    <>
    <p>{name}</p>
    <p>{age}</p>
    </>
  );
} 

export default Child;
