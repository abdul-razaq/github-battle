import React from "react";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

import "./index.scss";

export default function CloseButton({ onClose }) {
	return (
		<div className="close-btn" onClick={onClose}>
			<FaTimes size={20} color="#fff" />
		</div>
	);
}

CloseButton.propTypes = {
	onClose: PropTypes.func.isRequired,
};
