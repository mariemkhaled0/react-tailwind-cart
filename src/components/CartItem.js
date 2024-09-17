import React, { useEffect, useState } from "react";
import { products } from "../products";
import { changeQuantity } from "../store/cart";
import { useDispatch } from "react-redux";

const CartItem = (props) => {
  const { productId, quantity } = props;
  const [details, setDetails] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const findItem = products.find((item) => item.id === productId);
    setDetails(findItem);
  }, [productId]);
  console.log(details);
  const increment = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity + 1,
      })
    );
  };
  const decrement = () => {
    dispatch(
      changeQuantity({
        productId: productId,
        quantity: quantity - 1,
      })
    );
  };

  return (
    <div className="flex justify-between items-center bg-slate-600 text-white p-2 border-b-2 border-slate-700">
      <img className="w-10" src={details.image} alt="img" />
      <h3>{details.name}</h3>
      <p>${details.price * quantity}</p>
      <div className="flex justify-between gap-1">
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={() => {
            decrement();
          }}
        >
          -
        </button>
        <span className="">{quantity}</span>
        <button
          className="bg-gray-200 rounded-full w-6 h-6 text-cyan-600"
          onClick={() => {
            increment();
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
