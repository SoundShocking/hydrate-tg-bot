export const CURRENCY_SYMBOL = '₴'
export const FREE_DELIVERY_THRESHOLD = 500

export const ukrainianCurrencyFormatter = new Intl.NumberFormat('uk-UA', {
	style: 'currency',
	currency: "UAH",
	minimumFractionDigits: 0
})