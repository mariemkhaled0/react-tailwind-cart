import React, { useState } from "react";
import { products } from "../products";
import ProductCart from "../components/ProductCart.js";
import CartTabs from "../components/cartTabs.js";

const Home = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <h1 className="text-3xl my-5">List Products</h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 ">
        {products.map((product, key) => {
          return <ProductCart key={key} {...product} />;
        })}
      </div>
      {<CartTabs show={show} /> && show}
    </div>
  );
};

export default Home;
