import React from 'react'

export default function Product({ product }) {
    return (
        <div className="products-item">
            <img src={product.image} alt={product.title} />
            <div className="product-item-info">
                <h2>{product.title}
                    <span>$ {' '}{product.price}</span>
                </h2>
                <p>{product.description}</p>
                <button type="button">Comprar</button>
            </div>
        </div>
    )
}
