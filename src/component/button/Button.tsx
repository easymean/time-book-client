import { ButtonHTMLAttributes } from 'react';

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: TButton) {
	return <button {...props}>{props.children}</button>;
}
