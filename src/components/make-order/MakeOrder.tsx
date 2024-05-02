import { FC } from "react";
import axios from 'axios'

import styles from './MakeOrder.module.scss'
import { useCart } from "@/store";
import { ShoppingCartIcon } from "@/components";
import { TruckIcon } from "@/components/TruckIcon";
import { clsx } from "clsx";
import { CURRENCY_SYMBOL, FREE_DELIVERY_THRESHOLD } from "@/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useTelegram } from "@/hooks";

export const MakeOrder: FC = () => {
	const { tg } = useTelegram()
	const { totalPrice, items } = useCart()
	const { pathname } = useLocation()
	const navigate = useNavigate()

	const isLessThanThreshold = totalPrice < FREE_DELIVERY_THRESHOLD
	const isGreaterThanThreshold = totalPrice >= FREE_DELIVERY_THRESHOLD

	const onMareOrderClick = async () => {
		if (pathname !== '/cart') {
			navigate('cart')
		} else {
			console.log('else')

			const res = await axios.post<{ link: string }>('https://f7c1-185-35-100-55.ngrok-free.app/create-invoice-link', {
				items
			}, {
				headers: {
					'ngrok-skip-browser-warning': 1337
				}
			})

			tg.openInvoice(res.data.link)
		}
	}

	const width = Math.min(totalPrice / 500 * 100, 100)

	return <div className={ styles.wrapper }>
		<div className={ styles.top }>
			<div className={ styles.icon }>
				<ShoppingCartIcon/>
			</div>

			<div className={ clsx(styles.progress, { [styles.fat]: isGreaterThanThreshold }) }>
				{ isGreaterThanThreshold &&
					<div className={ styles.freeDeliveryText }>доставка для вас буде безкоштовна!</div> }

				<div className={ styles.progressBar } style={ { width: `${ width }%` } }></div>

				{ isLessThanThreshold &&
					<div className={ styles.price }>- { FREE_DELIVERY_THRESHOLD - totalPrice } { CURRENCY_SYMBOL }</div> }
			</div>

			<div className={ styles.icon }>
				<TruckIcon/>
			</div>
		</div>

		<div className={ styles.bottom }>
			<button onClick={ onMareOrderClick } className={ clsx('btn', styles.button) }
							disabled={ isLessThanThreshold }
			>
				{ isLessThanThreshold ? `мінімальне замовлення ${ FREE_DELIVERY_THRESHOLD } ${ CURRENCY_SYMBOL }` : 'ЗРОБИТИ ЗАМОВЛЕННЯ' }
			</button>
		</div>
	</div>
}