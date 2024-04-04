import React from "react";
import './index.css'
import logo from '../../images/Electrolux-Logo.png'
import Search from "./Search/search";
import MiniCart from "./Cart";

export default function Header() {

    return (
        <section className="header">
            <div className="container container-header">
                <div className="container-logo">
                    <img src={logo} className="logo-electrolux" alt="Logo Electrolux" />
                </div>
                <div className="container-busca">
                    <Search />
                </div>
                <div className="container-cart">
                    <div className="content-minicart">
                        <MiniCart />
                    </div>              
                </div>
            </div>
        </section>
    );
}