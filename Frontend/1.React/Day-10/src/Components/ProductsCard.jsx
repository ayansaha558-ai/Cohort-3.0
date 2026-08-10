// Components/ProductsCard.jsx
import React from 'react'
import { useState } from 'react'

const ProductsCard = ({ products,setToggle }) => {
  const getCategoryColor = (cat) => {
    const map = {
      "men's clothing": "bg-amber-500/10 text-amber-400 border-amber-500/20",
      "women's clothing": "bg-rose-500/10 text-rose-400 border-rose-500/20",
      "jewelery": "bg-violet-500/10 text-violet-400 border-violet-500/20",
      "electronics": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    }
    return map[cat] || "bg-slate-500/10 text-slate-400 border-slate-500/20"
  }

  const renderStars = (rate) => {
    return (
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-3 h-3 ${star <= Math.round(rate) ? 'text-amber-400' : 'text-slate-600'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    )
  }

  return (
    <div className="px-6 py-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group relative bg-zinc-900/60 border border-zinc-800/60 rounded-xl overflow-hidden hover:border-zinc-700/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-zinc-950/50"
          >
            {/* Image Container */}
            <div className="relative aspect-square bg-zinc-950 p-4 flex items-center justify-center overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-contain mix-blend-normal opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Content */}
            <div className="p-4 space-y-3">
              {/* Category Badge */}
              <span className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-1 rounded-md border ${getCategoryColor(product.category)}`}>
                {product.category}
              </span>

              {/* Title */}
              <h3 className="text-sm font-medium text-slate-100 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                {product.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                {product.description}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-2">
                {renderStars(product.rating.rate)}
                <span className="text-[10px] text-slate-500 font-medium">
                  ({product.rating.count})
                </span>
              </div>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-2 border-t border-zinc-800/50">
                <span className="text-lg font-bold text-slate-100 tracking-tight">
                  ${product.price}
                </span>
                <button onClick={()=>setToggle(true)} className="px-3 py-1.5 bg-slate-100 hover:bg-white text-zinc-900 text-xs font-semibold rounded-md transition-all duration-200 active:scale-95 cursor-pointer">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductsCard