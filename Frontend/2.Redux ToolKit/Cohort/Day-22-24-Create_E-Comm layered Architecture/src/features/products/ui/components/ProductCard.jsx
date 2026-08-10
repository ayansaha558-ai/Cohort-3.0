import React, { useState } from "react";
import { Star, Heart, Check, ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [addedToCart, setAddedToCart] = useState(false);
  const navigate = useNavigate();

  const defaultProduct = {
    discountPercentage: 10.48,
    price: 9.99,
    rating: 2.56,
    stock: 99,
    reviews: [],
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    title: "Essence Mascara Lash Princess",
    brand: "Essence",
    id: 1,
  };

  const item = product || defaultProduct;
  const discountedPrice = (item.price - (item.price * item.discountPercentage) / 100).toFixed(2);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 1500);
  };

  const handleViewProduct = () => {
    navigate(`/main/productsPage/${item.id}`);
  };

  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={handleViewProduct}
    >
      <style>{`
        .add-to-cart-btn {
          background: linear-gradient(135deg, #0f766e 0%, #134e4a 100%);
          transition: all 0.3s ease;
        }
        .add-to-cart-btn:hover {
          background: linear-gradient(135deg, #0d9488 0%, #0f766e 100%);
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(15, 118, 110, 0.3);
        }
        .add-to-cart-btn:active {
          transform: translateY(0);
        }
        .add-to-cart-btn.added {
          background: linear-gradient(135deg, #059669 0%, #047857 100%);
        }
      `}</style>

      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-teal-50 via-emerald-50 to-teal-100 p-3 overflow-hidden">
        {/* Discount Badge */}
        {item.discountPercentage > 0 && (
          <div className="absolute top-2 left-2 z-20">
            <div className="bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md">
              -{item.discountPercentage}%
            </div>
          </div>
        )}

        {/* Stock Status Badge */}
        {item.stock <= 10 && item.stock > 0 && (
          <div className="absolute top-2 left-16 z-20">
            <div className="bg-orange-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md">
              Low Stock
            </div>
          </div>
        )}

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsWishlisted(!isWishlisted);
          }}
          className="absolute top-2 right-2 z-20 p-1.5 bg-white/90 backdrop-blur-sm rounded-full shadow-sm hover:bg-white hover:shadow-md transition-all duration-300"
        >
          <Heart
            className={`w-3.5 h-3.5 transition-all duration-300 ${
              isWishlisted 
                ? "fill-red-500 text-red-500 scale-110" 
                : "text-gray-500 hover:text-red-400"
            }`}
          />
        </button>

        {/* Product Image */}
        <img
          src={item.images?.[0] || item.thumbnail}
          alt={item.title}
          className="w-full h-full object-contain p-2 transition-transform duration-700 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="p-2.5">
        {/* Brand & Category Row */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-[9px] font-semibold text-teal-600 uppercase tracking-wider">
            {item.brand}
          </p>
          {item.category && (
            <span className="text-[8px] text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded-full">
              {item.category}
            </span>
          )}
        </div>

        {/* Title */}
        <h3 className="text-[11px] font-semibold text-gray-800 line-clamp-1 mb-1.5">
          {item.title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-2.5 h-2.5 ${
                  i < Math.floor(item.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : i < item.rating
                    ? "fill-yellow-200 text-yellow-300"
                    : "fill-gray-200 text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-[9px] text-gray-400">
            ({item.reviews?.length || 0})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-1.5 mb-2">
          <span className="text-base font-bold text-gray-900">
            ${discountedPrice}
          </span>
          {item.discountPercentage > 0 && (
            <span className="text-[10px] text-gray-400 line-through">
              ${item.price}
            </span>
          )}
          {item.availabilityStatus === "In Stock" && (
            <span className="ml-auto text-[9px] text-green-600 font-medium">
              In Stock
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`cursor-pointer add-to-cart-btn w-full px-3 py-2 rounded-lg text-white text-[10px] font-semibold flex items-center justify-center gap-1.5 transition-all duration-300 ${
            addedToCart ? "added" : ""
          }`}
        >
          {addedToCart ? (
            <>
              <Check className="w-3 h-3" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="w-3 h-3" />
              Add to Cart
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;