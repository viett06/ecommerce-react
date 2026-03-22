import axiosClient from "./axiosClient.js";

const getProducts = async () => {
  const res = await axiosClient.get("/product");

  return res.data;
  
  console.log(res);
};
export { getProducts };
