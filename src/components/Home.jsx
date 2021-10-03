import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <img className="home__image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuVgJe7Mh5nfvNUb0Bcfv-KuzWZkcuZEOlYg&usqp=CAU"
            alt=""/>

            {/* product: id, title, price, rating, img */}
            <div className="home__row">
                <Product 
                id="1234"
                title="8gb USB Stick"
                price={13.4}
                rating={5}
                image="https://asset.conrad.com/media10/isa/160267/c1/-/en/1890149_LB_02_FB/image.jpg"
                />
            </div>

        </div>
    )
}

export default Home
