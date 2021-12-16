import React from "react";
import { useStateValue } from "../../StateProvider";
import "./Products.css";
import ProductDetails from "../productDetails/ProductDetails";
import { Link, useHistory } from "react-router-dom";

const Products = ({ title, price, rating, image, id }) => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("This is basket", basket);

  const history = useHistory();

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
  const handleDetails = (id) => {
    dispatch({
      type: "SELECTEDPRODUCTSDETAILS",
      productsDetails: {
        id: id,
        title: title,
        rating: rating,
        image: image,
        price: price
      }
    });
    history.push(`/details/${id}`)
  };
  return (<>
  <Link to={`/details/${id}`}>
    <div class="row" onClick={() => handleDetails(id)}>
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
    </Link>
    </>
  );
};
export default Products;
