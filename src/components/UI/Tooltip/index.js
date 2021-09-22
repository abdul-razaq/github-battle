import React from 'react';
import PropTypes from 'prop-types';

const styles = {
	container: {
		position: 'relative',
		display: 'flex',
	},
	tooltip: {
		boxSizing: 'border-box',
		width: '160px',
		position: 'absolute',
		bottom: '100%',
		left: '50%',
		marginLeft: '-80px',
		borderRadius: '3px',
		backgroundColor: 'hsla(0, 0%, 20%, 0.9)',
		padding: '7px',
		marginBottom: '5px',
		color: '#fff',
		textAlign: 'center',
		fontSize: '14px',
	},
};

export default function Tooltip({ content }) {
	return (
		<div style={styles.container}>
			<p style={styles.tooltip}>{content}</p>
		</div>
	);
}

Tooltip.propTypes = {
	content: PropTypes.string.isRequired,
};
