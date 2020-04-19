import React from 'react';

import { ThemeProvider } from 'styled-components';
import { UserProvider } from './context/users';

import GlobalStyle from './styles/global';

import { theme } from './styles/theme';

import Home from './pages/Home';

function App() {
	return (
		<div className="App">
			<ThemeProvider theme={theme}>
				<UserProvider>
					<Home />
					<GlobalStyle />
				</UserProvider>
			</ThemeProvider>
		</div>
	);
}

export default App;
