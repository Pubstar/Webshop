import React from 'react'
import './Product.css';

type ProductType = {
    id: number,
    name: string,
    price: number
}

const Product = ({ id, name, price }: ProductType) => {
    return (
        <div className='product-card'>
            <h1>{name}</h1>
            <p>{price}</p>
            <button onClick={() => {
                //alert('wow')
            }}>Add to cart</button>
        </div>
    )
}

export default Product