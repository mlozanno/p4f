import React from 'react';
import { render } from '@testing-library/react';

import UserCard from '~/components/UserCard';

const name = 'Marcus Lozano';
const email = 'contato@lozanno.com.br';
const company = 'Acme Inc.';

describe('<UserCard />', () => {
	it('should be render component', () => {
		const { getByTestId } = render(
			<UserCard name={name} email={email} company={company} />
		);
		const userCard = getByTestId('user-card');

		expect(userCard).toBeInTheDocument();
	});

	it('should be render a user data', () => {
		const { getByTestId } = render(
			<UserCard name={name} email={email} company={company} />
		);
		const userCard = getByTestId('user-card');

		expect(userCard).toHaveTextContent(
			/^(Marcus Lozano|contato@lozanno\.com\.br|Acme Inc\.)/
		);
	});
});
