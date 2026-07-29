import React, { useContext, useEffect } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";
import CartCard from "../components/CartCard";

const Cart = () => {
  let { iscartOpen, setIscartOpen, inCart,setInCart } = useContext(MyStore);
  let navigate = useNavigate();

  // Calculate total
  const total = inCart?.reduce((sum, item) => sum + item.price * item.quantity, 0) || 0;
  const totalItems = inCart?.reduce((sum, item) => sum + item.quantity, 0) || 0;

  // Close cart when clicking outside
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      setIscartOpen(false);
    }
  };

  // Close cart with Escape key
  React.useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape" && iscartOpen) {
        setIscartOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [iscartOpen, setIscartOpen]);

  // Prevent body scroll when cart is open
  React.useEffect(() => {
    if (iscartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [iscartOpen]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-400 ${
          iscartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleOverlayClick}
      />

      {/* Cart Panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-[#0a0a0a] z-50 shadow-2xl shadow-black/60 transition-all duration-400 ease-[cubic-bezier(0.32,0.72,0,1)] transform ${
          iscartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Decorative gradient line */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400/20"></div>

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800/40">
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-emerald-400/10 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-emerald-400"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </div>
            <h2 className="text-lg font-semibold text-white">Cart</h2>
            <span className="text-xs text-neutral-500 bg-neutral-800/50 px-2 py-0.5 rounded-full">
              {totalItems} {totalItems === 1 ? "item" : "items"}
            </span>
          </div>

          <button
            onClick={() => setIscartOpen(false)}
            className="w-8 h-8 rounded-full bg-neutral-800/40 hover:bg-neutral-700/40 transition-all duration-300 flex items-center justify-center hover:rotate-90"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-400 hover:text-white transition-colors"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex flex-col h-[calc(100%-65px)] px-5 py-4 overflow-y-auto">
          {inCart && inCart.length > 0 ? (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-y-auto -mx-2 px-2">
                {inCart.map((item) => (
                  <CartCard key={item.id} cartItem={item} />
                ))}
              </div>

              {/* Footer with Total and Checkout */}
              <div className="pt-4 border-t border-neutral-800/40 mt-2">
                {/* Total */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-neutral-400 text-sm font-medium">Total</span>
                  <span className="text-white text-xl font-bold">
                    ${total.toFixed(2)}
                  </span>
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      setIscartOpen(false);
                      navigate("/main/checkout");
                    }}
                    className="flex-1 bg-emerald-400 hover:bg-emerald-300 text-neutral-900 font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] active:scale-95 text-sm"
                  >
                    Checkout →
                  </button>
                  <button
                    onClick={() => {
                      if (window.confirm("Are you sure you want to clear your cart?")) {
                        setInCart([]);
                      }
                    }}
                    className="px-4 py-3 rounded-xl border border-neutral-700 hover:border-red-500/50 text-neutral-400 hover:text-red-400 transition-all duration-300 text-sm font-medium hover:bg-red-500/5"
                  >
                    Clear cart
                  </button>
                </div>
              </div>
            </>
          ) : (
            // Empty State
            <div className="flex-1 flex flex-col items-center justify-center -mt-4">
              <div className="relative mb-5">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-emerald-400/5 to-emerald-400/10 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-emerald-400/50"
                  >
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <path d="M16 10a4 4 0 0 1-8 0" />
                  </svg>
                </div>
                <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400/30 animate-pulse"></div>
              </div>

              <h3 className="text-xl font-bold text-white mb-1.5">Cart is empty</h3>
              <p className="text-neutral-400 text-sm mb-6">Go shop something cool!</p>

              <button
                onClick={() => {
                  setIscartOpen(false);
                  navigate("/main/shop");
                }}
                className="group relative bg-emerald-400 hover:bg-emerald-300 text-neutral-900 font-semibold px-7 py-2.5 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(52,211,153,0.2)] active:scale-95 overflow-hidden text-sm"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                <span className="relative z-10 flex items-center gap-2">
                  Browse Products
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;