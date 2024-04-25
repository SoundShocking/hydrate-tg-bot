import { FC, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Container, Product } from "@/components";
import { useProducts } from "@/hooks";
import { Spin } from "antd";

import styles from './CategoryPage.module.css'

export const CategoryPage: FC = () => {
	const { id } = useParams<{ id: string }>()
	const { data, isFetching } = useProducts()

	const products = useMemo(() => {
		if (data?.products) {
			return data.products.filter(product => product.categories_ids.includes(+id!))
		}

		return []
	}, [data])

	return <Container>
		{ isFetching && <Spin/> }

		<div className={ styles.products }>
			{ products.map(product => (
				<Product product={ product } key={ product.ID }/>
			)) }
		</div>
	</Container>
}