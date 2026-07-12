// Components/Cart.jsx
import React from 'react'
import { useState } from 'react'

const Cart = () => {
  // Dummy data for UI preview — replace with your state/props later
  const cartItems = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      quantity: 1,
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      category: "men's clothing"
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      quantity: 2,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      category: "men's clothing"
    },
    {
      id: 9,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      price: 64,
      quantity: 1,
      image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_t.png",
      category: "electronics"
    }
  ]

  const isEmpty = cartItems.length === 0

  // Helpers
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = subtotal > 100 ? 0 : 12.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  const getCategoryColor = (cat) => {
    const map = {
      "men's clothing": "text-amber-400 bg-amber-500/10 border-amber-500/20",
      "women's clothing": "text-rose-400 bg-rose-500/10 border-rose-500/20",
      "jewelery": "text-violet-400 bg-violet-500/10 border-violet-500/20",
      "electronics": "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    }
    return map[cat] || "text-slate-400 bg-slate-500/10 border-slate-500/20"
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Shopping Cart
          </h1>
          <p className="mt-1 text-sm text-slate-500">
            {isEmpty ? 'Your cart is empty' : `${cartItems.length} item${cartItems.length !== 1 ? 's' : ''} in your cart`}
          </p>
        </div>

        {isEmpty ? (
          /* ───────── Empty State ───────── */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-20 h-20 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-slate-300 mb-2">Your cart is empty</h2>
            <p className="text-sm text-slate-500 max-w-xs mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <button className="px-6 py-2.5 bg-slate-100 hover:bg-white text-zinc-900 text-sm font-semibold rounded-lg transition-all duration-200 active:scale-95 cursor-pointer">
              Continue Shopping
            </button>
          </div>
        ) : (
          /* ───────── Cart Layout ───────── */
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* ─── Left: Cart Items ─── */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="group flex gap-4 bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-4 hover:border-zinc-700/80 transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="shrink-0 w-24 h-24 sm:w-28 sm:h-28 bg-zinc-950 rounded-lg border border-zinc-800/50 flex items-center justify-center overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain p-2 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <span className={`inline-block text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded border ${getCategoryColor(item.category)} mb-2`}>
                        {item.category}
                      </span>
                      <h3 className="text-sm font-medium text-slate-100 leading-snug line-clamp-2 group-hover:text-white transition-colors">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-xs text-slate-500">
                        Unit price: ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 rounded-lg p-0.5">
                        <button className="w-7 h-7 flex items-center justify-center rounded-md text-slate-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                          </svg>
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-slate-200 tabular-nums">
                          {item.quantity}
                        </span>
                        <button className="w-7 h-7 flex items-center justify-center rounded-md text-slate-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </button>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-bold text-slate-100 tabular-nums">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                        <button className="p-1.5 text-slate-600 hover:text-rose-400 hover:bg-rose-500/10 rounded-md transition-all duration-200 cursor-pointer" title="Remove item">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue Shopping Link */}
              <button className="flex items-center gap-2 text-sm text-slate-500 hover:text-slate-300 transition-colors mt-2 cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Continue Shopping
              </button>
            </div>

            {/* ─── Right: Order Summary ─── */}
            <div className="lg:col-span-1">
              <div className="sticky top-6 bg-zinc-900/60 border border-zinc-800/60 rounded-xl p-6 space-y-6">
                <h2 className="text-lg font-semibold text-white">Order Summary</h2>

                {/* Cost Breakdown */}
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between text-slate-400">
                    <span>Subtotal</span>
                    <span className="text-slate-300 tabular-nums">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Shipping</span>
                    <span className={shipping === 0 ? 'text-emerald-400 font-medium' : 'text-slate-300 tabular-nums'}>
                      {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>Estimated Tax</span>
                    <span className="text-slate-300 tabular-nums">${tax.toFixed(2)}</span>
                  </div>
                  
                  {/* Free shipping progress */}
                  {subtotal <= 100 && (
                    <div className="pt-2">
                      <div className="flex justify-between text-xs mb-1.5">
                        <span className="text-slate-500">Add ${(100 - subtotal).toFixed(2)} more for free shipping</span>
                      </div>
                      <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                          style={{ width: `${Math.min((subtotal / 100) * 100, 100)}%` }}
                        />
                      </div>
                    </div>
                  )}

                  <div className="border-t border-zinc-800/50 pt-3 flex justify-between">
                    <span className="font-semibold text-white">Total</span>
                    <span className="text-xl font-bold text-white tabular-nums">${total.toFixed(2)}</span>
                  </div>
                </div>

                {/* Checkout CTA */}
                <button className="w-full py-3 bg-slate-100 hover:bg-white text-zinc-900 text-sm font-bold rounded-lg transition-all duration-200 active:scale-[0.98] cursor-pointer">
                  Proceed to Checkout
                </button>

                {/* Express Checkout */}
                <div className="space-y-2">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-zinc-800/50" />
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-3 bg-zinc-900/60 text-slate-500">or pay with</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="flex items-center justify-center gap-2 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-medium text-slate-300 hover:border-zinc-700 hover:text-white transition-all cursor-pointer">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.72 9.73c-.04-1.54.63-2.71 2.02-3.57-.77-1.11-1.94-1.72-3.51-1.84-1.47-.12-3.1.87-3.69.87-.62 0-2.03-.83-3.08-.83C6.71 4.44 4 6.69 4 10.23c0 1.06.19 2.16.58 3.29.51 1.49 2.38 5.14 4.33 5.08 1.03-.02 1.76-.74 3.11-.74 1.3 0 1.96.74 3.12.71 1.29-.02 2.16-1.17 2.96-2.35.93-1.36 1.32-2.68 1.34-2.75-.03-.01-2.57-.99-2.59-3.91-.02-1.78 1.52-2.64 1.59-2.68-.87-1.27-2.21-1.42-2.72-1.46zM15.52 3.5c.82-.99 1.37-2.37 1.22-3.75-1.18.05-2.6.79-3.44 1.78-.76.88-1.42 2.29-1.25 3.64 1.32.1 2.67-.67 3.47-1.67z"/>
                      </svg>
                      Apple Pay
                    </button>
                    <button className="flex items-center justify-center gap-2 py-2.5 bg-zinc-950 border border-zinc-800 rounded-lg text-xs font-medium text-slate-300 hover:border-zinc-700 hover:text-white transition-all cursor-pointer">
                      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
                      </svg>
                      Google Pay
                    </button>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center justify-center gap-4 pt-2 border-t border-zinc-800/50">
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Secure
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                    Free Returns
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] text-slate-500">
                    <svg className="w-3.5 h-3.5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Fast Delivery
                  </div>
                </div>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

export default Cart