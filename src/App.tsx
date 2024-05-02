import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useEffect } from "react";
import { useWebApp } from "@vkruglikov/react-telegram-web-app";

function App() {
	const WebApp = useWebApp()

	const oInvoiceClose = (event: { slug: string, status: string }) => {
		if (event.status === 'paid') {
			close()
		}
	}

	useEffect(() => {
		WebApp.ready()

		// WebApp.BackButton.show()

		WebApp.onEvent('invoiceClosed', oInvoiceClose)

		// tg.onEvent('backButtonClicked', onBackClick)

		// tg.onEvent('invoiceClosed', oInvoiceClose)

		return () => {
			WebApp.offEvent('invoiceClosed', oInvoiceClose)
		}
	}, []);

	return (
		<RouterProvider router={ router }/>
	)
}

export default App
