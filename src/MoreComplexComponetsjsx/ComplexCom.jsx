import { useEffect, useState } from "react";
import ChildCOmponent from "./ChildCOmponent";
import "./style.css";


function ComplexCom() {
  const [input, setinput] = useState("");

  const [cartCount,setCart] = useState([])
  const [datas ,setdata] = useState([])
  console.log(datas.length)


  useEffect(()=>{
    const fetchdata = async ()=>{
      const response = await fetch("https://fakestoreapi.com/products")
      const data = await response.json()
      setdata(data)
     
    }
    fetchdata()
  })

  const handleCart =(i)=>{
    setCart([...cartCount,i])
  
  }
  
const totalamount = cartCount.reduce((acc,item)=> acc + item.price,0)

  const changeinputvalue = (e) => {
    setinput(e.target.value);
  };


  const filterdata = datas.filter((item) =>
    item.title.toLowerCase().includes(input.toLowerCase())
  );  


  return (
    <>
   
    {/* <div>
      <img src="https://famisourcing.com/wp-content/uploads/2023/02/Top-42-Guangzhou-Clothing-Wholesale-market.png" className="title-image"/>
    </div> */}
    <div className="input-cart-div">
    <input type="text" onChange={changeinputvalue} value={input} placeholder="search items..." className="input-style"/>
    

<button className="card-style" >Cart <span style={{color:"red"}}>{cartCount.length}
<p> Cart Total Amount  :{totalamount}</p>
</span>

</button>

    </div>

    {
      datas.length === 0 ? <h1 style={{textAlign:"center"}}>is loading.....</h1> :

      <div className="container-div">
        {filterdata.map((i) => (
        
          <div key={i.id} className="card-container" >
            <ChildCOmponent details={i} />
            <button className="buyButton">Buy item</button> 
            <button className="cartButton" onClick={()=> handleCart(i)}>Add Cart</button>
          </div>
        ))}                                                                                             
      </div> }
 
   </>
  );          
}


export default ComplexCom;
