import { FC } from "react";

import { useProducts } from "@/hooks";
import { Container, Product } from "@/components";
import { Spin } from "antd";

import styles from './ProductsPage.module.css'

export const ProductsPage: FC = () => {
	const { data, isFetching } = useProducts()

	return <Container>
		{ isFetching && <Spin/> }

		<div className={ styles.products }>
			{ data?.products.map(product => (
				<Product product={ product } key={ product.ID }/>
			)) }
		</div>
	</Container>
}