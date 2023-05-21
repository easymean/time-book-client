import './Day.scss';
import classNames from 'classnames';

type Color = 'BLACK' | 'RED' | 'BLUE';
type TDay = {
	day: number;
	children?: React.ReactNode;
	color?: Color;
};

export const Day = ({ day, children, color = 'BLACK' }: TDay) => {
	return (
		<div className="day">
			<span className={classNames({ blue: color === 'BLUE', red: color === 'RED' })}>{day}</span>
			{children}
		</div>
	);
};

type TDow = {
	dow: string;
	color?: Color;
};
export const Dow = ({ dow, color }: TDow) => {
	return (
		<div className={classNames('dow', { blue: color === 'BLUE', red: (color = 'RED') })}>{dow}</div>
	);
};
