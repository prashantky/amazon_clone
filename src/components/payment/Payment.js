import React from "react";
import CheckOutProducts from "../checkout_products/CheckOutProducts";
import { useStateValue } from "../../StateProvider";
import "./Payment.css";
const Payment = () => {
  const [{ basket,user }, dispatch] = useStateValue();
  return (
    <div className="container">
      <div className="row bg-secondary">
        <div className="col-12">
          <h3>Your Total Item {basket?.length}</h3>
        </div>
      </div>
      <div className="row ">
        <div className="col-md-6 col-lg-4 col-sm-4   delivery-add">
          <h6 className="text-break text-left">
            Delivery Address
        
          </h6>
        </div>
        <div className="col-md-4 col-sm-4  col-lg-4  delivery-add ">
          <p className="text-break">
            {user?.email}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="row w-25">
          <div className="col ">
            <h3>Review Your Items</h3>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4 col-md-8 col-lg-12">
            {basket.map((item) => (
              <CheckOutProducts
                id={item.id}
                image={item.image}
                price={item.price}
                title={item.title}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="row px-2 py-2 ">
            <div className="col-6 justif-self-start">   <span>Payment Method</span></div>
         
        </div>
      </div>
    </div>
  );
};
export default Payment;
