import { api } from "../../../config/api";

export let getAllProductsApi = async (search) => {
  try {
    let url = search ? `/products/search?q=${search}` : "/products?limit=100";
    let res = await api.get(url);

    return res.data.products;
  } catch (error) {
    console.log("error in geting all products api", error);
  }
};

export let getProductCategories = async () => {
  try {
    let res = await api.get("/products/categories");

    return res.data;
  } catch (error) {
    console.log("error in geting all products api", error);
  }
};

export let getProductByCategory = async (category) => {
  try {
    let res = await api.get(`/products/category/${category}`);

    return res.data;
  } catch (error) {
    console.log("error in geting categorysearch api", error);
  }
};
