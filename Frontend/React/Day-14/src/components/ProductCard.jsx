import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {

  let navigate=useNavigate();

  let {setCartProduct }=useContext(MyStore);

  let addToCart=()=>{
    setCartProduct(prev=>[...prev,product]);
  }

  return (
    <div onClick={()=>navigate(`/detail/${product.id}`)} className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:border-violet-500 transition-all duration-300">
      
      {/* Image */}
      <div className="bg-zinc-800 h-64 flex items-center justify-center p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain group-hover:scale-110 transition duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-violet-600/20 text-violet-400 rounded-full">
          {product.category}
        </span>

        <h2 className="mt-4 text-lg font-semibold text-white line-clamp-2">
          {product.title}
        </h2>

        <p className="mt-2 text-sm text-zinc-400 line-clamp-3">
          {product.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <h3 className="text-2xl font-bold text-white">
            ${product.price}
          </h3>

          <div className="flex items-center gap-1 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full">
            ⭐ {product.rating.rate}
          </div>
        </div>

        <button onClick={()=>addToCart()} className="mt-6 w-full py-3 rounded-xl bg-violet-600 hover:bg-violet-700 text-white font-semibold transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard; 