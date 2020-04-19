import React from 'react';

import { UserProvider } from '~/context/users';

import GlobalStyle from '~/styles/global';

import Home from '~/pages/Home';

function App() {
	return (
		<div className="App">
			<UserProvider>
				<Home />
				<GlobalStyle />
			</UserProvider>
		</div>
	);
}

export default App;
