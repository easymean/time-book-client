import './Navigation.scss';

type THNavigation = {
	children: React.ReactNode;
};

export const HNavigation = (props: THNavigation) => {
	return <nav className="horizontal">{props.children}</nav>;
};
