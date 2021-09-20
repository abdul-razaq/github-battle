import React, { useState } from "react";

import PopularScreen from "../screens/Popular";
import BattleScreen from "../screens/Battle";
import ResultsScreen from "../screens/Results";

export default function App() {
	const [currentScreen, setCurrentScreen] = useState("popular");
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");

	let content = <PopularScreen />;

	function handleBattle(playerOne, playerTwo) {
		setCurrentScreen("battle");
		setPlayerOne(playerOne);
		setPlayerTwo(playerTwo);
	}

	if (currentScreen === "battle") {
		content = <ResultsScreen playerOne={playerOne} playerTwo={playerTwo} />;
	} else if (currentScreen === "popular") {
		content = <PopularScreen />;
	} else {
		content = <BattleScreen onBattle={handleBattle} />;
	}

	return <>{content}</>;
}
