import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);

  const [singleProductData, setSingleProductData] = useState({});

  const getSingleProductData = async () => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/${id}`
      );
      setSingleProductData(res.data);
    } catch (errors) {
      console.log("Detail API Error", errors);
    }
  };

  useEffect(() => {
    getSingleProductData();
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center px-8 py-12">
      <div className="max-w-6xl w-full bg-zinc-900 rounded-3xl border border-zinc-800 overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">

        {/* Left */}
        <div className="bg-zinc-800 flex justify-center items-center p-10">
          <img
            src={singleProductData.image}
            alt={singleProductData.title}
            className="h-96 object-contain hover:scale-110 transition duration-300"
          />
        </div>

        {/* Right */}
        <div className="p-10 flex flex-col justify-center">

          <span className="w-fit px-4 py-2 rounded-full bg-violet-600/20 text-violet-400 text-sm">
            {singleProductData.category}
          </span>

          <h1 className="text-4xl font-bold mt-5">
            {singleProductData.title}
          </h1>

          <div className="flex items-center gap-4 mt-5">
            <span className="bg-yellow-500/20 text-yellow-400 px-4 py-2 rounded-full">
              ⭐ {singleProductData.rating?.rate}
            </span>

            <span className="text-zinc-400">
              ({singleProductData.rating?.count} Reviews)
            </span>
          </div>

          <h2 className="text-5xl font-bold text-violet-500 mt-8">
            ${singleProductData.price}
          </h2>

          <p className="text-zinc-400 leading-8 mt-8">
            {singleProductData.description}
          </p>

          <div className="flex gap-5 mt-10">
            <button className="flex-1 py-4 rounded-xl bg-violet-600 hover:bg-violet-700 transition font-semibold">
              Add to Cart
            </button>

            <button className="flex-1 py-4 rounded-xl border border-zinc-700 hover:border-violet-500 transition">
              Buy Now
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;