import React from 'react';
import './CheckOutProducts.css'
import { useStateValue } from "../../StateProvider";

function CheckOutProducts({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="container w-75">
            <div className="row px-4 py-4 space-around shadow">
                <div className="col-lg-4">
            <img className="rounded" src={image} />
            </div>

            <div className='col-lg-4'>
                <div className="row">
                    <div className="row">
                <p className='text-justify text-lg-left font-weight-bold fs-2'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                </div>
               
                
                <div className="row ml-2">
                    
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p className="col  starrmove">🌟</p>
                    ))}
            
                </div>
                <div className="row">
                    <div className="col-lg ">
                {!hideButton && (
                    <button className="offset-4 rounded bg-primary" onClick={removeFromBasket}>Remove from Basket</button>
                )}
                </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CheckOutProducts