import React, { useState } from "react";

import "./index.scss";

import Instructions from "../../components/Instructions";
import PlayerInput from "../../components/PlayerInput";
import PlayerPreview from "../../components/PlayerPreview";

export default function BattleScreen() {
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
			</div>
		</div>
	);
}
