import React, { useContext } from 'react';
import { ShopContext } from '../../context/shop-context';

export const CartItem = (props) => {

    const { id, productName, price, productImage } = props.data;
    const { cartItems, addToCart, removeFromCart, updateCartCountItems } = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={productImage} alt="" />
        <div className="description">
            <p><b>{productName}</b></p>
            <p>Rs.{price}</p>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}> - </button>
                <input value={cartItems[id]} onChange={(e) => updateCartCountItems(Number(e.target.value), id)} />
                <button onClick={() => addToCart(id)}> + </button>
            </div>
        </div>
    </div>
  );
};


