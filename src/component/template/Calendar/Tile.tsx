import './Tile.scss';
import classNames from 'classnames';

type Color = 'BLACK' | 'RED' | 'BLUE';
type TTileWithNumber = {
	day: number;
	children?: React.ReactNode;
	color?: Color;
	isPrev?: boolean;
	isToday?: boolean;
	isSelected?: boolean;
};

export const TileWithNumber = ({
	day,
	children,
	color = 'BLACK',
	isPrev = false,
	isToday = false,
	isSelected = false,
}: TTileWithNumber) => {
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

type TTileWithString = {
	dow: string;
	color?: Color;
};
export const TileWithString = ({ dow, color }: TTileWithString) => {
	return (
		<div className={classNames('dow', { blue: color === 'BLUE', red: color === 'RED' })}>{dow}</div>
	);
};
