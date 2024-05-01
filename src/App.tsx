import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useTelegram } from "@/hooks";
import { useEffect } from "react";

function App() {
	const { tg, user} = useTelegram()

	console.log(user, tg.isExpanded)

	useEffect(() => {
		tg.ready()

		tg.expand()

		tg.BackButton.show()
	}, []);

	return (
		<RouterProvider router={ router }/>
	)
}

export default App
