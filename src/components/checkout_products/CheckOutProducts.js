import React from 'react'
import { useStateValue } from '../../StateProvider'
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
            <div className="row g-0 no-pad ml-2">
                <div className="col-4 img-info">
                    <img src={image} alt=""/>
                </div>
                <div className="col-2 info-Products ml-2">
                    <div className="row">{title}</div>
                    <div className="row">{price}</div>
                    <div className="row">{rating}</div>
                    <div className="row">
                        <button onClick={removeBasket}>Remove from basket</button>
                    </div>

                </div>
            </div>
            
        </div>
    )
}
export default CheckOutProducts