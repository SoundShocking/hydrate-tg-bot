export interface IProduct {
	ID: number
	title: string
	thumbnail: string
	regular_price: number
	sale_price: number
	price: number
	categories_ids: number[]
	stock: number
}

export interface ICartItem extends IProduct {
	count: number
}

export interface ICategory {
	id: number
	title: string
	image: string
}

export interface IGetProductsData {
	categories: ICategory[]
	products: IProduct[]
}