import { Header } from '../../atom/Header';
import { LinkButton } from '../../atom/Link';
import { HNavigation } from '../../atom/Navigation';
import './Layout.scss';

type TLayout = {
	children?: React.ReactNode;
};
export const LayoutWithHeader = (props: TLayout) => {
	return (
		<div className="layout">
			<section className="header">
				<Header />
				<HNavigation>
					<LinkButton>홈</LinkButton>
					<LinkButton>데일리</LinkButton>
					<LinkButton>통계</LinkButton>
				</HNavigation>
			</section>
			{props.children}
		</div>
	);
};
