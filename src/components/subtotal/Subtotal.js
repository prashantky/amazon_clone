import React from "react";
import CurrencyFormat from "react-currency-format";
import  {useStateValue}  from "../../StateProvider";
import "./Subtotal.css";
import {  useHistory } from "react-router-dom";

//import getBasketTotal from "../../reducer";
const Subtotal = () => {
  const [{ basket }, dispacth] = useStateValue();
  const history=useHistory();
  console.log("subtotal",basket)
  const paymentHandle=(e)=>{
    history.push("/payment")
  }
  return (
      
    <div className="subtotal  ">
      {/* price */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              ( Subtotal {basket?.length} items ) : <strong>{0}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains
            </small>
          </>
        )}
        decimalScale={2}
        value={""}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button onClick={paymentHandle}>Proceed to checkout</button>
    </div>
  );
     
};
export default Subtotal;
