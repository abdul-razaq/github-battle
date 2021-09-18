import React, { useState } from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function PlayerInput({ label, onSubmit }) {
	const [playerInput, setPlayerInput] = useState("");

	function handleFormSubmit(event) {
		event.preventDefault();
		onSubmit(playerInput);
	}

	return (
		<form className="player" onSubmit={handleFormSubmit}>
			<label htmlFor={label} className="player__label">
				{label}
			</label>
			<div className="player__input">
				<input
					type="text"
					value={playerInput}
					name={label}
					id={label}
					autoComplete="false"
					autoCorrect="false"
					autoCapitalize="false"
					placeholder="github username"
					onChange={event => setPlayerInput(event.target.value.trim())}
				/>
				<button
					className="btn btn--primary"
					type="submit"
					disabled={!playerInput}
				>
					Submit
				</button>
			</div>
		</form>
	);
}

PlayerInput.propTypes = {
	label: PropTypes.string.isRequired,
	onSubmit: PropTypes.func.isRequired,
};
