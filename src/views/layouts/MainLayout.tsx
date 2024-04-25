import { FC } from "react";
import { Link, Outlet } from "react-router-dom";

export const MainLayout: FC = () => {
	return <>
		<header>
			<Link to={ '/' }>header</Link>
			<Link to={ '/cart' }>cart</Link>
		</header>

		<main>
			<Outlet/>
		</main>
	</>
}