import React,{useContext} from 'react'
import { StateContext } from '../../StateProvider'
import { useStateValue } from "../../StateProvider";
import CheckOutProducts from "../checkout_products/CheckOutProducts";

 const Checkout2 = () => {
  const a=useContext(StateContext)
  const data=useContext(StateContext)
  console.log("data checkout",data)
    const [{basket}]=useStateValue();
    console.log("basktet",basket.length,basket)
 
  return (
    <div>
     <div className="container flex align-content-center">
           {basket.map((item)=>
        <CheckOutProducts
        id={item.id}
        image={item.image}
        price={item.price}
        title={item.title}
        rating={item.rating}
        />
        )} 
      </div>
    </div>
  )
}
export default Checkout2