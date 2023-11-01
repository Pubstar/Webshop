import React from 'react'
import Product from './Product';
import './Store.css';

const Store = () => {
    const storeItems = [{
        'id': 0,
        'name': 'Chair',
        'price': 120
    }, {
        'id': 0,
        'name': 'Chair',
        'price': 120
    },
    {
        'id': 0,
        'name': 'Chair',
        'price': 120
    },
    {
        'id': 1,
        'name': 'Bed',
        'price': 220
    }]

    return (
        <div className='store'>
            {storeItems.map(item => {
                return <div><Product {...item} /></div>
            })}
        </div>
    )
}

export default Store