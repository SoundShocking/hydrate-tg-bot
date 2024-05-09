import { useMutation } from "@tanstack/react-query";
import { ICartItem } from "@/types";
import { createOrder } from "@/services/api";

export const useCreateOrder = () => {
	const { isPending: isCreating, mutate: createOrderMutate } = useMutation({
		mutationKey: ['create-order'],
		mutationFn: (items: ICartItem[]) => createOrder(items)
	})

	return { isCreating, createOrderMutate }
}