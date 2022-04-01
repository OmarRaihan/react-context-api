import React, { useState } from "react";
import Cart from "../Cart/Cart";
import useShoes from "../hooks/useShoes";
import Shoe from "../Shoe/Shoe";
import "./Home.css";

const Home = () => {
  const [shoes, setShoes] = useShoes();
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedItem) => {
    const exists = cart.find((shoe) => shoe.id === selectedItem.id);
    if (!exists) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    }
    else{
        alert('Item already added')
    }
  };

  const handleRemoveFromCart = (selectedItem) => {
    const rest = cart.filter((shoe) => shoe.id !== selectedItem.id);
    setCart(rest);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {shoes.map((shoe) => (
          <Shoe key={shoe.id} shoe={shoe} handleAddToCart={handleAddToCart}></Shoe>
        ))}
      </div>
      <div className="cart-container">
        <Cart handleRemoveFromCart={handleRemoveFromCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Home;
