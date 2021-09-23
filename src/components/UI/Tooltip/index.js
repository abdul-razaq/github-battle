import React from 'react';
import PropTypes from 'prop-types';

// import withHover from "../../HOC/withHover.js";
import Hover from '../../HOC/Hover';

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

function Tooltip({ content, children }) {
	return (
		<Hover>
			{hovering => (
				<div style={styles.container}>
					{hovering && <p style={styles.tooltip}>{content}</p>}
					{children}
				</div>
			)}
		</Hover>
	);
}

Tooltip.propTypes = {
	content: PropTypes.string.isRequired,
	// hovering: PropTypes.bool.isRequired,
};

export default Tooltip;
