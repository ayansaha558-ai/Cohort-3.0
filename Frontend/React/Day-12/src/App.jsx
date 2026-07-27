import React, { useEffect, useState ,useContext} from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import CartPage from "./pages/CartPage";
import { MyStore } from "./context/MyContext";

const App = () => {
  const [product, setProduct] = useState([]);

  let {toggle,cartItems}=useContext(MyStore); 

  const getProductsData = async () => {
    try {
      const res = await axios("https://dummyjson.com/products");
      setProduct(res.data.products);

      console.log(res.data.products);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-950">
      <NavBar/>

      {toggle?(
        <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-white">
            Explore Products
          </h1>

          <p className="text-zinc-400 mt-2">
            Discover premium products curated just for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {product.map((ele) => {
            let isInCart=cartItems.find(val=>val.id===ele.id);
            
            return <ProductList key={ele.id} product={ele} isInCart={isInCart}/>;
          })}
        </div>
      </div>
      ):(
        <div>
          <CartPage/>
        </div>
      )}

      
    </div>
  );
};

export default App;