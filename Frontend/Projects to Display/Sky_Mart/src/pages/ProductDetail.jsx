import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { MyStore } from '../context/MyContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  let { id } = useParams();
  let { product, inCart, setInCart, incrementQuantity, decrementQuantity } = useContext(MyStore);
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  let {setIscartOpen}=useContext(MyStore);

  // ALL HOOKS MUST BE CALLED BEFORE ANY CONDITIONAL RETURNS
  // Scroll to top and trigger animation when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate loading for smooth entrance animation
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 300);
    
    // Trigger visibility animation after component mounts
    const visibilityTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    // Reset selected image when product changes
    setSelectedImage(0);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(visibilityTimer);
    };
  }, [id]);

  // Find the current product
  const currentProduct = product.find(
    (item) => item.id === Number(id)
  );

  // Check if product is in cart
  const isInCart = inCart?.find((item) => item.id === currentProduct?.id);

  // Get related products (same category, excluding current)
  const relatedProducts = currentProduct 
    ? product.filter(
        (item) =>
          item.category === currentProduct.category &&
          item.id !== currentProduct.id
      )
    : [];

  // Get previous and next products for navigation
  const currentIndex = product.findIndex(
    (item) => item.id === currentProduct?.id
  );

  const previousProduct =
    currentIndex > 0 ? product[currentIndex - 1] : null;

  const nextProduct =
    currentIndex < product.length - 1
      ? product[currentIndex + 1]
      : null;

  // Loading state - AFTER all hooks
  if (!product.length || isLoading) {
    return (
      <div className="text-white h-screen flex items-center justify-center bg-[#0a0a0a]">
        <div className="flex flex-col items-center gap-6">
          {/* Professional loader */}
          <div className="relative">
            <div className="w-16 h-16 border-3 border-emerald-400/20 border-t-emerald-400 rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-3 border-transparent border-t-emerald-400/50 rounded-full animate-pulse"></div>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-neutral-400 text-sm font-medium tracking-wider uppercase">Loading Product</p>
            <div className="flex gap-1">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></span>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Product not found - AFTER all hooks
  if (!currentProduct) {
    return (
      <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center">
        <div className="text-white text-xl">Product not found</div>
      </div>
    );
  }

  // Handle Add to Cart
  const handleAddToCart = () => {
    setInCart((prev) => [...prev, { ...currentProduct, quantity: 1 }]);
    setIscartOpen(true);
    // navigate("/main/cart");
  };

  // Get reviews count
  const getReviewsCount = () => {
    if (currentProduct.reviews) {
      if (Array.isArray(currentProduct.reviews)) {
        return currentProduct.reviews.length;
      }
      if (typeof currentProduct.reviews === 'number') {
        return currentProduct.reviews;
      }
    }
    return 0;
  };

  // Check if product is top rated (5 stars)
  const isTopRated = currentProduct.rating >= 5;

  // Render stars
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalf = rating - Math.floor(rating) >= 0.5;
    
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, i) => {
          if (i < fullStars) {
            return <span key={i} className="text-yellow-400 text-lg animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>★</span>;
          } else if (i === fullStars && hasHalf) {
            return <span key={i} className="text-yellow-400 text-lg animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>★</span>;
          } else {
            return <span key={i} className="text-neutral-600 text-lg animate-fadeIn" style={{ animationDelay: `${i * 0.1}s` }}>★</span>;
          }
        })}
      </div>
    );
  };

  // Handle navigation with scroll to top
  const handleNavigate = (path) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Navigation with slide-in animation */}
        <nav className={`flex items-center gap-2 text-sm text-neutral-500 mb-8 flex-wrap transition-all duration-700 transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}>
          <span 
            onClick={() => handleNavigate("/main/shop")}
            className="hover:text-white cursor-pointer transition-all duration-300 hover:translate-x-[-2px] inline-flex items-center gap-1"
          >
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5" />
              <path d="M12 19l-7-7 7-7" />
            </svg>
            Products
          </span>
          <span className="text-neutral-600">/</span>
          <span 
            onClick={() => handleNavigate("/main/shop")}
            className="hover:text-white cursor-pointer transition-colors duration-300"
          >
            {currentProduct.category}
          </span>
          <span className="text-neutral-600">/</span>
          <span className="text-white truncate max-w-[200px]">{currentProduct.title}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Left - Image Section with fade-in animation */}
          <div className={`space-y-4 transition-all duration-700 transform ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '0.1s' }}>
            {/* Main Image with zoom effect on load */}
            <div className="bg-white rounded-3xl p-8 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
              
              {/* Category Badge with slide-in animation */}
              <div className="absolute top-4 left-4 z-20 animate-slideDown">
                <span className="bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1.5 rounded-full border border-white/10 shadow-lg hover:bg-black/80 transition-all duration-300">
                  {currentProduct.category}
                </span>
              </div>
              
              {/* Image with smooth zoom on hover */}
              <img
                src={
                  currentProduct.images?.[selectedImage] ||
                  currentProduct.thumbnail
                }
                alt={currentProduct.title}
                className="w-full h-[400px] object-contain transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-1 relative z-0 animate-scaleIn"
              />
            </div>

            {/* Thumbnail Gallery with stagger animation */}
            {currentProduct.images && currentProduct.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {currentProduct.images.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`min-w-[80px] h-20 bg-white rounded-xl p-2 cursor-pointer border-2 transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                      selectedImage === idx
                        ? 'border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.2)] scale-105'
                        : 'border-transparent hover:border-emerald-400/30'
                    } animate-fadeIn`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right - Product Details with fade-in animation */}
          <div className={`space-y-6 transition-all duration-700 transform ${
            isVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`} style={{ transitionDelay: '0.2s' }}>
            {/* Category with pulse animation */}
            <div className="flex items-center gap-2 animate-slideDown" style={{ animationDelay: '0.1s' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">
                {currentProduct.category}
              </span>
            </div>

            {/* Title with fade-in */}
            <h1 className="text-3xl md:text-4xl font-bold text-white leading-tight animate-fadeIn" style={{ animationDelay: '0.2s' }}>
              {currentProduct.title}
            </h1>

            {/* Rating with stagger animation */}
            <div className="flex items-center gap-3 flex-wrap animate-fadeIn" style={{ animationDelay: '0.3s' }}>
              {renderStars(currentProduct.rating)}
              <span className="text-neutral-400 text-sm">
                ({getReviewsCount()} reviews)
              </span>
              <span className="text-neutral-600 text-sm">•</span>
              {/* Only show Top Rated if rating is exactly 5 stars */}
              {isTopRated ? (
                <span className="text-emerald-400 text-sm font-medium animate-pulse flex items-center gap-1">
                  ⭐ Top Rated
                </span>
              ) : (
                <span className="text-neutral-500 text-sm">
                  {currentProduct.rating >= 4 ? 'Excellent' : currentProduct.rating >= 3 ? 'Good' : 'Average'}
                </span>
              )}
            </div>

            {/* Price with slide-up animation */}
            <div className="flex items-baseline gap-3 animate-slideUp" style={{ animationDelay: '0.4s' }}>
              <span className="text-4xl font-bold text-white">
                ${currentProduct.price}
              </span>
              {currentProduct.originalPrice && (
                <span className="text-neutral-500 text-xl line-through">
                  ${currentProduct.originalPrice}
                </span>
              )}
            </div>

            {/* Description with fade-in */}
            <div className="bg-[#141414] rounded-2xl p-6 border border-neutral-800 hover:border-emerald-400/30 transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.5s' }}>
              <p className="text-neutral-300 leading-relaxed">
                {currentProduct.description || 'Advanced smartwatch with health monitoring, GPS, and water resistance. Stay connected and track your fitness goals.'}
              </p>
            </div>

            {/* Features with stagger animation */}
            {currentProduct.features && currentProduct.features.length > 0 && (
              <div className="bg-[#141414] rounded-2xl p-6 border border-neutral-800 hover:border-emerald-400/30 transition-all duration-300 animate-slideUp" style={{ animationDelay: '0.6s' }}>
                <h3 className="text-white font-semibold mb-3">Key Features</h3>
                <ul className="space-y-2">
                  {currentProduct.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-neutral-300 text-sm animate-fadeIn" style={{ animationDelay: `${0.7 + idx * 0.1}s` }}>
                      <span className="text-emerald-400 mt-1 transform transition-transform duration-300 hover:scale-125">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Smart Add to Cart Button - Like ProductCard */}
            <button
              onClick={() => {
                if (!isInCart) {
                  handleAddToCart();
                }
              }}
              className="w-full bg-emerald-400 hover:bg-emerald-300 text-neutral-900 font-bold py-4 rounded-2xl transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(52,211,153,0.3)] active:scale-95 flex items-center justify-center gap-3 group animate-slideUp"
              style={{ animationDelay: '0.7s' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {isInCart ? (
                  // Quantity Selector
                  <div
                    className="flex items-center gap-4"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        decrementQuantity(currentProduct.id);
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 text-emerald-400 cursor-pointer hover:bg-neutral-800 transition-all duration-200 text-xl font-bold"
                    >
                      −
                    </div>

                    <span className="text-lg font-bold text-neutral-900 min-w-[24px] text-center">
                      {isInCart.quantity}
                    </span>

                    <div
                      onClick={(e) => {
                        e.stopPropagation();
                        incrementQuantity(currentProduct.id);
                      }}
                      className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-900 text-emerald-400 cursor-pointer hover:bg-neutral-800 transition-all duration-200 text-xl font-bold"
                    >
                      +
                    </div>
                  </div>
                ) : (
                  // Add to Cart
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                    >
                      <circle cx="9" cy="21" r="1" />
                      <circle cx="20" cy="21" r="1" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                    Add to Cart
                    <span className="text-sm font-normal opacity-70">• ${currentProduct.price}</span>
                  </>
                )}
              </span>
            </button>

            {/* Delivery Info with stagger animation */}
            <div className="grid grid-cols-3 gap-3 mt-2">
              {[
                { icon: '🚚', title: 'Free Delivery', subtitle: 'On orders $50+' },
                { icon: '🔒', title: 'Secure Pay', subtitle: '256-bit SSL' },
                { icon: '🔄', title: 'Easy Returns', subtitle: '30-day policy' }
              ].map((item, idx) => (
                <div 
                  key={idx}
                  className="bg-[#141414] p-4 rounded-xl border border-neutral-800 text-center hover:border-emerald-400/30 transition-all duration-300 hover:scale-105 hover:shadow-lg group animate-fadeIn"
                  style={{ animationDelay: `${0.8 + idx * 0.1}s` }}
                >
                  <div className="text-2xl mb-1 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">{item.icon}</div>
                  <p className="text-white text-sm font-medium">{item.title}</p>
                  <p className="text-neutral-500 text-xs">{item.subtitle}</p>
                </div>
              ))}
            </div>

            {/* Modern Navigation Arrows with hover animations */}
            <div className="flex justify-between items-center pt-6 border-t border-neutral-800/50 animate-fadeIn" style={{ animationDelay: '1s' }}>
              <button
                onClick={() => {
                  if (previousProduct) {
                    navigate(`/main/detail/${previousProduct.id}`);
                  }
                }}
                className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 ${
                  previousProduct
                    ? 'bg-[#141414] hover:bg-emerald-400/10 border border-neutral-800 hover:border-emerald-400/50 cursor-pointer hover:scale-105'
                    : 'bg-[#0a0a0a] border border-neutral-800/30 cursor-not-allowed opacity-40'
                }`}
                disabled={!previousProduct}
              >
                <div className="relative z-10 flex items-center gap-3 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300">
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:-translate-x-2"
                  >
                    <path d="M19 12H5" />
                    <path d="M12 19l-7-7 7-7" />
                  </svg>
                  <span className="font-medium">Previous</span>
                </div>
              </button>

              <div className="flex items-center gap-3">
                <span className="text-neutral-600 text-sm font-mono">
                  {String(currentIndex + 1).padStart(2, '0')} / {String(product.length).padStart(2, '0')}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/50 animate-pulse"></div>
              </div>

              <button
                onClick={() => {
                  if (nextProduct) {
                    navigate(`/main/detail/${nextProduct.id}`);
                  }
                }}
                className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl transition-all duration-300 ${
                  nextProduct
                    ? 'bg-[#141414] hover:bg-emerald-400/10 border border-neutral-800 hover:border-emerald-400/50 cursor-pointer hover:scale-105'
                    : 'bg-[#0a0a0a] border border-neutral-800/30 cursor-not-allowed opacity-40'
                }`}
                disabled={!nextProduct}
              >
                <div className="relative z-10 flex items-center gap-3 text-neutral-400 group-hover:text-emerald-400 transition-colors duration-300">
                  <span className="font-medium">Next</span>
                  <svg 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5"
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Related Products with stagger animation */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 animate-fadeIn" style={{ animationDelay: '1.2s' }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">Related Products</h2>
              <span 
                onClick={() => handleNavigate("/main/shop")}
                className="text-emerald-400 text-sm font-medium cursor-pointer hover:underline transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1"
              >
                View All
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {relatedProducts.map((item, index) => (
                <div 
                  key={item.id} 
                  className="animate-fadeIn" 
                  style={{ animationDelay: `${1.3 + index * 0.1}s` }}
                >
                  <ProductCard product={item} index={index} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Custom Animations */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          opacity: 0;
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideDown {
          opacity: 0;
          animation: slideDown 0.6s ease-out forwards;
        }

        .animate-slideUp {
          opacity: 0;
          animation: slideUp 0.6s ease-out forwards;
        }

        .animate-scaleIn {
          opacity: 0;
          animation: scaleIn 0.7s ease-out forwards;
        }

        /* Smooth scrollbar for thumbnail gallery */
        .overflow-x-auto::-webkit-scrollbar {
          height: 4px;
        }

        .overflow-x-auto::-webkit-scrollbar-track {
          background: #1a1a1a;
          border-radius: 10px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb {
          background: #2a2a2a;
          border-radius: 10px;
        }

        .overflow-x-auto::-webkit-scrollbar-thumb:hover {
          background: #3a3a3a;
        }
      `}</style>
    </div>
  );
};

export default ProductDetail;