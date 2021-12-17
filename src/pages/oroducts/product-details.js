import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom'

const extractProductFromUri = /^(.+)-(\d+)$/

export function ProductDetails() {
    const {productUri} = useParams();
    const [, productName, productId] = productUri.match(extractProductFromUri)

    useEffect(() => {
        console.log('fetching product details for id', productId)
    }, [])

    return (
        <div>
            <h1>{productName}</h1>
            <p>

                Product detail page for {productName} with id {productId}
            </p>
        </div>
    )
}
