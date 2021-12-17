import React from 'react'
import { NavLink } from "react-router-dom";
import './menu.scss'

export function Menu() {


    return (
        <div className={'Menu'}>
            <NavLink activeClassName={'active'} to={'/'}>Home</NavLink>
            <NavLink activeClassName={'active'} to={'/product'}>Our products</NavLink>
            <NavLink activeClassName={'active'} to={'/contact'}>Contact us</NavLink>
            <NavLink activeClassName={'active'} to={'/product/cartofi'}>Our best selling product</NavLink>
        </div>
    )
}
