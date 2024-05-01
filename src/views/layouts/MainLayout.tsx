import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { MakeOrder } from "@/components/make-order";

import styles from './MainLayout.module.css'
import { useTelegram } from "@/hooks";

export const MainLayout: FC = () => {
	const { tg } = useTelegram()

	const handlePayment = () => {
		tg.openInvoice('https://t.me/$CWgF-WKrkElCCAAAy_4R1KH2BiE')
	}

	return <>
		<header>
			<Link to={ '/' }>header</Link>
			<Link to={ '/cart' }>cart</Link>

			<button onClick={ handlePayment }>payment</button>
		</header>

		<main className={ styles.main }>
			<Outlet/>
		</main>

		<MakeOrder/>
	</>
}