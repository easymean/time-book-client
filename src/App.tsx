import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools/build/lib/devtools';
import React from 'react';

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
			<BrowserView>
				<div>
					<h1 className="text-3xl font-bold underline">Hello world!</h1>
				</div>
			</BrowserView>
			<MobileView>
				<div>
					<h1 className="text-3xl font-bold underline">Hello world!</h1>
				</div>
			</MobileView>
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
