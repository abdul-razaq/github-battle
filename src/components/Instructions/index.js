import React from "react";
import { FaUsers, FaFighterJet, FaTrophy } from "react-icons/fa";

import "./index.scss";

import IconCard from "../UI/IconCard";

export default function Instructions() {
	return (
		<div className="instructions">
			<h1 className="heading-big">Instructions</h1>
			<div className="instructions__cards">
				<IconCard
					title="Enter two Github users"
					icon={<FaUsers size={150} color="rgb(255, 191, 116)" />}
				/>
				<IconCard
					title="Battle"
					icon={<FaFighterJet size={150} color="#727272" />}
				/>
				<IconCard
					title="See the winners"
					icon={<FaTrophy size={150} color="rgb(255, 215, 0)" />}
				/>
			</div>
		</div>
	);
}
