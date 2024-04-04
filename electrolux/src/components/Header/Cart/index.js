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
            <p className="text-minicart">Seu carrinho está vazio</p>
          ) : (
            <ul className="list-minicart">
              {cartItems.map((item, index) => (
                <li key={index} className="item-minicart">
                  <img src={item.image} alt={item.title} className="item-image-minicart"/>
                  <div className="content-item-minicart">
                    <span className="item-name-minicart">{item.title} </span>
                    <span className="item-price-minicart">R$ {item.price}</span>
                  </div>     
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
