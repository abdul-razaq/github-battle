import React from "react";

import "./index.scss";

export default function IconCard({ title, icon }) {
	return (
		<div className="icon-card">
			<h2 className="icon-card__title">{title}</h2>
			<div className="card">
				<div className="icon-card__icon">{icon}</div>
			</div>
		</div>
	);
}
