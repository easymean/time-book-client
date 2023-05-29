import styles from './Calendar.module.scss';

type TCalendarBody = {
	children: React.ReactNode;
};
export const CalendarBody = ({ children }: TCalendarBody) => {
	return <div className={styles.grid}>{children}</div>;
};
