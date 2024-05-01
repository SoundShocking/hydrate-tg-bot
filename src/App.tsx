import { RouterProvider } from "react-router-dom";
import { router } from "@/router";
import { useTelegram } from "@/hooks";
import { useEffect } from "react";

function App() {
	const { tg, user } = useTelegram()

	console.log(user)

	useEffect(() => {
		tg.ready()
	}, []);

	return (
		<RouterProvider router={ router }/>
	)
}

export default App
