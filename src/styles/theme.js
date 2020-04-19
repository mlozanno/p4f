import { darken } from 'polished';

const base = 8;

export const theme = {
	colors: {
		blue: '#009EFD',
		darkBlue: darken(0.2, '#009EFD'),
		green: '#2AF598',
	},
	metric: (...values) =>
		values
			.map((value) => (Number(value) ? `${(value * base) / 10}rem` : value))
			.join(' '),
};
