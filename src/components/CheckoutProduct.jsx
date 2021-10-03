import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from '../StateProvider'

function CheckoutProduct(props) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove from basket
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id
        })
    };

    return (
        <div className="checkoutProduct">
            <img src={props.image} className="checkoutProduct__image" alt="image of your product"/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(props.rating)
                        .fill()
                        .map(() => (
                            <p>⭐</p>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
