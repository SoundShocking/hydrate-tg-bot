import { ICartItem } from "@/types";
import instance from "@/services/api/instance";

export const createOrder = (items: ICartItem[]) => {
	return instance.post<{ payment_link: { ok: boolean, result: string } }>('/orders', {
		items
	})
}