import React, { useEffect, useState } from "react";
import { getProduct } from "../apis/UserApi";

const Home = () => {
  const [productsData, setProductsData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [scrollY, setScrollY] = useState(null);

  const getData = async () => {
    const products = await getProduct();

    console.log(products);

    setProductsData(products);
    setFilteredProducts(products);
  };

  const filteredData = (data) => {
    let result = productsData.filter((val) =>
      val.title.toLowerCase().includes(searchData.toLowerCase()),
    );

    setFilteredProducts(result);
  };

  // debouncing....
  useEffect(() => {
    if (!searchData) return;

    let timeOut = setTimeout(() => {
      filteredData();
    }, 700);

    return () => clearTimeout(timeOut);
  }, [searchData]);

  useEffect(() => {
    getData();
  }, []);

  //throtling

  let throttle = false;

  useEffect(() => {
    let handleScroll = () => {
      if (throttle) return;

      throttle = true;
      console.log("scroll Triggered");
      setScrollY(window.scroll);

      setTimeout(() => {
        throttle = false;
      }, 5000);
    };

    window.addEventListener("scroll", handleScroll);

    return ()=>window.removeEventListener("scroll",handleScroll)
  }, []);

  return (
    <div className="pt-24 px-8">
      <input
        className="w-full border-2 border-gray-400 px-6 py-3 rounded-lg"
        type="text"
        onChange={(e) => setSearchData(e.target.value)}
        placeholder="Search products..."
      />

      {filteredProducts.map((item) => {
        return <h1 key={item.id}>{item.title}</h1>;
      })}
    </div>
  );
};

export default Home;
