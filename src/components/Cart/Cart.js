
import React from 'react';
import './Cart.css'

const Cart = ({cart, handleRemoveFromCart}) => {

    // Conditional Rendering Options
    // 1. Element Variable
    // 2. Ternary Operator (condition ? true : false)
    // && operator / short hand
    // 4. OR ||

    let command;
    if(cart.length === 0){
        command = <p>Please Add at least one item</p>
    }
    else if(cart.length === 1){
        command = <p>Please add more...</p>
    }
    else{
        command = <p><small>Thanks for adding item</small></p>
    }


    return (
        <div>
            <h2>Selected Item: {cart.length}</h2>
            {
                cart.map(shoe => <p>
                    {shoe.name}
                    <button onClick={() => handleRemoveFromCart(shoe)}>X</button>
                    </p>)
            }
            {/* 4. OR || */}
            {cart.length === 0 || <p className='orange' >YAY! You are buying</p>}
            
            
            {/* 3. && operator / short hand */}
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon k ki gift diba</p>
                </div>}

                {/* 1.  */}
            {command}

            {/* 2. Ternary Operator */}
            {cart.length !== 4 ? <p>Keep Adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;