import React from "react";
import { useStateValue } from "../../StateProvider";

const Products = ({ title, price, rating, image, id }) => {
  const [{basket},dispatch]=useStateValue();
  console.log("This is basket",basket)
  
  const addToBasket=()=>{
    
    dispatch({
      type:"ADD_TO_BASKET",
      item:{
        id:id,
        title:title,
        rating:rating,
        image:image,
        price:price
      }
    })

  }
  
  return (
    <div className="row mb-4 h-50">
      <div className="col">
        <div className="card">
          <h5 className="card-header">
            <p>{title}</p>
          </h5>
          <p>Price:{price}</p>
          <div className="col-12">
            {Array(rating)
              .fill()
              .map((_, i_) => (
                <strong> * </strong>
              ))}
          </div>
          <img src={image} alt="" />
          <div className="card-body">
            <button className="btn-primary" onClick={addToBasket}>
              Add to Basket
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;