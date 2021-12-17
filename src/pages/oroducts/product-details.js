import React from 'react';
import { useParams } from 'react-router-dom'


export function ProductDetails() {
    const {productName} = useParams();

    return (
        <div>
            <h1>{productName}</h1>
            <p>

                Product detail page for {productName}
            </p>
        </div>
    )
}
