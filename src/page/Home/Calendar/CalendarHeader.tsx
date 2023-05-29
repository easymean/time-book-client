import { MouseEventHandler } from 'react';
import styles from './Calendar.module.scss';
import { Button } from '@component/atom/Button';
import { dayOfWeek } from './constant';
import { Dow } from './Day';

type TCalendarHeader = {
	month: string;
	year: string;
	onClickPrev: MouseEventHandler<HTMLButtonElement>;
	onClickNext: MouseEventHandler<HTMLButtonElement>;
};

export const CalendarTitle = ({ month, year, onClickPrev, onClickNext }: TCalendarHeader) => {
	return (
		<div className={styles.title}>
			<Button className={styles.moveBtn} onClick={onClickPrev}>
				←
			</Button>
			<span className={styles.summary}>
				{month} {year}
			</span>
			<Button className={styles.moveBtn} onClick={onClickNext}>
				→
			</Button>
		</div>
	);
};

export const Dows = () => {
	return (
		<div className={styles.dows}>
			{dayOfWeek.map((dow, idx) => (
				<Dow dow={dow.name} isHoliday={dow.isHoliday} isSaturday={dow.isSaturday} key={idx} />
			))}
		</div>
	);
};
