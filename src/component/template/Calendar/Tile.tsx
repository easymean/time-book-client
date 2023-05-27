import './Tile.scss';
import classNames from 'classnames';

type TTileWithNumber = {
	day: number;
	children?: React.ReactNode;
	isNeighborMonth?: boolean;
	isToday?: boolean;
	isSelected?: boolean;
	isSaturday?: boolean;
	isHoliday?: boolean;
	onClick: (day: number) => void;
};

export const TileWithNumber = ({
	day,
	children,
	isNeighborMonth = false,
	isToday = false,
	isSelected = false,
	isSaturday = false,
	isHoliday = false,
	onClick,
}: TTileWithNumber) => {
	return (
		<div className={classNames('day', { blur: isNeighborMonth })} onClick={() => onClick(day)}>
			<div className="top">
				<span
					className={classNames(
						{ today: isToday, blue: !isToday && isSaturday, red: !isToday && isHoliday },
						{ selected: isSelected },
					)}
				>
					{day}
				</span>
			</div>
			{children}
		</div>
	);
};

type TTileWithString = {
	dow: string;
	isSaturday?: boolean;
	isHoliday?: boolean;
};
export const TileWithString = ({ dow, isSaturday, isHoliday }: TTileWithString) => {
	return <div className={classNames('dow', { blue: isSaturday, red: isHoliday })}>{dow}</div>;
};
