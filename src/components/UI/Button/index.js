import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Button({ onClick, children }) {
	return (
		<div className="battle__btn">
			<button className="btn btn--secondary" onClick={onClick}>
				{children}
			</button>
		</div>
	);
}

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
};
