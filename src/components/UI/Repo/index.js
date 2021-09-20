import React from "react";
import PropTypes from "prop-types";

import {
	FaUser,
	FaStar,
	FaCodeBranch,
	FaExclamationTriangle,
} from "react-icons/fa";

import "./index.scss";

import Card from "../../UI/Card";

export default function Repo({
	id,
	login,
	avatar,
	html,
	stars,
	forks,
	issues,
}) {
	return (
		<Card url={html} title={`#${id}`} avatar={avatar} loginName={login}>
			<li className="card__detail">
				<FaUser size={20} color="rgb(255, 191, 116)" />
				<p>
					<a href={html}>{login.toLocaleString()}</a>
				</p>
			</li>
			<li className="card__detail">
				<FaStar size={20} color="rgb(255, 215, 0)" />
				<p>
					<span>{stars.toLocaleString()}</span> stars
				</p>
			</li>
			<li className="card__detail">
				<FaCodeBranch size={20} color="rgb(129, 195, 245)" />
				<p>
					<span>{forks.toLocaleString()}</span> forks
				</p>
			</li>
			<li className="card__detail">
				<FaExclamationTriangle size={20} color="rgb(241, 138, 147)" />
				<p>
					<span>{issues.toLocaleString()}</span> open issues
				</p>
			</li>
		</Card>
	);
}

Repo.propTypes = {
	id: PropTypes.number.isRequired,
	login: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	html: PropTypes.string.isRequired,
	stars: PropTypes.number.isRequired,
	forks: PropTypes.number.isRequired,
	issues: PropTypes.number.isRequired,
};
