import styles from './Day.module.scss';
import classNames from 'classnames';

type TDay = {
	day: number;
	children?: React.ReactNode;
	isNeighborMonth?: boolean;
	isToday?: boolean;
	isSelected?: boolean;
	isSaturday?: boolean;
	isHoliday?: boolean;
	onClick: (day: number) => void;
};

export const Day = ({
	day,
	children,
	isNeighborMonth = false,
	isToday = false,
	isSelected = false,
	isSaturday = false,
	isHoliday = false,
	onClick,
}: TDay) => {
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

type TDow = {
	dow: string;
	isSaturday?: boolean;
	isHoliday?: boolean;
};
export const Dow = ({ dow, isSaturday, isHoliday }: TDow) => {
	return (
		<div className={classNames(styles.dow, { [styles.blue]: isSaturday, [styles.red]: isHoliday })}>
			{dow}
		</div>
	);
};
