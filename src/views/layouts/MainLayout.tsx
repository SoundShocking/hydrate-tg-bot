import { FC } from "react";
import { Link, Outlet } from "react-router-dom";
import { MakeOrder } from "@/components/make-order";

import styles from './MainLayout.module.css'

export const MainLayout: FC = () => {
	return <>
		<header>
			<Link to={ '/' }>header</Link>
			<Link to={ '/cart' }>cart</Link>
		</header>

		<main className={ styles.main }>
			<Outlet/>
		</main>

		<MakeOrder/>
	</>
}