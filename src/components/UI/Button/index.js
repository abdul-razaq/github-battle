import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import ThemeContext from '../../../contexts/theme';

import './index.scss';

export default function Button({ onClick, children, className }) {
	const { theme } = useContext(ThemeContext);

	return (
		<div className="battle__btn">
			<button className={`btn ${className} btn--${theme}`} onClick={onClick}>
				{children}
			</button>
		</div>
	);
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
	className: PropTypes.string,
};
