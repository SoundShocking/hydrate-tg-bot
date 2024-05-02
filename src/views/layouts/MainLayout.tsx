import { FC, useEffect } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { MakeOrder } from "@/components/make-order";
import { useExpand, useWebApp } from "@vkruglikov/react-telegram-web-app";

import styles from './MainLayout.module.css'

export const MainLayout: FC = () => {
	const { state } = useLocation()
	const navigate = useNavigate()
	const WebApp = useWebApp()
	const [isExpanded, expand] = useExpand()

	const onBackButtonClick = () => {
		navigate(-1)
	}

	useEffect(() => {
		if (state?.isShowBack) {
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
			<Link to={ '/' } state={ { isShowBack: false } }>header</Link>
			<Link to={ '/cart' } state={ { isShowBack: true } }>cart</Link>
			<Link to={ '/categories' } state={ { isShowBack: true } }>Categories</Link>
		</header>

		<main className={ styles.main }>
			<Outlet/>
		</main>

		<MakeOrder/>
	</>
}