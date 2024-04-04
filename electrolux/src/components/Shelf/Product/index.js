import React, { useState, useEffect } from "react";
import "./index.css";
import api from "../../../api";
import BuyButton from "./components/BuyButton";
import MiniCart from "../../Header/Cart";

export default function Product() {
    const [data, setData] = useState([]);
    const [buttonVisibility, setButtonVisibility] = useState([]);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        searchApi();
    }, []);

    async function searchApi() {
        try {
            const response = await api().get();
            setData(response.data);
            setButtonVisibility(Array(response.data.length).fill(false));
        } catch (error) {
            throw error;
        }
    }

    const updateButtonVisibility = (index, isVisible) => {
        const newButtonVisibility = [...buttonVisibility];
        newButtonVisibility[index] = isVisible;
        setButtonVisibility(newButtonVisibility);
    };

    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    return (
        <div className="product-box">
          {data ? (
            <>
              <ul className="shelf-products">
                {data.map((product, index) => (
                  <li
                    key={product.id}
                    className="product"
                    onMouseEnter={() => updateButtonVisibility(index, true)}
                    onMouseLeave={() => updateButtonVisibility(index, false)}
                  >
                    <div className="box-image-product">
                      <img
                        src={product.image}
                        alt={product.title}
                        className="image-product"
                      />
                    </div> 
                    <div className="content-product">
                        <h4 className="title-product">{product.title}</h4>
                        <h3 className="price-product">R$ {product.price}</h3>
                        {buttonVisibility[index] && (
                        <BuyButton
                            onClick={() => addToCart(product)} // Passando a função addToCart
                        />
                        )}
                    </div>
                  </li>
                ))}
              </ul>
              {/* Teste de funcionamento de cart */}
              <div className="minicart">
                <MiniCart cartItems={cartItems} />
              </div>
              
            </>
          ) : (
            <h2>Nenhum produto encontrado</h2>
          )}
        </div>
      );
}
