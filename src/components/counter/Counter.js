import React from 'react'
import { useStateValue } from "../../StateProvider";

export const Counter = () => {
    const [{counter},dispatch]=useStateValue();


const increment = () => {
    dispatch({
        type:"ADD_COUNTER"
    })

 };
 const decrement = () => {
    dispatch({
        type:"SUB_COUNTER"
    })
  
};


    return (
        <div>
            <button  onClick={increment}> +</button>
            <p>{counter}</p>
            <button  onClick={decrement}></button>
        </div>
    )
}
