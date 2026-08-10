import { useState, createContext, useEffect, useContext } from "react";

import { Auth } from "./AuthContext";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const { loggedIn } = useContext(Auth);

  // Product catalog
  const products = [
    {
      id: 1,
      title: "Wireless Bluetooth Headphones Pro",
      price: 99.99,
      rating: 4.8,
      reviews: 157,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 2,
      title: "Smart Watch Series 5",
      price: 299.99,
      rating: 4.9,
      reviews: 234,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 3,
      title: "Comfortable Cotton T-Shirt",
      price: 24.99,
      rating: 4.5,
      reviews: 312,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 4,
      title: "Ergonomic Office Chair",
      price: 199.99,
      rating: 3.2,
      reviews: 89,
      category: "Furniture",
      thumbnail:
        "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 5,
      title: "Stainless Steel Water Bottle",
      price: 34.99,
      rating: 4.6,
      reviews: 203,
      category: "Home",
      thumbnail:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 6,
      title: "Premium Wireless Earbuds",
      price: 149.99,
      rating: 4.2,
      reviews: 178,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 7,
      title: "Classic Leather Jacket",
      price: 89.99,
      rating: 3.8,
      reviews: 145,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 8,
      title: "Modern Desk Lamp",
      price: 49.99,
      rating: 4.3,
      reviews: 98,
      category: "Home",
      thumbnail:
        "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 9,
      title: "Running Shoes Pro",
      price: 129.99,
      rating: 4.7,
      reviews: 267,
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 10,
      title: "Wooden Bookshelf",
      price: 159.99,
      rating: 2.5,
      reviews: 67,
      category: "Furniture",
      thumbnail:
        "https://images.unsplash.com/photo-1774979517631-3e4a916bcede?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fFdvb2RlbiUyMEJvb2tzaGVsZnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 11,
      title: "Sunglasses Classic",
      price: 79.99,
      rating: 4.0,
      reviews: 189,
      category: "Accessories",
      thumbnail:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 12,
      title: "Gaming Keyboard RGB",
      price: 89.99,
      rating: 4.4,
      reviews: 156,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 13,
      title: "Wool Winter Scarf",
      price: 29.99,
      rating: 3.5,
      reviews: 134,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1731399211410-e3ffe1560310?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8V29vbCUyMFdpbnRlciUyMFNjYXJmfGVufDB8fDB8fHww",
    },
    {
      id: 14,
      title: "Coffee Table Modern",
      price: 249.99,
      rating: 2.8,
      reviews: 73,
      category: "Furniture",
      thumbnail:
        "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 15,
      title: "Ceramic Plant Pot",
      price: 19.99,
      rating: 4.1,
      reviews: 56,
      category: "Home",
      thumbnail:
        "https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 16,
      title: "Yoga Mat Premium",
      price: 39.99,
      rating: 4.6,
      reviews: 215,
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1592432678016-e910b452f9a2?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 17,
      title: "Leather Wallet Premium",
      price: 44.99,
      rating: 3.9,
      reviews: 143,
      category: "Accessories",
      thumbnail:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 18,
      title: "4K Action Camera",
      price: 199.99,
      rating: 4.5,
      reviews: 121,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 19,
      title: "Denim Jeans Slim Fit",
      price: 54.99,
      rating: 3.3,
      reviews: 287,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 20,
      title: "Wall Art Canvas Print",
      price: 69.99,
      rating: 4.2,
      reviews: 92,
      category: "Home",
      thumbnail:
        "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 21,
      title: "Wireless Gaming Mouse",
      price: 59.99,
      rating: 4.8,
      reviews: 168,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 22,
      title: "Winter Puffer Jacket",
      price: 139.99,
      rating: 3.7,
      reviews: 195,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 23,
      title: "Standing Desk Converter",
      price: 179.99,
      rating: 4.3,
      reviews: 84,
      category: "Furniture",
      thumbnail:
        "https://images.unsplash.com/photo-1585412727339-54e4bae3bbf9?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 24,
      title: "Fitness Tracker Band",
      price: 79.99,
      rating: 2.9,
      reviews: 231,
      category: "Sports",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1712761996875-3057cee4f6af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Rml0bmVzcyUyMFRyYWNrZXIlMjBCYW5kfGVufDB8fDB8fHww",
    },
    {
      id: 25,
      title: "Linen Bed Sheets Set",
      price: 84.99,
      rating: 4.4,
      reviews: 112,
      category: "Home",
      thumbnail:
        "https://images.unsplash.com/photo-1657296517305-5dbca5cb8f74?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fExpbmVuJTIwQmVkJTIwU2hlZXRzJTIwU2V0fGVufDB8fDB8fHww",
    },
    {
      id: 26,
      title: "Backpack Travel 40L",
      price: 89.99,
      rating: 3.6,
      reviews: 253,
      category: "Accessories",
      thumbnail:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 27,
      title: 'Portable Monitor 15"',
      price: 219.99,
      rating: 4.7,
      reviews: 79,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 28,
      title: "Silk Tie Classic",
      price: 34.99,
      rating: 4.1,
      reviews: 141,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1589756823695-278bc923f962?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 29,
      title: "Bar Stool Set of 2",
      price: 149.99,
      rating: 3.0,
      reviews: 46,
      category: "Furniture",
      thumbnail:
        "https://images.unsplash.com/photo-1761471857678-bd03dbecea04?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QmFyJTIwU3Rvb2wlMjBTZXQlMjBvZiUyMDJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 30,
      title: "Aromatherapy Diffuser",
      price: 29.99,
      rating: 4.5,
      reviews: 176,
      category: "Home",
      thumbnail:
        "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 31,
      title: "Tennis Racket Pro",
      price: 159.99,
      rating: 3.4,
      reviews: 104,
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 32,
      title: "Leather Crossbody Bag",
      price: 69.99,
      rating: 4.6,
      reviews: 198,
      category: "Accessories",
      thumbnail:
        "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 33,
      title: "Mechanical Keyboard",
      price: 129.99,
      rating: 4.0,
      reviews: 223,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 34,
      title: "Hoodie Oversized",
      price: 49.99,
      rating: 3.9,
      reviews: 167,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 35,
      title: "TV Stand Media Console",
      price: 279.99,
      rating: 2.7,
      reviews: 58,
      category: "Furniture",
      thumbnail:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 36,
      title: "Bath Towel Set 6pc",
      price: 39.99,
      rating: 4.3,
      reviews: 132,
      category: "Home",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1675799686591-fca6e06bc835?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEJhdGglMjBUb3dlbCUyMFNldCUyMDZwY3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 37,
      title: "Dumbbell Set 20kg",
      price: 89.99,
      rating: 3.8,
      reviews: 189,
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1586401100295-7a8096fd231a?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 38,
      title: "Silver Chain Necklace",
      price: 59.99,
      rating: 4.5,
      reviews: 155,
      category: "Accessories",
      thumbnail:
        "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 39,
      title: 'Tablet 10" Display',
      price: 349.99,
      rating: 4.9,
      reviews: 213,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1561154464-82e9adf32764?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 40,
      title: "Cargo Pants Relaxed",
      price: 44.99,
      rating: 3.2,
      reviews: 178,
      category: "Clothing",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1708274140680-11c9e42dcac9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2FyZ28lMjBQYW50cyUyMFJlbGF4ZWR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 41,
      title: "Bookshelf 5-Tier",
      price: 189.99,
      rating: 2.9,
      reviews: 64,
      category: "Furniture",
      thumbnail:
        "https://images-cdn.ubuy.co.in/6829c61770de1b71b70854cf-69-white-bookshelf-5-tier-tall.jpg",
    },
    {
      id: 42,
      title: "Decorative Vase Set",
      price: 49.99,
      rating: 4.2,
      reviews: 96,
      category: "Home",
      thumbnail:
        "https://images.unsplash.com/photo-1631125915510-8ffed5a0d054?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8RGVjb3JhdGl2ZSUyMFZhc2UlMjBTZXR8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 43,
      title: "Basketball Official",
      price: 34.99,
      rating: 3.7,
      reviews: 207,
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1519861155730-0b5fbf0dd889?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 44,
      title: "Designer Watch Rose Gold",
      price: 249.99,
      rating: 4.7,
      reviews: 146,
      category: "Accessories",
      thumbnail:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 45,
      title: "Wireless Charging Pad",
      price: 29.99,
      rating: 4.0,
      reviews: 119,
      category: "Electronics",
      thumbnail:
        "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 46,
      title: "Flannel Shirt Plaid",
      price: 39.99,
      rating: 3.5,
      reviews: 88,
      category: "Clothing",
      thumbnail:
        "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 47,
      title: "Ottoman Storage Bench",
      price: 129.99,
      rating: 3.1,
      reviews: 72,
      category: "Furniture",
      thumbnail:
        "https://www.danetti.com/cdn/shop/products/AmalfiChampagneandStorageBench.jpg?v=1642774967&width=1946",
    },
    {
      id: 48,
      title: "Scented Candle Set 3pc",
      price: 24.99,
      rating: 4.4,
      reviews: 142,
      category: "Home",
      thumbnail:
        "https://plus.unsplash.com/premium_photo-1680098056989-7045096b603b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2NlbnRlZCUyMENhbmRsZSUyMFNldCUyMDNwY3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 49,
      title: "Resistance Bands Set",
      price: 19.99,
      rating: 3.6,
      reviews: 163,
      category: "Sports",
      thumbnail:
        "https://images.unsplash.com/photo-1599058917765-a780eda07a3e?w=400&h=400&fit=crop&auto=format",
    },
    {
      id: 50,
      title: "Leather Belt Classic",
      price: 29.99,
      rating: 4.8,
      reviews: 129,
      category: "Accessories",
      thumbnail:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop&auto=format",
    },
  ];

  const [product, setProduct] = useState(products);

  // Store carts separately for each user
  const [carts, setCarts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("carts")) || {};
    } catch (error) {
      console.error("Failed to load carts:", error);
      return {};
    }
  });

  // Get the currently logged-in user's cart
  const inCart = loggedIn ? carts[loggedIn.email] || [] : [];

  // Update the currently logged-in user's cart
  const setInCart = (value) => {
    if (!loggedIn) return;

    setCarts((prev) => {
      const currentCart = prev[loggedIn.email] || [];

      const updatedCart =
        typeof value === "function" ? value(currentCart) : value;

      return {
        ...prev,
        [loggedIn.email]: updatedCart,
      };
    });
  };

  // Persist all user carts
  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts]);

  // Cart drawer state
  const [iscartOpen, setIscartOpen] = useState(false);

  // Increase product quantity
  const incrementQuantity = (id) => {
    setInCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  };

  // Decrease quantity and remove product at zero
  const decrementQuantity = (id) => {
    setInCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  return (
    <MyStore.Provider
      value={{
        product,
        inCart,
        setInCart,
        incrementQuantity,
        decrementQuantity,
        iscartOpen,
        setIscartOpen,
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
