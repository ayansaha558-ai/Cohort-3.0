import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import { MyStore } from "../context/MyContext";
import ProductCard from "../components/ProductCard";

const Home = () => {
  let { setProductData, productData } = useContext(MyStore);

  let getProductsData = async () => {
    try {
      let res = await axios("https://fakestoreapi.com/products");
      console.log(res.data);
      setProductData(res.data);
    } catch (errors) {
      console.log("Errors in API", errors);
    }
  };

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {productData.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Home;
