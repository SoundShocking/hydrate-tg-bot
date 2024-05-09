import { FC } from "react";
import { IProduct } from "@/types";
import styles from './Product.module.css'
import { useCart } from "@/store";
import { PlusIcon, MinusIcon } from "@/components";
import { clsx } from "clsx";
import { CURRENCY_SYMBOL } from "@/constants";

interface Props {
	product: IProduct
}

export const Product: FC<Props> = ({ product }) => {
	const { addItem, incrementItem, decrementItem, items } = useCart()

	const cartItem = items.find(item => item.ID === product.ID)

	const onClickAdd = () => {
		addItem({
			...product,
			count: 1
		})
	}

	const onDecrementItem = () => {
		decrementItem(product.ID)
	}

	const onClickIncrement = () => {
		incrementItem(product.ID)
	}

	return <div className={ styles.product }>
		<div className={ styles.image }>
			<img src={ product.thumbnail } alt=""/>
		</div>

		<div className={ styles.title }>{ product.title }</div>

		<div className={ styles.price }>{ product.price } { CURRENCY_SYMBOL }</div>

		<div className={ styles.actions }>
			{ cartItem ? (
				<>
					<button onClick={ onDecrementItem } className={ clsx('btn', styles.qtyButton) }>
						<MinusIcon/>
					</button>
					<span className={ styles.qty }>{ cartItem.count }</span>
					<button onClick={ onClickIncrement } className={ clsx('btn', styles.qtyButton) }>
						<PlusIcon/>
					</button>
				</>) : (
				<button className={ clsx('btn', styles.addToCart) } onClick={ onClickAdd }>
					<PlusIcon/>

					Додати
				</button>)
			}
		</div>
	</div>
}