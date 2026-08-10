import { axiosInstance } from "../config/axiosInstance";

export const getProductsApi                                                                                                                                                                                                                                                                                                                   = async () => {
  try {
    const response = await axiosInstance.get("/products");

    return response.data.products;
  } catch (error) {
    console.log("Error in API:", error);
  }
};
