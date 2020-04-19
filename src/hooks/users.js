import { useContext } from 'react';

import { UserContext } from '../context/users';

export const useUsers = () => {
	const contextValue = useContext(UserContext);
	return contextValue;
};
