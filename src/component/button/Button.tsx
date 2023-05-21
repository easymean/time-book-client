import { ButtonHTMLAttributes } from 'react';
import './Button.scss';

type TButton = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: TButton) {
	return <button {...props}>{props.children}</button>;
}

type TImgButton = {
	imgUrl: string;
} & TButton;
export function ImgButton(props: TImgButton) {
	return (
		<button {...props}>
			<img src={props.imgUrl} />
		</button>
	);
}
