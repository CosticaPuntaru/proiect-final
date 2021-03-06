import { NavLink, Route, Routes } from "react-router-dom";
import React from "react";
import { ProductList } from "./product-list";
import { ProductDetails } from "./product-details";
import './products.scss'

export function Products() {

    return (

        <div className={'ProductsPage'}>
            <div className={'ProductMenu'}>
                <h2>Best selling products</h2>
                <NavLink activeClassName={'active'} to={'/product'}>All products</NavLink>
                <NavLink activeClassName={'active'} to={'/product/cartofi-1235'}>cartofi</NavLink>
                <NavLink activeClassName={'active'} to={'/product/pepene-231231'}>pepene</NavLink>
            </div>

            <div className={'ProductsContent'}>
                <Routes>
                    <Route path={'/'} element={<ProductList />} />
                    <Route path={'/:productUri'} element={<ProductDetails />} />
                </Routes>
            </div>

        </div>
    )
}
