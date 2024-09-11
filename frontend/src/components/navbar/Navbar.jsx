import React, { useContext, useState } from 'react'
import "./navbar.css"

import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { Shopcontext } from '../../context/Shopcontext'


const navbar = () => {
    const [menu, setMenu] = useState("shop");

    const { getTotalCartItems } = useContext(Shopcontext);
    return (
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>Shopper</p>
            </div>
            <ul className="nav-menu">
                <li onClick={() => { setMenu("shop") }}><Link style={{ textDecoration: 'none', color: "black" }} to="/">Shop</Link>{menu === "shop" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("mens") }}><Link style={{ textDecoration: 'none', color: 'black' }} to="/mens">Men</Link>
                    {menu === "mens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("womens") }}><Link style={{ textDecoration: 'none', color: 'black' }} to="/womens">Women</Link>{menu === "womens" ? <hr /> : <></>}</li>
                <li onClick={() => { setMenu("kids") }}><Link style={{ textDecoration: 'none', color: 'black' }} to="/kids">Kids</Link>{menu === "kids" ? <hr /> : <></>}</li>
            </ul>

            <div className="nav-login-cart">
                <Link to='/Signup'><button className='signupchangecolor'>Sign up</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
    )
}

export default navbar