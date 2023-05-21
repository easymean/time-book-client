import { MouseEventHandler } from 'react';
import { Button } from '../Button';
import './Month.scss';

type TMonth = {
	month: number;
	year: number;
	children: React.ReactNode;
	onClickPrev: (month: number) => MouseEventHandler<HTMLButtonElement>;
	onClickNext: (month: number) => MouseEventHandler<HTMLButtonElement>;
};
export const Month = ({ month, year, children, onClickPrev, onClickNext }: TMonth) => {
	return (
		<div>
			<section className="header">
				<Button onClick={onClickPrev(month - 1)}>이전</Button>
				{month} {year}
				<Button onClick={onClickPrev(month + 1)}>다음</Button>
			</section>
			<section className="body">{children}</section>
		</div>
	);
};

type TWeekGrid = {
	children: React.ReactNode;
};
export const WeekGrid = ({ children }: TWeekGrid) => {
	return <div className="grid">{children}</div>;
};
