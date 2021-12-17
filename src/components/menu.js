import React from 'react'
import { NavLink } from "react-router-dom";
import './menu.scss'

export function Menu() {
    return (
        <div className={'Menu'}>
            <NavLink activeClassName={'active'} to={'/'}>Home</NavLink>
            <NavLink activeClassName={'active'} to={'/product'}>Our products</NavLink>
            <NavLink activeClassName={'active'} to={'/contact'}>Contact us</NavLink>
            <NavLink activeClassName={'active'} to={'/about'}>About</NavLink>
            <NavLink activeClassName={'active'} to={'/pricing'}>Pricing</NavLink>
            <NavLink activeClassName={'active'} to={'/product/cartofi-1235'}>Our best selling product</NavLink>
        </div>
    )
}
