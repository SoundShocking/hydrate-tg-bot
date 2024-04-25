import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'
import { ICartItem } from "@/types";

interface CartStore {
	items: ICartItem[]
	totalPrice: number
	setTotalPrice: (price: number) => void
	addItem: (item: ICartItem) => void
	removeItem: (id: number) => void
	incrementItem: (id: number) => void
	decrementItem: (id: number) => void
}

const calcCartTotalPrice = (items: ICartItem[]) => {
	return items.reduce((sum, item) => item.count * item.price + sum, 0)
}

export const useCart = create<CartStore>()(
	immer(set => ({
		items: [],
		totalPrice: 0,
		setTotalPrice: price => {
			set(state => {
				state.totalPrice = price
			})
		},
		addItem: item => {
			set(state => {
				const cartItem = state.items.find(_item => item.ID === _item.ID)
				if (cartItem) {
					cartItem.count++
				} else {
					state.items.push(item)
				}

				state.totalPrice = calcCartTotalPrice(state.items)
			})
		},
		removeItem: id => {
			set(state => {
				state.items = state.items.filter(item => item.ID !== id)

				state.totalPrice = calcCartTotalPrice(state.items)
			})
		},
		incrementItem: id => {
			set(state => {
				const cartItem = state.items.find(item => item.ID === id)

				if (cartItem) {
					cartItem.count++
					state.totalPrice = calcCartTotalPrice(state.items)
				}
			})
		},
		decrementItem: id => {
			set(state => {
				const cartItem = state.items.find(item => item.ID === id)

				if (cartItem) {
					if (cartItem.count > 1) {
						cartItem.count--
					} else {
						state.items = state.items.filter(item => item.ID !== id)
					}

					state.totalPrice = calcCartTotalPrice(state.items)
				}
			})
		}
	}))
)