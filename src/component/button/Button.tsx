import { ButtonHTMLAttributes } from 'react';
import './Button.scss';

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: TButton) {
	return <button {...props}>{props.children}</button>;
}
