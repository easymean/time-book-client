import styles from './Tile.module.scss';
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
		<div className={classNames(styles.day, { blur: isNeighborMonth })} onClick={() => onClick(day)}>
			<div className={styles.top}>
				<span
					className={classNames(
						{
							[styles.today]: isToday,
							[styles.blue]: !isToday && isSaturday,
							[styles.red]: !isToday && isHoliday,
						},
						{ [styles.selected]: isSelected },
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
	return (
		<div className={classNames(styles.dow, { [styles.blue]: isSaturday, [styles.red]: isHoliday })}>
			{dow}
		</div>
	);
};
