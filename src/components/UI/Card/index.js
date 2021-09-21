import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

export default function Card({
	url,
	title,
	avatar,
	loginName,
	score,
	children,
}) {
	return (
		<figure className="card" onClick={() => window.open(url)}>
			<h2 className="card__title center-text">{title}</h2>
			<div className="card__img">
				<img src={avatar} alt={`Avatar for ${loginName}`} />
			</div>
			{score && (
				<h4 className="center-text">{`Score: ${score.toLocaleString()}`}</h4>
			)}
			<p className="card__title center-text">
				<a href={url}>{loginName.toLocaleString()}</a>
			</p>
			<ul className="card__details">{children}</ul>
		</figure>
	);
}

Card.propTypes = {
	url: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	loginName: PropTypes.string.isRequired,
	score: PropTypes.number,
};
