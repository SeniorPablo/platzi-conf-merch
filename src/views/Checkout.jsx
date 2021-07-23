import React from 'react'

import '../styles/Checkout.css'

export default function Checkout() {
    return (
        <div className="checkout">
            <div className="checkout-content">
                <h3>Lista de pedidos:</h3>
                <div className="checkout-item">
                    <div className="checkout-element">
                        <h4>ITEM name</h4>
                        <span>$10</span>
                    </div>
                    <button type="button">Eliminar</button>
                </div>
            </div>
            <div className="checkout-sidebar">
                <h3>Precio total: $10</h3>
                <button type="button">Continuar pedido</button>
            </div>
        </div>
    )
}
