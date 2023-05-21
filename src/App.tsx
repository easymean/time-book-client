import React from 'react';
import './App.scss';
import { BrowserView, MobileView } from 'react-device-detect';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import GlobalLayout from './component/molecules/GlobalLayout/GlobalLayout';

const queryClient = new QueryClient();

const ReactQueryDevtoolsProduction = React.lazy(() =>
	import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(d => ({
		default: d.ReactQueryDevtools,
	})),
);

function App() {
	const [showDevtools, setShowDevtools] = React.useState(false);

	React.useEffect(() => {
		// @ts-ignore
		window.toggleDevtools = () => setShowDevtools(old => !old);
	}, []);

	return (
		<QueryClientProvider client={queryClient}>
			<GlobalLayout>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" />
					<Route path="/add" />
					<Route path="/my" />
				</Routes>
			</GlobalLayout>
			<ReactQueryDevtools initialIsOpen />
			{showDevtools && (
				<React.Suspense fallback={null}>
					<ReactQueryDevtoolsProduction />
				</React.Suspense>
			)}
		</QueryClientProvider>
	);
}

export default App;
