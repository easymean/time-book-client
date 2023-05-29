import { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Button.scss';

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: TButton) {
	return <button {...props}>{props.children}</button>;
}

type TIconButton = TButton;
export function IconButton(props: TIconButton) {
	return (
		<button {...props} className={classNames('iconBtn', props.className)}>
			{props.children}
		</button>
	);
}
