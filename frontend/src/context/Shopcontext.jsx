import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product'


export const Shopcontext = createContext(null)


const getdefaultcart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;

    }
    return cart;
}
const ShopcontextProvider = (props) => {

    const [cartitems, setcartitems] = useState(getdefaultcart());

    const addtocart = (itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] + 1 }))
        console.log(cartitems);
    }

    const removefromcart = (itemid) => {
        setcartitems((prev) => ({ ...prev, [itemid]: prev[itemid] - 1 }))
    }

    const gettotalcartamount = () => {
        let totalamount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let iteminfo = all_product.find((product) => product.id === Number(item))
                totalamount += iteminfo.new_price * cartitems[item];

            }
            return totalamount;
        }
    }

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartitems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalitem = 0;
        for (const item in cartitems) {
            if (cartitems[item] > 0) {
                totalitem += cartitems[item];
            }
        }
        return totalitem;
    }
    const contextvalue = { getTotalCartItems, getTotalCartAmount, all_product, cartitems, addtocart, removefromcart };
    return (
        <Shopcontext.Provider value={contextvalue}>
            {props.children}
        </Shopcontext.Provider>
    )

}

export default ShopcontextProvider;