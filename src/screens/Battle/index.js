import React, { useState } from "react";

import "./index.scss";

import Instructions from "../../components/Instructions";
import PlayerInput from "../../components/PlayerInput";

export default function BattleScreen() {
	const [playerOne, setPlayerOne] = useState(true);
	const [playerTwo, setPlayerTwo] = useState(true);

	return (
		<div>
			<Instructions />
			<div className="battle">
				<h1 className="heading-big center-text">Players</h1>
				<div className="players">
					{playerOne && (
						<PlayerInput
							label="Player One"
							onSubmit={playerInput => setPlayerOne(playerInput)}
						/>
					)}
					{playerTwo && (
						<PlayerInput
							label="Player Two"
							onSubmit={playerInput => setPlayerTwo(playerInput)}
						/>
					)}
				</div>
			</div>
		</div>
	);
}
