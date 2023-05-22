import { MouseEventHandler } from 'react';
import { Button } from '../Button';
import './Month.scss';

type TMonth = {
	month: string;
	year: string;
	children: React.ReactNode;
	onClickPrev: MouseEventHandler<HTMLButtonElement>;
	onClickNext: MouseEventHandler<HTMLButtonElement>;
};
export const Month = ({ month, year, children, onClickPrev, onClickNext }: TMonth) => {
	return (
		<div>
			<section className="header">
				<Button onClick={onClickPrev}>이전</Button>
				{month} {year}
				<Button onClick={onClickNext}>다음</Button>
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
