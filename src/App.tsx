import React from 'react';
import './App.scss';
import { BrowserView, MobileView } from 'react-device-detect';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Button } from './component/button';

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
					<Button className="ok">버튼</Button>
				</div>
			</BrowserView>
			<MobileView>
				<div></div>
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
