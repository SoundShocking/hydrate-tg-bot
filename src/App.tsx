import { RouterProvider, useNavigate } from "react-router-dom";
import { router } from "@/router";
import { useTelegram } from "@/hooks";
import { useEffect } from "react";

function App() {
	const { tg, user, close } = useTelegram()
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

	console.log(user, tg.isExpanded)

	useEffect(() => {
		tg.ready()

		tg.expand()

		tg.BackButton.show()

		tg.onEvent('backButtonClicked', onBackClick)

		tg.onEvent('invoiceClosed', oInvoiceClose)
	}, []);

	return (
		<RouterProvider router={ router }/>
	)
}

export default App
