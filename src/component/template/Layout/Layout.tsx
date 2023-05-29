import { Header } from '../../atom/Header';
import { LinkButton } from '../../atom/Link';
import { HNavigation } from '../../atom/Navigation';
import styles from './Layout.module.scss';

type TLayout = {
	children?: React.ReactNode;
};
export const LayoutWithHeader = (props: TLayout) => {
	return (
		<div className={styles.layout}>
			<section className={styles.header}>
				<Header />
				<HNavigation>
					<LinkButton>홈</LinkButton>
					<LinkButton>데일리</LinkButton>
					<LinkButton>통계</LinkButton>
				</HNavigation>
			</section>
			<section className={styles.body}>{props.children}</section>
		</div>
	);
};
