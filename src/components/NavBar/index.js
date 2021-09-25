import React, { useContext } from 'react';

import ThemeContext from '../../contexts/theme';

import Button from '../UI/Button';

import './index.scss';

export default function Navbar() {
	const { theme, toggleTheme } = useContext(ThemeContext);

	return (
		<nav className="nav">
			{/* Navigation Links */}
			<Button className="btn--primary" onClick={toggleTheme}>
				{theme === 'light' ? '🌙' : '🌕'}
			</Button>
		</nav>
	);
}
