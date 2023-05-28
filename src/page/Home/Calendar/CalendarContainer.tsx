import { useCallback, useMemo, useState } from 'react';
import { getFirstDateOfMonth, getNumberOfDaysInMonth, isMoonYear } from './utils';
import { dayOfWeek as dayOfWeekData } from './constant';
import { Day, Dow, Week, Month } from '@component/organism/Calendar';
import styles from './Calendar.module.scss';

const CalendarContainer = () => {
	const today = new Date();
	const day = today.getDate();
	const [month, setMonth] = useState<number>(today.getMonth() + 1);
	const prevMonth = (curMonth: number) => (curMonth - 1 == 0 ? 12 : curMonth - 1);
	const [year, setYear] = useState<number>(today.getFullYear());

	const [selected, setSelected] = useState<number>(0);

	const dayOfWeek = () => {
		return dayOfWeekData.map((dow, idx) => (
			<Dow dow={dow.name} isHoliday={dow.isHoliday} isSaturday={dow.isSaturday} key={idx} />
		));
	};

	const selectDay = useCallback(
		(day: number, isPrevMonth: boolean = false, isNextMonth: boolean = false) => {
			if (isPrevMonth) {
				setMonth(month - 1);
			} else if (isNextMonth) {
				setMonth(month + 1);
			}
			setSelected(day);
		},
		[month],
	);

	const isToday = (day: number, month: number, year: number) => {
		if (day == today.getDate() && month == today.getMonth() + 1 && year == today.getFullYear()) {
			return true;
		} else {
			return false;
		}
	};

	const monthTiles = useMemo(() => {
		const moonyear = isMoonYear(year);
		const firstDate = getFirstDateOfMonth(year, month - 1);
		const startIdx = firstDate.getDay();
		const daysOfMonth = getNumberOfDaysInMonth(month, moonyear);
		const lastDayOfPrevMonth = getNumberOfDaysInMonth(prevMonth(month), moonyear);

		const totalNum = Math.floor((startIdx + daysOfMonth + 6) / 7) * 7;

		let dayArr = [];
		let j = 0;
		for (let i = lastDayOfPrevMonth - startIdx + 1; i <= lastDayOfPrevMonth; i++, j++) {
			dayArr.push(
				<Day
					day={i}
					isNeighborMonth={true}
					isHoliday={j % 7 == 0}
					isSaturday={j % 7 == 6}
					key={j}
					onClick={() => selectDay(i, true)}
				/>,
			);
		}

		for (let i = 1; i <= daysOfMonth; i++, j++) {
			dayArr.push(
				<Day
					day={i}
					isToday={isToday(i, month, year)}
					isHoliday={j % 7 == 0}
					isSaturday={j % 7 == 6}
					key={j}
					isSelected={i == selected}
					onClick={selectDay}
				/>,
			);
		}

		for (let i = 1; i <= totalNum - (startIdx + daysOfMonth); i++, j++) {
			dayArr.push(
				<Day
					day={i}
					isNeighborMonth={true}
					isHoliday={j % 7 == 0}
					isSaturday={j % 7 == 6}
					key={j}
					onClick={() => selectDay(i, false, true)}
				/>,
			);
		}
		return dayArr;
	}, [selected, month, year, day]);

	const onClickPrevHandler = useCallback((month: number, year: number) => {
		if (month == 1) {
			setMonth(12);
			setYear(year - 1);
		} else {
			setMonth(month - 1);
		}
	}, []);

	const onClickNextHandler = useCallback((month: number, year: number) => {
		if (month == 12) {
			setMonth(1);
			setYear(year + 1);
		} else {
			setMonth(month + 1);
		}
	}, []);

	return (
		<div>
			<Month
				month={month.toString()}
				year={year.toString()}
				onClickPrev={() => onClickPrevHandler(month, year)}
				onClickNext={() => onClickNextHandler(month, year)}
			>
				<div className={styles.dowContainer}>{dayOfWeek()}</div>
				<Week>{monthTiles}</Week>
			</Month>
		</div>
	);
};

export default CalendarContainer;
