import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const button = {
	title: 'Component/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {},
} satisfies Meta<typeof Button>;

export default button;
type Story = StoryObj<typeof button>;

export const OkButton: Story = {
	args: {},
	render: () => <Button className="ok">버튼</Button>,
};
