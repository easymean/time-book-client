import './App.css';
import { BrowserView, MobileView } from 'react-device-detect';

function App() {
	return (
		<>
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
		</>
	);
}

export default App;
