import { MouseEventHandler } from 'react';
import { Button } from '../../atom/Button';
import './TileGroups.scss';

type TTileGroups = {
	month: string;
	year: string;
	children: React.ReactNode;
	onClickPrev: MouseEventHandler<HTMLButtonElement>;
	onClickNext: MouseEventHandler<HTMLButtonElement>;
};
export const TileGroups = ({ month, year, children, onClickPrev, onClickNext }: TTileGroups) => {
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

type TTileGrid = {
	children: React.ReactNode;
};
export const TileGrid = ({ children }: TTileGrid) => {
	return <div className="grid">{children}</div>;
};
