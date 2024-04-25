import { FC } from "react";
import { useCart } from "@/store";
import { FaCartShopping, FaTruck } from "react-icons/fa6";

import styles from './FreeDelivery.module.css'

const FREE_DELIVERY_THRESHOLD = 500

export const FreeDelivery: FC = () => {
	const { totalPrice } = useCart()

	const width = Math.min(totalPrice / 500 * 100, 100)
	console.log('width', width)

	return <div className={ styles.block }>
		<FaCartShopping/>

		<div className={ styles.progress }>
			<div className={ styles.progressBar } style={ { width: `${ width }%` } }></div>

			<div className={ styles.price }>-{ FREE_DELIVERY_THRESHOLD - totalPrice } $</div>
		</div>

		<FaTruck/>
	</div>
}