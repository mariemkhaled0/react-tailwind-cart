import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";

const Detail = () => {
  const { slug } = useParams();
  console.log(slug);
  const [details, setDetails] = useState([]);
  const [quantity, setquantity] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = products.find((item) => item.slug === slug);
    if (findDetail) {
      setDetails(findDetail);
    } else {
      window.location.href = "/";
    }
  }, [slug]);

  const handelQuantityIncrement = () => {
    setquantity(quantity + 1);
    dispatch(addToCart({ productId: details.id, quantity: quantity }));
  };
  const handelQuantitydecrement = () => {
    if (quantity === 1) {
      setquantity(quantity);
    } else setquantity(quantity - 1);
    dispatch(addToCart({ productId: details.id, quantity: quantity }));
  };

  return (
    <div>
      <h2 className="text-3xl text-center">PRODUCT DETAIL</h2>
      <div className="grid md:grid-cols-2 gap-5 mt-5">
        <div>
          <img className="w-full" src={details.image} alt="img" />
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-4xl  uppercase font-bold">{details.name}</h1>
          <p className="font-bold">${details.price}</p>
          <div className="flex justify-center items-center">
            <div className="flex gap-5 items-center mr-3">
              <button
                className="bg-gray-100 rounded-full text-2xl w-10 p-2 "
                onClick={handelQuantityIncrement}
              >
                +
              </button>
              <span className="text-2xl">{quantity}</span>
              <button
                className="bg-gray-100 w-10  text-2xl rounded-full p-2"
                onClick={handelQuantitydecrement}
              >
                -
              </button>
            </div>
            <button
              className="bg-slate-900 text-white px-7 py-3
           rounded-xl hover:bg-slate-800"
              onClick={() => {
                dispatch(
                  addToCart({ productId: details.id, quantity: quantity })
                );
              }}
            >
              Add to cart
            </button>
          </div>
          <p>{details.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
