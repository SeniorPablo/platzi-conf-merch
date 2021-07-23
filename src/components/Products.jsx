import React from 'react'

import Product from './Product'
import '../styles/Products.css'

export default function Products({ products }) {
    return (
        <div className="products">
            <div className="products-items">
                {products.map(product => (
                    <Product key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
