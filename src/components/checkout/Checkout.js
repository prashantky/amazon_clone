import React from "react";
import CheckOutProducts from "../checkout_products/CheckOutProducts";
import Subtotal from "../subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
// import { StateContext } from "../../StateProvider";
// import { useContext } from "react";
const Checkout = () => {
  
  //console.log("data checkout",data)
    const [{basket}]=useStateValue();
    console.log("basktet",basket.length,basket)
  return (
    <div className="conatiner ">
      <strong>your shopping bag is  </strong>
      <div className="row">
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
      <Subtotal />
    </div>
  );
};
export default Checkout;