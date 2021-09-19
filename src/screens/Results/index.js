import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { battle } from "../../utils/api";

import "./index.scss";

export default function ResultsScreen({ playerOne, playerTwo }) {
	const [players, setPlayers] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setError("");
		battle([playerOne, playerTwo])
			.then(results => {
				setPlayers(results);
			})
			.catch(err => {
				setError(err.message);
				console.error(err);
			})
			.finally(() => {
				setLoading(false);
			});
	}, [playerOne, playerTwo]);

	return (
		<div className="results">
			{error && <p>{error}</p>}
			{loading && <p>Loading...</p>}
			<pre>{JSON.stringify({ playerOne, playerTwo }, null, 2)}</pre>
			<pre>{JSON.stringify(players, null, 2)}</pre>
		</div>
	);
}

ResultsScreen.propTypes = {
	playerOne: PropTypes.string.isRequired,
	playerTwo: PropTypes.string.isRequired,
};
