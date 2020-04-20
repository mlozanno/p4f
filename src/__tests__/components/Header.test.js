import React from 'react';
import { render } from '@testing-library/react';

import Header from '~/components/Header';

describe('<Header />', () => {
	it('should be render compnent', () => {
		const { getByTestId } = render(<Header />);

		const header = getByTestId('header');

		expect(header).toBeInTheDocument();
	});

	it('should be have a logo', () => {
		const { getByTestId } = render(<Header />);
		const header = getByTestId('header');
		const logo = getByTestId('logo');

		expect(header).toContainElement(logo);
	});

	it('should be have a slogan', () => {
		const { getByTestId } = render(<Header />);
		const header = getByTestId('header');

		expect(header).toHaveTextContent('FakeApp');
	});
});
