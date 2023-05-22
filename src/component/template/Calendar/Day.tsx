import './Day.scss';
import classNames from 'classnames';

type Color = 'BLACK' | 'RED' | 'BLUE';
type TDay = {
	day: number;
	children?: React.ReactNode;
	color?: Color;
	isPrev?: boolean;
	isToday?: boolean;
	isSelected?: boolean;
};

export const Day = ({
	day,
	children,
	color = 'BLACK',
	isPrev = false,
	isToday = false,
	isSelected = false,
}: TDay) => {
	return (
		<div className={classNames('day', { blur: isPrev })}>
			<span
				className={classNames(
					{ today: isToday, blue: color === 'BLUE', red: color === 'RED' },
					{ selected: isSelected },
				)}
			>
				{day}
			</span>
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
		<div className={classNames('dow', { blue: color === 'BLUE', red: color === 'RED' })}>{dow}</div>
	);
};
