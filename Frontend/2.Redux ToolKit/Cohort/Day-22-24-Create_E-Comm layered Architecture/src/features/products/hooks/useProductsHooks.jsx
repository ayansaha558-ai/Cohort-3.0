import { useQuery } from "@tanstack/react-query";
import {
  getAllProductsApi,
  getProductByCategory,
  getProductCategories,
} from "../api/productApis";
import { useEffect, useState } from "react";

export const useAllProduct = () => {
  const [search, setSearch] = useState(null);
  const [debounceSearch, setDebounceSearch] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebounceSearch(search);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [search]);

  console.log("mein search hoon jo hook mein hoon", search);

  let { data, isPending, error } = useQuery({
    queryKey: ["products", debounceSearch],
    queryFn: () => getAllProductsApi(debounceSearch),
  });

  console.log("products data ->", data);

  return {
    data,
    isPending,
    error,
    search,
    setSearch,
  };
};

export const useAllCategories = () => {
  let { data, isPending, error } = useQuery({
    queryKey: ["AllCategories"],
    queryFn: getProductCategories,
  });

  return {
    data,
    isPending,
    error,
  };
};

export const useProductBtCategory = () => {
  const [category, setCategory] = useState(null);

  let { data } = useQuery({
    queryKey: ["productsByCategory", category],
    queryFn: () => getProductByCategory(category),
  });

  return {
    data,
    setCategory,
    category,
  };
};
