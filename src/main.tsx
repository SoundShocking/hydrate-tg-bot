import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from "@/App";
import { ConfigProvider } from 'antd'
import 'antd/dist/reset.css';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchIntervalInBackground: false,
			refetchOnReconnect: false,
			refetchOnWindowFocus: false,
			retry: false,
			retryOnMount: false,
			refetchOnMount: false
		},
	},
})

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ConfigProvider theme={ {
			components: {
				Spin: {
					colorPrimary: '#67daff'
				}
			}
		} }
		>
			<QueryClientProvider client={ queryClient }>
				<App/>

				<ReactQueryDevtools
					buttonPosition={ 'top-right' }
					initialIsOpen={ false }
					position={ 'bottom' }
				/>
			</QueryClientProvider>
		</ConfigProvider>
	</React.StrictMode>,
)
