import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	html, body, #root {
		min-height: 100%;
	}

	html {
		font-size: 10px;
	}

	body, input, button {
		font: normal 1.6rem/1.5 Roboto, arial, sans-serif;
	}

	body {
		-webkit-font-smoothing: antialiased;
		background-color: #f0f0f0;
	}

	a {
		text-decoration: none;
	}

	ul {
		list-style: none;
	}

	button {
		cursor: pointer;
	}

`;
