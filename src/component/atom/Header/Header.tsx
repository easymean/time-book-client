import { IconButton } from '../Button';
import './Header.scss';

export const HomeHeader = () => {
	return (
		<div className="homeHeader">
			<IconButton />
			<div className="title">Time Book</div>
			<IconButton />
		</div>
	);
};
