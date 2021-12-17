import React, { useState } from 'react';
import { Link } from "react-router-dom";


export function ProductList() {
    const [productList] = useState([
        {
            id: 1,
            name: 'cartofi-1235',
        }, {
            id: 2,
            name: 'pepene-231231',
        }, {
            id: 3,
            name: 'rosie-456',
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
