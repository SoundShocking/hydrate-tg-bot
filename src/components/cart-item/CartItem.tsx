import { FC } from "react";
import { ICartItem } from "@/types";

import styles from './CartItem.module.css'
import { useCart } from "@/store";
import { clsx } from "clsx";
import { MinusIcon } from "@/components/MinusIcon";
import { PlusIcon } from "@/components/PlusIcon";
import { FaTrash } from "react-icons/fa6";
import { CURRENCY_SYMBOL } from "@/constants";

interface Props {
	cartItem: ICartItem
}

export const CartItem: FC<Props> = ({ cartItem }) => {
	const { decrementItem, incrementItem, removeItem } = useCart()

	const onIncrement = () => {
		incrementItem(cartItem.ID)
	}

	const onDecrement = () => {
		decrementItem(cartItem.ID)
	}

	const onRemove = () => {
		removeItem(cartItem.ID)
	}

	return <div className={ styles.item }>
		<div className={ styles.info }>
			<div className={ styles.image }>
				<img src={ cartItem.thumbnail } alt=""/>
			</div>

			<div className={ styles.name }>
				{ cartItem.title }
			</div>

			<div className={ styles.price }>
				{ cartItem.count } x { cartItem.count * cartItem.price } { CURRENCY_SYMBOL }
			</div>
		</div>

		<div className={ styles.actions }>
			<button onClick={ onDecrement } className={ clsx('btn', styles.actionButton) }>
				<MinusIcon/>
			</button>
			
			<button onClick={ onIncrement } className={ clsx('btn', styles.actionButton) }>
				<PlusIcon/>
			</button>

			<button onClick={ onRemove } className={ clsx('btn', styles.actionButton, styles.removeButton) }>
				<FaTrash color={ '#4e657c' } size={ 16 }/>
			</button>
		</div>
	</div>
}