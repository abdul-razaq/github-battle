import React from "react";

import PopularScreen from "../screens/Popular";
import BattleScreen from "../screens/Battle";

export default function App() {
	const currentScreen = "battle";
	let content = <PopularScreen />;

	if (currentScreen === "battle") {
		content = <BattleScreen />;
	}

	return <>{content}</>;
}
