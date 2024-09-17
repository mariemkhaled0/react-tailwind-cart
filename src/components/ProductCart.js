import React from "react";
import { Link } from "react-router-dom";
import cartIcon from "../assets/iconCart.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const ProductCart = ({ name, id, price, image, description, slug }) => {
  const carts = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(
      addToCart({
        productId: id,
        quantity: 1,
      })
    );
  };
  console.log(carts);
  return (
    <div className="bg-white p-5 rounded-xl shadow-sm">
      <Link to={slug}>
        <img
          src={image}
          alt="img"
          className="w-full h-80 object-cover object-top drop-shadow-[0_80px_30px_#0007] "
        />
      </Link>
      <h3 className="text-2xl py-3 text-center font-medium ">{name}</h3>
      <div className="flex justify-between  items-center">
        <p>
          $<span className="text-2xl font-medium">{price}</span>
        </p>
        <button
          className="bg-gray-300 p-2 text-sm flex gap-2 hover:bg-gray-400 rounded-md "
          onClick={handleAddToCart}
        >
          <img className="w-6" src={cartIcon} alt="icon" />
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;
