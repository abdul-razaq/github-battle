import React, { useContext } from 'react';

import ThemeContext from '../../../contexts/theme';

import './index.scss';

export default function IconCard({ title, icon }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div className="icon-card">
			<h2 className="icon-card__title">{title}</h2>
			<div className={`card card--${theme}`}>
				<div className="icon-card__icon">{icon}</div>
			</div>
		</div>
	);
}
