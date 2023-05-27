import { Meta, StoryObj } from '@storybook/react';
import { TileWithNumber } from './Tile';

const tile = {
	title: 'Calendar/TileWithNumber',
	component: TileWithNumber,
	tags: ['autodocs'],
	argTypes: {
		day: { control: { type: 'number', min: 1, max: 31 } },
	},
} satisfies Meta<typeof TileWithNumber>;

export default tile;
type Story = StoryObj<typeof tile>;

export const tileWithNumber: Story = {
	args: {
		day: 1,
		isNeighborMonth: false,
		isToday: true,
		isSelected: false,
		isHoliday: false,
		isSaturday: false,
	},
};
