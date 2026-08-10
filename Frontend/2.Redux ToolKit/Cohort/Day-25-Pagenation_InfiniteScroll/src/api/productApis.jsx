import axios from "axios";
import { useEffect } from "react";

export const getAllProductApi = async (limit,pageParam) => {
  try {
    const res = await axios.get(
      `https://dummyjson.com/products?limit=${limit}&skip=${pageParam}`,
    );

    console.log(res.data.products);

    return res.data;
  } catch (error) {
    console.log("Error in products Api", error);
  }
};
