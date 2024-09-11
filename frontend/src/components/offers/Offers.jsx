import React from 'react'
import './offers.css'
import exclusive_image from '../assets/exclusive_image.png'
import { Link } from 'react-scroll'
const Offers = () => {
    return (
        <div className='offers'>
            <div className="offers-left">
                <h1>Exclusive</h1>
                <h1>offers for you</h1>
                <p>ONLY ON BEST SELLERS PRODUCTS</p>
                <button><Link to='newsletter' smooth={true}>Check Now</Link></button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image} alt="" />
            </div>
        </div>
    )
}

export default Offers
