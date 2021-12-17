import React from 'react';
import { useParams } from 'react-router-dom'


export function ProductDetails() {
    const params = useParams();

    return (
        <div>
            <h1>{params.productName}</h1>
            <p>

                Product detail page for {params.productName}
            </p>
        </div>
    )
}
