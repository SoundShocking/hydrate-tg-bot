import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useEffect } from "react";
import { useExpand, useWebApp } from "@vkruglikov/react-telegram-web-app";

function App() {
	// const { tg, close } = useTelegram()
	const WebApp = useWebApp()
	const [isExpanded, expand] = useExpand()
	// const navigate = useNavigate()

	const onBackClick = () => {
		console.log('on back click')

		// tg.showAlert('test1337')
		//
		// alert('1337')
		// navigate(-1)
	}

	const oInvoiceClose = (event: { slug: string, status: string }) => {
		if (event.status === 'paid') {
			close()
		}
	}

	useEffect(() => {
		WebApp.ready()

		WebApp.BackButton.show()

		WebApp.onEvent('backButtonClicked', onBackClick)
		WebApp.onEvent('invoiceClosed', oInvoiceClose)

		// tg.onEvent('backButtonClicked', onBackClick)

		// tg.onEvent('invoiceClosed', oInvoiceClose)

		return () => {
			WebApp.offEvent('backButtonClicked', onBackClick)
			WebApp.offEvent('invoiceClosed', oInvoiceClose)
		}
	}, []);

	useEffect(() => {
		if (!isExpanded) {
			expand()
		}
	}, [isExpanded]);

	return (
		<RouterProvider router={ router }/>
	)
}

export default App
