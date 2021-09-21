import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { battle } from '../../utils/api';

import './index.scss';

import Player from '../../components/UI/Player';
import Button from '../../components/UI/Button';
import Loading from '../../components/UI/Loading';

export default function ResultsScreen({ playerOne, playerTwo, onResetPlayer }) {
	const [players, setPlayers] = useState([]);
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setError('');
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

	if (loading) return <Loading />;

	if (error)
		return (
			<div>
				<p>{error}</p>
				<Button onClick={() => setError('')}>Try Again!</Button>
			</div>
		);

	return (
		<div className="results">
			<div className="users">
				<Player
					player={players[0]}
					title={players[0].score === players[1].score ? 'Tie' : 'Winner'}
				/>
				<Player
					player={players[1]}
					title={players[0].score === players[1].score ? 'Tie' : 'Loser'}
				/>
			</div>
			<Button onClick={onResetPlayer}>Reset Player</Button>
		</div>
	);
}

ResultsScreen.propTypes = {
	playerOne: PropTypes.string.isRequired,
	playerTwo: PropTypes.string.isRequired,
	onResetPlayer: PropTypes.func.isRequired,
};
