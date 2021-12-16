import React from "react";
import { useStateValue } from "../../StateProvider";

const ProductDetails = () => {
  const [{ selectedProductsDetails }, dispatch] = useStateValue();
  console.log("data form detailsproduects>>>>>>>>>>>>>>>>>>>>",selectedProductsDetails)

  return (
    <div className="container">
      {selectedProductsDetails?.map((item) => {
        return (
          <div className="row">
            <div className="col">
              <h4>{item.id}</h4>
              <div>
                <img src={item.image} alt={item.id} />
                <h6>{item.title}</h6>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ProductDetails;
