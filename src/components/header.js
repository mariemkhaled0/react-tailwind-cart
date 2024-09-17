import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import icon from "../assets/iconCart.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleCart } from "../store/cart";

const Header = () => {
  const [totalQuantity, setTotalQuantinty] = useState(0);
  const cartItems = useSelector((store) => store.cart.items);
  const show = useSelector((store) => store.cart.isShowen);
  const dispatch = useDispatch();
  useEffect(() => {
    let total = 0;
    cartItems.forEach((element) => {
      total += element.quantity;
      setTotalQuantinty(total);
    });
  }, [cartItems]);
  const handleOpenTabCart = () => {
    dispatch(toggleCart());
  };
  return (
    <header className="flex justify-between items-center mb-5">
      <Link to="/" className="text-xl font-semibold">
        Home
      </Link>
      <div
        onClick={handleOpenTabCart}
        className="bg-gray-100  rounded-full w-10 h-10 flex
      justify-center items-center relative"
      >
        <img src={icon} alt="icon" className="w-6" />
        <span className="absolute top-2/3 right-1/2 bg-red-500 text-sm w-5 h-5 rounded-full text-center text-white">
          {totalQuantity}
        </span>
      </div>
    </header>
  );
};

export default Header;
