import { FC, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MakeOrder } from "@/components/make-order";

import styles from './MainLayout.module.css'
import { useExpand, useWebApp } from "@vkruglikov/react-telegram-web-app";

export const MainLayout: FC = () => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const WebApp = useWebApp()
	const [isExpanded, expand] = useExpand()

	const onBackButtonClick = () => {
		navigate(-1)
	}

	useEffect(() => {
		if (state.isShowBack) {
			WebApp.BackButton.show()
		} else {
			WebApp.BackButton.hide()
		}
	}, [state]);

	useEffect(() => {
		WebApp.onEvent('backButtonClicked', onBackButtonClick)

		return () => {
			WebApp.offEvent('backButtonClicked', onBackButtonClick)
		}
	}, []);

	useEffect(() => {
		if (!isExpanded) {
			expand()
		}
	}, [isExpanded]);

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