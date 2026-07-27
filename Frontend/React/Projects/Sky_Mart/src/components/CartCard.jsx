import React, { useContext } from 'react';
import { MyStore } from '../context/MyContext';

const CartCard = ({ cartItem }) => {
  let { incrementQuantity, decrementQuantity } = useContext(MyStore);

  return (
    <div className="group flex items-center gap-4 py-4 border-b border-neutral-800/40 hover:border-neutral-700/60 transition-colors duration-300">
      {/* Product Image */}
      <div className="w-16 h-16 flex-shrink-0 bg-white rounded-xl p-2 overflow-hidden">
        <img
          src={cartItem.thumbnail}
          alt={cartItem.title}
          className="w-full h-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex-1 min-w-0">
        {/* Title */}
        <h4 className="text-white text-sm font-medium truncate group-hover:text-emerald-400 transition-colors duration-300">
          {cartItem.title}
        </h4>
        
        {/* Price */}
        <div className="flex items-center gap-2 mt-0.5">
          <span className="text-emerald-400 text-sm font-bold">
            ${cartItem.price.toFixed(2)}
          </span>
          <span className="text-neutral-500 text-xs">
            ${cartItem.price.toFixed(2)} each
          </span>
        </div>
      </div>

      {/* Quantity Controls */}
      <div className="flex items-center gap-3 flex-shrink-0">
        <button
          onClick={() => decrementQuantity(cartItem.id)}
          className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center text-sm font-medium"
        >
          −
        </button>
        
        <span className="text-white text-sm font-medium min-w-[20px] text-center">
          {cartItem.quantity}
        </span>
        
        <button
          onClick={() => incrementQuantity(cartItem.id)}
          className="w-7 h-7 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-400 hover:text-white transition-all duration-200 flex items-center justify-center text-sm font-medium"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartCard;