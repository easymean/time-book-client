import { InputHTMLAttributes } from 'react';
import './Input.scss';

type TInput = InputHTMLAttributes<HTMLInputElement>;
export const Input = (props: TInput) => {
	return <input {...props} />;
};
