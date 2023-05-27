import { LayoutWithHeader } from '../../component/template/Layout';
import CalendarContainer from './Calendar/CalendarContainer';

const Home = () => {
	return (
		<>
			<LayoutWithHeader>
				<div>
					<CalendarContainer />
				</div>
			</LayoutWithHeader>
		</>
	);
};

export default Home;
