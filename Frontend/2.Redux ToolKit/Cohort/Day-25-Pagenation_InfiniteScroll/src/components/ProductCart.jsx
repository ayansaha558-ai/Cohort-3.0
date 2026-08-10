import React from "react";
import { Star, ShoppingCart } from "lucide-react";

const ProductCart = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">

      {/* Image */}
      <div className="relative bg-gray-100 h-64 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
        />

        <span
          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold text-white ${
            product.stock > 0 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          {product.availabilityStatus}
        </span>

        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
          -{Math.round(product.discountPercentage)}%
        </span>
      </div>

      {/* Details */}
      <div className="p-5">

        <p className="text-sm text-gray-500 uppercase">
          {product.brand}
        </p>

        <h2 className="text-lg font-bold mt-1 line-clamp-1">
          {product.title}
        </h2>

        <p className="text-sm text-gray-600 mt-2 line-clamp-2">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-3">
          <Star
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
          <span className="font-medium">{product.rating}</span>

          <span className="text-gray-400">
            ({product.reviews.length} Reviews)
          </span>
        </div>

        {/* Category */}
        <div className="mt-3">
          <span className="bg-gray-200 px-3 py-1 rounded-full text-xs">
            {product.category}
          </span>
        </div>

        {/* Shipping */}
        <p className="text-sm text-green-600 mt-3">
          🚚 {product.shippingInformation}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between mt-5">
          <div>
            <h3 className="text-2xl font-bold text-indigo-600">
              ${product.price}
            </h3>

            <p className="text-sm text-gray-500">
              Stock: {product.stock}
            </p>
          </div>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition">
          <ShoppingCart size={20} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCart;