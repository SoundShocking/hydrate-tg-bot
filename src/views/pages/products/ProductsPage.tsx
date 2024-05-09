import { FC } from "react";

import { useProducts } from "@/hooks";
import { Container, Product } from "@/components";
import { Flex, Spin } from "antd";

import styles from './ProductsPage.module.css'

export const ProductsPage: FC = () => {
	const { data, isFetching } = useProducts()

	return <Container>
		<Flex justify={'center'}>
			<Spin spinning={isFetching} />
		</Flex>

		<div className={ styles.products }>
			{ data?.products.map(product => (
				<Product product={ product } key={ product.ID }/>
			)) }
		</div>
	</Container>
}