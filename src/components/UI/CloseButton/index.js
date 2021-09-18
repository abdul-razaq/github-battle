import React from "react";
import PropTypes from "prop-types";
import { FaPlus } from "react-icons/fa";

import "./index.scss";

export default function CloseButton({ onClose }) {
	return (
		<div className="close-btn" onClick={onClose}>
			<FaPlus size={20} color="#fff" />
		</div>
	);
}

CloseButton.propTypes = {
	onClose: PropTypes.func.isRequired,
};
