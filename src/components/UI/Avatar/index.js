import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Avatar({ imageURL, title, className }) {
	return (
		<div className={`avatar ${className}`}>
			<img src={imageURL} alt={title} />
		</div>
	);
}

Avatar.propTypes = {
	imageURL: PropTypes.string,
	title: PropTypes.string.isRequired,
};
