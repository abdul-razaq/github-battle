import React, { useState } from "react";

import "./index.scss";

import Instructions from "../../components/Instructions";
import PlayerInput from "../../components/PlayerInput";
import PlayerPreview from "../../components/PlayerPreview";

export default function BattleScreen({ onBattle }) {
	const [playerOne, setPlayerOne] = useState("");
	const [playerTwo, setPlayerTwo] = useState("");

	function handlePreviewClose(event, id) {
		event.stopPropagation();
		if (id === "player-one") {
			setPlayerOne("");
		} else {
			setPlayerTwo("");
		}
	}

	function handleBattle() {
		onBattle(playerOne, playerTwo);
	}

	return (
		<div>
			<Instructions />
			<div className="battle">
				<h1 className="heading-big center-text">Players</h1>
				<div className="players">
					{playerOne ? (
						<PlayerPreview
							title="Player One"
							player={playerOne}
							onPreviewClose={event => handlePreviewClose(event, "player-one")}
						/>
					) : (
						<PlayerInput
							label="Player One"
							onSubmit={playerInput => setPlayerOne(playerInput)}
						/>
					)}

					{playerTwo ? (
						<PlayerPreview
							title="Player Two"
							player={playerTwo}
							onPreviewClose={event => handlePreviewClose(event, "player-two")}
						/>
					) : (
						<PlayerInput
							label="Player Two"
							onSubmit={playerInput => setPlayerTwo(playerInput)}
						/>
					)}
				</div>
				{playerOne && playerTwo && (
					<div className="battle__btn">
						<button className="btn btn--secondary" onClick={handleBattle}>
							Battle!
						</button>
					</div>
				)}
			</div>
		</div>
	);
}
