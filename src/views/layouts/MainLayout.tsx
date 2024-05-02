import { FC, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
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

	const onInvoiceClose = (event: { slug: string, status: string }) => {
		if (event.status === 'paid') {
			WebApp.close()
		}
	}

	useEffect(() => {
		if (state?.isShowBack) {
			WebApp.BackButton.show()
		} else {
			WebApp.BackButton.hide()
		}
	}, [state]);

	useEffect(() => {
		WebApp.ready()

		WebApp.onEvent('backButtonClicked', onBackButtonClick)
		WebApp.onEvent('invoiceClosed', onInvoiceClose)

		return () => {
			WebApp.offEvent('backButtonClicked', onBackButtonClick)
			WebApp.offEvent('invoiceClosed', onInvoiceClose)
		}
	}, []);

	useEffect(() => {
		if (!isExpanded) {
			expand()
		}
	}, [isExpanded]);

	return <>
		{/*<header>*/}
		{/*	<Link to={ '/' } state={ { isShowBack: false } }>header</Link>*/}
		{/*	<Link to={ '/cart' } state={ { isShowBack: true } }>cart</Link>*/}
		{/*	<Link to={ '/categories' } state={ { isShowBack: true } }>Categories</Link>*/}
		{/*</header>*/}

		<main className={ styles.main }>
			<Outlet/>
		</main>

		<MakeOrder/>
	</>
}