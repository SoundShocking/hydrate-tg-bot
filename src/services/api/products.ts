import instance from "@/services/api/instance";
import { IGetProductsData } from "@/types";

export const getProducts = () => {
	return instance.get<IGetProductsData>('/products')
}