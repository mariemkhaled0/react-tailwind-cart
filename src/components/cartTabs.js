import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartItem from "./CartItem";
import { toggleCart } from "../store/cart";

const CartTabs = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const show = useSelector((store) => store.cart.isShowen);
  const dispatch = useDispatch();
  const handleCloseTabCart = () => {
    dispatch(toggleCart());
  };

  return (
    <div
      className={`fixed top-0 right-0 bg-gray-700 shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
    transform transition-transform duration-500
    ${show === false ? "translate-x-full" : ""}
    `}
    >
      <h2 className="p-5 text-white text-2xl">Shopping Cart</h2>
      <div>
        {cartItems.map((item, key) => {
          return <CartItem key={key} {...item} />;
        })}
      </div>
      <div className="grid grid-cols-2">
        <button className="text-white bg-black" onClick={handleCloseTabCart}>
          CLOSE
        </button>
        <button className="text-white bg-amber-600">CHECKOUT</button>
      </div>
    </div>
  );
};

export default CartTabs;
