import React from 'react'

import '../styles/Success.css'

export default function Success() {
    return (
        <div className="success">
            <div className="success-content">
                <h2>Juan, gracias por tu compra</h2>
                <span>Tu pedido llegará en 3 días a tu dirección:</span>
                <div className="success-map">
                    Google Maps
                </div>
            </div>
        </div>
    )
}
