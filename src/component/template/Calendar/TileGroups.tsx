import { MouseEventHandler } from 'react';
import { Button } from '../../atom/Button';
import styles from './TileGroups.module.scss';

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
			<section className={styles.header}>
				<Button className={styles.moveBtn} onClick={onClickPrev}>
					←
				</Button>
				<span className={styles.summary}>
					{month} {year}
				</span>
				<Button className={styles.moveBtn} onClick={onClickNext}>
					→
				</Button>
			</section>
			<section className={styles.body}>{children}</section>
		</div>
	);
};

type TTileGrid = {
	children: React.ReactNode;
};
export const TileGrid = ({ children }: TTileGrid) => {
	return <div className={styles.grid}>{children}</div>;
};
