import React from 'react'
import { useStateValue } from '../StateProvider'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket}] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                src="https://specials-images.forbesimg.com/imageserve/5f2d87143e278db8cb6e289d/960x0.jpg?fit=scale"
                alt="ad" className="checkout__ad"/>
                {basket?.length === 0 ? (
                    <div>
                        <h2>Your basket is empty</h2>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {/* checkout products */}
                        {basket.map(item=> (
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                )}
            </div>
            {basket.length>0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    );
}

export default Checkout
