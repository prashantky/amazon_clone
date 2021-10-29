import React from "react";
import CheckOutProducts from "../checkout_products/CheckOutProducts";
import Subtotal from "../subtotal/Subtotal";
import { useStateValue } from "../../StateProvider";
const Checkout = ({id,image,price,title,rating}) => {
    const [{basket},dispatch]=useStateValue();
  return (
    <div className="conatiner">
      <strong>your shopping bag is </strong>
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
