import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Products.css"
const Products = ({ title, price, rating, image, id }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is basket", basket);

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        rating: rating,
        image: image,
        price: price
      }
    });
  };

  return (
    <div class="row">
      <div class="col-lg-12">
        <div class="card heightofcard">
          <div class="card-block">
            <h5 className="card-header">
              <p>{title}</p>
            </h5>
            <p>Price:{price}</p>
            <div className="col">
              {Array(rating)
                .fill()
                .map((_, i_) => (
                  <strong> * </strong>
                ))}
            </div>
            <div className="row ">
              <img className="imageheighthome" src={image} alt="" />
            </div>
            <div className="card-body">
              <button className="btn-primary" onClick={addToBasket}>
                Add to Basket
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Products;
