
import React from 'react';
import './Shoe.css'

const Shoe = ({handleAddToCart, shoe}) => {

    const {name, img, price, ratings} = shoe;

    return (
        <div className='shoe'>
            <img src={img} alt="" />
            <div className='shoe-info'>
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Ratings: {ratings}</p>
                <button onClick={() => handleAddToCart(shoe)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default Shoe;