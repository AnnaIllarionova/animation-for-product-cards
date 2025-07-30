import { URL } from "@/constants/constants";
import { IProduct, IProductsData } from "../types/api_types/api_types";

export const getProducts = async (): Promise<IProduct[]> => {
  const res = await fetch(`${URL}?limit=12`);
  const data: IProductsData = await res.json();

  console.log("data", data);
  return data.products;
};

export const getCurrentProduct = async (id: number): Promise<IProduct> => {
  const res = await fetch(`${URL}/${id}`);
  const data: IProduct = await res.json();

  return data;
};