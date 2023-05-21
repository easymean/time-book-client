import { AnchorHTMLAttributes } from 'react';
import './Link.scss';

type TLinkButton = AnchorHTMLAttributes<HTMLAnchorElement>;
export const LinkButton = (props: TLinkButton) => {
	return (
		<a className="linkButton" {...props}>
			{props.children}
		</a>
	);
};
