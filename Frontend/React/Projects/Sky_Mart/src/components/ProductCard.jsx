import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import { MyStore } from "../context/MyContext";

const ProductCard = ({ product, index }) => {
  let navigate = useNavigate();

  let { inCart, setInCart,setIscartOpen, incrementQuantity, decrementQuantity } =
    useContext(MyStore);

  const isInCart = inCart?.find((item) => item.id === product.id);

  let handleChange = () => {
    setInCart((prev) => [...prev, { ...product, quantity: 1 }]);
    setIscartOpen(true);
    // navigate("/main/cart")
  };

  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        triggerOnce: true,
        rootMargin: "50px",
      },
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  const handleCardClick = () => {
    // Scroll to top smoothly before navigating
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Navigate after a small delay to allow scroll to complete
    setTimeout(() => {
      navigate(`/main/detail/${product.id}`);
    }, 300);
  };

  // Helper to render star rating
  const renderStars = (rating, count) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-1">
        <div className="flex text-yellow-400 text-xs">
          {[...Array(5)].map((_, i) => {
            if (i < fullStars) {
              return (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              );
            } else if (i === fullStars && hasHalf) {
              return (
                <span key={i} className="text-yellow-400">
                  ★
                </span>
              );
            } else {
              return (
                <span key={i} className="text-neutral-600">
                  ★
                </span>
              );
            }
          })}
        </div>
        <span className="text-neutral-500 text-xs">({count})</span>
      </div>
    );
  };

  // Professional staggered animation
  const getAnimationDelay = () => {
    const row = Math.floor(index / 4);
    const col = index % 4;
    return `${row * 100 + col * 60}ms`;
  };

  return (
    <div
      ref={cardRef}
      onClick={handleCardClick}
      className={`bg-neutral-900 rounded-3xl overflow-hidden border border-neutral-800 shadow-lg group hover:border-lime-400/40 transition-all duration-500 transform cursor-pointer
        ${
          isVisible
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-8 scale-95"
        }`}
      style={{
        transitionDelay: getAnimationDelay(),
        transitionProperty: "all",
        transitionDuration: "600ms",
        transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)",
        willChange: "transform, opacity",
      }}
    >
      {/* Top white section with image */}
      <div className="bg-white rounded-t-3xl p-4 pb-2 relative overflow-hidden min-h-[200px]">
        {/* Professional gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

        {/* Subtle shine effect */}
        <div
          className={`absolute -inset-full bg-gradient-to-r from-transparent via-white/30 to-transparent rotate-12 
          ${isVisible ? "animate-shine" : ""}`}
          style={{
            animationDelay: getAnimationDelay(),
          }}
        />

        {/* Category badge - Modern glass morphism */}
        <span className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium px-3 py-1.5 rounded-full z-20 border border-white/10 shadow-lg">
          {product.category}
        </span>

        {/* Product image with smooth hover */}
        <div className="w-full h-44 flex items-center justify-center mt-6 relative z-10">
          <img
            src={product.thumbnail || product.images?.[0]}
            alt={product.title}
            className="max-h-full max-w-full object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1"
            loading="lazy"
          />
        </div>
      </div>

      {/* Bottom dark section */}
      <div className="bg-neutral-900 p-4 pt-3 relative overflow-hidden">
        {/* Subtle gradient border on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-lime-400/0 via-lime-400/0 to-lime-400/0 group-hover:from-lime-400/5 group-hover:via-lime-400/10 group-hover:to-lime-400/5 transition-all duration-700" />

        <div className="relative z-10">
          {/* Category label with dot */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1 h-1 rounded-full bg-lime-400 animate-pulse"></span>
            <p className="text-neutral-500 text-xs uppercase tracking-wider font-medium">
              {product.category}
            </p>
          </div>

          {/* Product title with hover effect */}
          <h3 className="text-white text-sm font-semibold leading-tight mb-2 line-clamp-2 group-hover:text-lime-400 transition-colors duration-300">
            {product.title}
          </h3>

          {/* Star rating with animation */}
          <div className="transform transition-all duration-300 group-hover:scale-105 origin-left">
            {renderStars(product.rating, product.reviews || 0)}
          </div>

          {/* Divider with gradient */}
          <div className="border-t border-neutral-700/50 my-3 group-hover:border-lime-400/20 transition-colors duration-300"></div>

          {/* Price and Add button row */}
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lime-400 text-lg font-bold transition-all duration-300 group-hover:scale-105 inline-block">
                ${product.price}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                if (!isInCart) {
                  handleChange();
                }
              }}
              className="relative bg-lime-400 hover:bg-lime-300 text-neutral-900 text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] active:scale-95 overflow-hidden group/btn"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700"></span>

              <div className="relative z-10">
                {isInCart ? (
                  <div
                    className="flex items-center gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        decrementQuantity(product.id);
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-900 text-lime-400 cursor-pointer"
                    >
                      −
                    </div>

                    <span className="text-sm font-semibold text-neutral-900">
                      {isInCart.quantity}
                    </span>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        incrementQuantity(product.id);
                      }}
                      className="w-6 h-6 flex items-center justify-center rounded-full bg-neutral-900 text-lime-400 cursor-pointer"
                    >
                      +
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-transform duration-300 group-hover/btn:rotate-12"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add
                  </div>
                )}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) rotate(12deg);
          }
          100% {
            transform: translateX(100%) rotate(12deg);
          }
        }
        
        .animate-shine {
          animation: shine 1.2s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
};

export default ProductCard;
