import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useTelegram } from "@/hooks";
import { useEffect } from "react";

function App() {
	const { tg, user} = useTelegram()

	const onBackClick = () => {
		console.log('on back click')
	}

	console.log(user, tg.isExpanded)

	useEffect(() => {
		tg.ready()

		tg.expand()

		tg.BackButton.show()

		tg.onEvent('backButtonClicked', onBackClick)
	}, []);

	return (
		<RouterProvider router={ router }/>
	)
}

export default App
