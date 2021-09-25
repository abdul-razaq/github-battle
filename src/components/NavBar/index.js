import React, { useContext } from 'react';

import ThemeContext from '../../contexts/theme';

import './index.scss';

export default function Navbar() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<nav className="nav">
			{/* Navigation Links */}
			<button className="btn btn--dark btn" onClick={toggleTheme}>
				{theme === 'light' ? '🌙' : '🌕'}
			</button>
		</nav>
	);
}
