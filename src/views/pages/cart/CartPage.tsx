import { FC } from "react";
import { CartItem, Container } from "@/components";
import { useCart } from "@/store";

import styles from './CartPage.module.css'
import { ukrainianCurrencyFormatter } from "@/constants";

export const CartPage: FC = () => {
	const { items, totalPrice } = useCart()

	return <Container>
		<div className={ styles.title }>Ваше замовлення</div>

		<div className={ styles.list }>
			{ items.map(item => (<CartItem cartItem={ item } key={ item.ID }/>)) }

			<div className={ styles.total }>
				<div>Товарiв на суму</div>
				<div>{ ukrainianCurrencyFormatter.format(totalPrice) }</div>
			</div>
		</div>
	</Container>
}