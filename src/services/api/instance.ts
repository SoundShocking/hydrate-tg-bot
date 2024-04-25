import axios from 'axios'

const instance = axios.create({
	baseURL: 'https://admin:pass@hydrate.voda.love/wp-json/telegram/v1',
	headers: {
		Accept: 'application/json',
		'Content-Type': 'application/json',
		// 'Authorization': 'Basic YWRtaW46cGFzcw=='
	},
	// withCredentials: true,
})

export default instance