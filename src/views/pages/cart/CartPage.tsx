import { FC } from "react";
import { Container, CartItem } from "@/components";
import { useCart } from "@/store";

import styles from './CartPage.module.css'

export const CartPage: FC = () => {
	const { items } = useCart()

	return <Container>
		<div className={ styles.title }>cart</div>

		<div className={ styles.list }>
			{ items.map(item => (<CartItem cartItem={ item } key={ item.ID }/>)) }
		</div>
	</Container>
}