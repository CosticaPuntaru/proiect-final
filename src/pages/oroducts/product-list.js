import React, { useState } from 'react';
import { Link } from "react-router-dom";


export function ProductList() {
    const [productList] = useState([
        {
            id: 1,
            name: 'cartofi',
        }, {
            id: 2,
            name: 'pepene',
        }, {
            id: 3,
            name: 'rosie',
        },
    ])
    return (

        <ul>
            {productList.map(({id, name}) => {
                return (
                    <li key={id}>
                        <Link to={`/product/${name}`}>{name}</Link>
                    </li>
                )
            })}
        </ul>

    )
}
