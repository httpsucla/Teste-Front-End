import React from "react";
import './index.css'
import Product from "./Product";

export default function Shelf() {

    return (
        <section className="shelf">
            <div className="container container-shelf">
                <h3 className="title-shelf">Super Ofertas</h3>
                <Product />
            </div>
        </section>
    );
}