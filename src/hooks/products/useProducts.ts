import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { getProducts } from "@/services/api";

export const useProducts = () => {
	const { data, isFetching } = useQuery({
		queryKey: ['products'],
		queryFn: () => getProducts(),
		gcTime: 120_000,
		staleTime: 120_000,
		select: response => response.data,
		placeholderData: keepPreviousData
	})

	return { data, isFetching }
}