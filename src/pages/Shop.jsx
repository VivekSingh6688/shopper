import React from 'react'
import Hero from '../components/Hero/Hero'
import Popular from '../components/popular/popular'
import Offers from '../components/offers/Offers'
import Newcollections from '../components/Newcollections/Newcollections'
import Newsletter from '../components/newletter/Newsletter'

const Shop = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offers />
            <Newcollections />
            <Newsletter />
        </div>
    )
}

export default Shop
