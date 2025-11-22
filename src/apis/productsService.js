import axiosClient from "./axiosClient.js";

const getProducts = async () => {
  const res = await axiosClient.get("/product");
  console.log(res);
};
export { getProducts };
