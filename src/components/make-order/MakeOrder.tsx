import { FC } from "react";

import styles from './MakeOrder.module.scss'
import { useCart } from "@/store";
import { ShoppingCartIcon } from "@/components";
import { TruckIcon } from "@/components/TruckIcon";
import { clsx } from "clsx";
import { CURRENCY_SYMBOL, FREE_DELIVERY_THRESHOLD } from "@/constants";
import { useLocation, useNavigate } from "react-router-dom";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";
import { useCreateOrder } from "@/hooks";
import { Spin } from "antd";

export const MakeOrder: FC = () => {
	const WebApp = useWebApp()
	const { totalPrice, items } = useCart()
	const { pathname } = useLocation()
	const navigate = useNavigate()
	const { createOrderMutate, isCreating } = useCreateOrder()

	const isLessThanThreshold = totalPrice < FREE_DELIVERY_THRESHOLD
	const isGreaterThanThreshold = totalPrice >= FREE_DELIVERY_THRESHOLD

	const onMakeOrderClick = async () => {
		if (pathname !== '/cart') {
			navigate('cart', {
				state: {
					isShowBack: true
				}
			})
		} else {
			createOrderMutate(items, {
				onSuccess: (response) => {
					WebApp.openInvoice(response.data.payment_link.result)
				}
			})
		}
	}

	const width = Math.min(totalPrice / 500 * 100, 100)

	return <>
		<div className={ styles.wrapper }>
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
				<button onClick={ onMakeOrderClick } className={ clsx('btn', styles.button) }
								disabled={ isLessThanThreshold }
				>
					{ isLessThanThreshold ? `мінімальне замовлення ${ FREE_DELIVERY_THRESHOLD } ${ CURRENCY_SYMBOL }` : 'ЗРОБИТИ ЗАМОВЛЕННЯ' }
				</button>
			</div>
		</div>

		<Spin spinning={ isCreating } fullscreen/>
	</>
}