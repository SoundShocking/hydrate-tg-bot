import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from "@/views/layouts";
import { CartPage, CategoriesPage, CategoryPage } from "@/views/pages";

export const router = createBrowserRouter([
	{
		element: <MainLayout/>,
		children: [
			{
				index: true,
				element: <CategoriesPage/>
			},
			{
				path: 'category/:id',
				element: <CategoryPage/>
			},
			{
				path: 'cart',
				element: <CartPage/>
			}
		]
	}
])