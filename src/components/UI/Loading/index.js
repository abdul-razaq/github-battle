import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const styles = {
	loadingContainer: {
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},

	loadingText: {
		fontSize: '2rem',
		fontWeight: 400,
		color: '#777',
	},
};

export default function Loading({ text, speed }) {
	const [loadingText, setLoadingText] = useState(text);

	useEffect(() => {
		const timeout = window.setTimeout(() => {
			loadingText === `${text}...`
				? setLoadingText(text)
				: setLoadingText(loadingText => loadingText + '.');
		}, speed);
		return () => window.clearTimeout(timeout);
	}, [loadingText]);

	return (
		<div style={styles.loadingContainer}>
			<h1 style={styles.loadingText} className="center-text">
				{loadingText}
			</h1>
		</div>
	);
}

Loading.propTypes = {
	text: PropTypes.string.isRequired,
	speed: PropTypes.number.isRequired,
};

Loading.defaultProps = {
	text: 'Loading',
	speed: 300,
};
