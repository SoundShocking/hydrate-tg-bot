import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from "@/views/layouts";
import { CartPage, CategoriesPage, CategoryPage, ProductsPage } from "@/views/pages";

export const router = createBrowserRouter([
	{
		element: <MainLayout/>,
		children: [
			{
				index: true,
				element: <ProductsPage/>
			},
			{
				path: 'categories',
				children: [
					{
						index: true,
						element: <CategoriesPage/>
					},
					{
						path: ':id',
						element: <CategoryPage/>
					}
				]
			},
			{
				path: 'cart',
				element: <CartPage/>
			}
		]
	}
])