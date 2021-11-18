import React from 'react'
import { useStateValue } from '../../StateProvider'
import "./CheckOutProducts.css"
 const CheckOutProducts = ({id,title,image,price,rating}) => {
     const [{basket},dispatch]=useStateValue()
     const removeBasket=()=>{
         dispatch({
             type:"REMOVE_FROM_BASKET",
             id:id
         })
     }
    return (
        <div className="conatiner">
            <div className="row  ml-2 px-4 py-4 rounded  bg-secondary border border-danger   h-100%">
                <div className="col-md-4 col-sm-8 img-info  bg-gray">
                    <img src={image} alt="" className="rounded img"/>
                </div>
                <div className="col-md-4 info-Products  checkout-price-product">
                    <div className="col">{title}</div>
                    <div className="col">{price}</div>
                    <div className="col">{rating}</div>
                    <div className="col">
                        <button onClick={removeBasket}>Remove from basket</button>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
export default CheckOutProducts