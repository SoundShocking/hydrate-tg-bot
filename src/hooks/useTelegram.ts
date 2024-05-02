//@ts-ignore-next-line
const tg = window.Telegram.WebApp;

export function useTelegram() {

	const close = () => {
		tg.close()
	}

	const onToggleButton = () => {
		if (tg.MainButton.isVisible) {
			tg.MainButton.hide();
		} else {
			tg.MainButton.show();
		}
	}

	return {
		close,
		onToggleButton,
		tg,
		user: tg.initDataUnsafe?.user,
		queryId: tg.initDataUnsafe?.query_id,
	}
}