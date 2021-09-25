import React, { useState } from 'react';

import PopularScreen from '../screens/Popular';
import BattleScreen from '../screens/Battle';
import ResultsScreen from '../screens/Results';
import NavBar from '../components/NavBar';

import ThemeContext from '../contexts/theme';

export default function App() {
	const [currentScreen, setCurrentScreen] = useState('popular');
	const [playerOne, setPlayerOne] = useState('');
	const [playerTwo, setPlayerTwo] = useState('');
	const [theme, setTheme] = useState('light');

	function toggleTheme() {
		setTheme(theme => (theme === 'light' ? 'dark' : 'light'));
	}

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

	return (
		<div className={`${theme}`}>
			<ThemeContext.Provider
				value={{
					theme,
					toggleTheme,
				}}
			>
				<NavBar />
				{content}
			</ThemeContext.Provider>
		</div>
	);
}
