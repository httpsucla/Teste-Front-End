import React, { useEffect } from "react";
import './index.css'

export default function BuyButton({ onClick }) {

    useEffect(() => {

    }, []);

    return (
        <div className="container-buy-button">
            <button className="buy-button" onClick={onClick}>Comprar</button>
        </div>
    );
}
