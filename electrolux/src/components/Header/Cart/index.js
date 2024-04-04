import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons"; 
import './index.css'

const MiniCart = ({ cartItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCart = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mini-cart-container">
      <button onClick={toggleCart} className="minicart-button">
        <FontAwesomeIcon icon={faShoppingCart} /> 
      </button>
      {isOpen && (
        <div className="cart-dropdown">
          {cartItems.length === 0 ? (
            <p>Seu carrinho está vazio</p>
          ) : (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.image} alt={item.title} />
                  <span>{item.title} - R$ {item.price}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default MiniCart;
