import React, { useState } from 'react';

import PopularScreen from '../screens/Popular';
import BattleScreen from '../screens/Battle';
import ResultsScreen from '../screens/Results';

export default function App() {
	const [currentScreen, setCurrentScreen] = useState('instructions');
	const [playerOne, setPlayerOne] = useState('');
	const [playerTwo, setPlayerTwo] = useState('');

	function handleBattle(playerOne, playerTwo) {
		setCurrentScreen('results');
		setPlayerOne(playerOne);
		setPlayerTwo(playerTwo);
	}

	function handleResetPlayer() {
		setCurrentScreen('battle');
	}

	let content = <PopularScreen />;

	if (currentScreen === 'results') {
		content = (
			<ResultsScreen
				playerOne={playerOne}
				playerTwo={playerTwo}
				onResetPlayer={handleResetPlayer}
			/>
		);
	} else if (currentScreen === 'popular') {
		content = <PopularScreen />;
	} else {
		content = <BattleScreen onBattle={handleBattle} />;
	}

	return <>{content}</>;
}
