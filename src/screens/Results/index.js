import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { battle } from "../../utils/api";

import "./index.scss";

import Player from "../../components/UI/Player";

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

	if (loading) return <p>Loading...</p>;

	return (
		<div className="results">
			{error && <p>{error}</p>}
			<div className="users">
				<Player player={players[0]} title="Winner" />
				<Player player={players[1]} title="Loser" />
			</div>
		</div>
	);
}

ResultsScreen.propTypes = {
	playerOne: PropTypes.string.isRequired,
	playerTwo: PropTypes.string.isRequired,
};
