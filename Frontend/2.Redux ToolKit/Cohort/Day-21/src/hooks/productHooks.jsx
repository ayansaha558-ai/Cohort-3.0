import { useQuery } from "@tanstack/react-query";
import { getProductsApi } from "../api/productApi";
import { useEffect, useState } from "react";

export let useProductApi = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);

  let { data, isPending, error } = useQuery({
    queryKey: ["products"],
    queryFn: getProductsApi,
    staleTime: 5000,
  });

  let filterProducts = (searchParams) => {
    if (!data) return;
    let filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(searchParams.toLowerCase()),
    );

    if (filteredData) {
      setFilteredProducts(filteredData);
    }
    console.log(filteredData);
  };

  useEffect(() => {
    setFilteredProducts(data);
  }, [data]);
  return { data, isPending, error, filteredProducts, filterProducts };
};
