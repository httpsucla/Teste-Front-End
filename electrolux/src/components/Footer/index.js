import React from "react";
import './index.css'
import diamond from '../../images/selo-diamante.png';
import encrypt from '../../images/encrypt.png';
import reclameaqui from '../../images/reclameaqui.png';

export default function Footer() {


    return (
        <section className="footer">
            <div className="container container-footer">
                <div>
                    <h3 className="title-menu-footer">Institucional</h3>
                    <ul className="content-item-footer">
                        <li className="item-menu-footer">Missão</li>
                        <li className="item-menu-footer">Quem Somos</li>
                        <li className="item-menu-footer">Política de Privacidade</li>
                        <li className="item-menu-footer">Política de Troca e Devolução</li>
                    </ul>
                </div>
                <div>
                    <h3 className="title-menu-footer">Navegação</h3>
                    <ul className="content-item-footer">
                        <li className="item-menu-footer">Meu Cadastro</li>
                        <li className="item-menu-footer">Meus Pedidos</li>
                        <li className="item-menu-footer">Fale Conosco</li>
                    </ul>
                </div>
                <div>
                    <div className="bloco-selo-footer">
                        <img src={diamond} alt="" className="selo-diamond" />
                        <img src={encrypt} alt="" className="selo-encrypt"/>
                        <img src={reclameaqui} alt="" className="selo-reclameaqui"/>
                    </div>
                </div>
            </div>
        </section>
    );
}